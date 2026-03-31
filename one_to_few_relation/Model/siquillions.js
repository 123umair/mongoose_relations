import mongoose from 'mongoose'
import { Schema,model } from 'mongoose'

const main = async()=>{
    await mongoose.connect("mongodb://127.0.0.1:27017/mongoose_relatoins")
}
main().then(()=>{
    console.log("Db connected")
})


const userSchema = new Schema({
    name:String,
    email:String
})

const postsSchema = new Schema({
    content:String,
    likes:Number,
    users:[
      {  type:Schema.Types.ObjectId,
        ref:"User"}
    ]
})

const userModel = mongoose.model("User",userSchema)
const postModel = mongoose.model("Post",postsSchema)

const add = async()=>{
    const user1 = new userModel({
        name:"umair",
        email:"uk685994@gmail.com"
    })
    const posts = new postModel({
        content:"hello world",
        likes:8
    })
    posts.users.push(user1)
    await user1.save()
    await posts.save()

}
add()


// so here this is the siquillions approach where basically we used this approach for large datapoints that are connect wtih multiple different datapoints basically social media posts like facebook instagram quorra
// One to siquillions appraoch defined as "Stored the reference of the parent document inside the child document" reverse of the one to many approach....