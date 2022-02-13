// import user model
const User = require("./models/user.model")
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
























// creating-SAVING THE USER 

//  const user = new User({
//     firstName: "ali",
//     lastName: "joe",
//      email: "joe@gmail.com",
//      password: "joe1234"
//  })
//  user.save().catch(err=>
//     console.log(err))



// read fetach data from the database. filter 
 
// User.find({firstName:"ali"}).then((data) => {
//  console.log(data)
//  })





// // update the data 
// User.updateOne(
//     { email:"yassin@gmail.com" },
//     { firstName: "yassin" },
//     (err,data)=> console.log(err,data)
//  )


// // delete user
// User.deleteOne({
//     email: "yassin@gmail.com",
//     }).then((data)=>{
//        console.log(data)
//     })

