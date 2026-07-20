import { getAllPets } from '@/lib/actions/pets';
import Link from 'next/link';
import React from 'react';

const HeroSectionPet = async () => {
    const response = await getAllPets();

    const pets = response?.data || response;
    const petsList = Array.isArray(pets) ? pets.slice(0, 6) : [];

    return (
        <main className="max-w-7xl mx-auto px-4 py-8">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold text-slate-800">Featured Pet Collection</h1>
                <Link 
                    href="/collection" 
                    className="text-emerald-600 hover:text-emerald-700 font-semibold text-sm transition-colors"
                >
                    See All Collection &rarr;
                </Link>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {petsList.map((pet) => {
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

            <div className="text-center mt-10">
                <Link href="/collection">
                    <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-6 py-3 rounded-lg shadow transition-colors">
                        Explore Full Collection
                    </button>
                </Link>
            </div>
        </main>
    );
};

export default HeroSectionPet;