const userRoleModel = require ("../../models/user_role.model")

const controllers = {
    all: async function(req, res){
        const data = await userRoleModel.find();
        console.log(data)
        return res.json(data)
    },
    store: async function (req, res) {
		console.log(req.body)
		console.log("sjlfksdlk")
		// return res.json(req.body)
		let data1= req.body;
		const data = await userRoleModel.create(data1);
		// const data = new userRoleModel({ name: "test2", email: "test2@ex.com", age: "80" });
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
		let newUsername = req.body.title;
		// let age = req.body.age;
		console.log(id)
		let data = await userRoleModel.where({
			_id: id,
		}).findOne();
        console.log(data.title)
		data.title = newUsername;
		// data.age = age;
		data.save();
		
		res.send(data);
	},
    destory: async function (req, res) {
		let id = req.params.id;
		let data = await userRoleModel.where({
			_id: id,
		}).deleteOne();
		res.send(data);
	},
};
module.exports = controllers;