const User = require("../models/user.model")
const Country = require("../models/Country.model");
const Recipie = require("../models/recipe.model");
const jwt = require("../util/jwt");
const stripe = require('stripe')('sk_test_TyWobPIZkS8dq8mrW5xnHVsP00pKiiYG8W');// replace with private key 

module.exports = {
    Query: {
        recipie: async (parent, args, context) => {
            if (args.country)
                return Recipie.find({ countryCode: args.country })
            else return Recipie.find({})
        },
        singlerecipie: async (parent, args, context) => {
            return Recipie.findById(args.id)
        },

        user: async (parent, args, context) => {
            return User.find({});
        },
        country: async () => {
            return Country.find({});
        },
        stripeSession: async () => {
            const data = await stripe.checkout.sessions.create({
                success_url: 'http://localhost:3000/suc',
                cancel_url: 'https://example.com/cancel',
                payment_method_types: ['card'],


                line_items: [
                    {
                        name: 'Donate',
                        description: 'Donate to recipie owner',
                        amount: 2000,
                        currency: 'usd',
                        quantity: 1,

                    },
                ],
            })
            return data;
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
                return { token };
            }
            else {
                return { err: "Incorrect credentials" }
            }
        },
        recipie: async (parent, args, context) => {
            const recipie = new Recipie({ ...args, userId: context.id });
            return recipie.save();
        }
    }
}