const { default: mongoose, Schema } = require("mongoose");

module.exports = mongoose.model('central_yearly_plan', mongoose.Schema
    ({
        session: {
            type: String,
            required: true,
        },
        plan_details: [
            {
                type: Schema.Types.ObjectId,
                required: true,
                ref: 'central_yearly_plan_details'
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
        },
    }, {
        timestamps: true,
    }))