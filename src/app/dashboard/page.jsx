import React from 'react';
import Link from 'next/link';

export default async function AdminDashboardPage() {
    return (
        <div className="space-y-8">
            {/* Top Welcome Header for Admin/Moderator */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-slate-800">Admin & Moderator Control Panel</h1>
                    <p className="text-sm text-slate-500 mt-1">Manage your pet collection, add new entries, and oversee inventory records.</p>
                </div>
                <div className="flex gap-3">
                    <Link 
                        href="/dashboard/addPets" 
                        className="bg-emerald-500 hover:bg-emerald-600 text-white font-medium py-2.5 px-4 rounded-lg transition-colors shadow-sm text-sm"
                    >
                        + Add New Pet
                    </Link>
                </div>
            </div>

            {/* Management Stats Cards (Focused strictly on Pets) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium text-slate-500">Manage Pets</p>
                            <h3 className="text-3xl font-bold text-slate-800 mt-1">Inventory</h3>
                        </div>
                        <div className="w-12 h-12 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-xl">
                            🐾
                        </div>
                    </div>
                    <Link href="/dashboard/managePets" className="text-xs text-emerald-600 font-medium mt-4 inline-block hover:underline">
                        Edit & Delete Pets &rarr;
                    </Link>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium text-slate-500">Add Pets</p>
                            <h3 className="text-3xl font-bold text-slate-800 mt-1">New Entry</h3>
                        </div>
                        <div className="w-12 h-12 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-xl">
                            ➕
                        </div>
                    </div>
                    <Link href="/dashboard/addPets" className="text-xs text-blue-600 font-medium mt-4 inline-block hover:underline">
                        Publish New Pet &rarr;
                    </Link>
                </div>
            </div>

            {/* Quick Management Shortcuts */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                <h2 className="text-lg font-bold text-slate-800 mb-4">Quick Management Actions</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Link 
                        href="/dashboard/addPets" 
                        className="p-4 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-colors flex flex-col justify-between"
                    >
                        <span className="font-semibold text-slate-800">Add Pet</span>
                        <span className="text-xs text-slate-500 mt-2">Publish a new pet profile to the platform</span>
                    </Link>
                    <Link 
                        href="/dashboard/managePets"  
                        className="p-4 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-colors flex flex-col justify-between"
                    >
                        <span className="font-semibold text-slate-800">Manage Pets</span>
                        <span className="text-xs text-slate-500 mt-2">Update information or remove existing listings</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}