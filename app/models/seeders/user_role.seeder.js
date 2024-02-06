const { default: mongoose, Schema } = require("mongoose");
const { db_url } = require("../../../configs/db.config");
const userRoleModel = require("../user_role.model");

let data = [
	{
		title:"someone1",
		serial:1,

	},
	{
		title:"someone2",
		serial:2,
	},
	{
		title:"someone3",
		serial:3,
	},
];

module.exports = () => mongoose.connect(db_url).then(async () => {
	console.log("\n");
	console.log("user role seeding");

	await userRoleModel.deleteMany({});
	let response = await userRoleModel.insertMany(data);

    console.log("user role seeding complete");

	console.log("\n");
});
