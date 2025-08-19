
"use client"
import { useSession,signOut  } from "next-auth/react"
 import { useAuth } from '@/context/UserAuth'
import { useRouter } from "next/navigation"
import axios from "axios"
import toast from "react-hot-toast"

function DataProfile() {
  const { data: session ,status} = useSession()
  const routes = useRouter()
 const {user,setUser} = useAuth()!
 console.log(user)
if(!user){
  routes.push("/login")
}
const hnadleLogout  = async()=>{
  const {data} = await axios.get("/api/logout")
  console.log(data)
  if(data.success){
    setUser(null)
    toast.success(data.message)
    routes.push("/")
  }
}
return <p>You are an admin, welcome {user?.email} <button className="bg-red-500 p-5 rounded-2xl text-white" onClick={() => hnadleLogout()}>Sign Out</button></p>
}

export default DataProfile
