const express = require('express');
const router = express.Router();

const jwt=require('jsonwebtoken');
const isLoggedIn = require('./middleware/isLoggedIn');

const updateTodoRoute= require('./routers/updateTodoRoute')
const createTodoRoute= require('./routers/createTodoRoute')
const readTodoRoute= require('./routers/readTodoRoute')
const deleteTodoRoute= require('./routers/deleteTodoRoute')

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
router.get('/todos',isLoggedIn, readTodoRoute)
router.post('/todos',isLoggedIn, createTodoRoute)
router.put('/todos/:id',isLoggedIn, updateTodoRoute)
router.delete('/todos/:id',isLoggedIn, deleteTodoRoute)

module.exports=router;