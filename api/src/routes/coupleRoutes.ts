import express from 'express';
import { Router } from "express";
import Couple from "../models/Couple";
import multer from "multer";
import upload from "../middlewares/multer";
import cloudinary from "../utils/cloudinary";
import crypto from "crypto";

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

    router.post("/create", upload.single('image'), async(req, res) => {
        try {

            if(!req.file){
                return res.status(400).json({ message: "No image file provided" });
            }

            const cloudinaryUploadResult = await cloudinary.uploader.upload(
                req.file.path, { folder: "love-link_images"
            });

            const imageUrl = cloudinaryUploadResult?.secure_url || cloudinaryUploadResult?.url;
            
            if(!imageUrl) {
                return res.status(500).json({ message: "Failed to get image URL from Cloudinary"})
            }

            const { name, email, title, message, startDate } = req.body;

            const newCouple = new Couple({
                name: name,
                email: email,
                title: title,
                message: message,
                startDate: startDate,
                image: imageUrl,
            });

            const coupleCard = await newCouple.save()

            const dataToHash = `${coupleCard._id}-${Date.now()}`;
            const uniqueHash = crypto.createHash("sha256").update(dataToHash).digest('base64url');
            const slugPart = uniqueHash.slice(0, 4)

            if(coupleCard) {
                coupleCard.slug = `${slugPart}-${coupleCard.name.replace(/\s+/g, "-").toLowerCase()}`;

                await coupleCard.save();
                
                res.status(201).json(coupleCard);
            };


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