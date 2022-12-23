const express=require('express');
const bodyParser=require('body-parser');
const app=express();
const mongoose = require('mongoose');
const cors=require("cors");
const Note = require("./models/notes.model");
const Date = require("./date");
require('dotenv').config();
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());
const PORT = process.env.PORT||3001;
const uri = process.env.ATLAS_URI;

// mongoose.connect('mongodb://localhost:27017/daily1DB');
mongoose.connect( uri );

app.get('/',(req,res)=>{
    Note.find({},(err,foundNotes)=>{
        if(err){
            console.log(err);
        }else{
            res.send(foundNotes);
        }
    })
})

app.get('/note/:id',(req,res)=>{
    const id=req.params.id;
    Note.findOne({_id:id},((err,foundNote)=>{
        if(err){
            res.send(err);
        }else{
            console.log(foundNote);
            res.send(foundNote);
        }
    }))
})

app.post("/savenote",(req,res)=>{
    // console.log(req.body);
    const note = new Note({
        title:req.body.title,
        content:req.body.content,
        date:Date,
        author:"",
        topic:""
    });

    note.save((err)=>{
        if(err){
            console.log(err);
        }else{
            console.log("Saved Successfully");
            res.send("Saved Successfully");
        }
    })
})

app.listen(PORT,()=>{console.log(`Website is running on port ${PORT}`)});