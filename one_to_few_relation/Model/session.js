// so today now we are learning the sessions and make the statefull the requests of the http using the express sessions that will save the state by the server and the session information.
import express from 'express'

const app = express()
import session from 'express-session'

app.use(session({secret:'Mysecretstring'}))
//if we create an session then we will required the secret.(singnedCookie)

app.get('/test',(req,res)=>{
    res.send('Session testing')
})

// Express session storing and using info. example 

// app.use(session({
//   secret: 'your-secret-key', // Required for signing the session ID cookie
//   resave: false,             // Only save if session is modified
//   saveUninitialized: true    // Save new sessions even if they aren't modified
// }));

// purpose of usage:
// New Visitors: A new session will be created and saved in the store immediately, and a cookie will be sent to their browser, even if they don't log in (saveUninitialized: true).
// Returning Visitors: If a returning visitor makes a request but their session data isn't changed (e.g., they just view a page), the session store will not be updated with a "save" command, saving server resources (resave: false)

const sessionOptions={
    secret:"mySecretString",
    resave:false,
    saveUninitialized:true
}
app.use(session(sessionOptions))
app.get('/register',(req,res)=>{
   let { name } = req.query  // here i will use the query string first i destructure the name and stored it in the session store req.session
   req.session.name = name
   res.send(name)
})











app.listen(4000,()=>{
    console.log('Listening the request')
})