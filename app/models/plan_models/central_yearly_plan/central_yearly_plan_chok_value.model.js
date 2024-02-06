const {default: mongoose, Schema} = require("mongoose");

module.exports = mongoose.model('central_yearly_plan_archives', mongoose.Schema
({
    
    plan_id: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'yearly_plans'
    },
    Chok_collumn_values: [
        {
            key: {
                type: String,
                required: true,
            },
            value: {
                type: String,
                required: true,
            },
        }
    ],
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