const { default: mongoose, Schema } = require("mongoose");
// const { db_url } = require("../../../configs/db.config");
const { db_url } = require("../../../../configs/db.config");
// const userModel = require("../user.model");
const Model = require("../model/model");

let data = [
	
	{
		title: "Mother of humanity",
		serial: 1,
		status: true,
		date: "2023-06-14",
		description: 'Sheik Hasina Bangladesh Prime Minister talks about Rohingya refugees, shelters and crisis in Myanmar she has been named Mother of Humanity .',

	},
	{
		title: "Planet 50–50 champion",
		serial: 2,
		status: true,
		date: "2023-06-14",
		description: 'Prime Minister Sheikh Hasina has been conferred with the “Agent of Change” award and “Planet 50-50 Champion” honour for her outstanding contributions to women empowerment.',

	},
	{
		title: "Doctor of Law",
		serial: 3,
		status: true,
		date: "1997-10-25",
		description: 'A Doctor of Law is a degree in law. The application of the term varies from country to country and includes degrees such as the Doctor of Juridical Science',

	},
	{
		title: "Mother Teresa Award",
		serial: 4,
		status: true,
		date: "1998-06-14",
		description: 'Mary Teresa Bojaxhiu MC, better known as Mother Teresa, was an Albanian-Indian Catholic nun and the founder of the Missionaries of Charity.',

	},
];

module.exports = async () => mongoose.connect(db_url)
	.then(async () => {
		console.log("\n");
		console.log("user-roles seeding");

		await Model.deleteMany({});
		for (let i = 0; i < data.length; i++) {
			await Model.create(data[i]);
		}

		// let response = await Model.insertMany(data);

		console.log("user-roles seeding complete");

		console.log("\n");
	});
