const express = require("express");
const blogController = require("../../../app/controllers/backend/blog.controller");
const user_managementController = require("../../../app/controllers/backend/user.controller")
const router = express.Router();

router
	.get("/user", user_managementController.all)
	.post("/user", blogController.store)
	.put("/user", blogController.update)
	.delete("/user", blogController.destory)
	
	.post("/user/from-ids", blogController.from_ids)
	.post("/user/delete-by-ids", blogController.delete_by_ids)
	.post("/user/status-update", blogController.status_update)

	.get("/user/:id", blogController.show)

module.exports = () => router;