"use client"
import axios from 'axios';
import React, { ChangeEvent, FormEvent, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';

const page = () => {
    const [files, setFiles] = useState<(File | null)[]>([]);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('')
    const [size, setsize] = useState('');
    const [offerPrice, setOfferPrice] = useState('');
    const [length, setlength] = useState('');
    const [chest, setchest] = useState('');

    const productDetails = {
        name,
        description,
        category,
        price,
        size,
        offerPrice,
        length,
        chest,
    }
    const fromData = new FormData()
    fromData.append("productDetails", JSON.stringify(productDetails))
    for (let i = 0; i < files.length; i++) {
        fromData.append("image", files[i])
    }
    const hnadlesubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            if (!name || !description || !category || !price || !offerPrice || !chest || !length || !size) {
                toast.success("Maxx! Please fill All Details Before Listing the Producct")
            }
            const { data } = await axios.post("/api/createProduct", fromData, {
                headers: { "Content-Type": "multipart/form-data" },
            })
            if (data.success) {
                toast.success(data.message)
                console.log("all submited data", fromData)
               
            }
        } catch (error) {
            console.log(error)
        }

    }
    return (

        <div className="py-10 flex flex-col justify-between bg-white">
            <Toaster
                position="bottom-right"
                toastOptions={{
                    style: {
                        background: "#171717",
                        color: "#fff",
                    },
                }}
            />
            <form className="md:p-10 p-4 space-y-5 max-w-lg" onSubmit={hnadlesubmit}>
                <div>
                    <p className="text-base font-medium">Product Image</p>
                    <div className="flex flex-wrap items-center gap-3 mt-2">
                        {Array(4).fill('').map((_, index) => (
                            <label key={index} htmlFor={`image${index}`}>
                                <input
                                    type="file"
                                    accept="image/*"
                                    id={`image${index}`}
                                    hidden
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                        if (!e.target.files) return;
                                        const updatedFiles = [...files];
                                        updatedFiles[index] = e.target.files[0];
                                        setFiles(updatedFiles);
                                    }}
                                />
                                <img className="max-w-24 cursor-pointer " src={files[index] ? URL.createObjectURL(files[index]) : "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/e-commerce/uploadArea.png"} alt="uploadArea" width={100} height={100} />
                            </label>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col gap-1 max-w-md">
                    <label className="text-base font-medium" htmlFor="product-name">Product Name</label>
                    <input onChange={(e) => setName(e.target.value)} value={name} id="product-name" type="text" placeholder="Type here" className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40" required />
                </div>
                <div className="flex flex-col gap-1 max-w-md">
                    <label className="text-base font-medium" htmlFor="product-name">Size</label>
                    <input onChange={(e) => setsize(e.target.value)} value={size} id="product-name" type="text" placeholder="Type here" className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40" required />
                    <label className="text-base font-medium" htmlFor="product-name">Length</label>
                    <input onChange={(e) => setlength(e.target.value)} value={length} id="product-name" type="text" placeholder="Type here" className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40" required />
                    <label className="text-base font-medium" htmlFor="product-name">chest</label>
                    <input onChange={(e) => setchest(e.target.value)} value={chest} id="product-name" type="text" placeholder="Type here" className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40" required />
                </div>
                <div className="flex flex-col gap-1 max-w-md">
                    <label className="text-base font-medium" htmlFor="product-description">Product Description</label>
                    <textarea onChange={(e) => setDescription(e.target.value)} value={description} id="product-description" rows={4} className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40 resize-none" placeholder="Type here"></textarea>
                </div>
                <div className="w-full flex flex-col gap-1">
                    <label className="text-base font-medium" htmlFor="category">Category</label>
                    <select onChange={(e) => setCategory(e.target.value)} value={category} id="category" className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40">
                        <option value="">Select Category</option>
                        {[{ name: 'shirt' }, { name: 'jeans' }, { name: 'T-shirt' }].map((item, index) => (
                            <option key={index} value={item.name}>{item.name}</option>
                        ))}
                    </select>
                </div>
                <div className="flex items-center gap-5 flex-wrap">
                    <div className="flex-1 flex flex-col gap-1 w-32">
                        <label className="text-base font-medium" htmlFor="product-price">Product Price</label>
                        <input onChange={(e) => setPrice(e.target.value)} value={price} id="product-price" type="number" placeholder="0" className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40" required />
                    </div>
                    <div className="flex-1 flex flex-col gap-1 w-32">
                        <label className="text-base font-medium" htmlFor="offer-price">Offer Price</label>
                        <input onChange={(e) => setOfferPrice(e.target.value)} value={offerPrice} id="offer-price" type="number" placeholder="0" className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40" required />
                    </div>
                </div>
                <button type='submit' className="px-8 py-2.5 bg-indigo-500 text-white font-medium rounded">ADD</button>
            </form>
        </div>

    )
}

export default page
