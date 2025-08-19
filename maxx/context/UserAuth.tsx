"use client";
import axios from "axios";
import { createContext, ReactNode, use, useContext, useEffect, useState } from "react";

export interface CurrentUser {
  name: string;
  email: string;
  number?: number;
  image?:string
}
interface AuthContextType {
  user: CurrentUser | null;
  setUser: React.Dispatch<React.SetStateAction<CurrentUser | null>>;
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
}


const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<CurrentUser | null>(null);
const [input, setInput] = useState<string>("");

  const auth = async()=>{
    try {
        const {data} = await axios.get("/api/auth2")
        if(data.success){
            setUser(data.datas)
        }
    } catch (error) {
        console.log(error)
    }
  }
  useEffect(()=>{
 auth()

  },[])
  return (
    <AuthContext.Provider value={{ user, setUser,setInput,input }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
   return useContext(AuthContext);
};
