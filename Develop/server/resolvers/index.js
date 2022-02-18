const User = require("../models/user.model")

module.exports = {
    Query: {
        recipie: async (parent, args, context) => {
            return [{
                country: "pk",
                ingridients: ["milk", "tea", "sugar"],
                spiceLevel: 0,
                procedure: "Mix all ingridients and put on fire for 5 mins",
                userId: "123",

                
            }];


        },
        user: async (parent, args, context) => {
            return country.find({



            })

        },

        

        user: async () => {
            return user.find({})

        }
    }
}

module.exports = mongoose.model("resolvers")