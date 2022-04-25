"use strict";

var _Cases = require("../models/Cases");

var _express = require("express");

var _loadData = require("../utils/loadData");

const router = (0, _express.Router)();
router.get('/load', (req, res) => {
  (0, _loadData.loadDataFromApi)();
});
module.exports = router;