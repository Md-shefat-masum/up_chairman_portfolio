const express = require("express");
const router = express.Router();

router
	.get("/dashboard/email", function (req, res) {
		return res.render("backend/email_management/all");
	})
	.get("/dashboard/email/create", function (req, res) {
		return res.render("backend/email_management/create");
	})
	.get("/dashboard/email/:id/edit", function (req, res) {
		return res.render("backend/email_management/edit");
	})
	.get("/dashboard/email/:id", function (req, res) {
		return res.render("backend/email_management/show");
	});

module.exports = () => router;