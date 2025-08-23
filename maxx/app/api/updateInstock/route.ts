import CretaetdProduct from "@/model/Products"
import { NextRequest, NextResponse } from "next/server"

export const POST = async (req: NextRequest) => {
    try {
        const { id, instock } = await req.json()
        await CretaetdProduct.findByIdAndUpdate(id, { instock: instock })
        return NextResponse.json({
            success: true
        })
    } catch (error) {

    }
}