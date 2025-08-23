import { DBonnection } from "@/config/mongodb";
import Order from "@/model/order";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
    try {
        const { id } = await req.json()
        await DBonnection()
        const data = await Order.find({ UserId: new mongoose.Types.ObjectId(id) })
            .populate("UserId")
            .populate(
                "productId.product",);

        console.log(data);

        return NextResponse.json({
            sucsess: true,
            datas: data
        })
    } catch (error) {
        return NextResponse.json({
            success: false,
            message: "Isuue to getData"
        })
    }
}