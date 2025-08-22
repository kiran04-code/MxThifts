"use client";
import { clothesDummy } from "@/aseats/Assets";
import { IAddress } from "@/model/user";
import axios from "axios";
import { useRouter } from "next/navigation";
import { createContext, ReactNode, use, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

export interface CurrentUser {
  _id:string
  name: string;
  email: string;
  number?: number;
  image?: string,
  addressSubmit?:boolean
  address:IAddress[]
}
interface AuthContextType {
  user: CurrentUser | null;
  setUser: React.Dispatch<React.SetStateAction<CurrentUser | null>>;
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  CartIteam: Record<string, number>,
  setCartItem: React.Dispatch<React.SetStateAction<Record<string, number>>>
  addToCart: (item: string) => void;
  RemoveToCart: (item: string) => void;
  UpdateCart: (item: string,quinity:number) => void;
  getCartCout: () => number;
  getTotalAmmoutCart:()=>number
}


const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<CurrentUser | null>(null);
  const [input, setInput] = useState<string>("");
  const [CartIteam, setCartItem] = useState<Record<string, number>>({});
  const router = useRouter()
  const auth = async () => {
    try {
      const { data } = await axios.get("/api/auth2")
      if (data.success) {
        setUser(data.datas)
      }
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    auth()
    console.log(user)
  }, [])
  const addToCart = (item: string): void => {
    if (!user) return router.push("/login")
    const crtData = structuredClone(CartIteam);
    if (crtData[item]) {
      crtData[item] += 1;
    } else {
      crtData[item] = 1;
    }
    setCartItem(crtData);
    toast.success(` added to cart`);

  };
  const RemoveToCart = (item: string): void => {
    if (!user) return router.push("/login")
    const crtData = structuredClone(CartIteam);
    if (crtData[item]) {
      crtData[item] -= 1;
      if (crtData[item] === 0) {
        delete crtData[item]
        router.push("/")
      }
      setCartItem(crtData)
    }
    setCartItem(crtData);
    toast.success("Remove from cart")
  };
  const UpdateCart = (item: string, quinity: number): void => {
    if (!user) return router.push("/login")
    const crtData = structuredClone(CartIteam);
    crtData[item] === quinity
    setCartItem(crtData)
    toast.success("Update Cart")
  };
 // get cartCout
 const getCartCout = ()=>{
    let totalCount = 0;
    for(const item in CartIteam){
      totalCount+=CartIteam[item]
    } 
   return totalCount;
 } 
  const getTotalAmmoutCart = () => {
   let totalAmmot = 0;
   for(const item in CartIteam){
     const products = clothesDummy.find((data)=>data.id === item)
     if(products){
   if(CartIteam[item]>0){
       totalAmmot+=products.offerPrice*CartIteam[item]
      }
     }
   
   }
   return Math.floor(totalAmmot*100)/100
   }
  return (
    <AuthContext.Provider value={{getTotalAmmoutCart, user, setUser, setInput, input, CartIteam, setCartItem, RemoveToCart,getCartCout, addToCart,UpdateCart }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
