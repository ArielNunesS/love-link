import app from "./app.ts"

const PORT = "http://localhost:4000"

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});