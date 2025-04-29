import { Router } from "express";
import { sendEmail } from "../services/emailService";

const router = Router();

router.post('/', sendEmail);

export default router;