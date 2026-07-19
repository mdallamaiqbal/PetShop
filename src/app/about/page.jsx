"use client";

import React from "react";
import { Card, CardBody } from "@heroui/react";
import { Heart, ShieldCheck, Truck, Users } from "lucide-react";

export default function AboutPage() {
    const stats = [
        { icon: <Heart className="w-6 h-6" />, title: "10k+ Pets Happy", desc: "Served across the country" },
        { icon: <ShieldCheck className="w-6 h-6" />, title: "Quality Assured", desc: "Vet-approved products" },
        { icon: <Truck className="w-6 h-6" />, title: "Fast Delivery", desc: "Same day dispatch" },
        { icon: <Users className="w-6 h-6" />, title: "Expert Team", desc: "Animal lovers at heart" },
    ];

    return (
        <div className="min-h-screen bg-slate-50 py-16 px-4">
            {/* Hero Section */}
            <div className="max-w-4xl mx-auto text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
                    Dedicated to Your <span className="text-emerald-600">Pet's Happiness</span>
                </h1>
                <p className="text-lg text-slate-600 leading-relaxed">
                    At PetShop, we believe that pets are family. Our mission is to provide high-quality supplies
                    and nutrition that help your furry, feathered, or scaled friends live their best lives.
                    Founded by animal enthusiasts, we strive to make pet care simple, affordable, and joyful.
                </p>
            </div>

            {/* Stats Grid */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                {stats.map((item, index) => (
                    <Card key={index} className="border-none shadow-md hover:shadow-emerald-100 transition-shadow">
                        <div className="flex flex-col items-center text-center p-6 gap-3">
                            <div className="p-3 bg-emerald-100 text-emerald-600 rounded-full">
                                {item.icon}
                            </div>
                            <h3 className="font-bold text-slate-900">{item.title}</h3>
                            <p className="text-sm text-slate-500">{item.desc}</p>
                        </div>
                    </Card>
                ))}
            </div>

            {/* Story Section */}
            <div className="max-w-5xl mx-auto bg-white rounded-3xl p-8 md:p-16 shadow-lg border border-slate-100">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Story</h2>

                <div className="space-y-4 text-slate-600 leading-relaxed">
                    <p>
                        PetShop was created with one simple mission—to help every pet find a loving home and every pet owner find a trusted place for quality care. We believe pets are more than animals; they are family, bringing happiness, loyalty, and unforgettable moments into our lives.
                    </p>

                    <p>
                        From adorable Dogs, Cats, Birds, Rabbits, and Mice to carefully selected food, toys, and accessories, we are committed to providing everything your companion needs. Our goal is to make pet ownership simple, joyful, and filled with confidence through trusted products and friendly support.
                    </p>
                </div>

            </div>
        </div>
    );
}