const { default: mongoose, Schema } = require("mongoose");

module.exports = mongoose.model('central_yearly_plan_details', mongoose.Schema
    ({

        serial: {
            type: Number,
            required: true,
        },
        plan_title: {
            type: String,
            required: true,
        },
        dofa: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: 'dofas'
        },
        how_much_was_incomplete: {
            type: Number,
            required: false,
        },
        ratings: {
            type: Number,
            required: false,
        },
        is_approved: {
            type: Boolean,
            required: true,
            default: false,
        },
        who_will_complete: [
            {
                type: Schema.Types.ObjectId,
                required: true,
                ref: 'users'
            }
        ],
        orjitobbo_target: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: 'orjitobbo_targets'
        },
        chok_values: [
            {
                type: Schema.Types.ObjectId,
                required: true,
                ref: 'yearly_plan_chok_values'
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
    }, {
        timestamps: true,
    }))