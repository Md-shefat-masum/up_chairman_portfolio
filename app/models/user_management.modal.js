const { default: mongoose } = require("mongoose");

let userSchema = mongoose.Schema({
	username: String,
	email: String,
	password: String,
	id:Number,
	first_name:String,
	last_name:String,
	telegram_id:String,
	telegram_name:String,
	mobile_number:String,
	photo:String,
	email:String,
	slug:String,
	status:Boolean,
	remember_token:String,
},{
	timestamps: true,
})
module.exports = mongoose.model("users", userSchema);
