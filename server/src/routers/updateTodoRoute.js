const TodoModel = require('../models/TodoModel')

module.exports=async(req,res)=>{
    const {id}= req.params;
    const todo =await TodoModel.findById(id);
    todo.text =req.body.text;
    todo.completed=req.body.completed;
    await todo.save();
    res.json(todo);
}