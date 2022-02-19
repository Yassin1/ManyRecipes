const mongoose = require("mongoose")

const recipeSchema = mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    ingridients: {
        type: [String],
        required: true
    },

    process: {
        type: String,
        required: true,

    },

    spicelevel: {
        type: String,
        required: true,
    },

    country: {
        type: String,
        required: true,

    },
    userId: {
        type: String,
        requried: true,
    }
    
},

    {
        timestamps: true
    })

module.exports = mongoose.model("recipe", recipeSchema)
