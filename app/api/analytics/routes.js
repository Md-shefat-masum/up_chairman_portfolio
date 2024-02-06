const express = require("express");
const get_analytics = require("./get_analytics");
const router = express.Router();

let prefix = 'api/v1/analytics'
router
    .get(`/${prefix}`, get_analytics)
    ;


module.exports = () => router;