const { default: mongoose, Schema } = require("mongoose");
const { db_url } = require("../../../../../configs/db.config");
const Model = require("../model/model");

let data = [
	
	{
		full_name: "Alif Sagir",
		email: "alif@gmail.com",
		address: "mirpur, Dhaka",
		subject: "feedback",
		message: "change logo",
		status: true,
	},
	{
		full_name: "Tarikul Islam",
		email: "tarik@gmail.com",
		address: "mirpur, Dhaka",
		subject: "feedback",
		message: "change logo",
		status: true,
	},
	{
		full_name: "Mojammel haque",
		email: "mojammel@gmail.com",
		address: "feni, chattogram",
		subject: "feedback",
		message: "change logo",
		status: true,
	},
	{
		full_name: "Sajid hasan",
		email: "sajid@gmail.com",
		address: "noakhali, chattogram",
		subject: "feedback",
		message: "change logo",
		status: true,
	},
	
];

module.exports = async () => mongoose.connect(db_url)
	.then(async () => {
		console.log("\n");
		console.log("contact message seeding");

		await Model.deleteMany({});
		for (let i = 0; i < data.length; i++) {
			await Model.create(data[i]);
		}

		// let response = await Model.insertMany(data);

		console.log("contact message seeding complete");

		console.log("\n");
	});
