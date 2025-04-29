import { Router } from "express";
import User from "../models/User";

export default function userRoutes() {
    const router = Router()

    router.get('/', async (req, res) => {
        const users = await User.find();
        res.json(users);
    });

    router.get(`/:id`, async(req, res) => {

        try{
            const { id } = req.params;
            const userDoc = await User.findById(id);
        

        if(!userDoc) {
            res.status(404).json({ error: "User Not Found"});
        }

        res.json(userDoc);
    } catch(err) {
        res.status(500).json({ error: "Error when searching for user", err});
    }
    });

    router.post('/register', async(req, res) => {
        
        const { username, email } = req.body;

        try {
            const userDoc = await User.create({
                username,
                email
            });
            res.json(userDoc);

        } catch (err) {
            console.error(err);
            res.status(400).json(err);
        }
    });

    return router;
}