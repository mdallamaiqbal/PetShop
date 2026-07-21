"use client";

import { updatePetData } from "@/lib/actions/pets";
import React, { useState, useEffect } from "react";

export default function EditPetModal({ pet, isOpen, onClose, onUpdated }) {
    const [editingPet, setEditingPet] = useState(pet);
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Sync local state when the selected pet prop changes
    useEffect(() => {
        setEditingPet(pet);
    }, [pet]);

    if (!isOpen || !editingPet) return null;

    const handleEditSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            const payload = {
                name: editingPet.name,
                description: editingPet.description,
                price: parseFloat(editingPet.price),
                category: editingPet.category,
                image: editingPet.image
            };

            const data = await updatePetData(editingPet._id, payload);
            if (data?.success) {
                alert("Pet updated successfully!");
                onUpdated();
                onClose();
            } else {
                alert("Failed to update pet");
            }
        } catch (error) {
            console.error("Update error:", error);
            alert("Something went wrong");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl max-w-lg w-full p-6 shadow-xl max-h-[90vh] overflow-y-auto">
                <h2 className="text-2xl font-bold text-emerald-700 mb-4">Edit Pet Details</h2>
                <form onSubmit={handleEditSubmit} className="space-y-4">
                    <div>
                        <label className="text-sm font-medium">Pet Name</label>
                        <input 
                            className="w-full border p-2 rounded mt-1" 
                            value={editingPet.name || ""} 
                            onChange={(e) => setEditingPet({...editingPet, name: e.target.value})} 
                            required 
                        />
                    </div>
                    <div>
                        <label className="text-sm font-medium">Description</label>
                        <textarea 
                            className="w-full border p-2 rounded mt-1" 
                            rows="3"
                            value={editingPet.description || ""} 
                            onChange={(e) => setEditingPet({...editingPet, description: e.target.value})} 
                            required 
                        />
                    </div>
                    <div>
                        <label className="text-sm font-medium">Price</label>
                        <input 
                            type="number" 
                            className="w-full border p-2 rounded mt-1" 
                            value={editingPet.price || ""} 
                            onChange={(e) => setEditingPet({...editingPet, price: e.target.value})} 
                            required 
                        />
                    </div>
                    <div>
                        <label className="text-sm font-medium">Category</label>
                        <select 
                            className="w-full border p-2 rounded mt-1"
                            value={editingPet.category || "Dog"}
                            onChange={(e) => setEditingPet({...editingPet, category: e.target.value})}
                        >
                            {["Dog", "Cat", "Bird", "Rabbit", "Hamster"].map(c => <option key={c} value={c}>{c}</option>)}
                        </select>
                    </div>
                    <div>
                        <label className="text-sm font-medium">Image URL</label>
                        <input 
                            className="w-full border p-2 rounded mt-1" 
                            value={editingPet.image || ""} 
                            onChange={(e) => setEditingPet({...editingPet, image: e.target.value})} 
                            required 
                        />
                    </div>
                    <div className="flex justify-end gap-3 pt-2">
                        <button type="button" onClick={onClose} className="px-4 py-2 border rounded-lg">Cancel</button>
                        <button type="submit" disabled={isSubmitting} className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 disabled:bg-gray-400">
                            {isSubmitting ? "Saving..." : "Save Changes"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}