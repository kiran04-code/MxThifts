import { cookies } from "next/headers";
import User from "@/model/user";
import { NextResponse } from "next/server";
import { DBonnection } from "@/config/mongodb";


export const GET = async () => {
  try {
    const cookieStore = await cookies();
   await  DBonnection()
  const tokenCookie = cookieStore.get("name")?.value;
  if (!tokenCookie) return null;
  const user = await User.findById(tokenCookie);
  return NextResponse.json({
    success:true,
    datas:user,
    message:"ok"
  })
  } catch (error) {
    console.log(error)
  }
};
