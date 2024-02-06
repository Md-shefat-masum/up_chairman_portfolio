const {default: mongoose, Schema} = require("mongoose");

module.exports = mongoose.model('central_yearly_plan_archives', mongoose.Schema
({
    
    title: {
        type: String,
        required: true,
    },
    serial: {
        type: Number,
        required: true,
    },
    chok_collumns: [
        {
            key: {
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