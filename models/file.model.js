const mongoose = require("mongoose")

const fileSchema = mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    text: {
        type: String,
        required: true
    },

    owner: {
        type: String,
        required: true,

    }
},

    {
        timestamps: true
    })

module.exports = mongoose.model("file", fileSchema)
