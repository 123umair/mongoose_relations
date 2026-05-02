// so today now we are learing the sessions and make the statefull the requests of the http using the express sessions that will save the state by the server and the session information
import express from 'express'

const app = express()
import session from 'express-session'

app.use(session({secret:'Mysecretstring'}))
//if we create an session then we will required the secret.(singnedCookie)

app.get('/test',(req,res)=>{
    res.send('Session testing')
})
app.listen(4000,()=>{
    console.log('Listening the request')
})