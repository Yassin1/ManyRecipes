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

    spiceLevel: {
        type: Number,
        required: true,
    },

    countryCode: {
        type: String,
        required: true,
    },

    userId: {
        type: String,
        required: true,
    }
    
},  {
    timestamps: true
});

module.exports = mongoose.model("recipe", recipeSchema)
