const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
require('dotenv').config();

const userApp = require("./APIs/user-api");
const adminApp = require("./APIs/admin-api");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = process.env.DB_URI;

MongoClient
  .connect(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  })
  .then((client) => {

    const libmanDBObj = client.db("libman");
    const usersCollection = libmanDBObj.collection("usersCollection");
    app.set("usersCollection", usersCollection);

    console.log("DB connection success");
  })
  .catch((err) => {
    console.log("Err in DB connect", err);
  });

app.use('/admin',adminApp)
app.use('/user', userApp);
 
app.use((err, req, res, next) => {
  res.send({ status: "error", message: err.message });
});

const PORT = process.env.PORT|| 3000;
app.listen(PORT, () => {
    console.log(`on port ${PORT}`);
  });