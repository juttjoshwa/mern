import mongoose from "mongoose";

const Userschema = new mongoose.Schema({
    name:{
        type : String,
        require : true
    },
    Email : {
        type : String,
        require : true
    },
})
const User = mongoose.model('User' , Userschema)
export default User ;