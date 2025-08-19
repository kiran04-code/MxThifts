
"use client"
import { useSession,signOut  } from "next-auth/react"
 import { useAuth } from '@/context/UserAuth'
import { redirect } from "next/navigation"

function DataProfile() {
  const { data: session ,status} = useSession()
 const {user} = useAuth()!
console.log(status)
if(status === "unauthenticated" || user){
  redirect("/login")
}
return <p>You are an admin, welcome {session?.user?.email}! <button onClick={() => signOut()}>Sign Out</button></p>
}

export default DataProfile
