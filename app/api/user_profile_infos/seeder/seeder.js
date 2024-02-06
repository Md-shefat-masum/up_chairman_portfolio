const { default: mongoose, Schema } = require("mongoose");
// const { db_url } = require("../../../configs/db.config");
const { db_url } = require("../../../../configs/db.config");
// const userModel = require("../user.model");
const Model = require("../model/model");

let data = [
	
	{
		designation: "Teacher",
		blood_group: "B+",
		date_of_birth: "2023-06-10",
		nationality: "bangladeshi",
		father_name: "Abdur Rahman",
		mother_name: "Khadejaul kubra",
		banner_profile_pic: "",
		short_bio: "আসসালামু আলাইকুম, শহীদি কাফেলা বাংলাদেশ ইসলামী ছাত্রশিবিরের অনলাইন দাওয়তি সপ্তাহ উপলক্ষে কিছু স্মৃতিকথা লেখার উদ্দ্যেশ্যে আল্লাহ রব্বুল আলামীনের উপর ভরসা করে টাইপিং শুরু করছি। ইসলামী আদর্শের পতাকাবাহী বাংলাদেশ ইসলামী ছাত্রশিবিরের মত একটি কাফেলায় শামিল হওয়া ছিল আমার জন্য একটি সৌভাগ্য। আমি ইসলামী আদর্শের এ সংগঠন করব এটি ছিল অকল্পনীয়। মহান আল্লাহ রব্বুল আলামীন আমাকে কবুল করেছেন এজন্য শুকরিয়া আদায় করছি।",
		full_bio: "আসসালামু আলাইকুম, শহীদি কাফেলা বাংলাদেশ ইসলামী ছাত্রশিবিরের অনলাইন দাওয়তি সপ্তাহ উপলক্ষে কিছু স্মৃতিকথা লেখার উদ্দ্যেশ্যে আল্লাহ রব্বুল আলামীনের উপর ভরসা করে টাইপিং শুরু করছি। ইসলামী আদর্শের পতাকাবাহী বাংলাদেশ ইসলামী ছাত্রশিবিরের মত একটি কাফেলায় শামিল হওয়া ছিল আমার জন্য একটি সৌভাগ্য। আমি ইসলামী আদর্শের এ সংগঠন করব এটি ছিল অকল্পনীয়। মহান আল্লাহ রব্বুল আলামীন আমাকে কবুল করেছেন এজন্য শুকরিয়া আদায় করছি।",
		address_present: "dhaka",
		address_permanent: "khulna",
		google_map: "sljflksj",

	},
];

module.exports = async () => mongoose.connect(db_url)
	.then(async () => {
		console.log("\n");
		console.log("user-profile-info seeding");

		await Model.deleteMany({});
		for (let i = 0; i < data.length; i++) {
			await Model.create(data[i]);
		}

		// let response = await Model.insertMany(data);

		console.log("user-profile-info seeding complete");

		console.log("\n");
	});
