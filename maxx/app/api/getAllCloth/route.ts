import CretaetdProduct from "@/model/Products"
import { NextResponse } from "next/server"


export const GET= async()=>{
 try {
    const data = await CretaetdProduct.find({})
    return NextResponse.json({
        dummyCloth:data
    })
 } catch (error) {
     return NextResponse.json({
        message:"Issuue to get data"
    })
 }
}