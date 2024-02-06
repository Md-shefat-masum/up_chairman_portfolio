const { default: mongoose, Schema } = require("mongoose");
// const { db_url } = require("../../../configs/db.config");
const { db_url } = require("../../../../configs/db.config");
// const userModel = require("../user.model");
const Model = require("../model/model");

let data = [
	
	{
		title: "SSC",
		status: true,
		start_date: "2023-06-10",
		end_date: "2023-06-10",
		result: 'GPA-5',
	},
	
	{
		title: "HSC",
		status: true,
		start_date: "2023-06-10",
		end_date: "2023-06-10",
		result: 'GPA-4.5',
	},
	{
		title: "BSc",
		status: true,
		start_date: "2023-06-10",
		end_date: "2023-06-10",
		result: 'CGPA-3.5',
	},
	{
		title: "MSc",
		status: true,
		start_date: "2023-06-10",
		end_date: "2023-06-10",
		result: 'CGPA-3.4',
	},
];

module.exports = async () => mongoose.connect(db_url)
	.then(async () => {
		console.log("\n");
		console.log("user-education seeding");

		await Model.deleteMany({});
		for (let i = 0; i < data.length; i++) {
			await Model.create(data[i]);
		}

		// let response = await Model.insertMany(data);

		console.log("user-education seeding complete");

		console.log("\n");
	});
