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
// const addOrder = async() => {
//     const orders = new orderModel({
//         ordername:"Pizzaa",
//         address:"khayaban chow"
//     })
//     await orders.save()
// }

// // addOrder()
const customerSchema = new Schema({
    name:String,
    order:[
       { type:Schema.Types.ObjectId,
        ref:"Order"}

    ]
})  
customerSchema.post("findOneAndDelete",async(customers)=>{
   if (customers.order.length){
        await orderModel.deleteMany({_id:{$in:customers.order}})  
    }
})
const customerModel = mongoose.model("NewCustomer",customerSchema)

// const addcustomerorder = async() =>{
// // // //     const add = new customerModel({name:"umairkhan",})
//     const addcust2 = new customerModel({name:"Sajid khan"})
// // // //     let order1 = await orderModel.findOne({ ordername:"Pizzaa",address:"khayaban chow"})
//     let order2 = await orderModel.insertOne({ordername:"burgur",address:"ustb"})
//     addcust2.order.push(order2)
//     // add.order.push(order1,order2)
// // // //     await add.save()
//     await addcust2.save()
//     console.log('data is successfully inseted')
// }
// addcustomerorder()

// now we use the post middlewares of the mongoose that will deleted the related data of a customer model means its orders after delted the customer.

const delCust = async()=>{
    const customersajid = await customerModel.findByIdAndDelete("69e363ed929849ca599cc837")
   
    console.log(customersajid,'customersajid')   // so here we conclude that only the customer is deleted name sajid document in the model but not its order its will remain present in the ordermodel but its related the order with sajid so basically its happenning in normal case.
} 
delCust()

