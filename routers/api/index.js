const path = require("path");
const fs = require("fs/promises");

const booksPath = path.join(__dirname, "books.json");

 const getAllBooks = async ()=>{
    const data = await fs.readFile(booksPath);
    return JSON.parse(data);
}

module.exports ={
    getAllBooks
}