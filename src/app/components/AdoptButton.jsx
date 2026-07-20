'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

export default function AdoptButton() {
    const router = useRouter();

    const handleAdopt = () => {
        alert("Thank you for adopting!");
        router.push('/');
    };

    return (
        <button 
            onClick={handleAdopt}
            className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-medium py-3 px-6 rounded-md transition-colors duration-200 shadow-sm text-lg cursor-pointer"
        >
            Adopt Now
        </button>
    );
}