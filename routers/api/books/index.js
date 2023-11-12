const path = require("path");
const fs = require("fs/promises");

const booksPath = path.join(__dirname, "books.json");

const getAllBooks = async () => {
  const data = await fs.readFile(booksPath);
  return JSON.parse(data);
};

const getBookById = async (id) => {
  const books = await getAllBooks();
  const book = books.find((book) => book.id === id);
  return book || null;
};

module.exports = {
  getAllBooks,
  getBookById,
};
