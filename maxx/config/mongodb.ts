import mongoose from "mongoose";

export const DBonnection  = () =>{
try {
    if(mongoose.connection.readyState===1){
        console.log("MONGODB IS AlrADY Connected")
    }else{
        mongoose.connect("mongodb+srv://kr551344:3OfgTdryjsqL4KB3@cluster0.iiihzjz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
        console.log("MONGODB IS Connected!")
    }
} catch (error) {
    console.log(error)
}
}