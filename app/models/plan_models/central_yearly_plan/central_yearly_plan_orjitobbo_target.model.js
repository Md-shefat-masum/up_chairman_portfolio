const {default: mongoose, Schema} = require("mongoose");

module.exports = mongoose.model('central_yearly_plan_orjitobbo_targets', mongoose.Schema
({
    serial: {
        type: Number,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    amount: {
        type: Number, // target fillup percentage
        required: true,
    },
    creator: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'users'
    },
    status: {
        type: Boolean,
        required: true,
    } 
},{
    timestamps: true,    
}))