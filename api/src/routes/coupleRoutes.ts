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
        const {
            name,
            email,
            title,
            message,
            startDate,
            image,
        } = req.body;

        try {
            const coupleCard = await Couple.create({
                name,
                email,
                title,
                message,
                startDate,
                image,
            });
            
            res.json(coupleCard);
        } catch(err) {
            console.error(err);
            res.status(400).json(err);
        }
    });

    return router;
}