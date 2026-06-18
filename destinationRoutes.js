const express = require("express");
const router = express.Router();

const Destination = require("../models/Destination");

router.get("/", async (req, res) => {
  try {
    const destinations = await Destination.find();

    res.status(200).json(destinations);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
});

router.post("/", async (req, res) => {

  try {

    const destination =
      await Destination.create(req.body);

    res.status(201).json(destination);

  } catch (error) {

    res.status(400).json({
      message: error.message
    });

  }

});

module.exports = router;