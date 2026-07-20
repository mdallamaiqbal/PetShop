import { getAllPets } from '@/lib/actions/pets';
import Link from 'next/link';
import React from 'react';
import PetCollectionClient from '../components/petCollectionClient';


const CollectionPage = async () => {
    const response = await getAllPets();
    
 
    const pets = response?.data || response;
    const petsList = Array.isArray(pets) ? pets : [];

    const categories = ['All', ...new Set(petsList.map((pet) => pet.category).filter(Boolean))];

    return (
        <main className="max-w-7xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6 text-slate-800">Our Pet Collection</h1>
            
            <PetCollectionClient initialPets={petsList} categories={categories} />
        </main>
    );
};

export default CollectionPage;