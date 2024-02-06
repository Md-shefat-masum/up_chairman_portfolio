const {default: mongoose, Schema} = require("mongoose");

module.exports = mongoose.model('central_yearly_plan_archives', mongoose.Schema
({
    plan: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'yearly_plans'
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