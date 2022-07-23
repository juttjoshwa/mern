import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import User from './model/User.js'


const app = express()
app.use(express.json())
app.use(cors())

const PORT = 5000

app.listen(PORT,()=>console.log('server is running on the PORT !!'))

const DB_URL = 'mongodb+srv://mern:mern@cluster0.xczxxpw.mongodb.net/SHERRI?retryWrites=true&w=majority'
mongoose
.connect(DB_URL,{useNewUrlParser: true, useUnifiedTopology: true})
.then(()=> console.log("DB connected"))
.catch(err => console.log(err))

app.get ("/",(req,res) => res.send('hello from server'))
app.get('/users',async (req,res)=>{
    const users = await User.find({})
    console.log(users)
    res.status(200).json(users)
})
app.post('/add-user', async ( req,res)=>{
    const user = User(req.body)
    user.save()
    res.status(201).json({'created': true})
})

app.patch('/add-user',async (req,res) => {
    // con
    const user = await User.findByIdAndUpdate(req.body.id, req.body, {new : true})
    console.log(user);
    res.status(202).json({'updated': true , user : user})


app.delete('/delete' , async (req , res ) => {
    console.log(req.body.id)
    await User.findByIdAndDelete(req.body.id)

    res.status(203).json({ 'deleted' : true })

})    
})
const addUser = async () => {
    const user = new User({name:'sherri',email:'SHERII@gmail.com'}) 
    try {
        await user.save()
        console.log(user)
    }catch(err){
        console.log(err)
    }
}  
// addUser()
const allUser = async ()=> {
     try{const user = await User.find({})
     console.log(user)}
     catch(err){
        console.log(err)
     }
}
allUser()

const updateuser = async ()=>{
    try{
        const updateduser = await User.findByIdAndUpdate(
            "62d40ee25212ed74d45d8a07",
            {name : "yashwa"},
            {new : true}
        );
    }catch(err){
        console.log(err);
    }
}
// updateuser() 

const deleteuser = async ()=>{
    try{const deleteduser = await User.findByIdAndDelete("62d40ee25212ed74d45d8a07",
    {new : true})}
    catch (err){
        console.log(err);
    }
}
// deleteuser();