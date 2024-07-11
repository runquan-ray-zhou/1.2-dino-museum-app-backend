// Dependencies
const express = require("express")

const roomsRouter = express.Router()

const roomArray = require("../models/room")

// Index Route
roomsRouter.get("/", (req, res) => {
    try{
        res.status(200).send(roomArray)
    }
    catch(error) {
        res.status(404).json({error: `Something Went Wrong!`})
    }
})

// Show Route
roomsRouter.get("/:id", (req, res) => {
    const { id } = req.params
    const room = roomArray.find((roomArray) => roomArray.id === id)
    if (room) {
            res.status(200).send(room)
    } else {
        // res.status(404).json({error: `Room with id ${id} does not exist.`})
        res.send("Cannot find any Room with this id: " + id)
    }
})

// Export
module.exports = roomsRouter;