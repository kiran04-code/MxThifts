import { cookies } from "next/headers";
import User from "@/model/user";
import { NextRequest, NextResponse } from "next/server";
import { DBonnection } from "@/config/mongodb";


export const GET = async (req:NextRequest) => {
  try {
    const cookieStore = await cookies();
   await  DBonnection()
  const tokenCookie = cookieStore.get("name")?.value;
  if (!tokenCookie) return 
  const user = await User.findById(tokenCookie);
  return NextResponse.json({
    success:true,
    datas:user,
    message:"ok"
  })
  } catch (error) {
    return NextResponse.json(
      { success: false, datas: null, message: "Server error" },
      { status: 500 }
    );
  }
};
