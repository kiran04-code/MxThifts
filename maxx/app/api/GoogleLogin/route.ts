import { DBonnection } from "@/config/mongodb";
import User from "@/model/user";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server"

export const POST = async (req: NextRequest) => {
    const  {email,name}= await req.json();
    await DBonnection()
    const cookieStore = await cookies()
    const userFind = await User.findOne({ email })
    if (userFind) {
          cookieStore.set("name",userFind._id)
        return NextResponse.json({
            success: true,
            message: "Login Successfully",
            datas:userFind
        })
    }
    const pass = Math.floor(Math.random() * 1000)
    const user = await User.create({
        email,
        name,
        password: pass
    })
    cookieStore.set("name",user._id)
    return NextResponse.json({
        success: true,
        message: "Login SucessFully",
        datas:user
    })
}