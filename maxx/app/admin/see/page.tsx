"use client"
import { useAuth } from '@/context/UserAuth'
import axios from 'axios'
import React, { useState } from 'react'

const page = () => {
    const {dummyuCloth} = useAuth()!
    const [id,setid] = useState<string>('')
    const [instock,setinstock] = useState<boolean>(true)
    console.log(id,instock)
    const hnadleOnchnage = async()=>{
        const {data} = await axios.post("/api/updateInstock",{id,instock})
        console.log(data)
    }
  return (
    <div>
      <div className="flex-1 py-10 flex flex-col justify-between">
            <div className="w-full md:p-10 p-4">

                <h2 className="pb-4 text-lg font-medium">All Products</h2>

                <div className="flex flex-col items-center max-w-4xl w-full overflow-hidden rounded-md bg-white border border-gray-500/20">

                    <table className="md:table-auto table-fixed w-full overflow-hidden">

                        <thead className="text-gray-900 text-sm text-left">

                            <tr>
                                <th className="px-4 py-3 font-semibold truncate">Product</th>

                                <th className="px-4 py-3 font-semibold truncate">Category</th>

                                <th className="px-4 py-3 font-semibold truncate hidden md:block">Selling Price</th>

                                <th className="px-4 py-3 font-semibold truncate">In Stock</th>

                            </tr>

                        </thead>

                        <tbody className="text-sm text-gray-500">

                            {dummyuCloth.map((product, index) => (

                                <tr key={index} className="border-t border-gray-500/20">

                                    <td className="md:px-4 pl-2 md:pl-4 py-3 flex items-center space-x-3 truncate">

                                        <div className="border border-gray-300 rounded overflow-hidden">

                                            <img src={product.images[0].image} alt="Product" className="w-16" />

                                        </div>

                                        <span className="truncate max-sm:hidden w-full">{product.name}</span>

                                    </td>

                                    <td className="px-4 py-3">{product.category}</td>

                                    <td className="px-4 py-3 max-sm:hidden">₹{product.offerPrice}</td>

                                    <td className="px-4 py-3">

                                        <label className="relative inline-flex items-center cursor-pointer text-gray-900 gap-3">

                                            <input   type="checkbox" className="sr-only peer" defaultChecked={product.instock} onClick={()=>{setinstock(!instock),setid(product._id);hnadleOnchnage()}} />

                                            <div className="w-12 h-7 bg-slate-300 rounded-full peer peer-checked:bg-blue-600 transition-colors duration-200"></div>

                                            <span className="dot absolute left-1 top-1 w-5 h-5 bg-white rounded-full transition-transform duration-200 ease-in-out peer-checked:translate-x-5"></span>

                                        </label>

                                    </td>

                                </tr>

                            ))}

                        </tbody>

                    </table>

                </div>

            </div>

        </div>
    </div>
  )
}

export default page
