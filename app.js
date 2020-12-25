const express = require("express");
const app = express()

const port = 3000;
app.get("/", (req, res) => res.send("Hi Washmen"));

app.listen(port, () => {
    console.log("Runing on port " + port);

});