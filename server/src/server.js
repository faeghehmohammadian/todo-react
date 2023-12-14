const express = require('express');
const app = express();
app.use(express.json());
const port = 8080;
const cors = require('cors');
const dotenv=require('dotenv');
dotenv.config();
const mongoose=require('mongoose');

const router=require('./router')
app.use(router);
app.use(cors());

app.get("/",(req,res)=>{
    res.send('Hello');
});
mongoose.connect(process.env.MONGO_URL).then(()=>{
    app.listen(port, () => {
        console.log(`Mongoose Connect and Server running on PORT: ${port}/`);
    });
})
