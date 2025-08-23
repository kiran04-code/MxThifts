"use client"
import { useSession, signOut } from "next-auth/react"
import { useAuth } from '@/context/UserAuth'
import { useRouter } from "next/navigation"
import axios from "axios"
import toast from "react-hot-toast"
import Footer from "@/components/Footer"
import ReusedCompoennts from "@/components/Navbars/ReusedCompoennts"
import { useEffect, useState } from "react"
import { IOrder } from "@/model/order"
import Image from "next/image"

function DataProfile() {
    const [openedit,setedit] = useState<boolean>(false)
    const [orderArry,setOrderArry] = useState<IOrder[]>([])
  const { data: session, status } = useSession()
  const routes = useRouter()
  const { user, setUser } = useAuth()!
  if (!user) {
    routes.push("/login")
  }
  const handleLogout = async () => {
    const { data } = await axios.get("/api/logout")
    if (data.success) {
      setUser(null)
      toast.success(data.message)
      routes.push("/")
    }
  }
const getUserProduct = async()=>{
  try {
    const  {data} = await axios.post("/api/getUserProduct",{id:user?._id})
    setOrderArry(data.datas)
  } catch (error) {
    console.log(error)
  }
}
useEffect(()=>{
  getUserProduct()
},[])
  return (
    <div>
      <ReusedCompoennts />
      <div className="p-5 ">
        <div className="w-full min-h-screen p-6 md:p-22 flex flex-col rounded-xl gap-8 bg-gray-50  border-2 border-black ">

          <div className="flex justify-between items-center">
            <h1 className="md:text-4xl text-2xl font-bold text-gray-800">My Account</h1>
            <button
              onClick={handleLogout}
              className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition"
            >
              Log Out
            </button>
          </div>

          <div className="bg-white shadow-md rounded-xl p-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Profile Information</h2>
            <p><span className="font-medium">Name:</span>{user?.name}</p>
            <p><span className="font-medium">Email:</span>{user?.email}</p>
            <p><span className="font-medium">Phone:</span>{user?.number}</p>
          </div>

          <div className="bg-white shadow-md rounded-xl p-6">
            {
              user?.address ? <div>
                <div className="flex justify-between">
                <h2 className="text-xl font-semibold text-gray-700 mb-4 ">Saved Address</h2>
                <button onClick={()=>setedit(true)} className="p-2 rounded-xl bg-black text-white">Edit Address</button>
                </div>
                {
                  user?.address?.map((data,index) => (
                    <div key={index}>   <p><span className="font-medium">Home:</span> {data?.address1}</p>
                      <p><span className="font-medium">Home2:</span> {data?.address2}</p>
                      <p><span className="font-medium">city:</span> {data?.city}</p>
                      <p><span className="font-medium">State:</span> {data?.state}</p>
                      <p><span className="font-medium">PinCode:</span> {data?.pincode}</p>

                    </div>
                  ))
                }
              </div> : <button onClick={() => routes.push("/Address")} className="p-2 rounded-xl bg-black text-white">Add Address</button>
            }
          </div>

          <div className="bg-white shadow-lg rounded-2xl p-6">
  <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-3">
     Order History
  </h2>

  {orderArry.length === 0 ? (
    <p className="text-gray-500 text-center">No orders found</p>
  ) : (
    orderArry.map((item, index) => (
      <div
        key={index}
        className="mb-6 border border-gray-200 rounded-xl p-4 hover:shadow-md transition-all"
      >
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b pb-3 mb-4">
          <div>
            <p className="text-lg font-semibold text-gray-700">
              Order #{index + 1}
            </p>
            <p className="text-sm text-gray-500">
              Date: {new Date(item.createdAt).toLocaleDateString()}
            </p>
          </div>
          <span
            className={`px-3 py-1 text-sm font-medium rounded-full ${
              item.Status === "Delivered"
                ? "bg-green-100 text-green-700"
                : item.Status === "In Progess"
                ? "bg-yellow-100 text-yellow-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {item.Status}
          </span>
        </div>

        {/* Product List */}
        <div className="space-y-4">
          {item.productId.map((i, idx) => (
            <div
              key={idx}
              className="flex flex-col sm:flex-row items-center sm:items-start gap-4 border-b pb-4 last:border-b-0"
            >
              <Image
                src={i.product.images[0].image}
                alt={i.product.name || "Product"}
                height={250}
                width={250}
                className="w-24 h-24 object-cover rounded-lg shadow-sm"
              />

              <div className="flex-1 text-center sm:text-left">
                <p className="font-medium text-gray-800">{i.product.name}</p>
                <p className="text-sm text-gray-500">
                  Quantity: {i.quantity}
                </p>
                <p className="text-sm font-semibold text-gray-700">
                  ₹{i.product.offerPrice}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <p className="text-gray-600">
            Payment Mode:{" "}
            <span className="font-semibold text-gray-800">
              {item.paymentMethod}
            </span>
          </p>
          <p className="text-gray-800 font-bold">
            Total: ₹{item.totalAmount}
          </p>
        </div>
      </div>
    ))
  )}
</div>


        </div>
      </div>
     
      <Footer />
    </div>
  )
}

export default DataProfile
