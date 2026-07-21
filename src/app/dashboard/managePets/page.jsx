"use client";

import React, { useEffect, useState } from 'react';
import { Pencil, TrashBin } from "@gravity-ui/icons";
import { getAllPets } from '@/lib/actions/pets';
import DeletePetModal from '@/app/components/dashboard/DeletePetModal';
import EditPetModal from '@/app/components/dashboard/EditModal';

const ManagePage = () => {
    const [pets, setPets] = useState([]);
    const [loading, setLoading] = useState(true);
    
    // Pagination controls
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    // Modal controls
    const [selectedPetId, setSelectedPetId] = useState(null);
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);

    const [editingPet, setEditingPet] = useState(null);
    const [isEditOpen, setIsEditOpen] = useState(false);

    const loadPets = async () => {
        try {
            const response = await getAllPets();
            const petList = response?.data || response;
            setPets(Array.isArray(petList) ? petList : []);
        } catch (error) {
            console.error("Failed to load pets", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadPets();
    }, []);

    const handleDeletedSuccess = (deletedId) => {
        setPets(pets.filter(p => p._id !== deletedId));
    };

    // Pagination calculations
    const totalPages = Math.ceil(pets.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentPets = pets.slice(startIndex, startIndex + itemsPerPage);

    if (loading) return <div className="text-center py-20 font-medium">Loading management data...</div>;

    return (
        <main className="max-w-7xl mx-auto px-4 py-10">
            <h1 className="text-3xl font-bold text-slate-800 mb-6">Manage Pet Collection</h1>

            <div className="bg-white rounded-xl shadow-md border border-slate-200 overflow-hidden">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-slate-100 border-b border-slate-200 text-slate-700 text-sm">
                            <th className="p-4">Photo</th>
                            <th className="p-4">Title & Category</th>
                            <th className="p-4">Price</th>
                            <th className="p-4 text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-sm">
                        {currentPets.length === 0 ? (
                            <tr>
                                <td colSpan="4" className="text-center py-6 text-slate-500">No pets found in database.</td>
                            </tr>
                        ) : (
                            currentPets.map((pet) => (
                                <tr key={pet._id} className="hover:bg-slate-50 transition">
                                    <td className="p-4">
                                        <img src={pet.image} alt={pet.name} className="w-14 h-14 object-cover rounded-lg border" />
                                    </td>
                                    <td className="p-4">
                                        <p className="font-bold text-slate-800">{pet.name}</p>
                                        <span className="text-xs bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-medium">{pet.category}</span>
                                    </td>
                                    <td className="p-4 font-semibold text-slate-700">${pet.price}</td>
                                    <td className="p-4 text-center space-x-2">
                                        <button 
                                            onClick={() => { setEditingPet(pet); setIsEditOpen(true); }}
                                            className="px-3 py-1.5 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 font-medium inline-flex items-center gap-1"
                                        >
                                            <Pencil className="size-4" /> Edit
                                        </button>
                                        <button 
                                            onClick={() => { setSelectedPetId(pet._id); setIsDeleteOpen(true); }}
                                            className="px-3 py-1.5 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 font-medium inline-flex items-center gap-1"
                                        >
                                            <TrashBin className="size-4" /> Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
                <div className="flex items-center justify-between mt-6 bg-white px-6 py-4 rounded-xl shadow-sm border border-slate-200">
                    <p className="text-sm text-slate-600">
                        Showing <span className="font-medium">{startIndex + 1}</span> to <span className="font-medium">{Math.min(startIndex + itemsPerPage, pets.length)}</span> of <span className="font-medium">{pets.length}</span> results
                    </p>
                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                            disabled={currentPage === 1}
                            className="px-3 py-1.5 border rounded-lg text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-50"
                        >
                            Previous
                        </button>
                        
                        <div className="flex gap-1">
                            {Array.from({ length: totalPages }, (_, index) => {
                                const pageNumber = index + 1;
                                return (
                                    <button
                                        key={pageNumber}
                                        onClick={() => setCurrentPage(pageNumber)}
                                        className={`px-3 py-1.5 rounded-lg text-sm font-medium transition ${
                                            currentPage === pageNumber
                                                ? 'bg-emerald-600 text-white'
                                                : 'border hover:bg-slate-50 text-slate-700'
                                        }`}
                                    >
                                        {pageNumber}
                                    </button>
                                );
                            })}
                        </div>

                        <button
                            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                            disabled={currentPage === totalPages}
                            className="px-3 py-1.5 border rounded-lg text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-50"
                        >
                            Next
                        </button>
                    </div>
                </div>
            )}

            {/* Delete Component Modal */}
            <DeletePetModal 
                petId={selectedPetId}
                isOpen={isDeleteOpen}
                onClose={() => { setIsDeleteOpen(false); setSelectedPetId(null); }}
                onDeleted={handleDeletedSuccess}
            />

            {/* Edit Component Modal */}
            <EditPetModal
                pet={editingPet}
                isOpen={isEditOpen}
                onClose={() => { setIsEditOpen(false); setEditingPet(null); }}
                onUpdated={loadPets}
            />
        </main>
    );
};

export default ManagePage;