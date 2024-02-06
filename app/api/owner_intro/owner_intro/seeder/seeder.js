const { default: mongoose, Schema } = require("mongoose");
const { db_url } = require("../../../../../configs/db.config");
const Model = require("../model/model");

let data = [
	
	{
		title: "ইসলাম ও ভিন্ন ধর্মের সম্পর্ক",
		description: "ইসলাম ও অন্যান্য ধর্মের সম্পর্ক, সাম্প্রদায়িক সম্প্রীতি এবং পরস্পরের সহানুভূতি নিয়ে লেখা হতে পারে।",
		url: "https://www.youtube.com/embed/9_f2hOMaGXE?si=2uxFzfRTIxWIJ-OE",
		photo: "uploads/posts/is1.jpg",
		photo_alt: "ইসলাম ও ভিন্ন ধর্মের সম্পর্ক",
		status: true,
	},
	{
		title: "সামাজিক উন্নয়ন",
		description: "একটি সামাজিকভাবে উন্নত সমাজ একটি সুস্থ, সহিষ্ণু, এবং সমৃদ্ধিশীল সমাজ তৈরি করে যা সমস্ত সদস্যদের হিসেবে সমর্পিত।",
		url: "https://www.youtube.com/embed/f7YmAu_LEXM?si=x5WIDy3MJp0g80ky",
		photo: "uploads/posts/267সামাজিক উন্নয়নsocial_developmetn.jpg",
		photo_alt: "সামাজিক উন্নয়ন",
		status: true,
	},
	{
		title: "বৃক্ষরোপন",
		description: "বৃক্ষারোপণ একটি মহান ও প্রভাবশালী প্রথা, যা পৃথিবী এবং মানবজাতির মধ্যে একটি সম্বাদী সম্পর্ক প্রতিষ্ঠা করে।",
		url: "https://www.youtube.com/embed/lwDnbZ0vgV0?si=wpU_xTUpIUnMIzxh",
		photo: "uploads/posts/792বৃক্ষরোপনtree_plantation.jpg",
		photo_alt: "বৃক্ষরোপন",
		status: true,
	},
	{
		title: "বাংলাদেশের পর্যটন স্থান",
		description: "বাংলাদেশের প্রাকৃতিক সৌন্দর্য, ঐতিহাসিক স্থান এবং ভ্রমণ সম্পর্কিত তথ্য ও অভিজ্ঞতা।",
		url: "https://www.youtube.com/embed/JLjvEYMBGzQ?si=FpQJ9e7xyD193Tn5",
		photo: "uploads/posts/bn3.jpg",
		status: true,
	},
];

module.exports = async () => mongoose.connect(db_url)
	.then(async () => {
		console.log("\n");
		console.log("owner intro seeding");

		await Model.deleteMany({});
		for (let i = 0; i < data.length; i++) {
			await Model.create(data[i]);
		}

		// let response = await Model.insertMany(data);

		console.log("owner intro seeding complete");

		console.log("\n");
	});
