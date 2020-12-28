const express = require("express");
const app = express()

require('dotenv').config();
const port = process.env.PORT || 3000;
const comapniesRouter = require("./routes/route");


app.use('/', comapniesRouter);

app.listen(port, () => {
    console.log("Runing on port " + port);

});