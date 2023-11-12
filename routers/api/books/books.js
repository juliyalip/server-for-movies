const express = require("express");
const booksApi = require("./index.js");
const { HttpErrer } = require("../../../helper");
const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const books = await booksApi.getAllBooks();
    res.json(books);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const book = await booksApi.getBookById(id);
    if (!book) {
      HttpErrer(404, "Not found");
    }
    res.json(book);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
