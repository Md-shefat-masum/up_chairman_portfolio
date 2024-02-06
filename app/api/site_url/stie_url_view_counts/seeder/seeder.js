const { default: mongoose, Schema } = require("mongoose");
const { db_url } = require("../../../../../configs/db.config");
const Model = require("../model/model");

let data = [
	
	{
		site_url: "site/ur.ovm",
		ip_address: "jsjdrtew",
		device: "geyhsg",
		location: "kjglirs",
		status: true,
	},
	{
		site_url: "site.com",
		ip_address: "jsjdrtew",
		device: "geyhsg",
		location: "kjglirs",
		status: true,
	},
];

module.exports = async () => mongoose.connect(db_url)
	.then(async () => {
		console.log("\n");
		console.log("tag seeding");

		await Model.deleteMany({});
		for (let i = 0; i < data.length; i++) {
			await Model.create(data[i]);
		}

		// let response = await Model.insertMany(data);

		console.log("tag seeding complete");

		console.log("\n");
	});
