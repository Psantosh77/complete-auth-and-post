const express = require("express");
const notes = require("./data/notes")
const dotenv = require("dotenv");
const connectDB = require("./Config/db");
const app = express();
const userRoutes = require('./routes/userRoutes')

dotenv.config();
connectDB();

app.get("/", (req,res)=>{
    res.send("Api is running")
    
});


app.get("/api/notes" , (req,res)=>{

    res.json(notes)

})

app.use('/api/user', userRoutes)


// app.get("/api/notes/:id" , (req , res)=>{
//     const note = notes.find((n)=>n._id===req.params.id)
//     console.log(req.params)
//     res.send(note);
// });

PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
    console.log(`server is running at ${PORT}`)
})