const express = require('express');
const app = express();
app.use(express.json());
const port = 8080;

const dotenv=require('dotenv');
dotenv.config();

const router=require('./router')
app.use(router);

app.get("/",(req,res)=>{
    res.send('Hello');
});

app.listen(port, () => {
    console.log(`Server running on PORT: ${port}/`);
});