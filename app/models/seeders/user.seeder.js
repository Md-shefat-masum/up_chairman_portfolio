const { default: mongoose, Schema } = require("mongoose");
const { db_url } = require("../../../configs/db.config");
const userModel = require("../user.model");

let data = [
	{
		username: "admin",
		email: "admin@gmail.com",
		password: "$2b$13$PlbkNt7Cl5.lwzOjdsBR4e.xgaRZEdsUXCs377PZ5McUPQTBMv/iy",
		first_name: "Mohammad",
		last_name: "ali",
		telegram_id:"something",
		telegram_name:"somethingOne",
		mobile_number:"3908758",
		photo:"Kichu Ekta",
		slug:"janina",
		status:true,
		remember_token:"rememberToken"

	},
	{
		username: "user",
		email: "user@gmail.com",
		password: "$2b$13$PlbkNt7Cl5.lwzOjdsBR4e.xgaRZEdsUXCs377PZ5McUPQTBMv/iy",
		first_name: "Mike",
		last_name: "tyson",
		telegram_id:"something",
		telegram_name:"somethingOne",
		mobile_number:"3908758",
		photo:"Kichu Ekta",
		slug:"janina",
		status:true,
		remember_token:"rememberToken"
	},
	{
		username: "userexample",
		email: "user@gmail.com",
		password: "$2b$13$PlbkNt7Cl5.lwzOjdsBR4e.xgaRZEdsUXCs377PZ5McUPQTBMv/iy",
		first_name: "Mike",
		last_name: "tyson",
		telegram_id:"something",
		telegram_name:"somethingOne",
		mobile_number:"3908758",
		photo:"Kichu Ekta",
		slug:"janina",
		status:true,
		remember_token:"rememberToken"
	},
];

module.exports = () => mongoose.connect(db_url).then(async () => {
	console.log("\n");
	console.log("user seeding");

	await userModel.deleteMany({});
	let response = await userModel.insertMany(data);

    console.log("user seeding complete");

	console.log("\n");
});
