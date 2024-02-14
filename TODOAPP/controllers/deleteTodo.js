const Todo = require("../models/Todo");

exports.deleteTodo = async (req,res)=>{
    try{
        //fetch all todo items from DB
        const {id} = req.params;
        const todo = await Todo.findByIdAndDelete({_id:id});

        //response
        res.status(200).json({
            success:true,
            data:todo,
            message:"Data deletion Successfully"
        })

    }
    catch(err){
        console.log("Erorr");
        console.error(err);
        res.status(500).json({
            success:false,
            error:err.message,
            message:"Data deletion Unsuccessful"
        });
    }

}
