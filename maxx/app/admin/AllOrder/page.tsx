"use client"
import { IOrder } from '@/model/order';
import axios from 'axios';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const Page = () => {
  const [orderArry, setOrderArry] = useState<IOrder[]>([]);

  const getAllorders = async () => {
    const { data } = await axios.get("/api/getAllorders");
    setOrderArry(data.orderData);
  };

  useEffect(() => {
    getAllorders();
  }, []);

  return (
    <div className="md:p-10 p-4 space-y-4">
      <h2 className="text-lg font-medium">Orders List</h2>

      {orderArry.map((order, index) => (
        <div
          key={index}
          className="flex flex-col md:grid md:grid-cols-[2fr_1fr_1fr_1fr] md:items-center gap-5 p-5 max-w-4xl rounded-md border border-gray-300 text-gray-800"
        >
          {/* Products */}
          <div className="flex gap-5 flex-col justify-center items-center">
            {order.productId.map((item, idx) => (
              <div key={idx} className="flex gap-4 justify-center items-center">
                <Image
                  width={250}
                  height={250}
                  className="w-12 h-12 object-cover opacity-60 rounded-2xl"
                  src={item.product.images[0].image}
                  alt="boxIcon"
                />
                <p className="font-medium">
                  {item.product.name}{" "}
                  <span
                    className={`text-indigo-500 `}
                  >
                    x {item.quantity}
                  </span>
                </p>
              </div>
            ))}
          </div>

          {/* User Info */}
          <div className="text-sm">
            <p className="font-medium mb-1">{order.UserId?.name}</p>
            {order.UserId?.address.map((item, idx) => (
              <p key={idx}>
                {item?.address1}, {item?.address2}, {item?.pincode},{" "}
                {item?.city}, {item.state}
              </p>
            ))}
          </div>

          {/* Amount */}
          <p className="font-medium text-base my-auto text-black/70">
            ₹{order.totalAmount}
          </p>

          {/* Payment & Date */}
          <div className="flex flex-col text-sm">
            <p>Method: {order.paymentMethod}</p>
            <p>Date: {order.createdAt}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Page;
