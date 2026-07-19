"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { createPetData } from "@/lib/actions/pets";

export default function PetSubmissionForm() {
    const router = useRouter();

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");

    const [imageFile, setImageFile] = useState(null);
    const [imagePreview, setImagePreview] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    
    const [errors, setErrors] = useState({});
    const [hasSubmitted, setHasSubmitted] = useState(false);

    const categories = ["Dog", "Cat", "Bird", "Rabbit", "Hamster"];

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImageFile(file);
            setImagePreview(URL.createObjectURL(file));
        }
    };

    const handleRemoveImage = () => {
        setImageFile(null);
        setImagePreview("");
    };

    const validateForm = () => {
        const newErrors = {};
        if (!name.trim() || name.length < 3) newErrors.name = "Name must be at least 3 characters";
        if (!description.trim() || description.length < 10) newErrors.description = "Description must be at least 10 characters";
        if (!price || parseFloat(price) <= 0) newErrors.price = "Enter a valid price";
        if (!category) newErrors.category = "Please select a category";
        if (!imageFile) newErrors.image = "Image is required";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setHasSubmitted(true);

        if (!validateForm()) return;

        setIsSubmitting(true);

        // Image Upload
        const formData = new FormData();
        formData.append("image", imageFile);
        
        try {
            const response = await fetch(`https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMAGE_UPLOAD_API}`, {
                method: "POST",
                body: formData,
            });
            const data = await response.json();
            
            if (!data.success) throw new Error("Upload failed");

            const petData = { name, description, price: parseFloat(price), category, image: data.data.url };

            await createPetData(petData);
            alert("Pet added successfully!");
            router.push('/dashboard/managePets');
        } catch (error) {
            alert("Submission failed.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="w-full max-w-2xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-md border border-gray-200">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <h2 className="text-2xl font-bold text-emerald-700">🐾 Add New Pet</h2>

                {/* Name */}
                <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium">Pet Name</label>
                    <input 
                        className={`border p-2 rounded ${hasSubmitted && errors.name ? 'border-red-500' : 'border-gray-300'}`}
                        value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter pet name" 
                    />
                    {hasSubmitted && errors.name && <span className="text-red-500 text-xs">{errors.name}</span>}
                </div>

                {/* Description */}
                <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium">Description</label>
                    <textarea 
                        className={`border p-2 rounded ${hasSubmitted && errors.description ? 'border-red-500' : 'border-gray-300'}`}
                        value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Describe the pet..." rows={4}
                    />
                </div>

                {/* Image */}
                <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium">Pet Image</label>
                    <input type="file" accept="image/*" onChange={handleImageChange} className="block w-full text-sm border p-2 rounded" />
                    {imagePreview && (
                        <div className="mt-2 flex items-center gap-4">
                            <img src={imagePreview} alt="Preview" className="h-20 w-20 object-cover rounded" />
                            <button type="button" onClick={handleRemoveImage} className="text-red-600 text-sm hover:underline">Remove</button>
                        </div>
                    )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* Price */}
                    <div className="flex flex-col gap-1">
                        <label className="text-sm font-medium">Price</label>
                        <input 
                            type="number" className="border p-2 rounded border-gray-300"
                            value={price} onChange={(e) => setPrice(e.target.value)} placeholder="0.00" 
                        />
                    </div>

                    {/* Category */}
                    <div className="flex flex-col gap-1">
                        <label className="text-sm font-medium">Category</label>
                        <select 
                            value={category} onChange={(e) => setCategory(e.target.value)}
                            className="border p-2 rounded border-gray-300"
                        >
                            <option value="">Select Type</option>
                            {categories.map(c => <option key={c} value={c}>{c}</option>)}
                        </select>
                    </div>
                </div>

                <button 
                    type="submit" disabled={isSubmitting}
                    className="bg-emerald-600 text-white py-2 px-4 rounded hover:bg-emerald-700 disabled:bg-gray-400"
                >
                    {isSubmitting ? "Saving..." : "Save Pet"}
                </button>
            </form>
        </div>
    );
}