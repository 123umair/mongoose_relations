import { Schema,Model } from "mongoose";

const main = async () =>{
     await mongoose.connect('mongodb://127.0.0.1:27017/mongoose_relatoins');
}
main().
then(()=>{
    console.log("Connected")})

// Here we can learn the pre and post middlewares of mongoose that we will can
//  use for different connected modles.

const customerSchema = new Schema({
    name:String,
    order:[
       { type:Schema.Types.ObjectId,
        ref:"Order"}

    ]
})

const customerModel = new Model(customer,customerSchema)

const addcustomer = async() =>{
    const add = customerModel({})
}