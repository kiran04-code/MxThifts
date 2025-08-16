import { DBonnection } from "@/config/mongodb"
import User from "@/model/user"
import bcrypt from "bcryptjs"
import { cookies } from "next/headers"
import { NextRequest, NextResponse } from "next/server"
export const POST = async(req:NextRequest)=>{
 try {
    const  cookieStore = await cookies()
    const {email, password}  = await  req.json()
    await DBonnection()
    const findUser = await User.findOne({email})
    
    if(!findUser){
        return NextResponse.json({
            success:false,
            message:"User Does Not Exits"
        })
    }
    const haspassed = findUser.password
    const hash = await bcrypt.compare(password,haspassed)
    console.log(hash)
    if(!hash){
        return NextResponse.json({
            success:false,
            message:"Incorrect PassWord"
        })
    }
    cookieStore.set("name",findUser._id)
    return NextResponse.json({
        success:true,
        datas:findUser,
        message:"Login SucessFully"
    })
 } catch (error) {
    console.log(error)
 }
}