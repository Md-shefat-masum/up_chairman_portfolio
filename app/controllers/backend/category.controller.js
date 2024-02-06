const categoryModel = require("../../models/category.model");

const controllers = {
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

		let data = await categoryModel
			.where({
				title: { $regex: key, $options: "i" },
			})
			.find()
			.limit(limit)
			.skip(skip)
			.populate("creator")
			.exec();
		let count = await categoryModel.count();
		return res.render("backend/category_management/all", {
			data,
			count,
			page,
			limit,
            key,
		});
	},

	create: async function (req, res) {
		return res.render("backend/category_management/create");
	},

	store: async function (req, res) {
		// console.log(req);
		let data = {
			title: req.body.title,
			creator: req.session.user._id,
		};
		let category = await categoryModel.create(data);
		return res.redirect("/dashboard/category");
		// return res.json(category);
	},

	show: async function (req, res) {
		let data = await categoryModel.findOne().where({ _id: req.params.id }).populate("creator").exec();
		return res.render("backend/category_management/show", {
			data,
		});
	},

	edit: async function (req, res) {
		let data = await categoryModel.findOne().where({ _id: req.params.id }).exec();
		return res.render("backend/category_management/edit", {
			data,
		});
	},

	update: async function (req, res) {
		let data = {
			title: req.body.title,
			creator: req.session.user._id,
		};
		let category = await categoryModel.findOne().where({ _id: req.params.id }).exec();
		category.title = data.title;
		category.category = data.creator;
		category.save();
		return res.redirect("/dashboard/category");
	},

	destory: async function (req, res) {
		await categoryModel.deleteOne().where({ _id: req.params.id }).exec();
		return res.redirect("/dashboard/category");
	},

	from_ids: async function (req, res){
		let in_ids = req.body.in_ids;
		let categories = await categoryModel.where("_id").in(in_ids).find().populate('creator').exec();
		return res.status(200).json(categories);
	},

	delete_by_ids: async function (req, res){
		let in_ids = req.body.in_ids;
		let categories = await categoryModel.where("_id").in(in_ids).deleteMany().exec();
		return res.status(200).json(categories);
	},

	status_update: async function (req, res){
		let {id, status} = req.body;
		// let category = await categoryModel.where("_id").equals(id).findOne().exec();
		// category.status = status;
		// category.save();
		
		let response = await categoryModel.updateOne({_id:id},{status: status}).exec();
		return res.status(200).json(response);
	},
};

module.exports = controllers;
