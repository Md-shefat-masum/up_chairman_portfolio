const { body, validationResult } = require("express-validator");
const blogModel = require("../../models/blog.model");
const categoryModel = require("../../models/category.model");
const translatorModel = require("../../models/translator.model");
const writerModel = require("../../models/writer.model");
var fs = require('fs-extra')
const { dirname } = require('path');
const appDir = dirname(require.main.filename);

const blog_store_validate = async (req) => {
	await body("title")
		.not()
		.isEmpty()
		.withMessage("the title field is required")
		.run(req);

	await body("category")
		.not()
		.isEmpty()
		.withMessage("the category field is required")
		.run(req);

	await body("writer")
		.not()
		.isEmpty()
		.withMessage("the writer field is required")
		.run(req);

	await body("writing_date")
		.not()
		.isEmpty()
		.withMessage("the writing date field is required")
		.run(req);

	await body("short_description")
		.not()
		.isEmpty()
		.withMessage("the short description field is required")
		.run(req);

	await body("description")
		.not()
		.isEmpty()
		.withMessage("the description field is required")
		.run(req);

	let result = validationResult(req);
	return {
		errors: result.array(),
		hasError: result.isEmpty() ? false : true,
	};
};

const upload_files = (file, id) => {
	let file_name = parseInt(Math.random() * 1000) + id + file.name;
	// const path = __dirname + "/public/uploads/posts/" + file_name;
	const path = appDir + "/public/uploads/posts/" + file_name;
	fs.move(file.path, path, function (err) {
		if (err) return console.error(err)
		console.log("success!")
	})
	thumb_image_path = "uploads/posts/" + file_name;
	return thumb_image_path;
}
const controllers = {
	folder_prefix: `blog_management`,
	route_prefix: `blog`,

	all: async function (req, res) {
		let page = 1;
		let skip = 0;
		let limit = 10;
		let key = "";

		if (req.query.limit && req.query.limit > 0) {
			limit = parseInt(req.query.limit);
		}

		if (req.query.page && req.query.page > 0) {
			page = parseInt(req.query.page);
			skip = page * limit - limit;
		}

		if (req.query.key) {
			key = req.query.key;
		}

		let data = await blogModel
			.where({
				title: { $regex: key, $options: "i" },
			})
			.find()
			.limit(limit)
			.skip(skip)
			.populate("creator")
			.exec();
		let count = await blogModel.count();

		return res.render(`backend/${controllers.folder_prefix}/all`, {
			data,
			count,
			page,
			limit,
			key,
		});
	},

	create: async function (req, res) {
		const categories = await categoryModel.find();
		const writers = await writerModel.find();
		const translators = await translatorModel.find();
		return res.render(`backend/${controllers.folder_prefix}/create`, {
			categories,
			writers,
			translators,
		});
	},
	// check_unique_url: async function (req, res) {
	// 	let url = req.body.url;
	// 	console.log('url', url);
	// 	return res.render(`backend/${controllers.folder_prefix}/create`, {
	// 		categories,
	// 		writers,
	// 		translators,
	// 	});
	// },

	store: async function (req, res) {
		// console.log(req.files);

		let validator = await blog_store_validate(req);
		if (validator.hasError) {
			return res.status(422).json(validator);
		}

		let data = {
			title: req.body.title,
			short_description: req.body.short_description,
			description: req.body.description,
			category: req.body["category"],
			writer: req.body.writer,
			writing_date: req.body.writing_date,
			translator: req.body["translators"],
			published: req.body.published,
			status: true,
			view: 0,
			seo_title: req.body.seo_title,
			seo_description: req.body.seo_description,
			seo_keyword: req.body.seo_keyword,
			tags: req.body["tags"],
			creator: req.session.user._id,
		};

		let blog = {};

		try {
			blog = await blogModel.create(data);

			var thumb_image_path = "";
			var related_image_path = [];

			if (req.files?.thumb_image && req.files?.thumb_image.size) {
				thumb_image_path = upload_files(req.files.thumb_image, blog._id)
			}

			if (req.files?.related_images && req.files?.related_images[0].size) {
				related_image_path = req.files.related_images.map((file) => upload_files(file, blog._id));
			}

			blog.thumb_image = thumb_image_path;
			blog.related_images = related_image_path;
			blog.save();

		} catch (error) {
			// console.log(error);
			return res.status(500).json({msg: "data uploading failed.", error: error})
		}

		return res.json(blog);
		// return res.redirect("/dashboard/blog");
	},

	show: async function (req, res) {
		let data = await blogModel.findOne().where({ _id: req.params.id }).populate("creator").exec();
		return res.render(`backend/${controllers.folder_prefix}/show`, {
			data,
		});
	},

	edit: async function (req, res) {
		let data = await blogModel.findOne().where({ _id: req.params.id }).exec();
		const categories = await categoryModel.find();
		const writers = await writerModel.find();
		const translators = await translatorModel.find();
		return res.render(`backend/${controllers.folder_prefix}/edit`, {
			data,
			categories,
			writers,
			translators,
		});
	},

	update: async function (req, res) {
		let validator = await blog_store_validate(req);
		if (validator.hasError) {
			return res.status(422).json(validator);
		}

		let data = {
			title: req.body.title,
			short_description: req.body.short_description,
			description: req.body.description,
			category: req.body["category"],
			writer: req.body.writer,
			writing_date: req.body.writing_date,
			translator: req.body["translators"],
			published: req.body.published,
			status: true,
			view: 0,
			seo_title: req.body.seo_title,
			seo_description: req.body.seo_description,
			seo_keyword: req.body.seo_keyword,
			tags: req.body["tags"],
			creator: req.session.user._id,
		};

		let blog = {};

		try {
			blog = await blogModel.findOneAndUpdate({ _id: req.params.id },data).exec();

			var thumb_image_path = blog.thumb_image || "";
			var related_image_path = blog.related_images || [];

			if (req.files?.thumb_image && req.files?.thumb_image.size) {
				thumb_image_path = upload_files(req.files.thumb_image, blog._id)
			}

			if (req.files?.related_images && req.files?.related_images[0].size) {
				related_image_path = req.files.related_images.map((file) => upload_files(file, blog._id));
			}

			blog.thumb_image = thumb_image_path;
			blog.related_images = related_image_path;
			blog.save();

		} catch (error) {
			// console.log(error);
			return res.status(500).json({msg: "data uploading failed.", error: error})
		}

		return res.json(blog);
	},

	destory: async function (req, res) {
		await blogModel.deleteOne().where({ _id: req.params.id }).exec();
		return res.redirect(`/dashboard/${controllers.route_prefix}`);
	},

	from_ids: async function (req, res) {
		let in_ids = req.body.in_ids;
		let data = await blogModel.where("_id").in(in_ids).find().populate('creator').exec();
		return res.status(200).json(data);
	},

	delete_by_ids: async function (req, res) {
		let in_ids = req.body.in_ids;
		let data = await blogModel.where("_id").in(in_ids).deleteMany().exec();
		return res.status(200).json(data);
	},

	published_update: async function (req, res) {
		let { id, status } = req.body;
		// let category = await categoryModel.where("_id").equals(id).findOne().exec();
		// category.status = status;
		// category.save();
		console.log(req.body);
		let response = await blogModel.updateOne({ _id: id }, { status: status }).exec();
		return res.status(200).json(response);
	},
	
	status_update: async function (req, res) {
		let { id, status } = req.body;
		// let category = await categoryModel.where("_id").equals(id).findOne().exec();
		// category.status = status;
		// category.save();
		console.log(req.body);
		let response = await blogModel.updateOne({ _id: id }, { status: status }).exec();
		return res.status(200).json(response);
	},
};

module.exports = controllers;
