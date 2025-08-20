"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { createContext, ReactNode, use, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

export interface CurrentUser {
  name: string;
  email: string;
  number?: number;
  image?: string
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

  }, [])
  const addToCart = (item: string): void => {
    if(!user) return router.push("/login")
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
    if(!user) return router.push("/login")
    const crtData = structuredClone(CartIteam);
    if (crtData[item]) {
      crtData[item] -= 1;
      if (crtData[item] === 0) {
        delete crtData[item]
      }
      setCartItem(crtData)
    }
    setCartItem(crtData);
    toast.success("Remove from cart")
  };
  return (
    <AuthContext.Provider value={{ user, setUser, setInput, input, CartIteam, setCartItem, RemoveToCart, addToCart }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
