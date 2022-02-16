// import user model
const User = require("./models/user.model")
const File = require("./models/file.model")

// connectg to mongoDB ATALS- CONNECTION TO DATABASE.
const mongoose = require("mongoose")
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


const file = new File({
    name: "abc.pdf",
    text: "hello world",
    owner: "62096dee5e690d987d6b4d7c"

})

file.save()
.then((data)=>console.log(data))  
.catch(err=>console.log(err))


