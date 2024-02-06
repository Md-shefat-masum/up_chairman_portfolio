const { default: mongoose, Schema } = require("mongoose");
const { db_url } = require("../../../configs/db.config");
const blogModel = require("../blog.model");
const categoryModel = require("../category.model");
const userModel = require("../user.model");
const writerModel = require("../writer.model");

let html = `
	<p>
		Bangladesh men's football team has been taken onboard alongside the women's team for September's Asian Games in China following a voting at the Bangladesh Olympic Association.
	</p>
	<p>
		The BOA, in an executive committee meeting on May 6, decided not to send the men's team citing poor performance. However, following a request from the Bangladesh Football Federation (BFF), the apex body of the country's sports decided to hold a vote among its members, with the result coming decisively (21 to 6) in favour of sending the team.
	</p>
	<p>
		BOA's vice-president Sheikh Bashir Ahmed Mamun confirmed the development to The Daily Star on Saturday.
	</p>
`;
const get_category_ids = async () =>{
	let categories = await categoryModel.find();
	return categories.map(i=>i._id.toString()) ;
}

const get_user_id = async () =>{
	let user = await userModel.findOne();
	return user._id;
}
const get_writer_id = async () =>{
	let writer = await writerModel.findOne();
	return writer._id;
}

const demo_blog = async () => {
	return {
		title: "Men's football team finally going to Asiad",
		short_description: "In the last edition of the Asian Games in 2018, the men in red and green reached the second round for the first time after beating Qatar in their last group match.",
		description: html,
		category: await get_category_ids(),
		creator:  await get_user_id(),
		writer: await get_writer_id(),
		// translator: "",
		writing_date: "2023-01-25 ",
		thumb_image: "images/1.jpg",
		published: true,
		status: true,
		seo_title: "Men's football team finally going to Asiad",
		seo_description: "In the last edition of the Asian Games in 2018, the men in red and green reached ",
		seo_keyword:"football, entertainment, world-cup",
	};
}

module.exports = () => mongoose.connect(db_url).then(async () => {
	console.log("\n");
	console.log("blog seeding");

	await blogModel.deleteMany({});
	// let response = await blogModel.create(await demo_blog());
	let response = await blogModel.create(await demo_blog());

    console.log("blog seeding complete");

	console.log("\n");
});
