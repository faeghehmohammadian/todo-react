const express = require('express');
const router = express.Router();

const jwt=require('jsonwebtoken');
const isLoggedIn = require('./middleware/isLoggedIn');
const TodoModel = require('../models/TodoModel')

router.post("/login",(req,res)=>{
    if (req.body.password === process.env.PASSWORD){
        const token = jwt.sign({
            userId:1,
        },process.env.SECRET);
        res.json({
            token,
        });
        
    }else{
        res.status(401).send('Warng Password');
    }
});
router.get('/todos',isLoggedIn,async(req,res)=>{
    const todos=await TodoModel.find();
    res.json(todos)
})
router.post('/todos',isLoggedIn,async(req,res)=>{
    const {text} = req.body;
    console.log(text)
    const todo = new TodoModel({
        text,
        completed:false,
    })
    const newTodo = await todo.save();
    res.json(newTodo)
})
router.put('/todos/:id',isLoggedIn,async(req,res)=>{
    const {id}= req.params;
    const todo =await TodoModel.findById(id);
    todo.text =req.body.text;
    todo.completed=req.body.completed;
    await todo.save();
    res.json(todo);
})
module.exports=router;