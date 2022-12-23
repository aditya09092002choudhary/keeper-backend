const mongoose=require("mongoose");

const noteSchema =mongoose.Schema({
    title:String,
    content:String,
    date:String,
    author:String,
    topic:String
});

const Note = mongoose.model("Note",noteSchema);

module.exports = Note;