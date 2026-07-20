'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function PetCollectionClient({ initialPets, categories }) {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const filteredPets = initialPets.filter((pet) => {
        const matchesSearch = pet.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                              pet.description.toLowerCase().includes(searchQuery.toLowerCase());
        
        const matchesCategory = selectedCategory === 'All' || pet.category === selectedCategory;

        return matchesSearch && matchesCategory;
    });

    return (
        <div>
            {/* Search and Category Filter Section */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
                {/* Search Input */}
                <div className="w-full md:w-1/3">
                    <input
                        type="text"
                        placeholder="Search pets by name..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white text-slate-800"
                    />
                </div>

                {/* Category Buttons Filter */}
                <div className="w-full md:w-auto flex flex-wrap gap-2">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                                selectedCategory === category
                                    ? 'bg-emerald-500 text-white'
                                    : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>

            {/* Pets Grid */}
            {filteredPets.length === 0 ? (
                <div className="text-center py-12 text-slate-500">
                    <p className="text-lg">No pets found matching your criteria.</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {filteredPets.map((pet) => {
                        const petId = pet._id?.$oid || pet._id;

                        return (
                            <div 
                                key={petId} 
                                className="bg-slate-100 rounded-lg shadow-md overflow-hidden flex flex-col justify-between p-4 border border-slate-200"
                            >
                                <div>
                                    {/* Pet Image */}
                                    <div className="relative w-full h-48 mb-4 rounded-md overflow-hidden bg-white">
                                        <img
                                            src={pet.image}
                                            alt={pet.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    {/* Category Badge & Price */}
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-xs font-semibold px-2.5 py-1 rounded bg-slate-200 text-slate-700">
                                            {pet.category}
                                        </span>
                                        <span className="text-lg font-bold text-slate-900">
                                            ${pet.price?.toFixed(2)}
                                        </span>
                                    </div>

                                    <h2 className="text-xl font-semibold text-slate-800 mb-2">{pet.name}</h2>
                                    <p className="text-sm text-slate-600 line-clamp-3 mb-4">{pet.description}</p>
                                </div>

                                {/* View Details Button */}
                                <Link href={`/collection/${petId}`} className="w-full">
                                    <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200">
                                        View Details
                                    </button>
                                </Link>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}