//init
const express = require("express");
const router = express.Router();

const { getCompanies } = require("../controller/ComapniesController");

//setting up get api endpoint
router.route('/companies').get(getCompanies);

module.exports = router;