const Todo = require("../models/Todo");

exports.updateTodo = async (req,res)=>{
    try{
        //fetch all todo items from DB
        const id = req.params.id;
        const {title, description} = req.body;
        const todo = await Todo.findByIdAndUpdate(
            {_id:id},
            {title,description,updatedAt: Date.now()});

        if(!todo){
            res.status(404).json({
                success:false,
                message:"Id didnt Found"
            })
        }
        //response
        res.status(200).json({
            success:true,
            data:todo,
            message:"Data updated Successfully"
        })

    }
    catch(err){
        console.log("Erorr");
        console.error(err);
        res.status(500).json({
            success:false,
            error:err.message,
            message:"Data update Unsuccessful"
        });
    }

}
