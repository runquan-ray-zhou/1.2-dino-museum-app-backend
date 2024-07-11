// Dependencies
const express = require("express")
const cors = require("cors")

// Configuration
const app = express()

// Middleware
app.use(express.json())
app.use(cors())

// Controllers
const roomsController = require("./controllers/roomsController")
// const dinosaursController = require("./controllers/dinosaursController")

app.use("/rooms", roomsController)
// app.use("/dinosaurs", dinosaursController)

// Root/Health Check Route
app.get("/", (req, res) => {
    res.status(200).send("Welcome to the Dinosaur Museum App Backend!")
})

// 404 Page Not Found Route
app.get("*", (req, res) => {
    res.status(404).json({ error: "Sorry, no page found" });
});

// Export App
module.exports = app