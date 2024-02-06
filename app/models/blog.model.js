const { default: mongoose, Schema } = require("mongoose");
const translatorModel = require("./translator.model");


module.exports = mongoose.model(
	"blogsss",
	mongoose.Schema(
		{
			title: {
				type: String,
				required: true,
			},
			short_description: {
				type: String,
				required: true,
			},
			description: {
				type: String,
				required: true,
			},
			category: {
				type: [Schema.Types.ObjectId],
				required: true,
				ref: "categories",
			},
			creator: {
				type: Schema.Types.ObjectId,
				required: true,
				ref: "users",
			},
			writer: {
				type: Schema.Types.ObjectId,
				required: true,
				ref: "writers",
			},
			writing_date: {
				type: Date,
				default: Date.now,
			},
			translator: {
				type: [Schema.Types.ObjectId],
				ref: translatorModel,
			},
			thumb_image: {
				type: String,
				// required: true,
			},
			related_images: [String],
			published: {
				type: Boolean,
				defautlt: false,
			},
			status: {
				type: Boolean,
				defautlt: true,
			},

			view: {
				type: Number,
				default: 0,
			},
			seo_title: String,
			seo_description: String,
			seo_keyword: String,
			tags: {
				type: Array,
				default: [],
				required: false,
			},
		},
		{
			timestamps: true,
		}
	)
);
