import app from "./app.ts"
import { connectDB } from "./config/db_config.ts";

const PORT = "4000"

connectDB().then(() => {
    app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`)
   }) 
}).catch((error) => {
    console.error("Failed to connect to the DB, error:", error);
});