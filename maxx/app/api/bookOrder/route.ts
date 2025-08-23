import { DBonnection } from "@/config/mongodb"
import Order from "@/model/order"
import { NextRequest, NextResponse } from "next/server"

export const POST = async(req:NextRequest)=>{
    try {
        const  {productId,Userid,price} = await req.json()
        console.log(productId,Userid,price)
        await DBonnection()
        const  oderss = await Order.create({
            UserId:Userid.toString(),
            productId:productId,
            totalAmount:price
        })
        console.log(oderss)
        return NextResponse.json({
            success:true,
            message:"Order BookConFrom"
        })
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            success:false,
            message:"Order Booking Issue!"
        })
    }
}