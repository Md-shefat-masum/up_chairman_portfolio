const { default: mongoose, Schema } = require("mongoose");
const userModel = require("./user.model");

module.exports = mongoose.model("categories",mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    creator: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: userModel
    },
    status: {
        type: Boolean,
        default: true,
    }
},{
    timestamps: true, 
}))