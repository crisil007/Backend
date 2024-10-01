const express=require('express');
const app=express();
const dotenv=require('dotenv');
dotenv.config();

const mongoconnect = require('./db/connect');
const userRoutes = require('./routes/userRoutes');

    app.use(express.static("../client"));
mongoconnect();
app.use(express.json())
app.use(userRoutes);
app.listen(process.env.PORT,()=>{
    console.log(`server running at http://localhost:${process.env.PORT}`)
})
