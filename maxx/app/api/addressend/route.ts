import { DBonnection } from "@/config/mongodb";
import User from "@/model/user";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    await DBonnection();

    const { addsunmited, Userid, form } = await req.json();

    const datas = await User.findByIdAndUpdate(
      Userid,
      {
        addressSubmit: addsunmited,
        address: [
          {
            address1: form.line1,
            address2: form.line2,
            city: form.city,
            state: form.state,
            pincode: form.pincode,
            country: form.country,
          },
        ],
      },
      { new: true } )
    if (!datas) {
      return NextResponse.json(
        { success: false, message: "User not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Address Saved",
      data: datas, // return updated user
    });
  } catch (error) {
    console.error("Error saving address:", error);
    return NextResponse.json(
      { success: false, message: "Something went wrong", error },
      { status: 500 }
    );
  }
};
