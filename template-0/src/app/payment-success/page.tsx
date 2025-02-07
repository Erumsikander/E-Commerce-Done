'use client'
import { useState } from "react";

const Success = () => {
    const [showAlert, setShowAlert] = useState(true);

    return (
        <div className="flex justify-center items-center min-h-screen p-4 bg-gradient-to-r from-black to-zinc-600">
            {showAlert && (
                <div className="bg-zinc-700 border border-red-400 text-white px-4 py-3 rounded relative w-full max-w-md shadow-lg">
                    <strong className="font-bold text-2xl">Payment Successful! 🎉</strong>
                    <p className="text-sm mt-2">Thank you for your order Your payment has been processed.</p>
                    <button
                        onClick={() => setShowAlert(false)}
                        className="absolute top-0 right-0 px-4 py-3 text-green-700"
                    >
                        ✖
                    </button>
                </div>
            )}
        </div>
    );
};

export default Success;
