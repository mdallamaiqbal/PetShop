"use client";
import React, { useState } from 'react';

const HomeFAQ = () => {
    const [activeIndex, setActiveIndex] = useState(0); 

    const faqs = [
        {
            question: "What types of pets do you have available?",
            answer: "We offer a wide variety of healthy and happy pets, including cats, dogs, rabbits, birds, and hamsters, all raised with proper care and love."
        },
        {
            question: "Are all pets vaccinated and health-checked?",
            answer: "Yes! Every pet goes through a thorough health examination by a licensed veterinarian and receives their initial vaccinations before coming home with you."
        },
        {
            question: "Do you provide pet food and supplies as well?",
            answer: "Absolutely. We stock premium pet foods, toys, grooming essentials, and accessories to make sure you have everything your new pet needs."
        },
        {
            question: "What is your adoption or purchase process?",
            answer: "You can browse our collection online or visit our shop. Our team will guide you through the process, answer your care questions, and ensure a smooth transition for your new pet."
        }
    ];

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="max-w-4xl mx-auto px-4 py-16">
            <div className="text-center mb-12">
                <span className="bg-emerald-100 text-emerald-800 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">Got Questions?</span>
                <h2 className="text-3xl md:text-4xl font-extrabold mt-3 text-slate-800">Frequently Asked Questions</h2>
                <p className="text-slate-600 mt-2">Everything you need to know about welcoming your new furry or feathered friend.</p>
            </div>

            <div className="space-y-4">
                {faqs.map((faq, index) => {
                    const isOpen = activeIndex === index;
                    return (
                        <div 
                            key={index} 
                            className={`border rounded-xl transition-all duration-300 overflow-hidden ${
                                isOpen ? 'border-emerald-500 shadow-md bg-emerald-50/20' : 'border-slate-200 bg-white hover:border-slate-300'
                            }`}
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                            >
                                <span className={`text-lg font-semibold transition-colors ${isOpen ? 'text-emerald-700' : 'text-slate-800'}`}>
                                    {faq.question}
                                </span>
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 ${
                                    isOpen ? 'bg-emerald-500 text-white rotate-180' : 'bg-slate-100 text-slate-600'
                                }`}>
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                            </button>
                            
                            <div className={`transition-all duration-300 ease-in-out overflow-hidden ${
                                isOpen ? 'max-h-96 opacity-100 pb-6 px-6' : 'max-h-0 opacity-0 px-6'
                            }`}>
                                <p className="text-slate-600 text-base leading-relaxed border-t border-slate-100 pt-4">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default HomeFAQ;