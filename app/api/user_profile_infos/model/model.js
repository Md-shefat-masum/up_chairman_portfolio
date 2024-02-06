// last_id:490 

const { default: mongoose, Schema } = require("mongoose");
const { readFirstLine } = require("../../../utilites/readFirstLine");
const writeFirstLine = require("../../../utilites/writeFirstLine");


let userProfileInfoSchema = mongoose.Schema({
	
	designation: {
		type: String,
		require: true,
	},
	blood_group: {
		type: String,
		require: true,
	},
	date_of_birth: {
		type: Date,
		require: true,
	},
	nationality: {
		type: String,
		require: true,
	},
	father_name: {
		type: String,
		require: true,
	},
	mother_name: {
		type: String,
		require: true,
	},
	banner_profile_pic: {
		type: String,
		require: true,
	},
	short_bio: {
		type: String,
		require: true,
	},
	full_bio: {
		type: String,
		require: true,
	},
	address_present: {
		type: String,
		require: true,
	},
	address_permanent: {
		type: String,
		require: true,
	},
	google_map: {
		type: String,
	},
	status: {
		type: Boolean,
		default: true,
	},
	creator: {
		type: Schema.Types.ObjectId,
		// required: true,
		ref: 'users',
	},
}, {
	timestamps: true,
});

userProfileInfoSchema.pre('save', async function (next) {
	if (!this.isNew) return;

	try {
		let line = await readFirstLine(__filename);
		let last_id = parseInt(line.substr(11)) + 1;
		await writeFirstLine(__filename, line, `// last_id:${last_id} `);
		this.last_id = last_id;
	} catch (error) {
		console.log(error);
	}

	next();
})



module.exports = mongoose.model("user_profile_infos", userProfileInfoSchema);
