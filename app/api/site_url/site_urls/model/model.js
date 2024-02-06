// last_id:400 

const { default: mongoose, Schema } = require("mongoose");
const { readFirstLine } = require("../../../../utilites/readFirstLine");
const writeFirstLine = require("../../../../utilites/writeFirstLine");


let siteurlSchema = mongoose.Schema({
	
	
	url: {
		type: String,
		require: true,
	},
	url_for_table: {
		type: String,
		require: true,
	},
	url_for_table_id: {
		type: String,
		require: true,
	},
	url_redirect_to: {
		type: String,
		require: true,
	},
	total_view: {
		type: String,
		require: true,
	},
	total_redirect: {
		type: String,
		require: true,
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

siteurlSchema.pre('save', async function (next) {
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



module.exports = mongoose.model("site_urls", siteurlSchema);
