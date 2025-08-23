import { DBonnection } from "@/config/mongodb";
import Order from "@/model/order";
import User from "@/model/user";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    // Ensure DB connection
    await DBonnection();

    // Fetch all orders and populate user info (only name & email)
    const orders = await Order.find({}).populate("UserId").populate("productId.product");

    return NextResponse.json({
      success: true,
      orderData: orders,
    });
  } catch (error) {
    console.error("Error fetching orders:", error);
    return NextResponse.json({
      success: false,
      message: "Error occurred while fetching orders",
    });
  }
};
