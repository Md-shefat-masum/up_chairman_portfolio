const { default: mongoose, Schema } = require("mongoose");
// const { db_url } = require("../../../configs/db.config");
const { db_url } = require("../../../../configs/db.config");
// const userModel = require("../user.model");
const Model = require("../model/model");

let data = [
	
	{
		type: "facebook",
		url: "www.facebook.com",
		icon:"fa-brands fa-facebook-f",
		status: true,
	},
	{
		type: "telegram",
		url: "www.telegram.com",
		icon:"fa-brands fa-youtube",
		status: true,
	},
	{
		type: "linkdin",
		url: "www.linkdin.com",
		icon:"fa-brands fa-linkedin",
		status: true,
	},
	{
		type: "twitter",
		url: "www.twitter.com",
		icon:"fa-brands fa-twitter",
		status: true,
	},
];

module.exports = async () => mongoose.connect(db_url)
	.then(async () => {
		console.log("\n");
		console.log("user-social-link seeding");

		await Model.deleteMany({});
		for (let i = 0; i < data.length; i++) {
			await Model.create(data[i]);
		}

		// let response = await Model.insertMany(data);

		console.log("user-social-link seeding complete");

		console.log("\n");
	});
