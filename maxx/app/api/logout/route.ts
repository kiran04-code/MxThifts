import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export const GET = async(req:NextRequest)=>{
    const cookieStore  = await cookies()
     cookieStore.delete("name")
     return NextResponse.json({
        success:true,
        message:"Logout SuccessFull"
     })

}