const express = require("express");
const moment = require("moment");
const cors = require("cors");
const fs = require("fs/promises");

const booksRouter = require("./routers/api/books/books");
const movieRouter = require("./routers/api/movie/movie")
const app = express();

app.use(cors());

app.get("/", (req, res) => {
  console.log("url", req.url, "method", req.method);

  res.send("home page");
});

app.use("/api/books", booksRouter);
app.use("/api/movies", movieRouter);

app.use(async (req, res, next) => {
  const { method, url } = req;
  console.log("first middleware");
  const data = moment().format("DD-MM-YYYY");
  await fs.appendFile("./public/server.log", `\n${method}${url}${data}`);
  next();
});

app.use((erro, req, res, next) => {
    const {status = 500, message = "Server not found"} = erro
  res.status(status).json({ message});
});

app.listen(3001, () => {
  console.log("Server is running");
});
