const { default: mongoose, Schema } = require("mongoose");
const { db_url } = require("../../../../../configs/db.config");
const Model = require("../model/model");

let data = [
	
	{
		title: "চার গণমাধ্যম হামাসের হামলা সম্পর্কে জানত",
		description: "ইসরায়েলের দক্ষিণাঞ্চলে গত ৭ অক্টোবর ফিলিস্তিনের স্বাধীনতাকামী সংগঠন হামাসের হামলার বিষয়ে চারটি আন্তর্জাতিক সংবাদমাধ্যম আগে থেকেই জানত বলে অভিযোগ উঠেছে। ইসরায়েলপন্থী পর্যবেক্ষক সংস্থা অনেস্টরিপোর্টিংয়ে প্রকাশিত এক নিবন্ধে এ অভিযোগ তোলা হয়েছে।",
		photo: "",
		photo_alt: "রকেট হামলা",
		status: true,

	},
	{
		title: "পররাষ্ট্রমন্ত্রীকে সরিয়ে দিয়ে দুর্বল হয়েছেন সি চিন পিং",
		description: "চীনের সর্বকনিষ্ঠ পররাষ্ট্রমন্ত্রী কিন গ্যাংয়ের অপসারণ এবং ৫৭ বছর বয়সী এই নেতার রহস্যজনকভাবে উধাও হয়ে যাওয়া সারা বিশ্বের পত্রপত্রিকায় শিরোনাম হয়েছে।",
		photo: "",
		photo_alt: "সি চিন পিং",
		status: true,

	},
];

module.exports = async () => mongoose.connect(db_url)
	.then(async () => {
		console.log("\n");
		console.log("blog images seeding");

		await Model.deleteMany({});
		for (let i = 0; i < data.length; i++) {
			await Model.create(data[i]);
		}

		// let response = await Model.insertMany(data);

		console.log("blog images seeding complete");

		console.log("\n");
	});
