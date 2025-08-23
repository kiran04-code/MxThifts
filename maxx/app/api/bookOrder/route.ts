import { DBonnection } from "@/config/mongodb"
import Order from "@/model/order"
import { NextRequest, NextResponse } from "next/server"

export const POST = async(req:NextRequest)=>{
    try {
        const  {productId,Userid,price,quantity} = await req.json()
        console.log(productId,Userid,price)
        await DBonnection()
        const formatedAryy = productId.map((id:string)=>({
            product:id,
            quantity: quantity || 1
        }))
           await Order.create({
            UserId:Userid.toString(),
            productId:formatedAryy,
            totalAmount:price
        })
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