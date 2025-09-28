const Student=require('../models/student');

//create
const createStudent =  async(req , res) => {
    try{
        const student = await Student.create(req.body);
        res.status(201).json(student);
    } catch(err) {
        res.status(400).json({ error: err.message})
    }
};

//Read
const getStudents = async(req, res)=>{
    try{
        const students = await Student.find();
        res.json(students);
    } catch(err){
        res.status(500).json({ error: err.message})
    }
};

//Read one
const getStudentById= async(req, res) => {
    try{
        const student=await Student.findById(req.params.id);
        if (!student) return res.status(404).json({message: "student not found"})
        res.json(student);    
    } catch(err) {
        res.status(500).json({error: err.message})
    }
}

//update
const updateStudent = async(req , res) => {
    try{
        const student =  await Student.findByIdAndUpdate(req.params.id , req.body , {new:true});
        if (!student) return res.status(404).json({message: "student not found"})
        res.json(student);    
    } catch(err) {
        res.status(400).json({ error: err.message})
    }
}

//delete
const deleteStudent = async(req, res) => {
    try{
        const student = await Student.findByIdAndDelete(req.params.id);
        if (!student) return res.status(404).json({ message: " student not found"});
        res.json({ message: "student delete"})

    } catch(err){
        res.status(500).json({error: err.message})
    }
}

//exports
module.exports={
    createStudent,
    getStudents,
    getStudentById,
    updateStudent,
    deleteStudent
}
