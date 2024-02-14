const Todo = require("../models/Todo");

exports.getTodos = async (req,res)=>{
    try{
        //fetch all todo items from DB
        const todos = await Todo.find({});

        //response
        res.status(200).json({
            success:true,
            data:todos,
            message:"Data retrieval Successfully"
        })

    }
    catch(err){
        console.log("Erorr");
        console.error(err);
        res.status(500).json({
            success:false,
            error:err.message,
            message:"Data retrieval Unsuccessful"
        });
    }

}

exports.getTodoById = async (req,res)=>{
    try{
        //fetch  todo item from DB of particular id
        const id = req.params.id;
        const todo = await Todo.findById({_id: id});

        if(!todo){
            return res.send(404).json({
                success:false,
                message:"No Data Found with Given Id"
            })
        }
        //response
        res.status(200).json({
            success:true,
            data:todo,
            message:"Data retrieval Successfully"
        })
    }
    catch(err){
        console.log("Erorr");
        console.error(err);
        res.status(500).json({
            success:false,
            error:err.message,
            message:"Data retrieval Unsuccessful"
        });
    }
}