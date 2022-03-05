const express = require("express");
const notes = require("./data/notes")
const dotenv = require("dotenv");
const connectDB = require("./Config/db");
const app = express();
const userRoutes = require('./routes/userRoutes')
const {notFound ,errorHandler} = require("./middlewares/errorMiddleWare")

dotenv.config();
connectDB();
app.use(express.json());

app.get("/", (req,res)=>{
    res.send("Api is running")
    
});


app.get("/api/notes" , (req,res)=>{

    res.json(notes)

})

app.use('/api/users', userRoutes)
app.use(notFound)
app.use(errorHandler)


// app.get("/api/notes/:id" , (req , res)=>{
//     const note = notes.find((n)=>n._id===req.params.id)
//     console.log(req.params)
//     res.send(note);
// });

PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
    console.log(`server is running at ${PORT}`)
})