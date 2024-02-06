const express = require("express");
const isAuthMiddleware = require("../../app/middlewares/isAuth.middleware");
const categoryController = require("../../app/controllers/backend/category.controller");
const router = express.Router();

router
	.get("/dashboard/category", categoryController.all)
	.get("/dashboard/category/create", categoryController.create)
	.post("/dashboard/category/create", categoryController.store)
	
	.post("/dashboard/category/from-ids", categoryController.from_ids)
	.post("/dashboard/category/delete-by-ids", categoryController.delete_by_ids)
	.post("/dashboard/category/status-update", categoryController.status_update)

	.get("/dashboard/category/:id/edit", categoryController.edit)
	.post("/dashboard/category/:id/edit", categoryController.update)
	.get("/dashboard/category/:id/delete", categoryController.destory)
	.get("/dashboard/category/:id", categoryController.show)

module.exports = () => router;
