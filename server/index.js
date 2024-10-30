import express from 'express';
import dotenv from 'dotenv';
import Connection from './database/db.js';
const app = express();
dotenv.config()
const port = 8000;
Connection();
app.listen(port , ()=>{
    console.log('Server is running on port : 8000 hi');
})