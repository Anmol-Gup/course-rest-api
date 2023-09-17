require('dotenv').config()
require('./connection')
const express=require('express')
const app=express()
const port=3000 || process.env.port;
const course_model=require('./course')

app.use(express.json()); // Middleware to parse JSON request body

app.get('/',(req,res)=>{
    res.send('Hello, World!');
})

// get all courses & for specific category
app.get('/getcourses',async (req,res)=>{
    const courses=await course_model.find(req.query)

    try{
        res.status(200).send(courses)
    }catch(error){
        res.status(500).send(error)
    }
})

// get all courses
app.get('/getcoursesbycategory',async (req,res)=>{
    const courses=await course_model.find(req.query)
    console.log(req.query)

    try{
        res.status(200).json(courses)
    }catch(error){
        res.status(500).send(error)
    }
})

// adding course
app.post('/add_course',async(req,res)=>{
    const course=new course_model(req.body)
    console.table(req.body)

    try{
        await course.save();
        res.send('Course added successfully!')
    }catch(error){
        res.status(500).send(err)
    }
})

app.listen(port,()=>{
    console.log(`Server is running at port no. ${port}...`)
})
