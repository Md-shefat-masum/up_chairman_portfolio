const { default: mongoose, Schema } = require("mongoose");

let userRoleSchema = mongoose.Schema({
	title: String,
	serial:Number,
	
},{
	timestamps: true,
})
module.exports = mongoose.model("user_rolespre", userRoleSchema);
