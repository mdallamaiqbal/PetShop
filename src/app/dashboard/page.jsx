import React from 'react';
import Link from 'next/link';

export default async function AdminDashboardPage() {
    return (
        <div className="space-y-8">
            {/* Top Welcome Header for Admin/Moderator */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-slate-800">Admin & Moderator Control Panel</h1>
                    <p className="text-sm text-slate-500 mt-1">Manage platform contents, review adoption requests, and oversee users.</p>
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

            {/* Management Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium text-slate-500">Manage Pets</p>
                            <h3 className="text-3xl font-bold text-slate-800 mt-1">24</h3>
                        </div>
                        <div className="w-12 h-12 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-xl">
                            🐾
                        </div>
                    </div>
                    <Link href="#"  className="text-xs text-emerald-600 font-medium mt-4 inline-block hover:underline">
                        Edit & Delete Pets &rarr;
                    </Link>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium text-slate-500">Adoption Requests</p>
                            <h3 className="text-3xl font-bold text-slate-800 mt-1">8</h3>
                        </div>
                        <div className="w-12 h-12 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-xl">
                            📋
                        </div>
                    </div>
                    <Link href="#"  className="text-xs text-blue-600 font-medium mt-4 inline-block hover:underline">
                        Review Requests &rarr;
                    </Link>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium text-slate-500">Total Users</p>
                            <h3 className="text-3xl font-bold text-slate-800 mt-1">48</h3>
                        </div>
                        <div className="w-12 h-12 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center font-bold text-xl">
                            👥
                        </div>
                    </div>
                    <Link href="#"  className="text-xs text-purple-600 font-medium mt-4 inline-block hover:underline">
                        Manage Users &rarr;
                    </Link>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium text-slate-500">System Logs</p>
                            <h3 className="text-3xl font-bold text-slate-800 mt-1">142</h3>
                        </div>
                        <div className="w-12 h-12 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center font-bold text-xl">
                            🛡️
                        </div>
                    </div>
                    <span className="text-xs text-amber-600 font-medium mt-4 inline-block">Secure & Healthy</span>
                </div>
            </div>

            {/* Quick Actions & Recent Platform Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Quick Shortcuts */}
                <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                    <h2 className="text-lg font-bold text-slate-800 mb-4">Quick Management Actions</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <Link 
                            href="/dashboard/addPets" 
                            className="p-4 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-colors flex flex-col justify-between"
                        >
                            <span className="font-semibold text-slate-800">Add Pet</span>
                            <span className="text-xs text-slate-500 mt-2">Publish a new pet profile</span>
                        </Link>
                        <Link 
                            href="#"  
                            className="p-4 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-colors flex flex-col justify-between"
                        >
                            <span className="font-semibold text-slate-800">Manage Pets</span>
                            <span className="text-xs text-slate-500 mt-2">Update or remove listings</span>
                        </Link>
                        <Link 
                            href="#" 
                            className="p-4 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-colors flex flex-col justify-between"
                        >
                            <span className="font-semibold text-slate-800">Adoptions</span>
                            <span className="text-xs text-slate-500 mt-2">Approve/reject requests</span>
                        </Link>
                        <Link 
                            href="#" 
                            className="p-4 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-colors flex flex-col justify-between"
                        >
                            <span className="font-semibold text-slate-800">User Control</span>
                            <span className="text-xs text-slate-500 mt-2">View roles and accounts</span>
                        </Link>
                    </div>
                </div>

                {/* Recent Admin Logs */}
                <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                    <h2 className="text-lg font-bold text-slate-800 mb-4">Recent System Activities</h2>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between p-3 rounded-lg bg-slate-50 border border-slate-100">
                            <div className="flex items-center gap-3">
                                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                                <div>
                                    <p className="text-sm font-medium text-slate-800">New pet profile created</p>
                                    <span className="text-xs text-slate-500">Added by Admin</span>
                                </div>
                            </div>
                            <span className="text-xs text-slate-400">10m ago</span>
                        </div>

                        <div className="flex items-center justify-between p-3 rounded-lg bg-slate-50 border border-slate-100">
                            <div className="flex items-center gap-3">
                                <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
                                <div>
                                    <p className="text-sm font-medium text-slate-800">Adoption request approved</p>
                                    <span className="text-xs text-slate-500">Handled by Moderator</span>
                                </div>
                            </div>
                            <span className="text-xs text-slate-400">1h ago</span>
                        </div>

                        <div className="flex items-center justify-between p-3 rounded-lg bg-slate-50 border border-slate-100">
                            <div className="flex items-center gap-3">
                                <span className="w-2.5 h-2.5 rounded-full bg-purple-500"></span>
                                <div>
                                    <p className="text-sm font-medium text-slate-800">New user registered</p>
                                    <span className="text-xs text-slate-500">Standard user role</span>
                                </div>
                            </div>
                            <span className="text-xs text-slate-400">3h ago</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}