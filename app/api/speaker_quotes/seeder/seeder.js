const { default: mongoose, Schema } = require("mongoose");
// const { db_url } = require("../../../configs/db.config");
const { db_url } = require("../../../../configs/db.config");
// const userModel = require("../user.model");
const Model = require("../model/model");

let data = [
	
	{
		title: "আলিফ সাগির",
		description: "আমাদের ভুলে বুঝাই উচিত যে, আমাদের মাঝে কোনো অসম্মানস্ত কাজ করলে তা আমাদের উপর নয়, বরং আমাদের মাঝের সবাইর উপর আসে।",
	},
	{
		title: "আব্দুল্লাহ সাজিদ",
		description: "একজন বিশেষজ্ঞ তার কাজের জন্য বুদ্ধিমান, বোধশীল, এবং আত্ম-নিয়ন্ত্রণশীল হতে হবে।",
	},
	{
		title: "মোঃ সিফাতুল্লাহ",
		description: "আপনি একটি অসম্ভাব্য কিছু সৃষ্টি করতে পারলে তাতে আপনি হোঁচট খাচ্ছেন এমন বুঝতে হবে।",
	},
	{
		title: "মোঃ তারেক",
		description: "আপনি যদি অন্যের জীবনকে উন্নত করতে চান, তাদের একটি দুঃখজনক অংশ সহ্য করতে হবে।",
	},
	{
		title: "মোঃ ইয়ামিন",
		description: "যে কোন যোগ্য মানুষ প্রতিদিন একটি নতুন সুযোগ পায়।",
	},
];

module.exports = async () => mongoose.connect(db_url)
	.then(async () => {
		console.log("\n");
		console.log("speaker quotes seeding");

		await Model.deleteMany({});
		for (let i = 0; i < data.length; i++) {
			await Model.create(data[i]);
		}

		// let response = await Model.insertMany(data);

		console.log("speaker quotes seeding complete");

		console.log("\n");
	});
