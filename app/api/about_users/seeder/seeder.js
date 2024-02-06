const { default: mongoose, Schema } = require("mongoose");
// const { db_url } = require("../../../configs/db.config");
const { db_url } = require("../../../../configs/db.config");
// const userModel = require("../user.model");
const Model = require("../model/model");

let data = [
	
	{
		title: "আলিফ সাগির",
		short_description: "আমাদের ভুলে বুঝাই উচিত যে, আমাদের মাঝে কোনো অসম্মানস্ত কাজ করলে তা আমাদের উপর নয়, বরং আমাদের মাঝের সবাইর উপর আসে।",
		long_description: "আমাদের ভুলে বুঝাই উচিত যে, আমাদের মাঝে কোনো অসম্মানস্ত কাজ করলে তা আমাদের উপর নয়, বরং আমাদের মাঝের সবাইর উপর আসে।",
	},
];

module.exports = async () => mongoose.connect(db_url)
	.then(async () => {
		console.log("\n");
		console.log("about users seeding");

		await Model.deleteMany({});
		for (let i = 0; i < data.length; i++) {
			await Model.create(data[i]);
		}

		// let response = await Model.insertMany(data);

		console.log("about users seeding complete");

		console.log("\n");
	});
