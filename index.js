// console.log('yoyut');
import express from 'express'
import bodyParser from 'body-parser';
import dotenv  from 'dotenv';
import mongoose from 'mongoose';
import crudRoutes from './routes/Crud.route.js'

dotenv.config();


const app = express()
const PORT = process.env.PORT || 3056

app.use("/api", crudRoutes);

//middleware and the router code for crude route
app.use("/api", crudRoutes) 
 

app.listen(PORT, ()=>{
    console.log('the server has been initia;ized and started');
})

// app.get ('/', (req,res)=>{
// res.send ('Hi my love my name is chinenye ruth nwobodo')
// })
