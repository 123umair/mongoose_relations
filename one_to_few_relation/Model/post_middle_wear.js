import mongoose,{Schema} from 'mongoose'
    
const main = async()=>{
     await mongoose.connect('mongodb://127.0.0.1:27017/mongoose_relatoins');
}
main().then(()=>{
    console.log("connected")
})


const userSchema = new Schema({
    name:String,
    content:[
       { type:Schema.Types.ObjectId,
        ref:"Post",}
    ]
})

const postSchema = new Schema({
    post_content:String
})
userSchema.post("findOneAndDelete",async (userdata)=>{
    if(userdata.content.length){
        await postModel.deleteMany({_id:{$in:userdata.content}})
    }
})


const userModel = mongoose.model("User",userSchema)
const postModel = mongoose.model("NewPost",postSchema)


// const Data = async() =>{
//     const user1 = new userModel({name:"Umair"})
//     const user2 = new userModel({name:"Fahad"})
//     const post1 = new postModel({post_content:"Hello this is me."})
//     const post2 = new postModel({post_content:"Hello this is Fahad."})
//     const post3 = new postModel({post_content:"Hello this is Fahad.Hello World"})
//     await post1.save()
//     await post2.save()
//     await post3.save()
//     user1.content.push(post1)
//     user2.content.push(post2,post3)
//     await user1.save()
//     await user2.save()
//     console.log("data is inseted")
// }
// Data()


const deleteUser=async()=>{
    const user1 = await userModel.findByIdAndDelete("69e36c77f329a99579a4a16e") 
    console.log(user1)
}
deleteUser()