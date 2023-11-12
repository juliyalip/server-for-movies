const express = require("express");
require("dotenv").config();
const movieApi = require("./index");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const movies = await movieApi.trendingMovie();
    res.status(200).json(movies);
  } catch (error) {
    next(error)
  }
});

module.exports = router;
