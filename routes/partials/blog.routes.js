const express = require("express");
const isAuthMiddleware = require("../../app/middlewares/isAuth.middleware");
const blogController = require("../../app/controllers/backend/blog.controller");
const router = express.Router();

router
	.get("/dashboard/blog", blogController.all)
	.get("/dashboard/blog/create", blogController.create)
	.post("/dashboard/blog/create", blogController.store)
	
	.post("/dashboard/blog/from-ids", blogController.from_ids)
	.post("/dashboard/blog/delete-by-ids", blogController.delete_by_ids)
	.post("/dashboard/blog/status-update", blogController.status_update)
	.post("/dashboard/blog/published-update", blogController.published_update)

	.get("/dashboard/blog/:id/edit", blogController.edit)
	.post("/dashboard/blog/:id/edit", blogController.update)
	.get("/dashboard/blog/:id/delete", blogController.destory)
	.get("/dashboard/blog/:id", blogController.show)
	// .post("/dashboard/blog/check-unique-url", blogController.show)

module.exports = () => router;
