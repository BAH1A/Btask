// server.js
const express = require('express');
const consign = require('consign');
const app = express();
const PORT = 2121;

app.set("json spaces", 4);
consign()
  .include("models")
  .then("libs/middlawares.js")
  .then("routes")
  .then("libs/boot.js")
  .into(app);