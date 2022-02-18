const mongoose = require("mongoose")

const recipeSchema = mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    ingrediant: {
        type: String,
        required: true
    },

    process: {
        type: String,
        required: true,

    },

    spicelevel: {
        type: string,
        required: true,
    },
    
},

    {
        timestamps: true
    })

module.exports = mongoose.model("recipe", recipeSchema)
