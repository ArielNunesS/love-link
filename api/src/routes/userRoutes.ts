import { Router } from "express";

export default function userRoutes() {
    const router = Router()

    router.get('/', (req, res) => {
        res.send('Hello userRoutes')
    });

    return router;
}