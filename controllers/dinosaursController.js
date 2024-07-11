// Dependencies
const express = require("express")

const dinosaursRouter = express.Router()

const dinosaurArray = require("../models/dinosaur")

// Index Route
dinosaursRouter.get("/", (req, res) => {
    try{
        res.status(200).send(dinosaurArray)
    }
    catch(error) {
        res.status(404).json({error: `Something Went Wrong!`})
    }
})

// Show Route
dinosaursRouter.get("/:id", (req, res) => {
    const { id } = req.params
    const dinosaur = dinosaurArray.find((dinosaurArray) => dinosaurArray.dinosaurId === id)
    if (dinosaur) {
            res.status(200).send(dinosaur)
    } else {
        // res.status(404).json({error: `Dinosaur with id ${id} does not exist.`})
        res.send("Cannot find any Dinosaur with this id: " + id)
    }
})

// Export
module.exports = dinosaursRouter;