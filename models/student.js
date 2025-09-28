const mongoose= require('mongoose')

const studentSchema= new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    class:{
        type:Number,
        required: true
    },
    rollno:{
        type:Number,
        required: true,
        unique: true,
    },
    address: {
        type:String
    }
});

module.exports= mongoose.model('Student',studentSchema);