const { default: mongoose, Schema } = require("mongoose");

let userSchema = mongoose.Schema( {
	username: String,
	email: String,
	password: String,
	first_name: String,
	last_name: String,
	telegram_id: String,
	telegram_name: String,
	mobile_number: String,
	photo: String,
	slug: String,
	status: Boolean,
	remember_token: String,
	role: {
		type: [Schema.Types.ObjectId],
		required: true,
		ref: "user_roles",
	},
}, {
	timestamps: true,
})
module.exports = mongoose.model("usersss", userSchema);
