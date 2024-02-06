// last_id:370 

const { default: mongoose, Schema } = require("mongoose");
// const { readFirstLine } = require("../../../utilites/readFirstLine");
// const writeFirstLine = require("../../../utilites/writeFirstLine");


let viewCountSchema = mongoose.Schema({
	
	model_name: {
		type: String,
		require: true,
	},
	model_id: {
		type: Schema.Types.ObjectId,
		require: false
	},
	view: {
		type: Number,
        default: 1
	},
    
}, {
	timestamps: true,
});

viewCountSchema.pre('save', async function (next) {
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



module.exports = mongoose.model("view_counts", viewCountSchema);
