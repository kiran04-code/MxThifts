import User from "@/model/user";
import { DBonnection } from "../../../config/mongodb"
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { cookies } from "next/headers";

export const POST = async (req: NextRequest) => {
    try {
        const cookieStore =  cookies()
        await DBonnection()
        const { email, number, password, name } = await req.json()
        const findUser = await User.findOne({ email })
        if (findUser) {
            return NextResponse.json({
                success: false,
                message: "This User is Alredy Exits"
            })
        }
        const haspass = await bcrypt.hash(password, 10)
        const data = await User.create({
            name,
            number,
            email,
            password: haspass
        })
        ;(await cookieStore).set('name', data._id, {
            httpOnly: true,
            secure: true,
            path: '/',
            sameSite: 'strict',
        })
        return NextResponse.json({
            success: true,
            message: "User Register SucessFully",
            datas:data
        })
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            success: false,
            message: "Network Error"
        })
    }
}
