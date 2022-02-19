const mongoose = require("mongoose")

const countrySchema = mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    countryCode: {
        type: String,
        required: true,
    },

    continent: {
        type: String,
        required: true
    },

    population: {
        type: Number,
        required: true,

    },
    typesOfFood: {
        type: String,
        required: true,
    },
})

module.exports = mongoose.model("country", countrySchema)
