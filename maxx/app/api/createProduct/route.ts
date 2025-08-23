import { NextRequest, NextResponse } from "next/server";
import cloudinary from '@/config/cloudanary';
import { DBonnection } from "@/config/mongodb";
import CretaetdProduct from "@/model/Products";

export const POST = async (req: NextRequest) => {
    try {
        const formData = await req.formData();

        // product details
        const productDetailsRaw = formData.get("productDetails") as string;
        const productDetails = JSON.parse(productDetailsRaw);

        // images
        const images = formData.getAll("image");
        const imageUrls: string[] = await Promise.all(
            images.map(async (file) => {
                if (file instanceof File) {   // ✅ Check type
                    const bytes = await file.arrayBuffer();
                    const buffer = Buffer.from(bytes);
                    const dataUri = `data:${file.type};base64,${buffer.toString("base64")}`;

                    const result = await cloudinary.uploader.upload(dataUri, {
                        folder: "products",
                        resource_type: "image",
                    });

                    return result.secure_url;
                }
                return ""; // or throw new Error("Invalid file type");
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
            images: imageUrls.filter(Boolean).map(url => ({ image: url })) // filter out empty
        });

        return NextResponse.json({
            success: true,
            message: "Product Created Successfully!",
            product: productData
        });

    } catch (error: any) {
        console.error(error);
        return NextResponse.json(
            { success: false, message: error.message || "Something went wrong" },
            { status: 500 }
        );
    }
};
