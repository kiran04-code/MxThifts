import mongoose from "mongoose";

export interface IUser {
    name:string,
    email:string,
    password:string
    number:Number
}

const UserSchema = new mongoose.Schema<IUser>({
 name:{
    type:String,
    required:true
 },
 email:{
    type:String,
    required:true
 },
 password:{
    type:String,
    required:true
 },
 number:{
    type:Number,
 },
})

const User =  mongoose.models.User || mongoose.model<IUser>("User",UserSchema)

export default User