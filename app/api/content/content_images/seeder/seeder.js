const { default: mongoose, Schema } = require("mongoose");
const { db_url } = require("../../../../../configs/db.config");
const Model = require("../model/model");

let data = [
	
	{
		title: "প্লাস্টিকের বোতলে তৈরি পরিবেশবান্ধব বাড়ি",
		description: "প্লাস্টিকের বোতলে বালু ভর্তি করে সিমেন্ট দিয়ে পরিবেশবান্ধব এই বাড়ি তৈরি করে এলাকায় বেশ সাড়া ফেলেছেন শমসের আলী।",
		photo: "",
		photo_alt: "পরিবেশবান্ধব বাড়ি",
		status: true,

	},
	{
		title: "স্কুলের বেতন প্লাস্টিকের বোতল",
		description: "দুই দশক আগের তুলনায় বিশ্বে এখন দ্বিগুণ প্লাস্টিক বর্জ্য তৈরি হচ্ছে এবং এর বেশির ভাগেরই শেষ ঠিকানা হয় মাটি।",
		photo: "",
		photo_alt: "স্কুলের বেতন প্লাস্টিক",
		status: true,

	},
];

module.exports = async () => mongoose.connect(db_url)
	.then(async () => {
		console.log("\n");
		console.log("content images seeding");

		await Model.deleteMany({});
		for (let i = 0; i < data.length; i++) {
			await Model.create(data[i]);
		}

		// let response = await Model.insertMany(data);

		console.log("content images seeding complete");

		console.log("\n");
	});
