import mongoose, { Schema , Model } from "mongoose";



const main = async() =>{
     await mongoose.connect('mongodb://127.0.0.1:27017/mongoose_relatoins');
   }
main().then(()=>{
    console.log("Db Connected")
})



const userOrderSchema = new Schema({
    name:String,
    price:Number,
})


const OrderModel = mongoose.model("Order",userOrderSchema)

// const addOrder = async() =>{
//     const newOrder = await OrderModel.insertMany([
//         {name:"Pizza",price:1600},
//         {name:"Aloo Chips",price:500},
//         {name:"Samosa",price:40},
//         {name:"Zingerburger",price:500}
//     ])
//     console.log(newOrder)
// }

// addOrder()



const customerSchema = new Schema({
    name:String,
    order:[
        {type:Schema.Types.ObjectId, //store object id  only (not all the data) in the mongodb but mongoose shows it full data but in themongo db its store only the id 
         ref:"Order" // Here you will use the Model name (inside the db it should be collection named orders.) not he js variable name OrderModel
        }
    ]
})

const CustomerModel  = mongoose.model("Customer",customerSchema)

const addCustomer=async()=>{
    const cust1 = new CustomerModel({
        name:"Umair"
    })
    let order1 = await OrderModel.findOne({name:"Pizza"})
    let order2 = await OrderModel.findOne({name:"Samosa"})
    cust1.order.push(order1)
    cust1.order.push(order2)
    let result = await cust1.save()
    console.log(result)
}

addCustomer()

const Findcustomer = async()=>{
    const customers = await CustomerModel.find({}).populate("order")
    console.log(customers) // here it give array of order like the output: order:[[object],[object]]
    console.log(customers[0])
}
Findcustomer()

// by using the populate method we should populate all the data with its orders detail values not just the objectid