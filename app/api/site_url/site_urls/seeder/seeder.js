const { default: mongoose, Schema } = require("mongoose");
const { db_url } = require("../../../../../configs/db.config");
const Model = require("../model/model");

let data = [
	
	{
		url: "soefjsl.com",
		url_for_table: "jsjdrtew",
		url_for_table_id: "geyhsg",
		url_redirect_to: "kjglirs",
		total_view: "video 1",
		total_redirect: "video 1",
		status: true,
	},
	{
		url: "soefjsl.com",
		url_for_table: "jsjdrtew",
		url_for_table_id: "geyhsg",
		url_redirect_to: "kjglirs",
		total_view: "video 1",
		total_redirect: "video 1",
		status: true,
	},
];

module.exports = async () => mongoose.connect(db_url)
	.then(async () => {
		console.log("\n");
		console.log("site url seeding");

		await Model.deleteMany({});
		for (let i = 0; i < data.length; i++) {
			await Model.create(data[i]);
		}

		// let response = await Model.insertMany(data);

		console.log("site url seeding complete");

		console.log("\n");
	});
