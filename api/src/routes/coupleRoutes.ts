import { Router } from "express";
import Couple from "../models/Couple";

export default function coupleRoutes() {
    const router = Router();

    router.get("/", async (req, res) => {
        const couples = await Couple.find();
        res.json(couples);
    });

    router.get("/:id", async (req, res) => {
        try{
            const { id } = req.params;
            const coupleCard = await Couple.findById(id)

            if(!coupleCard) res.status(404).json({ error: "Couple not found" });

            res.json(coupleCard);
        } catch(err) {
            res.status(500).json({ error: "Error when searching for couple", err});
        }
    });

    router.post("/create", async(req, res) => {
        try {

        const { name, email, title, message, startDate, image } = req.body;

        const newCouple = new Couple({
            name: name,
            email: email,
            title: title,
            message: message,
            startDate: startDate,
            image: image,
        });

            const coupleCard = await newCouple.save();
            res.status(201).json(coupleCard);
        } catch(err) {
            console.error(err);
            res.status(400).json(err);
        }
    });

    return router;
}