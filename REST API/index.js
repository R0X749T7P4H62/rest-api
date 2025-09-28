const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const PORT=3001;
const mockData = require("../MOCK_DATA (2).json")

const app=express();
app.use(cors());
app.use(express.json());

//routes
const studentRoutes = require("../routes/student_routes")
app.use("/students", studentRoutes);

app.get("/api/students" , (req,res) => {
    res.json(mockData);
})

mongoose.connect('mongodb://127.0.0.1:27017/REST-API')
    .then(() => console.log('MongoDb connected'))
    .catch(err => console.log(err));

app.listen(PORT, () => console.log(`server is connected at PORT:${PORT}`));



