import mongoose from "mongoose";

var schema = new mongoose.Schema({
    "image":String,
    "id": String,
    "title": String,
    "price": Number,
    "offer": Number,
    "rating":Number
    
})

var model = mongoose.model('MyProductDetails' , schema , 'MyProductDetails')


export default model