import express from "express";
import cors from "cors";
import userRoutes from "./routes/userRoutes.ts";
import emailController from "./controllers/emailController.ts";
import coupleRoutes from "./routes/coupleRoutes.ts";

const app = express();

app.use(cors());
app.use(express.json());
app.use('/users', userRoutes());
app.use('/couples', coupleRoutes());
app.use('/email', emailController);

export default app;