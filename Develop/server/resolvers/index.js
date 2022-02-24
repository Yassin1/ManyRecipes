const User = require("../models/user.model")
const Country = require("../models/Country.model");
const Recipe = require("../models/recipe.model");
const jwt = require("../util/jwt");

module.exports = {
    Query: {
        recipie: async (parent, args, context) => {
            return Recipe.find({});
        },
        user: async (parent, args, context) => {
            return User.find({});
        },
        country: async () => {
            return Country.find({});
        }
    },
    Recipe: {
        country: async (parent) => {
            const countries = await Country.find({ countryCode: parent.countryCode });
            return countries[0];
        },
        addedBy: async (parent) => {
            if (parent.userId === "123abc" || parent.userId === "123")
                return null;
            const user = await User.findById(parent.userId);
            return user;
        }
    },
    Mutation: {
        signup: async (parent, args, context) => {
            const user = new User(args);
            return user.save();
        },
        login: async (parent, args, context) => {
            const user = await User.find(args);
            if (user.length > 0) {
                const token = jwt.sign({ id: user[0]._id });
                return {token};
            }
            else {
                return { err: "Incorrect credentials" }
            }
        },
        recipie: async (parent, args, context) => {
            const recipe = new Recipe({ ...args, userId: context.id });
            return recipe.save();
        }
    }
}