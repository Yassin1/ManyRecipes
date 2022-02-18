const mongoose = require("mongoose")

const countrySchema = mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    continent: {
        type: String,
        required: true
    },

    poulation: {
        type: String,
        required: true,

    },
    typesOfFood: {
        type: string,
        required: true,
    },
},

    {
    seasons: true


    })

module.exports = mongoose.model("country", countrySchema)
