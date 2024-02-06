const express = require("express");
const isAuthMiddleware = require("../../app/middlewares/isAuth.middleware");
const frontendCommonDataMiddleware = require("../../app/middlewares/frontendCommonData.middleware");
const { share_check_auth } = require("../..");
const website_controller = require("../../app/controllers/frontend/wbsite.controller");
const router = express.Router();
let server = null;



module.exports = (mainserver) => {
	website_controller.server = mainserver;
	router
		.get("/", website_controller.home_page)
		// .get("/category/:category_name/:category_id", website_controller.category_post)
		// .get("/about", function (req, res) {
		// 	return res.render("about");
		// })
		.get("/login", function (req, res) {
			return res.render("auth/login");
		})
		.get("/signup", function (req, res) {
			return res.render("auth/register");
		})
		// .get("/home", function (req, res) {
		// 	return res.render("frontend/home");
		// })
		.get("/home", [website_controller.home_page])
		.get("/about", website_controller.about)
		.get("/contact", website_controller.contact)

		.get("/user-review", function (req, res) {
			return res.render("frontend/user_review");
		})

		// blog posts routes
		.get("/posts/:url", website_controller.blog_posts)

		// blog posts routes
		.get(`/search/posts`, website_controller.search_posts)

		// save comment routes
		.post("/save/comment", website_controller.save_comment)

		// save contact message routes
		.post("/save/contact-message", website_controller.save_contact_message)

		// save user review routes
		.post("/save/user-review", website_controller.save_user_review)

		// post details routes
		.get("/post/:id", website_controller.post_details)

		// notice all routes
		.get("/notice/all", website_controller.notice_all)

		// notice details routes
		.get("/notice/:id", website_controller.notice_details)

		// photo gallery routes
		.get("/photo-gallery", website_controller.photo_gallery)

		// video gallery routes
		.get("/video-gallery", website_controller.video_gallery)

		// audio gallery routes
		.get("/audio-gallery", website_controller.audio_gallery)

	// .get("/contemporary", website_controller.contemporary)
	// .get("/contemporary-details/:id", website_controller.contemporary_details)

	// .get("/social-work", website_controller.social_work)
	// .get("/social-work-details/:id", website_controller.social_work_details)

	// .get("/book-review", website_controller.book_review)
	// .get("/book-review-details/:id", website_controller.book_review_details)

	// .get("posts/blog-islam", website_controller.blog_islam)
	// .get("/blog-islam-details/:id", website_controller.blog_islam_details)

	// .get("/blog-islamic-movement", website_controller.blog_islamic_movement)
	// .get("/blog-islamic-movement-details/:id", website_controller.blog_islamic_movement_details)
	// 
	// .get("/blog-bangladesh", website_controller.blog_bangladesh)
	// .get("/blog-bangladesh-details/:id", website_controller.blog_bangladesh_details)

	// .get("/blog-politics", website_controller.blog_politics)
	// .get("/blog-politics-details/:id", website_controller.blog_politics_details)

	// .get("/blog-history", website_controller.blog_history)
	// .get("/blog-history-details/:id", website_controller.blog_history_details)

	// .get("/blog-miscellaneous", website_controller.miscellaneous)
	// .get("/blog-miscellaneous-details/:id", website_controller.miscellaneous_details)





	return router
};