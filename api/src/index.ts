import app from "./app"
import { connectDB } from "./config/db_config";
import "dotenv/config";

const PORT = process.env.PORT || 10000;

connectDB().then(() => {
    app.listen(PORT, () => {
    console.log(`Server running on PORT${PORT}`)
   }) 
}).catch((err) => {
    console.error("Failed to connect to the DB, error:", err);
});
