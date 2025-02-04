"use client";

import React, { useState } from "react";

export default function Progresser() {
  const [activeStep, setActiveStep] = useState(1);

  const handleStepClick = (step: number) => {
    setActiveStep(step);
  };

  return (
    <div className="bg-gradient-to-l from-black to-zinc-900">
      <div className="flex items-start max-w-screen-lg w-full mx-auto py-10">
        {[ 
          { number: 1, title: "Find Your Favorite", description: "Enjoy premium quality at prices you will love." },
          { number: 2, title: "Customize Your Order", description: "Tailor products to your specific needs." },
          { number: 3, title: "Place Your Order", description: "Ready to eat; Proceed to checkout and complete your order." }
        ].map((step, index, array) => (
          <div className="w-full" key={step.number}>
            <div className="flex items-center w-full">
              <div 
                className={`w-8 h-8 shrink-0 mx-[-1px] ${activeStep >= step.number ? 'bg-lime-500' : 'bg-gray-500'} p-1.5 flex items-center justify-center rounded-full cursor-pointer`}
                onClick={() => handleStepClick(step.number)}
              >
                <span className="text-base text-black font-bold">{step.number}</span>
              </div>
              {index < array.length - 0 && <div className={`w-full h-1 mx-4 rounded-lg ${activeStep > step.number ? 'bg-red-500' : 'bg-blue-500'}`}></div>}
            </div>

            <div className="mt-2 mr-4">
              <h6 className="text-base font-bold text-amber-500">Step {step.number}: {step.title}</h6>
              <p className="text-xs text-white">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
