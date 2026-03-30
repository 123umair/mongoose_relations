import mongoose, { model }  from 'mongoose'
import express from 'express'
import { Schema } from 'mongoose'
const app = express()

const main = async() =>{
    await mongoose.connect('mongodb://127.0.0.1:27017/mongoose_relatoins');
}

main().then(()=>{
    console.log("db connected" )
})

const userSchema = new Schema ({

    name:{
        type:String
    },
    address:[
    
    {
    _id:false,
    location:{type:String},
    city:{type:String}
    }    
    ]
})

const User = mongoose.model("User",userSchema)

const addUser = async()=>{
    const newUser = new User({
      
        name:"umairkhan",
        address:[
            {location:"ISB G11 steet2",city:"isb"}, 
             {location:"ISB G4 steet2",city:"MMB city"}

        ]
    })
    await newUser.save()
}
addUser()