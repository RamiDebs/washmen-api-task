//init
const express = require("express");
const { getCompanies } = require("../controller/ComapniesController");
router = express.Router();
CompaniesContrller = require("../controller/ComapniesController");

// //setting up get api endpoint
router.route('/test')
    .get(getCompanies)



module.exports = router;