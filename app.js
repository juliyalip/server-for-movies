const express = require("express")
const moment = require("moment")
const cors = require('cors')
const fs = require("fs/promises")
const booksRouter = require('./routers/api/books')

const app = express()

app.use(cors())

app.get("/",  (req, res) =>{
    console.log('url', req.url, 'method', req.method);
   
     res.send("home page")
})

app.use("/api", booksRouter)  

app.use(async(req, res, next) => {
const {method, url} = req;
console.log("first middleware")
const data = moment().format("DD-MM-YYYY")
await fs.appendFile('./public/server.log', `\n${method}${url}${data}`)
   next()
  });

app.use((_req, res, next) => {
    res.status(404).json({ message: "Not Found" });
  });

app.listen(3001, () =>{
    console.log('Server is running')
})