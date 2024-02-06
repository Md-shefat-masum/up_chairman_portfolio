const { default: mongoose, Schema } = require("mongoose");
const { db_url } = require("../../../../../configs/db.config");
const Model = require("../model/model");


let data = [
	
	{
		title: "সাহিত্য-সংস্কৃতি",
		short_description:"গল্প, কবিতা, উপন্যাস, গান, নাটক, চলচ্চিত্রসহ সাহিত্য-সংস্কৃতির প্রতিটি বিষয়ের আলোচনা",
		long_description:"গল্প, কবিতা, উপন্যাস, গান, নাটক, চলচ্চিত্রসহ সাহিত্য-সংস্কৃতির প্রতিটি বিষয়ের আলোচনা",
		photo:"",
		seo_title:"সাহিত্য-সংস্কৃতি",
		seo_keyword:"সাহিত্য-সংস্কৃতি",
		seo_description:"সাহিত্য-সংস্কৃতি",
		url: "shahitto-shongshkrity",
		status: true,
	},
	{
		title: "খেলাধূলা",
		short_description:"টাইগারদের সেরা অধিনায়ক মাশরাফি বিন মর্তুজা",
		long_description:"টাইগারদের সেরা অধিনায়ক মাশরাফি বিন মর্তুজা",
		photo:"",
		seo_title:"খেলাধূলা",
		seo_keyword:"খেলাধূলা",
		seo_description:"খেলাধূলা",
		url: "kheladhula",
		status: true,
	},
	{
		title: "বিজ্ঞান",
		short_description:"বিজ্ঞানের প্রতিটি বিষয়ের আলোচনা। কপি করা নয়; শুধুমাত্র নিজের অথবা সংকলিত লেখা প্রকাশ করুন!",
		long_description:"বিজ্ঞানের প্রতিটি বিষয়ের আলোচনা। কপি করা নয়; শুধুমাত্র নিজের অথবা সংকলিত লেখা প্রকাশ করুন!",
		photo:"",
		seo_title:"বিজ্ঞান",
		seo_keyword:"বিজ্ঞান",
		seo_description:"বিজ্ঞান",
		url: "bigghan",
		status: true,
	},
	{
		title: "তথ্য ও যোগাযোগ প্রযুক্তি",
		short_description:"তথ্য ও যোগাযোগ প্রতিটি শাখা-প্রশাখার আলোচনা।",
		long_description:"তথ্য ও যোগাযোগ প্রতিটি শাখা-প্রশাখার আলোচনা।",
		photo:"",
		seo_title:"তথ্য ও যোগাযোগ প্রযুক্তি",
		seo_keyword:"তথ্য ও যোগাযোগ প্রযুক্তি",
		seo_description:"তথ্য ও যোগাযোগ প্রযুক্তি",
		url: "totthwa o projukti",
		status: true,
	},
	{
		title: "দৈনন্দিন",
		short_description:"দৈনন্দিন বিষয়াবলী নিয়ে আলোচনা",
		long_description:"দৈনন্দিন বিষয়াবলী নিয়ে আলোচনা",
		photo:"",
		seo_title:"দৈনন্দিন",
		seo_keyword:"দৈনন্দিন",
		seo_description:"দৈনন্দিন",
		url: "doynondin",
		status: true,
	},
];

module.exports = async () => mongoose.connect(db_url)
	.then(async () => {
		console.log("\n");
		console.log("site url seeding");

		await Model.deleteMany({});
		for (let i = 0; i < data.length; i++) {
			await Model.create(data[i]);
		}

		// let response = await Model.insertMany(data);

		console.log("site url seeding complete");

		console.log("\n");
	});
