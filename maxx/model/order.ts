
import mongoose, { Schema } from "mongoose";
import { IProduct } from "./Products";
import { IUser } from "./user";

export type IOrder = {
    UserId?: IUser;
    productId: {
    product: IProduct;
    quantity: number;
  }[]
    totalAmount: number;
    Status: string
    paymentMethod: string
    createdAt:string
}

const OrderSchema = new mongoose.Schema<IOrder>(
    {
        UserId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true

        },
        Status: {
            type: String,
            default: "In Progess"

        },
        paymentMethod: {
            type: String,
            default: "COD "
        },
        productId: [
            {
                product:{
                type: Schema.Types.ObjectId,
                ref: "CretaetdProducts",
                required: true,
            },
            quantity: {
          type: Number,
          required: true,
          default: 1,
        },
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
