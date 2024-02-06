const { default: mongoose, Schema } = require("mongoose");
// const { db_url } = require("../../../configs/db.config");
const { db_url } = require("../../../../configs/db.config");
// const userModel = require("../user.model");
const Model = require("../model/model");
const bcrypt = require('bcrypt')

let data = [
	{
		username: "Abu Taher",
		email: "noortaher@gmail.com",
		password: "$2b$13$PlbkNt7Cl5.lwzOjdsBR4e.xgaRZEdsUXCs377PZ5McUPQTBMv/iy",
		full_name: "Abu taher",
		telegram_id: "@abutaher",
		telegram_name: "Abu Taher",
		mobile_number: "01777777777",
		role: 1,
		photo: "uploads/posts/bnu.png",
		status: true,
		remember_token: "rememberToken"
	}
	
];

module.exports = () => mongoose.connect(db_url).then(async () => {
	console.log("\n");
	console.log("user seeding");
	// console.log('$2b$13$PlbkNt7Cl5.lwzOjdsBR4e.xgaRZEdsUXCs377PZ5McUPQTBMv/iy');

	await Model.deleteMany({});

	for (let i = 0; i < data.length; i++) {
		let user = await Model.create(data[i]);
		user.password = await bcrypt.hash("@#123456", 13);
		await user.save();
	}

	console.log("user seeding complete");

	console.log("\n");
	
});
