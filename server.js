const express = require('express');
const app = express();

app.use(express.json());
app.use(express.static('public'));

let courses = ["HTML", "CSS", "JavaScript", "Python"];
let enrolled = [];

app.get('/courses', (req,res) => res.json(courses));

app.get('/enrolled', (req,res) => res.json(enrolled));

app.post('/enroll', (req,res) => {
 let c = req.body.course;
 if(!enrolled.includes(c)) enrolled.push(c);
 res.json({message:"Course Enrolled Successfully!"});
});

app.listen(3000, () => console.log("Website Started"));