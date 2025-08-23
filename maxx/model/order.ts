
import mongoose, { Schema } from "mongoose";

type IOrder = {
    UserId?: string;
    productId: {}[]
    totalAmount: number;
    Status: string
    paymentMethod: string
}

const OrderSchema = new mongoose.Schema<IOrder>(
    {
        UserId: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true

        },
        Status: {
            type: String,
            default: "In Progess"

        },
        paymentMethod: {
            type: String,
            default: "Offline Payment"
        },
        productId: [
            {
                type: Schema.Types.ObjectId,
                ref: "CretaetdProducts",
                required: true,
            }
        ]
        ,
        totalAmount: {
            type: Number,
            required: true,
        },

    },

    { timestamps: true }
);

const Order =
    mongoose.models.Order || mongoose.model<IOrder>("Order", OrderSchema);

export default Order;
