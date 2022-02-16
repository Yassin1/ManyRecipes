// connectg to mongoDB ATALS- CONNECTION TO DATABASE.
const mongoose = require("mongoose")
const fs = require("fs");
const { ApolloServer, gql } = require("apollo-server");
const schema = fs.readFileSync("./schema.gql", "utf8");
const typeDefs = gql(schema);
// database url
require("dotenv").config()

// create a conncetion with the database
mongoose.connect(process.env.DATABASE_URI, (error) => {
    if (error) {
        console.log(error)
    }
    else {
        console.log("success")
    }
})


const server = new ApolloServer({
    typeDefs,
});

server.listen().then(({ url }) => {
    console.log(`Server running: ${url}`)
})