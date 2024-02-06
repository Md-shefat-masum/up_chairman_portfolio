// last_id:400 

const { default: mongoose, Schema } = require("mongoose");
const { readFirstLine } = require("../../../../utilites/readFirstLine");
const writeFirstLine = require("../../../../utilites/writeFirstLine");


let blogSchema = mongoose.Schema({
	
	title: {
		type: String,
		require: true,
	},
	subtitle: {
		type: String,
		require: true,
	},
	short_description: {
		type: String,
		require: true,
	},
	description: {
		type: String,
		require: true,
	},
	photo: {
		type: String,
		require: true,
	},
	photo_alt_text: {
		type: String,
		require: true,
	},
	url:{
		type: String,
		require: true,
		// unique: true,
	},
	seo_title: {
		type: String,
		require: true,
	},
	seo_keyword: {
		type: String,
		require: true,
	},
	seo_description: {
		type: String,
		require: true,
	},
	seo_schema_tags: {
		type: String,
		require: true,
	},
	published_date: {
		type: Date,
		require: true,
	},
	total_view: {
		type: Number,
		default: 0,
	},
	categories: {
		type: [Schema.Types.ObjectId],
		ref: 'blog_categories'
	},
	tags: {
		type: [Schema.Types.ObjectId],
		ref: 'tags'
	},
	comments: {
		type: [Schema.Types.ObjectId],
		ref: 'blog_comments'
	},
	status: {
		type: Boolean,
		default: true,
	},
	creator: {
		type: Schema.Types.ObjectId,
		ref: 'users',
	},

}, {
	timestamps: true,
});

blogSchema.pre('save', async function (next) {
	if (!this.isNew) return;

	try {
		// let line = await readFirstLine(__filename);
		// let last_id = parseInt(line.substr(11)) + 1;
		// await writeFirstLine(__filename, line, `// last_id:${last_id} `);
		// this.last_id = last_id;
	} catch (error) {
		console.log(error);
	}

	next();
})



module.exports = mongoose.model("blogs", blogSchema);
