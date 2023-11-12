const express = require("express");
const booksRouter = require("./routes/booksRouter");
const mongoose = require("mongoose");


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use("/api/books", booksRouter);

const UrlDB = process.env.UrlDB || "mongodb://root:example@mongo:27017/";
const PORT = process.env.PORT || 3000;


async function start(PORT, UrlDB) {
  try {
    await mongoose.connect(UrlDB);
    app.listen(PORT, () => {
      console.log("Library app is listening on http://localhost:3000/api/books");
    });
  } catch(err) {
    console.log(err);
  }
}

start(PORT, UrlDB);