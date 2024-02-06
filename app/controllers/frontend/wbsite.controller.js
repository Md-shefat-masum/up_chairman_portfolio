let ObjectId = require('mongodb').ObjectId;

const blogModel = require("../../models/blog.model");
const categoryModel = require("../../models/category.model");
const uesrProfileInfosModel = require("../../api/user_profile_infos/model/model")
const uesrEducationModel = require("../../api/user_educations/model/model")

const photoGalleryCategoriyModel = require("../../api/photo_gallery/photo_gallery_categories/model/model")

const videoGalleryCategoriyModel = require("../../api/video_gallery/video_gallery_categories/model/model")
const videoGalleryVideoModel = require("../../api/video_gallery/video_gallery_images/model/model")

const tagsModel = require("../../api/tag/tags/model/model")
const userContactNumbersModel = require("../../api/user_contact_numbers/model/model")
const userSocialLinksModel = require("../../api/user_social_links/model/model")
const userEmailsModel = require("../../api/user_emails/model/model")
const userContactMessagesModel = require("../../api/contact_message/contact_messages/model/model")

const userSettingTitlesModel = require("../../api/setting/setting_titles/model/model")
const blogCategoriesModel = require("../../api/blog/blog_categories/model/model")
const blogsModel = require("../../api/blog/blogs/model/model");
const bannerModel = require("../../api/banner/banners/model/model");
const settingModel = require("../../api/setting/setting_titles/model/model");
const blogCommentModel = require("../../api/blog/blog_comments/model/model");
const contactModel = require("../../api/contact_message/contact_messages/model/model")
const noticeModel = require("../../api/union_porishod_notice/union_porishod_notice/model/model")
const ownerIntroModel = require("../../api/owner_intro/owner_intro/model/model")
const userReviewModel = require("../../api/user_reviews/user_reviews/model/model")
const speakerQuoteModel = require("../../api/speaker_quotes/model/model")
const aboutUserModel = require("../../api/about_users/model/model")
const headingTitleModel = require("../../api/heading_titles/model/model")
const userAchievmentModel = require("../../api/user_acheivements/model/model")
const allBlogsModel = require("../../api/blog/blogs/model/model")

const viewCountModel = require("../../api/view_count/view_count_model")

