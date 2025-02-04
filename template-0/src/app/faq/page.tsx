import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const FAQ = () => {
  const faqs = [
    {
      question: "How can I place an order?",
      answer:
        "You can place an order by adding items to your cart and proceeding to checkout, Follow the instructions to enter your details and payment method.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept Visa, MasterCard, PayPal, and Cash on Delivery (COD) for selected regions.",
    },
    {
      question: "How long does delivery take?",
      answer:
        "Delivery usually takes 3 to 7 business days, depending on your location. Express shipping options are also available.",
    },
    {
      question: "Can I return my order?",
      answer:
        "Yes, You can return your order within 14 days of delivery, provided the item is in its original condition.",
    },
    {
      question: "How do I track my order?",
      answer:
        "Once your order is shipped, you will receive a tracking link via email or SMS to track your shipment in real time.",
    },
    {
      question: "Is my personal information secure?",
      answer:
        "Yes, We use SSL encryption and comply with GDPR standards to protect your personal data.",
    },
  ];

  return (
    <main className="text-white bg-gradient-to-r from-black to-zinc-800 min-h-screen">
        < Navbar />

    <div className="max-w-4xl mx-auto p-6 text-white bg-gradient-to-r from-black to-zinc-900 rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold text-center mb-6">
        Frequently Asked Questions
      </h1>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <details
            key={index}
            className="border border-gray-600 rounded-lg p-4 bg-zinc-800"
          >
            <summary className="font-semibold text-lg cursor-pointer">
              {faq.question}
            </summary>
            <p className="mt-2 text-gray-300">{faq.answer}</p>
          </details>
        ))}
      </div>
    </div>
    < Footer />
    </main>
  );
};

export default FAQ;
