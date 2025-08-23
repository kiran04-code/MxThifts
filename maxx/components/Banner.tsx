"use client";
import { useState } from "react";

export default function BetaBanner() {
    const [show, setShow] = useState(true);
    if (!show) return null;

    return (
        <div className="sticky top-0 z-50">
            <div className="px-3 sm:px-6 pt-3">
                {/* Gradient border wrapper */}
                <div className="p-[1.5px] rounded-2xl bg-gradient-to-r from-black via-neutral-400 to-black shadow-[0_0_30px_rgba(0,0,0,0.1)]">
                    {/* Banner core */}
                    <div className="rounded-2xl bg-white text-black">
                        <div className="flex items-center gap-3 px-4 py-2.5 sm:px-6 sm:py-3">
                            {/* Badge */}
                            <span className="inline-flex items-center gap-1.5 rounded-full border border-black/20 px-2.5 py-1 text-xs font-semibold tracking-wide uppercase">
                                <span className="h-1.5 w-1.5 rounded-full bg-black" />
                                Beta
                            </span>

                            {/* Message */}
                            <p className="text-sm sm:text-base font-medium md:flex hidden">
                                You’re using the <span className="underline underline-offset-4">Test Mode</span>.
                                Data may reset and some features can change.
                            </p>
                            <p>Test Mode Update Soon    </p>
                            {/* Spacer */}
                            <div className="ml-auto flex items-center gap-2">
                                {/* CTA/Docs (optional) */}
                                <a
                                    href="#"
                                    className="hidden sm:inline-flex text-xs font-semibold underline underline-offset-4 hover:no-underline"
                                >
                                    Learn More
                                </a>
                                {/* Dismiss */}
                                <button
                                    onClick={() => setShow(false)}
                                    aria-label="Dismiss banner"
                                    className="inline-flex h-8 w-8 items-center justify-center rounded-xl border border-black/10 hover:bg-black/5 transition"
                                >
                                    ✕
                                </button>
                            </div>
                        </div>

                        {/* Subtle animated stripe */}
                        <div className="h-[3px] overflow-hidden rounded-b-2xl">
                            <div className="h-full w-full animate-[shine_2.2s_linear_infinite] bg-[linear-gradient(90deg,transparent,rgba(0,0,0,0.15),transparent)]" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Keyframe */}
            <style jsx>{`
        @keyframes shine {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
        </div>
    );
}