const { async } = require("q");
const logger = require('../../utilites/logger');
const controllers = {
	folder_prefix: ``,
	route_prefix: ``,
	server: null,

	home: async function (req, res) {
		let blogs = await blogModel.find().populate('creator').populate('category');
		let categories = await categoryModel.find();

		return res.render(`home`, {
			blogs,
			categories,
		});
	},
	about: async function (req, res) {
		let user_educations = await uesrEducationModel.find();
		let profile_info = await uesrProfileInfosModel.find();
		let banner = await bannerModel.find();
		let abouts = await aboutUserModel.find();

		controllers.server.locals.seo_title = 'আমার তথ্যাদি';

		// console.log('profile_info', profile_info)
		// console.log(controllers.server);

		return res.render(`frontend/about`, {
			profile_info,
			user_educations,
			banner,
			abouts,
		});
	},
	photo_gallery: async function (req, res) {

		try {
			let photo_gallery_category = await photoGalleryCategoriyModel.find({
				status: 1,
			}).sort({ createdAt: -1 });
			let tags = await tagsModel.find({
				status: 1,
			}).sort({ createdAt: -1 });
			// let blog_category = await blogCategoriesModel.find();
			let PhotoGallery = await headingTitleModel.findOne({ title: "ফটো গ্যালারি" });
			// console.log("gallery", PhotoGallery);
			// console.log("gallery-categories", photo_gallery_category);
			return res.render(`frontend/gallery/photo_gallery`, {
				photo_gallery_category,
				tags,
				// blog_category,
				PhotoGallery,
			});
		} catch (error) {
			logger(error.stack, __filename);
			PhotoGallery = {
				title: "",
				description: "",
			};
			photo_gallery_category = [];
			tags = [];
			return res.render(`frontend/gallery/photo_gallery`, {
				photo_gallery_category,
				tags,
				// blog_category,
				PhotoGallery,
			});
		}
	},
	video_gallery: async function (req, res) {

		try {
			// let video_gallery_category = await videoGalleryCategoriyModel.find();
			// let blog_category = await blogCategoriesModel.find();
			let tags = await tagsModel.find();
			let video_gallery_video = await videoGalleryVideoModel.where({ 'status': true }).find().sort({ createdAt: -1 });
			let VideoGallery = await headingTitleModel.findOne({ title: "ভিডিও গ্যালারি" });

			console.log(video_gallery_video);
			return res.render(`frontend/gallery/video_gallery`, {
				// video_gallery_category,
				tags,
				// blog_category,
				video_gallery_video,
				VideoGallery,
			});
		} catch (error) {
			logger(error.stack, __filename);
			VideoGallery = {
				title: "",
				description: "",
			};
			video_gallery_video = [];
			tags = [];
			return res.render(`frontend/gallery/video_gallery`, {
				video_gallery_video,
				tags,
				// blog_category,
				VideoGallery,
			});
		}
	},
	audio_gallery: async function (req, res) {

		try {
			let video_gallery_category = await videoGalleryCategoriyModel.find();
			let tags = await tagsModel.find();
			let blog_category = await blogCategoriesModel.find();
			let video_gallery_video = await videoGalleryVideoModel.find();
			let AudioGallery = await headingTitleModel.findOne({ title: "অডিও গ্যালারি" });

			return res.render(`frontend/gallery/audio_gallery`, {
				video_gallery_category,
				tags,
				blog_category,
				video_gallery_video,
				AudioGallery,
			});

		} catch (error) {
			logger(error.stack, __filename);
			console.error("Error in audio_gallery:", error);
			return res.status(500).send("Internal Server Error");
		}
	},
	home_page: async function (req, res) {
		var photo_gallery_category, video_gallery_video, blog_category, banner, settingTitle1, settingTitle3,
			settingTitle2, settingTitle4, contemp, contems2, social_work, social_works, book_review, book_reviews, notices,
			ownerIntros, userReview, speakerQuotes, PhotoGallery, VideoGallery, user_achievement, all_blogs;

		try {
			await viewCountModel.create({
				model_name: "home_page_view",
				// model_id: null
			})

			all_blogs = await allBlogsModel.find().limit(4).where({ 'status': true }).sort({ createdAt: -1 });
			photo_gallery_category = await photoGalleryCategoriyModel.find().where({ 'status': true }).limit(4).sort({ createdAt: -1 });
			video_gallery_video = await videoGalleryVideoModel.find().limit(4).where({ 'status': true }).sort({ createdAt: -1 });
			blog_category = await blogCategoriesModel.find().where({ 'status': true });

			settingTitle1 = await settingModel.findOne({ title: "সর্বমোট বই পর্যালোচনা", status: 1 });
			settingTitle2 = await settingModel.findOne({ title: "সর্বমোট গাছ লাগানো", status: 1 });
			settingTitle3 = await settingModel.findOne({ title: "সাক্ষরতা অভিযান", status: 1 });
			settingTitle4 = await settingModel.findOne({ title: "জনপ্রিয়তা", status: 1 });

			PhotoGallery = await headingTitleModel.findOne({ title: "ফটো গ্যালারি", status: 1 });
			VideoGallery = await headingTitleModel.findOne({ title: "ভিডিও গ্যালারি", status: 1 });

			contemp = await blogCategoriesModel.findOne({ title: "সংবাদ", status: 1 });
			social_work = await blogCategoriesModel.findOne({ title: "সামাজিক কাজ", status: 1 });
			book_review = await blogCategoriesModel.findOne({ title: "বই পর্যালোচনা", status: 1 });

			banner = await bannerModel.find().limit(1).sort({ createdAt: -1 }).where({ 'status': true });
			notices = await noticeModel.find().limit(3).sort({ createdAt: -1 }).where({ 'status': true });
			userReview = await userReviewModel.find().limit(4).sort({ createdAt: -1 }).where({ 'status': true });
			ownerIntros = await ownerIntroModel.find().limit(1).sort({ createdAt: -1 }).where({ 'status': true });
			speakerQuotes = await speakerQuoteModel.find().limit(4).sort({ createdAt: -1 }).where({ 'status': true });

			contems = await blogsModel.find().where({ categories: contemp._id, status: 1 }).limit(6).sort({ createdAt: -1 });
			social_works = await blogsModel.find().where({ categories: social_work._id, status: 1 }).limit(6).sort({ createdAt: -1 });
			book_reviews = await blogsModel.find().where({ categories: book_review._id, status: 1 }).limit(6).sort({ createdAt: -1 });
			user_achievement = await userAchievmentModel.find().where({ 'status': true });

			contems2 = contems;
		} catch (error) {
			logger(error.stack, __filename);

			photo_gallery_category = [];
			blog_category = [];
			video_gallery_video = [];
			banner = [];
			contems = [];
			social_works = [];
			book_reviews = [];
			notices = [];
			ownerIntros = [];
			userReview = [];
			speakerQuotes = [];
			user_achievement = [];
			settingTitle1 = {
				title: "",
				value: "",
			}
			settingTitle2 = {
				title: "",
				value: "",
			}
			settingTitle3 = {
				title: "",
				value: "",
			}
			settingTitle4 = {
				title: "",
				value: "",
			}
			contemp = {
				title: "",
				short_description: "",
			}
			social_work = {
				title: "",
				short_description: "",
			}
			book_review = {
				title: "",
				short_description: "",
			}
			PhotoGallery = {
				title: "",
				short_description: "",
			}
			VideoGallery = {
				title: "",
				short_description: "",
			}
		}

		return res.render(`frontend/home`, {
			photo_gallery_category,
			video_gallery_video,
			blog_category,
			banner,
			settingTitle1,
			settingTitle3,
			settingTitle2,
			settingTitle4,
			contemp,
			contems2,
			social_work,
			social_works,
			book_review,
			book_reviews,
			notices,
			ownerIntros,
			userReview,
			speakerQuotes,
			PhotoGallery,
			VideoGallery,
			user_achievement,
			all_blogs
		});
	},

	blog_posts: async function (req, res) {
		try {
			let page = 1;
			let skip = 0;
			let limit = 6;
			let key = "";

			if (req.query.limit && req.query.limit > 0) {
				limit = parseInt(req.query.limit);
			}

			if (req.query.page && req.query.page > 0) {
				page = parseInt(req.query.page);
				skip = page * limit - limit;
			}
			// console.log('url', req.params.url);
			// const model_data = await model.findOne({ _id: data.id });
			let blog = await blogCategoriesModel.findOne({ url: "/" + req.params.url, status: 1 });
			// let datas = await blogCategoriesModel.findOne({ url: "/"+req.params.url });

			let sblogs = await blogsModel.find().limit(3).where({ status: true }).sort({ createdAt: -1 }).exec();

			let blogs = await blogsModel.find().where({ categories: blog?._id, status: true }).limit(limit).skip(skip).exec();

			let blogsExact = await blogsModel.countDocuments({ categories: blog?._id, status: true });

			let count = blogsExact;
			let reqUrl = req.params.url;
			controllers.server.locals.seo_title = blog?.seo_title;
			controllers.server.locals.seo_description = blog?.seo_description;
			controllers.server.locals.seo_image = blog?.photo;
			controllers.server.locals.seo_keyword = blog?.seo_keyword;
			// console.log("blog posts", blog);
			// console.log('requrl', blogs.length);
			console.log(blogsExact);
			return res.render(`frontend/blog/blog_posts`, {
				blog,
				blogs,
				sblogs,
				reqUrl,
				count,
				page,
				limit: count > 0 ? limit : 0,
			});

		} catch (error) {
			logger(error.stack, __filename);
			blogs = [];
			blog = {
				title: "",
				short_description: "",
			}
			let reqUrl = req.params.url;
			let count = 0;
			let page = 0;
			let limit = 0;
			return res.render(`frontend/blog/blog_posts`, {
				blog,
				blogs,
				reqUrl,
				count,
				page,
				limit,
			});
		}
	},

	search_posts: async function (req, res) {
		try {
			let page = 1;
			let skip = 0;
			let limit = 6;
			let key = "";

			if (req.query.limit && req.query.limit > 0) {
				limit = parseInt(req.query.limit);
			}

			if (req.query.page && req.query.page > 0) {
				page = parseInt(req.query.page);
				skip = page * limit - limit;
			}

			let searchItem = req.query.searchValue;

			let filter = {
				status: 1,
			};

			if (searchItem.length) {
				filter.title = { $regex: searchItem, $options: "i" };
			}

			let blogs = await blogsModel.find().where(filter).limit(limit).skip(skip).exec();

			let count = await blogsModel.count(filter);

			let reqUrl = 'search-items';

			return res.render(`frontend/blog/search_posts`, {
				reqUrl,
				blogs,
				count,
				page,
				limit,
			});

		} catch (error) {
			logger(error.stack, __filename);
			blogs = [];
			let reqUrl = req.params.url;
			console.log('requrl', reqUrl);
			let count = 3;
			let page = 1;
			let limit = 6;
			return res.render(`frontend/blog/search_posts`, {
				reqUrl,
				blogs,
				count,
				page,
				limit,
			});
		}
	},

	post_details: async function (req, res) {
		try {
			let post_details = await blogsModel.findOne({ _id: req.params.id, status: 1 })
				.populate('categories')
				.populate({
					path: 'comments',
					options: { limit: 3, sort: { createdAt: -1 } }
				});

			let post_comments = post_details.comments;

			post_details.total_view = (post_details?.total_view || 0) + 1;
			post_details.save();

			let post = await blogCategoriesModel.findOne({ title: post_details?.categories[0]?.title });
			let posts = await blogsModel.find().where({ categories: post?._id }).limit(5).sort({ createdAt: -1 });
			let allblogs = await blogsModel.find().limit(3).sort({ createdAt: -1 });

			await viewCountModel.create({
				model_name: "posts",
				model_id: post._id
			})

			let filterPost = allblogs?.filter((post) => post?._id != req.params.id);
			let filterPost2 = posts?.filter((post) => post?._id != req.params.id);

			controllers.server.locals.seo_title = post_details?.seo_title;
			controllers.server.locals.seo_schematags = post_details?.seo_schema_tags;
			controllers.server.locals.seo_description = post_details?.seo_description;
			controllers.server.locals.seo_image = post_details.photo;
			controllers.server.locals.seo_keyword = post_details?.seo_keyword;

			return res.render(`frontend/post_details`, {
				post_details,
				posts,
				post_comments,
				post,
				filterPost,
				filterPost2,
			});

		} catch (error) {
			logger(error.stack, __filename);
			let currentDate = new Date('2023-06-14T00:00:00.000Z');
			post_details = {
				title: "",
				subtitle: "",
				published_date: currentDate,
				photo: "",
				photo_alt: "",
				short_description: "",
				description: "",
				photos: "",
				_id: "",
			}
			post = {
				title: "",
			}
			posts = [];
			filterPost = [
				{
					photo: "",
					_id: "",
					title: "",
					published_date: currentDate
				}
			];
			post_comments = [];
			return res.render(`frontend/post_details`, {
				post_details,
				posts,
				post_comments,
				post,
				filterPost,
			});
		}


	},

	notice_details: async function (req, res) {
		try {
			let notice_details = await noticeModel.findOne({ _id: req.params.id });
			return res.render(`frontend/notice_details`, {
				notice_details,
			});

		} catch (error) {
			logger(error.stack, __filename);
			let currentDate = new Date('2023-06-14T00:00:00.000Z');
			notice_details = {
				title: "",
				subtitle: "",
				date: currentDate,
				description: "",
				photos: "",
				_id: "",
			}
			return res.render(`frontend/notice_details`, {
				notice_details,
			});
		}
	},

	notice_all: async function (req, res) {
		try {
			let page = 1;
			let skip = 0;
			let limit = 6;
			let key = "";

			if (req.query.limit && req.query.limit > 0) {
				limit = parseInt(req.query.limit);
			}

			if (req.query.page && req.query.page > 0) {
				page = parseInt(req.query.page);
				skip = page * limit - limit;
			}
			let notice_all = await noticeModel.find().limit(limit).sort({ createdAt: -1 }).skip(skip).exec();
			let count = await noticeModel.count();
			let reqUrl = 'search-items';
			console.log('first url', req.params)
			return res.render(`frontend/blog/notice_all`, {
				notice_all,
				reqUrl,
				count,
				page,
				limit,
			});

		} catch (error) {
			logger(error.stack, __filename);
			let currentDate = new Date('2023-06-14T00:00:00.000Z');
			notice_all = [
				{
					photo: "",
					_id: "all",
					title: "",
					description: "",
					date: currentDate
				}
			];
			let count = 3;
			let reqUrl = 'search-items';
			let page = 1;
			let limit = 6;
			return res.render(`frontend/blog/notice_all`, {
				notice_all,
				reqUrl,
				count,
				page,
				limit,
			});
		}
	},


	save_comment: async function (req, res) {
		try {
			let data = req.body;
			const new_comment = await blogCommentModel.create(data);
			let blog = await blogsModel.findOne().where({ _id: new_comment.post_id });

			blog.comments.push(new_comment._id);
			blog.save();
			// console.log('save commmetnt', new_comment);
			// console.log('find comment blog', blog);

		} catch (error) {
			logger(error.stack, __filename);
			console.error("Error in comment:", error);
			return res.status(500).send("Internal Server Error");
		}
	},

	save_contact_message: async function (req, res) {
		try {
			let data = req.body;
			const new_contact_message = await contactModel.create(data);
			// console.log('find comment blog', blog);
			return res.json(new_contact_message)

		} catch (error) {
			logger(error.stack, __filename);
			console.error("Error in contact message:", error);
			return res.status(500).send("Internal Server Error");
		}
	},

	save_user_review: async function (req, res) {
		try {
			let data = req.body;
			console.log('find user review blog', data);
			const new_contact_message = await userReviewModel.create(data);

		} catch (error) {
			logger(error.stack, __filename);
			console.error("Error in user review:", error);
			return res.status(500).send("Internal Server Error");
		}
	},

	/* contemporary: async function (req, res) {

		// const model_data = await model.findOne({ _id: data.id });
		let contemp = await blogCategoriesModel.findOne({ title: "সমসাময়িক" });

		let contems = await blogsModel.find().where({ categories: contemp._id });

		controllers.server.locals.seo_title = contemp.seo_title;
		controllers.server.locals.seo_description = contemp.seo_description;
		controllers.server.locals.seo_image = contemp.photo;
		controllers.server.locals.seo_keyword = contemp.seo_keyword;

		// console.log("contemp",contemp._id);
		// console.log("contems",contems);
		return res.render(`frontend/contemporary`, {
			contems,
			contemp,
		});
	}, */

	/* contemporary_details: async function (req, res) {
		// console.log(req.params.id);
		let contemp_details = await blogsModel.findOne({ _id: req.params.id });
		contemp_details.total_view = (contemp_details.total_view || 0) + 1;
		contemp_details.save();
		let contemp = await blogCategoriesModel.findOne({ title: "সমসাময়িক" });
		let contems = await blogsModel.find().where({ categories: contemp._id });
		// console.log(contemp_details);

		controllers.server.locals.seo_title = contemp_details.seo_title;
		controllers.server.locals.seo_schematags = contemp_details.
			seo_schema_tags;
		controllers.server.locals.seo_description = contemp_details.seo_description;
		controllers.server.locals.seo_image = contemp_details.photo;
		controllers.server.locals.seo_keyword = contemp_details.seo_keyword;

		return res.render(`frontend/post_details`, {
			contemp_details,
			contems,
		});
	}, */



	contact: async function (req, res) {
		try {
			let contact_numbers = await userContactNumbersModel.find();
			let emails = await userEmailsModel.find();
			let social_links = await userSocialLinksModel.find();
			let contact_message = await userContactMessagesModel.find();
			let address = await userSettingTitlesModel.find();
			// console.log("address", address[4].value[1]);
			return res.render(`frontend/contact`, {
				contact_numbers,
				emails,
				social_links,
				contact_message,
				address,
			});

		} catch (error) {
			logger(error.stack, __filename);
			console.error("Error in contact:", error);
			return res.status(500).send("Internal Server Error");
		}
	},

	category_post: async function (req, res) {
		try {
			let { category_name, category_id } = req.params;

			let categories = await categoryModel.find();
			let blogs = await blogModel.where({ category: [category_id] }).find().populate('creator').populate('category');

			return res.render(`category_post`, {
				categories,
				blogs
			});

		} catch (error) {
			logger(error.stack, __filename);
			console.error("Error in categories post:", error);
			return res.status(500).send("Internal Server Error");
		}
	},
};

module.exports = controllers;
