import { NextRequest, NextResponse } from "next/server";

import cloudinary from '@/config/cloudanary';
import { DBonnection } from "@/config/mongodb";
import CretaetdProduct from "@/model/Products";
export const POST = async (req: NextRequest) => {
    const formData = await req.formData();
    const productDetailsRaw = formData.get("productDetails") as string;
    const productDetails = JSON.parse(productDetailsRaw);
    console.log(productDetails)
    const images = formData.getAll("image");
    const imageUrls: string[] = await Promise.all(
        images.map(async (file) => {
            const bytes = await file.arrayBuffer();
            const buffer = Buffer.from(bytes);

            const dataUri = `data:${file.type};base64,${buffer.toString("base64")}`;

            const result = await cloudinary.uploader.upload(dataUri, {
                folder: "products",
                resource_type: "image",
            });

            return result.secure_url;
        })
    );

    await DBonnection();
    const productData = await CretaetdProduct.create({
        name: productDetails.name,
        description: productDetails.description,
        category: productDetails.category,
        length: productDetails.length,
        price: Number(productDetails.price),
        offerPrice: Number(productDetails.offerPrice),
        chest: productDetails.chest,
        images: imageUrls.map(url => ({ image: url }))
    });
    return NextResponse.json({
        success: true,
        message: "Product Created SucessFull!"
    })
}