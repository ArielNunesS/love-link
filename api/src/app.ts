import express from "express";
import cors from "cors";
import emailController from "./controllers/emailController";
import coupleRoutes from "./routes/coupleRoutes";
import paymentRoutes from "./routes/paymentRoutes";

const app = express();

app.use(express.json());

app.use(cors({
    origin: [
        'https://love-link-app.com.br',
        'http://localhost:3000',
    ],
    credentials: true,
}));

app.use('/couples', coupleRoutes());
app.use('/payment', paymentRoutes());
app.use('/email', emailController);

export default app;