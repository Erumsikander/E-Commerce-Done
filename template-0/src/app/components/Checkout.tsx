'use client'
import { useState, useEffect } from 'react'
import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js'
import convertToSubCurrency from '../lib/ConvertToSubCurrency'

const Checkout = ({ amount }: { amount: number }) => {
    const [URL, setURL] = useState('');
    const stripe = useStripe();
    const elements = useElements();

    const [errorMessage, setError] = useState<string>();
    const [clientSecret, setClientSecret] = useState('');
    const [loading, setLoading] = useState(false);

    // ✅ Fix: Wrap window usage inside useEffect
    useEffect(() => {
        const myhost = typeof window !== "undefined" ? window.location.host : "";
        if (myhost === 'localhost:3000') {
            setURL('http://localhost:3000');
        } else {
            setURL('https://e-commerce-done.vercel.app/checkout');
        }
    }, []);

    // ✅ API Call inside useEffect
    useEffect(() => {
        fetch('api/payment-intent', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ amount: convertToSubCurrency(amount) })
        })
            .then(res => res.json())
            .then(data => setClientSecret(data.clientSecret))
    }, [amount]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        if (!stripe || !elements) return;

        const { error: submitErrors } = await elements.submit();
        if (submitErrors) {
            setError(submitErrors.message);
            setLoading(false);
            return;
        }

        const { error } = await stripe.confirmPayment({
            elements,
            clientSecret,
            confirmParams: {
                return_url: `${URL}/payment-success?amount=${amount}`
            }
        });

        if (error) {
            setError(error.message);
        } else {
            setError('');
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className='p-8'>
            {clientSecret && <PaymentElement />}
            <button className='w-full bg-black text-white py-2 mt-5'>Pay Now</button>
        </form>
    );
}

export default Checkout;
