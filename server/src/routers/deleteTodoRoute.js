const TodoModel = require('../models/TodoModel')

module.exports=async (req,res)=>{
    const {id}= req.params;
    const deletedTodo = await TodoModel.findOneAndDelete({ _id: id });
    res.status(204).json(deletedTodo);
}