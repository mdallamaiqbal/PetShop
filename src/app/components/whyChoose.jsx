import React from 'react';

const WhyChooseUs = () => {
    const features = [
        {
            icon: "🩺",
            title: "Vet-Checked & Vaccinated",
            description: "Every pet receives a comprehensive health examination and initial vaccinations from licensed veterinarians."
        },
        {
            icon: "🚚",
            title: "Safe & Secure Transport",
            description: "We ensure safe, comfortable, and stress-free transport or local pickup options for your new family member."
        },
        {
            icon: "🍲",
            title: "Premium Nutrition & Kits",
            description: "Get started right with expert-recommended premium pet foods, starter kits, and care supplies."
        },
        {
            icon: "💬",
            title: "24/7 Customer Care",
            description: "Our dedicated support team is always available to answer your questions and guide you every step of the way."
        }
    ];

    return (
        <section className="max-w-7xl mx-auto px-4 py-16">
            <div className="text-center mb-12">
                <span className="bg-emerald-100 text-emerald-800 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">Our Promise</span>
                <h2 className="text-3xl md:text-4xl font-extrabold mt-3 text-slate-800">Why Choose Our Pet Shop?</h2>
                <p className="text-slate-600 mt-2">We prioritize the health, safety, and happiness of every pet and owner.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {features.map((feature, index) => (
                    <div 
                        key={index} 
                        className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-emerald-500 transition-all duration-300 flex flex-col items-center text-center group"
                    >
                        <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-2xl mb-5 group-hover:scale-110 transition-transform duration-300">
                            {feature.icon}
                        </div>
                        <h3 className="text-lg font-bold text-slate-800 mb-2">{feature.title}</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">{feature.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WhyChooseUs;