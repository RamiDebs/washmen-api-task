const express = require("express");
const app = express()

require('dotenv').config();
const port = process.env.PORT || 3000;
const comapniesRouter = require("./routes/route");


app.use('/', comapniesRouter);

app.listen(port, () => {
    console.log("Try to call localhost:3000/companies?km=100");

});