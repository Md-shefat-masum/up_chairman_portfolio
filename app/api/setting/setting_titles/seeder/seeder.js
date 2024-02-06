const { default: mongoose, Schema } = require("mongoose");
const { db_url } = require("../../../../../configs/db.config");
const Model = require("../model/model");
values = {
	title: [
		"রাজিবুর রহমান",
	],
	logo: [
		"/uploads/posts/bnu.png",
	],
	fabicon: [
		"রাজিবুর রহমান",
	],
	phone_number: [
		"+880 125468745",
	],
	address: [
		"Head Office: House 310, Road 21 Mohakhali DOHS, Dhaka-1206",
		"Sub Office: House 100, Road 01 Mirpur DOHS, Dhaka-1208",
	],
	company_name: [
		"রাজিবুর রহমান",
	],
	city: [
		"ঢাকা",
	],
	state: [
		"বাংলাদেশ",
	],
	post_code: [
		"১২০৪",
	],
	country: [
		"বাংলাদেশ",
	],
	email: [
		"rajib@gmail.com",
	],
	map: [
		'<iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d5237.592579713879!2d90.41791440863823!3d23.802949706508837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1spaltan!5e0!3m2!1sen!2sbd!4v1684041615790!5m2!1sen!2sbd" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
	],
	home_delivery_cost: [
		"40tk",
	],
	out_dhaka_home_delivery_cost: [
		"70tk",
	],
	company_start_time: [
		"09:00am",
	],
	company_end_time: [
		"06:00pm",
	],
	time_zone: [
		"Asia/Dhaka",
	],
	header_title: [
		"রাজিবুর রহমান",
	],
	copy_right: [
		"2023 all rights reserved",
	],
	seo_title: [
		"রাজিবুর রহমান",
	],
	seo_description: [
		"রাজিবুর রহমান",
	],
	seo_keywords: [
		"রাজিবুর রহমান",
	],
	seo_banner: [
		"রাজিবুর রহমান",
	],
	social_facebook: [
		"rajib.facebook.com",
	],
	social_twitter: [
		"rajib.twitter.com",
	],
	social_instagram: [
		"rajib.instagram.com",
	],
	social_linkedin: [
		"rajib.linkedin.com",
	],
	social_youtube: [
		"rajib.youtube.com",
	],
	invoice_prefix: [
		"pp",
	],
	invoice_company_name: [
		"pp",
	],
	invoice_address_line_1: [
		"dhaka",
	],
	invoice_address_line_2: [
		"dhaka",
	],
	telegram_bot_api: [
		"",
	],
	mail_mailer: [
		"বাংলাদেশ",
	],
	mail_host: [
		"বাংলাদেশ",
	],
	mail_port: [
		"বাংলাদেশ",
	],
	mail_user_name: [
		"বাংলাদেশ",
	],
	mail_password: [
		"বাংলাদেশ",
	],
	mail_from_address: [
		"বাংলাদেশ",
	],
	mail_from_name: [
		"রাজিবুর রাহমান",
	],
	shut_down_website: [
		"false",
	],
	"সর্বমোট বই পর্যালোচনা": [
		"২০০",
	],
	"সর্বমোট গাছ লাগানো": [
		"৫০০",
	],
	"সাক্ষরতা অভিযান": [
		"৩০০",
	],
	"জনপ্রিয়তা": [
		"১০০%",
	],
}

title = [
	"title",
	"logo",
	"fabicon",
	"phone_number",
	"address",
	"company_name",
	"city",
	"state",
	"post_code",
	"country",
	"email",
	"map",
	"home_delivery_cost",
	"out_dhaka_home_delivery_cost",

	"company_start_time",
	"company_end_time",
	"time_zone",
	"header_title",
	"copy_right",

	"seo_title",
	"seo_description",
	"seo_keywords",
	"seo_banner",

	"social_facebook",
	"social_twitter",
	"social_instagram",
	"social_linkedin",
	"social_youtube",

	"invoice_prefix",
	"invoice_company_name",
	"invoice_address_line_1",
	"invoice_address_line_2",

	"telegram_bot_api",

	"mail_mailer",
	"mail_host",
	"mail_port",
	"mail_user_name",
	"mail_password",
	"mail_from_address",
	"mail_from_name",

	"shut_down_website",

	"সর্বমোট বই পর্যালোচনা",
	"সর্বমোট গাছ লাগানো",
	"সাক্ষরতা অভিযান",
	"জনপ্রিয়তা",

],




	module.exports = async () => mongoose.connect(db_url)
		.then(async () => {
			console.log("\n");
			console.log("setting title seeding");

			await Model.deleteMany({});
			for (let i = 0; i < title.length; i++) {
				console.log(title[i]);
				// await Model.create(title[i]);
				await Model.create({
					title: title[i],
					status: true,
					value: values[title[i]]
				});
			}

			// let response = await Model.insertMany(data);

			console.log("setting title seeding complete");

			console.log("\n");
		});
