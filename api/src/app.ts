import express from "express";
import cors from "cors";
import userRoutes from "./routes/userRoutes";
import emailController from "./controllers/emailController";
import coupleRoutes from "./routes/coupleRoutes";

const app = express();

app.use(express.json());

app.use(cors({
    origin: [
        'https://love-link-theta.vercel.app',
        'https://love-link-app.com.br',
        'https://localhost:3000',
    ],
    credentials: true,
}));

app.use('/users', userRoutes());
app.use('/couples', coupleRoutes());
app.use('/email', emailController);

export default app;