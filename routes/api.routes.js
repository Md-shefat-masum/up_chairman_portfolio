const express = require("express");
const user_routes = require("../app/api/user/router/routes");
const user_roles_routes = require("../app/api/user_roles/router/routes");
const user_acheivements_routes = require("../app/api/user_acheivements/router/routes");
const user_contact_numbers_routes = require("../app/api/user_contact_numbers/router/routes");
const user_educations_routes = require("../app/api/user_educations/router/routes");
const user_emails_routes = require("../app/api/user_emails/router/routes");
const user_profile_infos_routes = require("../app/api/user_profile_infos/router/routes");
const user_social_links_routes = require("../app/api/user_social_links/router/routes");
const blogs_routes = require("../app/api/blog/blogs/router/routes");
const blog_categories_routes = require("../app/api/blog/blog_categories/router/routes");
const blog_comments_routes = require("../app/api/blog/blog_comments/router/routes");
const blog_comment_replies_routes = require("../app/api/blog/blog_comment_replies/router/routes");
const blog_image_routes = require("../app/api/blog/blog_images/router/routes");
const contents_routes = require("../app/api/content/contents/router/routes");
const content_categories_routes = require("../app/api/content/content_categories/router/routes");
const content_comments_routes = require("../app/api/content/content_comments/router/routes");
const content_comment_replies_routes = require("../app/api/content/content_comment_replies/router/routes");
const content_image_routes = require("../app/api/content/content_images/router/routes");
const contact_message_routes = require("../app/api/contact_message/contact_messages/router/routes");
const union_porishod_notice_routes = require("../app/api/union_porishod_notice/union_porishod_notice/router/routes");
const banner_routes = require("../app/api/banner/banners/router/routes");
const setting_title_routes = require("../app/api/setting/setting_titles/router/routes");
const setting_value_routes = require("../app/api/setting/setting_values/router/routes");
const photo_gallery_categorie_routes = require("../app/api/photo_gallery/photo_gallery_categories/router/routes");
const photo_gallery_image_routes = require("../app/api/photo_gallery/photo_gallery_images/router/routes");
const video_gallery_categorie_routes = require("../app/api/video_gallery/video_gallery_categories/router/routes");
const video_gallery_image_routes = require("../app/api/video_gallery/video_gallery_images/router/routes");
const site_url_routes = require("../app/api/site_url/site_urls/router/routes");
const site_url_view_count_routes = require("../app/api/site_url/stie_url_view_counts/router/routes");
const tag_routes = require("../app/api/tag/tags/router/routes");
const user_review_routes = require("../app/api/user_reviews/user_reviews/router/routes");
const owner_intro_routes = require("../app/api/owner_intro/owner_intro/router/routes");
const speaker_quotes_routes = require("../app/api/speaker_quotes/router/routes");
const heading_titles_routes = require("../app/api/heading_titles/router/routes");
const about_users_routes = require("../app/api/about_users/router/routes");

const analytics_routes = require("../app/api/analytics/routes");

const router = express.Router();



router.use(user_routes());
router.use(user_roles_routes());
router.use(user_acheivements_routes());
router.use(user_contact_numbers_routes());
router.use(user_educations_routes());
router.use(user_emails_routes());
router.use(user_profile_infos_routes());
router.use(user_social_links_routes());

// blog routes
router.use(blogs_routes());
router.use(blog_categories_routes());
router.use(blog_comments_routes());
router.use(blog_comment_replies_routes());
router.use(blog_image_routes());

// content routes
router.use(contents_routes());
router.use(content_categories_routes());
router.use(content_comments_routes());
router.use(content_comment_replies_routes());
router.use(content_image_routes());

// contact message
router.use(contact_message_routes());

// union porishod 
router.use(union_porishod_notice_routes());

// user review
router.use(user_review_routes());

// quotes review
router.use(speaker_quotes_routes());

// heading title review
router.use(heading_titles_routes());

// about users
router.use(about_users_routes());

// owner intro
router.use(owner_intro_routes());

// banner
router.use(banner_routes());

// setting
router.use(setting_title_routes());
router.use(setting_value_routes());

// photo gallery
router.use(photo_gallery_categorie_routes());
router.use(photo_gallery_image_routes());

// video gallery
router.use(video_gallery_categorie_routes());
router.use(video_gallery_image_routes());

// site url
router.use(site_url_routes());
router.use(site_url_view_count_routes());

//tag
router.use(tag_routes());

// analytics routes
router.use(analytics_routes());

module.exports = () => router;