// const categoryModel = require("../../models/category.model");
const userModel = require("../../models/user.model");

const controllers = {
	all: async function (req, res) {
		const data = await userModel.find();
		console.log(data)
		return res.json(data);
		// return res.render("backend/user_management/all");
	},

	store: async function (req, res) {
		console.log(req.body)
		console.log("sjlfksdlk")
		// return res.json(req.body)
		let data1= req.body;
		const data = await userModel.create(data1);
		// const data = new userModel({ name: "test2", email: "test2@ex.com", age: "80" });
		let status = "";
		await data
		.save()
		.then(() => (status = data))
		.catch((e) => (status = e.message));
		
		res.send(status);
		// return res.render("backend/user_management/create");
	},
	edit: async function (req, res) {
		let id = req.params.id;
		let newUsername = req.body.username;
		// let age = req.body.age;
		console.log(id)
		let data = await userModel.where({
			_id: id,
		}).findOne();

		data.username = newUsername;
		// data.age = age;
		data.save();
		
		res.send(data);
	},
	destory: async function (req, res) {
		let id = req.params.id;
		let data = await userModel.where({
			_id: id,
		}).deleteOne();
		res.send(data);
	},

	status_update: async function (req, res){
		let {id, status} = req.body;
		let user = await userModel.where("_id").equals(id).findOne().exec();
		user.status = status;
		user.save();
			let response = await userModel.updateOne({_id:id},{status: status}).exec();
		return res.status(200).json(response);
	},

	from_ids: async function (req, res){
		
		let id = req.params.id;
		let data = await userModel.where({
			_id: id,
		}).findOne();
		return res.status(200).json(data);
	},

	// store: async function (req, res) {
	// 	// console.log(req);
	// 	let data = {
	// 		title: req.body.title,
			//// creator: req.session.user._id,
	// 	};
	// 	let user = await userModel.create(data);
	// 	return res.redirect("/dashboard/user");
	// 	// return res.json(user);
	// },

	// show: async function (req, res) {
	// 	let data = await categoryModel.findOne().where({ _id: req.params.id }).populate("creator").exec();
	// 	return res.render("backend/category_management/show", {
	// 		data,
	// 	});
	// },


	// update: async function (req, res) {
	// 	let data = {
	// 		title: req.body.title,
	// 		creator: req.session.user._id,
	// 	};
	// 	let category = await categoryModel.findOne().where({ _id: req.params.id }).exec();
	// 	category.title = data.title;
	// 	category.category = data.creator;
	// 	category.save();
	// 	return res.redirect("/dashboard/category");
	// },


	// delete_by_ids: async function (req, res){
	// 	let in_ids = req.body.in_ids;
	// 	let categories = await categoryModel.where("_id").in(in_ids).deleteMany().exec();
	// 	return res.status(200).json(categories);
	// },

	// status_update: async function (req, res){
	// 	let {id, status} = req.body;
	// 	// let category = await categoryModel.where("_id").equals(id).findOne().exec();
	// 	// category.status = status;
	// 	// category.save();
		
	// 	let response = await categoryModel.updateOne({_id:id},{status: status}).exec();
	// 	return res.status(200).json(response);
	// },
};

module.exports = controllers;
