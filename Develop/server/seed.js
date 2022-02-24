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
    { name: "USA", countryCode: "US", continent: "America", population: 500e6, typesOfFood: "multiple" },
    { name: "pakistan", countryCode: "PK", continent: "Asia", population: 220e9, typesOfFood: "multiple" },
    { name: "Morocco", countryCode: "MA", continent: "Africa", population: 36e6, typesOfFood: "multiple" },
    { name: "india", countryCode: "IN", continent: "Asia", population: 1.38e9, typesOfFood: "multiple" },
    { name: "Ethiopean", countryCode: "ET", continent: "Africa", population: 115e6, typesOfFood: "multiple" },
    { name: "mexican", countryCode: "MX", continent: "North America", population: 128e6, typesOfFood: "multiple" },
    { name: "Malaysia", countryCode: "MY", continent: "Asia", population: 32e6, typesOfFood: "multiple" },
    { name: "Lebanon", countryCode: "LB", continent: "Asia", population: 7e6, typesOfFood: "multiple" },
    { name: "latvia", countryCode: "LV", continent: "Europe", population: 2e6, typesOfFood: "multiple" },

]

// List of recipies
const recipies = [
    { name: "Hamburger", userId: "123abc", countryCode: "us", ingridients: ["Ground meat", "Sesame bun", "tomatos", "cheese","ketchup"], process: "place beef patty within the bun and add topings", spiceLevel: 0, },
    { name: "Nihari", userId: "123abc", countryCode: "PK", ingridients: ["Lame meat ", "Bone marrow", "black pepper"], process: "Mix the ingridients and put on stove", spiceLevel: 2, },
    { name: "Tagine", userId: "123abc", countryCode: "MA", ingridients: ["chicken", "vegetables", "Olives", "preserved lemons"], process: "Mix the ingridients and put on stove and serve with couscous", spiceLevel: 2, },
    { name: "Biryani", userId: "123abc", countryCode: "IN", ingridients: ["rice", "choice of meat", "spices","boild egg"], process: "Mix the ingridients and put on stove,top with boiled egg", spiceLevel: 2, },
    { name: "Doro wat", userId: "123abc", countryCode: "ET", ingridients: ["chicken", "Berber", "boiled egg", " spiced butter"], process: "Mix the ingridients and put on stove top with boiled", spiceLevel: 5, },
    { name: "Taco", userId: "123abc", countryCode: "MX", ingridients: ["Tortilla", "ground beef", "cheese","topings"], process: "Tortilla folded with ground meat, cheese, and topings", spiceLevel: 1, },
    { name: "Grey peas ", userId: "123abc", countryCode: "LV", ingridients: ["Grey peas", "Bacon", "onion"], process: "grey peas soaked overnight and then sauteed with bacon, salt, and pepper", spiceLevel: 1, },
    { name: "Kibbeh", userId: "123abc", countryCode: "LB", ingridients: ["Bulgur wheat", "chopped onions", "ground meat","spices"], process: "Mix the ingridients and put on stove", spiceLevel: 2, },
    { name: "Nasi lemak", userId: "123abc", countryCode: "MY", ingridients: ["Rice", "coconut cream", "pandan leaves","ginger", "spices","anchovies","boild egg","roasted peanuts"], process: " soak rice in coconut cream overnight, mix with pandan leaves and put on stove", spiceLevel: 1, },
    
]

//Insert countries and recipies to DB
Country.insertMany(countries)
.then(() => console.log("Added countries to DB"))
.catch(err => console.log("Error while adding countries to DB", err));

// Recipe.insertMany(recipies)
// .then(() => console.log("Added recipies to DB"))
// .catch(err => console.log("Error while adding recipies to DB", err));