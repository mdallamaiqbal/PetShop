import Link from 'next/link';
import React from 'react';

export default function NotFound() {
    return (
        <div className="min-h-[70vh] flex items-center justify-center px-4">
            <div className="text-center max-w-lg mx-auto bg-slate-50 border border-slate-200 rounded-2xl p-8 sm:p-12 shadow-sm">
                {/* 404 Icon / Emoji */}
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center text-4xl shadow-inner">
                    🐾
                </div>

                <h1 className="text-4xl font-extrabold text-slate-900 mb-2">404</h1>
                <h2 className="text-xl font-bold text-slate-800 mb-3">Page Not Found</h2>
                <p className="text-slate-600 text-sm leading-relaxed mb-8">
                    Oops! The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                </p>

                {/* Navigation Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link 
                        href="/" 
                        className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-600 text-white font-medium py-2.5 px-6 rounded-lg transition-colors shadow-sm text-sm"
                    >
                        Go to Home
                    </Link>
                    <Link 
                        href="/collection" 
                        className="w-full sm:w-auto bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 font-medium py-2.5 px-6 rounded-lg transition-colors text-sm"
                    >
                        Browse Pets
                    </Link>
                </div>
            </div>
        </div>
    );
}