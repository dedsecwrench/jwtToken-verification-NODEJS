const express = require("express");
const cors = require("cors");

// importing jsonwebtoken package.
const jwt = require("jsonwebtoken");

// This package doesn't required to be installed, just import it.
const bodyParser = require('body-parser');

const server = express();
const port = 8000;

// created secret key
// value of a secret key will always be constant!
// NEVER SHARE SECRET KEY.
const SECRET_KEY = "qwerty1241!@%$#%!%#$^34626";

server.use(cors());

// This line is important!
server.use(bodyParser.json());

// Created verifyToken middleware this will check if the token is valid,
// then the user will allowed to get data to backend /user to frontend
const verifyToken = (request,response,next) =>{

    // getting the token value from Network => response Headers => authorization
    const tokenValue = request.headers.authorization;

    // the value we got is with Bearer so to receive the token we splited it and selected index[1].
    const token = tokenValue.split(" ")[1];

    // now token will go to try block, if jwt.verify gets true..
    // then the next() function will open the door to /users route
    // and then frontend can access the value inside /users route.
    try{
        jwt.verify(token, SECRET_KEY);
        console.log("under Middleware TRY");
        next();
    } catch (error){
        // if jwt-token's time get expired!
        // jwt.verify gets false in try block,
        // it'll come here and instead of opening the door to /users route..
        // it'll send this message that the time is expired, user have to login again!
        const msg = {
            success : false,
            message : "Token is expired, please login again..."
        } 
        response.send(msg);
    }  
    
}

// whenever user logs in token will be created for 60 seconds
server.post("/login",(request,response)=>{
    
    // receiving data from frontend!
    const data = request.body.Obj;

    // Token Creation!
    const token = jwt.sign(data, SECRET_KEY, {expiresIn:"60000"});
    console.log({token});

    // token send to frontend!
    response.send(token)

    // deccoded the jwt-token!
    const decodedUser = jwt.decode(token, SECRET_KEY);
    console.log(decodedUser);
 

})


server.get("/users", verifyToken, (request,response)=>{

    // if verifyToken middleware checks the user if that user is valid,
    // then this data will be sent to frontend.
    const data = [{id:1},{id:2},{id:3}]
    response.send(data);
})


server.listen(process.env.PORT || port,()=>{
    console.log(`> HOST URL : http://localhost:${port}/login`);
});
