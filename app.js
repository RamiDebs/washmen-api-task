const express = require("express");
const app = express()

require('dotenv').config();
const port = process.env.PORT || 3000;

app.use('/', require("./routes/route"));

app.listen(port, () => {
    console.log("Runing on port " + port);

});