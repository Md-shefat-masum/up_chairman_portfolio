const { default: mongoose, Schema } = require("mongoose");
const categoryModel = require("../category.model");
const { db_url } = require("../../../configs/db.config");

let categories = [
	{
		title: "Opinion",
		creator: "645fc7c1d7c51530643212e0",
	},
	{
		title: "Sports",
		creator: "645fc48cef1e9e5ad5a12089",
	},
	{
		title: "Business",
		creator: "645fc48cef1e9e5ad5a12089",
	},
	{
		title: "Entertainment",
		creator: "645fc48cef1e9e5ad5a12089",
	},
];

module.exports = () =>
	mongoose.connect(db_url).then(async () => {
		console.log("\n");
		console.log("catetgory seeding");

		await categoryModel.deleteMany({});
		// let response = await categoryModel.insertMany(categories);

		// for (let index = 0; index < 50; index++) {
		// 	await categoryModel.create({
		// 		title: "Category " + (index + 1),
		// 		creator: "645fc48cef1e9e5ad5a12089",
		// 	});
		// }

		console.log("catetgory seeding complete");
		categories.forEach(async (item) => {
			let category = new categoryModel(item);
			await category.save();
			console.log(category);
		});

		console.log("\n");

		// let cate = await categoryModel.findOne({}).populate('creator')
		// console.log(cate);
	});
