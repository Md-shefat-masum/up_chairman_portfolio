// last_id:171 
// do not delete last_id

const { default: mongoose, Schema } = require("mongoose");
const { readFirstLine } = require("../../../utilites/readFirstLine");
const writeFirstLine = require("../../../utilites/writeFirstLine");
// const user_roles = require("../../user_roles/model/model")

let userSchema = mongoose.Schema({
	username: {
		type: String,
		require: true,
		unique: true,
	},
	full_name: {
		type: String,
		require: true,
	},
	email: {
		type: String,
		require: true,
	},
	password: {
		type: String,
		require: true,
	},
	telegram_id: {
		type: String,
		unique: true,
	},
	telegram_name: {
		type: String,
		unique: true,
	},
	mobile_number: {
		type: String,
		unique: true,
	},
	photo: {
		type: String,
		required: false,
		unique: false,
	},
	status: {
		type: Boolean,
		default: true,
	},
	remember_token: {
		type: String,
	},
	creator: {
		type: [Schema.Types.ObjectId],
		// required: true,
		ref: 'user_roles',
	},
	role: {
		type: Number,
		required: true,
	}
}, {
	timestamps: true,
});

userSchema.pre('save', async function (next) {
	if (!this.isNew) return;

	try {
		// let line = await readFirstLine(__filename);
		// let last_id = parseInt(line.substr(11)) + 1;
		// await writeFirstLine(__filename, line, `// last_id:${last_id} `);
		// this.last_id = last_id;
	} catch (error) {

	}

	next();
})

const model = mongoose.model("users", userSchema);

module.exports = model;
