//import model - becoz we want to make a todo object so we need schema of todo object
const Todo = require("../models/Todo.js");

//Route hander - to handle the route
exports.createTodo = async(req,res)=>{
    try{
        //extraction info from req body
        const {title,description}= req.body;
        //create a new todo object and insert in DB
        const response = await Todo.create({title,description});
        //send a json response with success flag
        res.status(200).json({
            success:true,
            data:response,
            message:"Entry Created Successfully"
        });
    }
    catch(err){
        console.log("Erorr");
        console.error(err);
        res.status(500).json({
            success:false,
            error:err.message,
            message:"Entry Creation UnSuccessfully"
        });
    }
}

//module.exports = {this.Todo};
