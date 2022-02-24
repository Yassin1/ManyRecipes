const Country = require("./models/Country.model");
const Recipe = require("./models/recipe.model");
const mongoose = require("mongoose");
require("dotenv").config();

//connection to the DB
mongoose.connect(process.env.DATABASE_URI, (error) => {
    if (error) {
        console.log(error)
    }
    else {
        console.log("success")
    }
})

// List of countries
const countries = [
    { name: "USA", countryCode: "us", continent: "America", population: 500e6, typesOfFood: "multiple" },
]

// List of recipies
const recipies = [
    { name: "Tea", userId: "123abc", countryCode: "us", ingridients: ["Tea", "Milk", "sugar"], process: "Mix the ingridients and put on fire", spiceLevel: 0, }
]

//Insert countries and recipies to DB
Country.insertMany(countries)
.then(() => console.log("Added countries to DB"))
.catch(err => console.log("Error while adding countries to DB", err));

Recipe.insertMany(recipies)
.then(() => console.log("Added recipies to DB"))
.catch(err => console.log("Error while adding recipies to DB", err));