// Setting the server
const express = require("express");
const app = express();
const ejs = require("ejs");
const routes = require("../routes/index");
const expressLayouts = require("express-ejs-layouts");
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");

const PORT = 5000;

// Add cors
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));

// Static folder
app.use(express.static(path.join(__dirname, "../public")));

// Set the PORT
app.listen(PORT, () =>
  console.log(`Server listening in port: localhost:${PORT}`)
);

// Set Template Engine
app.use(expressLayouts);
app.set("view engine", "ejs");

// Set routes
app.use(routes);
