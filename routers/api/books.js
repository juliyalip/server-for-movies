const express = require("express");
const booksApi = require("./index")

const booksRouter = express.Router();

booksRouter.get("/books", async (req, res) => {
const books = await booksApi.getAllBooks()
res.json(books)
});

booksRouter.get("/books/:id", async (req, res) => {});

module.exports = booksRouter;
