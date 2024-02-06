const { default: mongoose, Schema } = require("mongoose");
const { db_url } = require("../../../../../configs/db.config");
const Model = require("../model/model");

let data = [
	
	{
		title: "Photo 1",
		short_description: "jsjdrtew",
		long_description: "geyhsg",
		url: "kjglirs",
		photo: "Photo 1",
		photo_alt: "Photo 1",
		seo_title: "Photo 1",
		seo_keyword: "Photo 1",
		seo_description: "Photo 1",
		status: true,
	},
	{
		title: "Photo 2",
		short_description: "jsjdrtew",
		long_description: "geyhsg",
		url: "kjglirs",
		photo: "Photo 1",
		photo_alt: "Photo 1",
		seo_title: "Photo 1",
		seo_keyword: "Photo 1",
		seo_description: "Photo 1",
		status: true,
	},
];

module.exports = async () => mongoose.connect(db_url)
	.then(async () => {
		console.log("\n");
		console.log("photo gallery images seeding");

		await Model.deleteMany({});
		for (let i = 0; i < data.length; i++) {
			await Model.create(data[i]);
		}

		// let response = await Model.insertMany(data);

		console.log("photo gallery images seeding complete");

		console.log("\n");
	});
