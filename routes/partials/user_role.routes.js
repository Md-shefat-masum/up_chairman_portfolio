const express = require("express");
const { default: mongoose } = require("mongoose");
const userRoleController = require("../../app/controllers/backend/user_roll.controller");

const router = express.Router();

router
    .get("/user-roles", userRoleController.all)
    .get("/user-roles/create", userRoleController.store)
    .get("/user-roles/:id/edit", userRoleController.edit)
    .get("/user-roles/:id/delete", userRoleController.destory)


module.exports = () => router;
