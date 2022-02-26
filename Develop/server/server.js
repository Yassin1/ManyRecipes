// connectg to mongoDB ATALS- CONNECTION TO DATABASE.
const mongoose = require("mongoose")
const fs = require("fs");
const { ApolloServer, gql } = require("apollo-server");
const schema = fs.readFileSync("./schema.gql", "utf8");
const resolvers = require("./resolvers/index.js");
const typeDefs = gql(schema);
const dotenv = require("dotenv");

const PORT = process.env.PORT || 3000;
// database url
require("dotenv").config();

// create a conncetion with the database
mongoose.connect(process.env.MONGODB_URI , (error) => {
    if (error) {
        console.log(error)
    }
    else {
        console.log("success")
    }
})


const server = new ApolloServer({
    resolvers,
    typeDefs,
    context: (async ({ req }) => {
        const token = req.headers.authorization;
        if (token) {
            const payload = verify(token.split(" ")[1]);
            if (payload) {
                console.log(payload)
                return payload;
            }
        }
    })
});

server.listen(PORT).then(({ url }) => {
    console.log(`Server running: ${url}`)
})

