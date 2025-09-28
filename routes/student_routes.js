const express=require('express')
const router=express.Router();
const studentData= require("../MOCK_DATA (2).json")
const {createStudent,getStudents,getStudentById,updateStudent,deleteStudent} = require("../controllers/studentControllers")


router.post("/", createStudent )
router.get('/',getStudents)
router.get('/:id',getStudentById)
router.put('/:id',updateStudent)
router.delete("/:id",deleteStudent)

router.get("/" , (req , res) => {
    res.json(studentData);
})
module.exports= router;