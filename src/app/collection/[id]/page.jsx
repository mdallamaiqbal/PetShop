
import AdoptButton from '@/app/components/AdoptButton';
import { getSinglePet } from '@/lib/actions/pets';
import { getUserSession } from '@/lib/core/session';
import Link from 'next/link';
import React from 'react';

const PetDetailsPage = async ({ params }) => {
    const { id } = await params;
    
    const [response, user] = await Promise.all([
        getSinglePet(id),
        getUserSession()
    ]);

    const pet = response?.data || response;

    if (!pet) {
        return (
            <div className="max-w-7xl mx-auto px-4 py-16 text-center">
                <h1 className="text-2xl font-bold text-slate-800 mb-4">Pet Not Found</h1>
                <p className="text-slate-600 mb-6">The pet you are looking for does not exist or has been removed.</p>
                <Link href="/collection" className="bg-emerald-500 hover:bg-emerald-600 text-white font-medium py-2 px-4 rounded-md transition-colors">
                    Back to Collection
                </Link>
            </div>
        );
    }

    const authorizedRoles = ["admin", "moderator"];
    const isRestrictedUser = user && authorizedRoles.includes(user.role);

    return (
        <main className="max-w-5xl mx-auto px-4 py-12">
            <Link href="/collection" className="inline-block mb-6 text-emerald-600 hover:text-emerald-700 font-semibold text-sm transition-colors">
                &larr; Back to Collection
            </Link>

            <div className="bg-slate-100 rounded-xl shadow-md overflow-hidden border border-slate-200 grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-8">
                {/* Pet Image */}
                <div className="relative w-full h-80 md:h-full min-h-[300px] rounded-lg overflow-hidden bg-white shadow-inner">
                    <img
                        src={pet.image}
                        alt={pet.name}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Pet Details Info */}
                <div className="flex flex-col justify-between">
                    <div>
                        <div className="flex items-center justify-between mb-3">
                            <span className="text-xs font-semibold px-3 py-1 rounded bg-slate-200 text-slate-700 uppercase tracking-wider">
                                {pet.category}
                            </span>
                            <span className="text-2xl font-bold text-emerald-600">
                                ${pet.price?.toFixed(2)}
                            </span>
                        </div>

                        <h1 className="text-3xl font-bold text-slate-900 mb-4">{pet.name}</h1>
                        <p className="text-slate-700 leading-relaxed mb-6">{pet.description}</p>
                    </div>
                    {!user ? (
                        <Link 
                            href="/auth/login" 
                            className="w-full bg-slate-700 hover:bg-slate-800 text-white font-medium py-3 px-6 rounded-md transition-colors duration-200 shadow-sm text-lg text-center block"
                        >
                            Please Login to Adopt
                        </Link>
                    ) : isRestrictedUser ? (
                        <div className="bg-amber-100 text-amber-800 p-3 rounded-md text-center text-sm font-medium border border-amber-200">
                            Admins and moderators cannot adopt pets.
                        </div>
                    ) : (
                        <AdoptButton />
                    )}
                </div>
            </div>
        </main>
    );
};

export default PetDetailsPage;