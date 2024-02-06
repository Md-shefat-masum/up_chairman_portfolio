const express = require("express");
const { default: mongoose } = require("mongoose");
const userController = require("../../app/controllers/backend/user.controller");
const userModel = require("../../app/models/user.model");
const router = express.Router();

router
	// .get("/user", userController.all)
	.get("/dashboard/user", userController.all)
	.get("/dashboard/user/create", userController.store)
	.get("/dashboard/user/:id/edit", userController.edit)
	.get("/dashboard/user/:id/delete", userController.destory)
	.get("/dashboard/user/:id", userController.from_ids)
	.get("/dashboard/user/status-update", userController.status_update)

module.exports = () => router;
