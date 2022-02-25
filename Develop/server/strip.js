require('dotenv').config()

const { ApolloServerPluginCacheControl } = require('apollo-server-core')
const express= require("express")

app.request(express.json())

const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY)


const donations = new Map([
    [1, { priceInCents: 5000, name: "Donate if youd like"}],

])