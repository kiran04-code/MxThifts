"use client"
import { useSession, signOut } from "next-auth/react"
import { useAuth } from '@/context/UserAuth'
import { useRouter } from "next/navigation"
import axios from "axios"
import toast from "react-hot-toast"
import Footer from "@/components/Footer"
import ReusedCompoennts from "@/components/Navbars/ReusedCompoennts"
import { useState } from "react"
export const EditFromOfAdsress= ()=>{
  <div className="absolute z-50 bg-[#00000096] h-screen w-full">

  </div>
}
function DataProfile() {
    const [openedit,setedit] = useState<boolean>(false)
  const { data: session, status } = useSession()
  const routes = useRouter()
  const { user, setUser } = useAuth()!
  const [adress, setAdress] = useState(false)
  console.log(user)

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

  return (
    <div>
      <ReusedCompoennts />
      <div className="p-5 ">
        <div className="w-full min-h-screen p-6 md:p-22 flex flex-col rounded-xl gap-8 bg-gray-50  border-2 border-black ">

          {/* Account Header */}
          <div className="flex justify-between items-center">
            <h1 className="md:text-4xl text-2xl font-bold text-gray-800">My Account</h1>
            <button
              onClick={handleLogout}
              className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition"
            >
              Log Out
            </button>
          </div>

          {/* User Info Section */}
          <div className="bg-white shadow-md rounded-xl p-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Profile Information</h2>
            <p><span className="font-medium">Name:</span>{user?.name}</p>
            <p><span className="font-medium">Email:</span>{user?.email}</p>
            <p><span className="font-medium">Phone:</span>{user?.number}</p>
          </div>

          {/* Address Section */}
          <div className="bg-white shadow-md rounded-xl p-6">
            {
              user?.address ? <div>
                <div className="flex justify-between">
                <h2 className="text-xl font-semibold text-gray-700 mb-4 ">Saved Address</h2>
                <button onClick={()=>setedit(true)} className="p-2 rounded-xl bg-black text-white">Edit Address</button>
                </div>
                {
                  user?.address?.map((data) => (
                    <div>   <p><span className="font-medium">Home:</span> {data?.address1}</p>
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

          {/* Order History */}
          <div className="bg-white shadow-md rounded-xl p-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Order History</h2>
            <div className="space-y-3">
              <div className="border-b pb-2">
                <p className="font-medium">Order #1001</p>
                <p>Date: 10 Aug 2025</p>
                <p>Status: <span className="text-green-600 font-semibold">Delivered</span></p>
              </div>
              <div className="border-b pb-2">
                <p className="font-medium">Order #1002</p>
                <p>Date: 15 Aug 2025</p>
                <p>Status: <span className="text-yellow-600 font-semibold">In Progress</span></p>
              </div>
              <div>
                <p className="font-medium">Order #1003</p>
                <p>Date: 20 Aug 2025</p>
                <p>Status: <span className="text-red-600 font-semibold">Cancelled</span></p>
              </div>
            </div>
          </div>

        </div>
      </div>
      {
      openedit ? <EditFromOfAdsress/>:null
      }
      <Footer />
    </div>
  )
}

export default DataProfile
