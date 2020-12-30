require('dotenv').config();
const express = require("express");
const cors = require('cors');
const app = express()

const port = process.env.PORT || 3000;
const comapniesRouter = require("./routes/route");


app.use('/', comapniesRouter);

app.listen(port, () => {
    console.log("Try to call localhost:3000/companies?km=100");
});