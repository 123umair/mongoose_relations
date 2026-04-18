import mongoose, { Schema, } from "mongoose";

const main = async () =>{
     await mongoose.connect('mongodb://127.0.0.1:27017/mongoose_relatoins');
}
main().
then(()=>{
    console.log("Connected")})

// Here we can learn the pre and post middlewares of mongoose that we will can
//  use for different connected modles.

const orderSchema = new Schema({
    ordername: String,
    address: String
})

const orderModel = mongoose.model("NewOrder",orderSchema)
const addOrder = async() => {
    const orders = new orderModel({
        ordername:"Pizzaa",
        address:"khayaban chow"
    })
    await orders.save()
}

// addOrder()
const customerSchema = new Schema({
    name:String,
    order:[
       { type:Schema.Types.ObjectId,
        ref:"Order"}

    ]
})

const customerModel = mongoose.model("NewCustomer",customerSchema)

const addcustomer = async() =>{
    const add = new customerModel({
        name:"umairkhan",
    })
    let order1 = await orderModel.findOne({ ordername:"Pizzaa",
        address:"khayaban chow"})
    add.order.push(order1)
    await add.save()
   

}
addcustomer()
