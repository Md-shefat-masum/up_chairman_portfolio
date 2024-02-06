// last_id:612 

const { default: mongoose, Schema } = require("mongoose");
const { readFirstLine } = require("../../../utilites/readFirstLine");
const writeFirstLine = require("../../../utilites/writeFirstLine");


let userEmailSchema = mongoose.Schema({
	
	email: {
		type: String,
		require: true,
		unique: true,
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

userEmailSchema.pre('save', async function (next) {
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



module.exports = mongoose.model("user_emails", userEmailSchema);
