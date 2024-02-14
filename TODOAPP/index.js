//instantiation of server
const express = require('express');
const app = express();

//load config from env file , basically feeding .env info to process object
require("dotenv").config();
const PORT = process.env.PORT || 4000;

//Middleware - to parse Json request body
app.use(express.json());

//import routes for Todo Api
const todoRoutes = require('./routes/todos');
//mount the todo API routes
app.use('/api/v1',todoRoutes);

//Start server
app.listen(PORT,()=>{
    console.log("Running success");
})

//connect to DB
const dbConnect = require('./config/database');
dbConnect();

//default Route
app.get('/',(req,res)=>{
    res.send(`<h1>This is home Page</h1>`)
});
