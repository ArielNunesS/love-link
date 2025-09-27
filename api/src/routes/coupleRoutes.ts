import express from 'express';
import { Router } from "express";
import Couple from "../models/Couple";
import multer from "multer";
import upload from "../middlewares/multer";
import { v2 as cloudinary } from "cloudinary";
import crypto from "crypto";
import fs from 'fs/promises';

export default function coupleRoutes() {
    const router = Router();

    router.get("/", async (req, res) => {
        const couples = await Couple.find();
        res.json(couples);
    });

    router.get("/:slug", async (req, res) => {
        try{
            const { slug } = req.params;
            const coupleCard = await Couple.findOne({slug: slug});

            if(!coupleCard){
                return res.status(404).json({ error: "Couple not found" });
            }

            res.json(coupleCard);
        } catch(err) {
            res.status(500).json({ error: "Error when searching for couple", err});
        }
    });

    router.post("/create", upload.array("images", 5), async(req, res) => {
        try {
        
        const files = req.files as Express.Multer.File[] | undefined;

        if(!files || files.length === 0){
            return res.status(400).json({ message: "No image file provided" });
        }

        const uploadPromises = files.map(file => {
            return cloudinary.uploader.upload(file.path, { 
                folder: "love-link_images"
            });
        });
        
       const cloudinaryResults = await Promise.all(uploadPromises);

        const imageUrls = cloudinaryResults
            .map((result: { secure_url: any; url: any; }) => result?.secure_url || result?.url)
            .filter((url: any) => url);

        if(imageUrls.length === 0) {
            return res.status(500).json({ message: "Error searching for images URL"})
        }

            const { name, email, title, message, startDate } = req.body;

            const newCouple = new Couple({
                name: name,
                email: email,
                title: title,
                message: message,
                startDate: startDate,
                images: imageUrls,
            });

            const coupleCard = await newCouple.save()

            const dataToHash = `${coupleCard._id}-${Date.now()}`;
            const uniqueHash = crypto.createHash("sha256").update(dataToHash).digest('base64url');
            const slugPart = uniqueHash.slice(0, 4)

            if(coupleCard) {
                coupleCard.slug = `${slugPart}-${coupleCard.name.replace(/\s+/g, "-").toLowerCase()}`;

                await coupleCard.save();
            };

            const cleanupPromises = files.map(file => fs.unlink(file.path));
            await Promise.all(cleanupPromises);
        
            const coupleUrl = `https://love-link-app.com.br/couple/${coupleCard.slug}`;

            res.status(201).json({
                coupleUrl,
            });

        } catch(err) {
            console.error(err);
            res.status(400).json(err);
        }
    });

    router.delete("/delete", async (req, res) => {
        try{
            const { id, email } = req.body;
            const coupleFind = await Couple.findById(id);

            if(coupleFind?.email === email){
                const coupleDelete = await Couple.findByIdAndDelete(id);
                res.json({message: "Couple deleted sucessfully"});
            } else {
                res.status(500).json({ error: "Couple invalid"});
            }
        } catch(err) {
            res.status(500).json({ error: "Error when searching for couple", err});
        }
    });

    return router;
}