import { Router } from "express";
import User from "../models/User";

export default function userRoutes() {
    const router = Router()

    router.get('/', async (req, res) => {
        const users = await User.find();
        res.json(users);
    });

    router.post('/register', async(req, res) => {
        
        const { username, email } = req.body;

        try {
            const userDoc = await User.create({
                username,
                email
            });
            res.json(userDoc);

        } catch (e){
            console.error(e);
            res.status(400).json(e);
        }
    });

    return router;
}