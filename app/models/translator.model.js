const { default: mongoose, Schema } = require("mongoose");

module.exports = mongoose.model(
	"translators",
	mongoose.Schema(
		{
			name: {
				type: String,
				required: true,
			},
			description: {
				type: String,
			},
			image: {
				type: String,
			},
			creator: {
				type: Schema.Types.ObjectId,
				required: true,
				ref: "users",
			},
			status: {
				type: Boolean,
				default: true,
			},
		},
		{
			timestamps: true,
		}
	)
);
