const mongoose = require("mongoose")

const recipeSchema = mongoose.Schema({

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

module.exports = mongoose.model("recipe", recipeSchema)
