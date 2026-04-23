// here we are learning now  a cookies how its work and how we can created and send the cookies to the browsers

import express from 'express'
const app  = express()
import cookieparser from 'cookie-parser'
app.use(cookieparser("umair")) //signature


app.get('/signedcookie',(req,res)=>{
    res.cookie('name','sajid',{signed:true})
    console.log(req.signedCookies)
    res.send(req.signedCookies) // singesCookies data will shows as a req.singedCookies
})
app.get('/verify',(req,res)=>{
    console.log(req.signedCookies)
    res.send("/verified")
})

app.get("/cookie",(req,res,)=>{
    res.cookie('Name',"umair") // here we can pass two parameters in the cookie.send(name,value) the first one is name and the 2nd one is value
    res.cookie('created_by','umairkhan')
    res.send('send you some cookies')
})
app.get('/',(req,res)=>{
    console.dir(req.cookies)
    res.send(req.cookies)
})
app.listen(4000,()=>{
    console.log('server is start')
})

// singed cookies is that type of the cookies that will prevent from unintentional changes from any other client.They prevent users from modifying cookie data, 

