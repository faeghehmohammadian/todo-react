const express = require('express');
const router = express.Router();

const jwt=require('jsonwebtoken');
const isLoggedIn = require('../middleware/isLoggedIn');

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
router.get('/todos',isLoggedIn,(req,res)=>{
    res.send('sucsses')
})

module.exports=router;