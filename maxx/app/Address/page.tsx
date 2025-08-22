"use client";

import React, { useState } from "react";
import { useAuth } from "@/context/UserAuth";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

export default function Page() {
  const { user } = useAuth()!;
  const [addsunmited, setaddsunmited] = useState<boolean>(false)
  const [Userid, setUserId] = useState<string | undefined>(undefined);

  const [form, setForm] = useState({
    line1: "",
    line2: "",
    city: "",
    state: "",
    pincode: "",
    country: "India",
    
  });
  const [submitting, setSubmitting] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    try {
      const { data } = await axios.post("/api/addressend", {form,addsunmited,Userid});
      console.log(data)
      if (data.success) {
        setForm((f) => ({
          ...f,
          line1: "",
          line2: "",
          city: "",
          state: "",
          pincode: "",
        }));
        toast.success(data.message)
      }

    } catch (err) {

    } finally {
      setSubmitting(false);
    }
  }
  return (
    <main className="min-h-screen bg-white text-black flex items-center justify-center p-6">
       <Toaster
                position="bottom-right"
                toastOptions={{
                    style: {
                        background: "#171717",
                        color: "#fff",
                    },
                }}
            />
      <div className="w-full max-w-xl">
        <h1 className="text-2xl font-semibold mb-6 tracking-tight">
          Submit Address
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-4 border border-black rounded-2xl p-6"
        >
          <div className="grid grid-cols-1 gap-4">
            <label className="text-sm">
              Address Line 1
              <input
                type="text"
                name="line1"
                value={form.line1}
                onChange={handleChange}
                placeholder="House no., street, area"
                className="mt-1 w-full border border-black rounded-xl px-3 py-2 outline-none focus:ring-2 focus:ring-black"
                required
              />
            </label>

            <label className="text-sm">
              Address Line 2 (Optional)
              <input
                type="text"
                name="line2"
                value={form.line2}
                onChange={handleChange}
                placeholder="Landmark, apartment, etc."
                className="mt-1 w-full border border-black rounded-xl px-3 py-2 outline-none focus:ring-2 focus:ring-black"
              />
            </label>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <label className="text-sm">
                City
                <input
                  type="text"
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                  placeholder="City"
                  className="mt-1 w-full border border-black rounded-xl px-3 py-2 outline-none focus:ring-2 focus:ring-black"
                  required
                />
              </label>

              <label className="text-sm">
                State
                <input
                  type="text"
                  name="state"
                  value={form.state}
                  onChange={handleChange}
                  placeholder="State"
                  className="mt-1 w-full border border-black rounded-xl px-3 py-2 outline-none focus:ring-2 focus:ring-black"
                  required
                />
              </label>

              <label className="text-sm">
                Pincode
                <input
                  type="text"
                  name="pincode"
                  inputMode="numeric"
                  pattern="[0-9]{6}"
                  value={form.pincode}
                  onChange={handleChange}
                  placeholder="6-digit PIN"
                  className="mt-1 w-full border border-black rounded-xl px-3 py-2 outline-none focus:ring-2 focus:ring-black"
                  required
                  title="Please enter a 6-digit pincode"
                />
              </label>
            </div>


          </div>

          <button
            type="submit"
            disabled={submitting}
            onClick={()=>{setaddsunmited(true);setUserId(user?._id)}}
            className="w-full rounded-2xl px-4 py-2 font-medium bg-black text-white disabled:opacity-60"
          >
            {submitting ? "Submitting..." : "Submit Address"}
          </button>


        </form>


        {user?.email && (
          <p className="text-xs mt-3 opacity-70">
            Logged in as: <span className="font-medium">{user.email}</span>
          </p>
        )}
      </div>
    </main>
  );
}
