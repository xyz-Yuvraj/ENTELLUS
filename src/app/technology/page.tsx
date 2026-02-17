import { Layers, Zap, Hexagon, Microscope, Settings, Activity, Globe } from "lucide-react";

export default function TechnologyPage() {
    return (
        <div className="pt-24 min-h-screen">
            {/* Hero Section */}
            <section className="bg-emerald-950 overflow-hidden relative py-24">
                <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-2xl">
                        <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">Our Technology</h1>
                        <p className="text-xl text-emerald-100/70">
                            Transforming complex ores into high-purity materials through cutting-edge extraction
                            and proprietary chemical processing techniques.
                        </p>
                    </div>
                </div>
                <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border-[1px] border-primary/40 rounded-full animate-spin-slow"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border-[1px] border-accent/40 rounded-full animate-reverse-spin-slow"></div>
                </div>
            </section>

            {/* Processing Pipeline */}
            <section className="py-24 bg-white dark:bg-emerald-950">
                <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-display font-bold mb-12 text-center">Material Processing Pipeline</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {[
                            {
                                step: "01",
                                title: "Ores & Mineral Beneficiation",
                                desc: "Initial concentration of rare earth elements from mineral ores using eco-friendly flotation and magnetic separation.",
                                icon: <Hexagon />
                            },
                            {
                                step: "02",
                                title: "Hydrometallurgical Extraction",
                                desc: "Precise leaching and purification of material concentrates to remove impurities and prepare for element separation.",
                                icon: <Activity />
                            },
                            {
                                step: "03",
                                title: "Fractional Solvent Extraction",
                                desc: "Our core strength: proprietary multi-stage solvent extraction systems for individual element separation with >99.9% purity.",
                                icon: <Settings />
                            },
                            {
                                step: "04",
                                title: "Rare Earth Oxides",
                                desc: "Precipitation and calcination of separated elements into high-grade oxides ready for industrial applications.",
                                icon: <Layers />
                            },
                            {
                                step: "05",
                                title: "Metallurgical Reduction",
                                desc: "Converting oxides into high-purity metallic form for use in advanced magnet and alloy manufacturing.",
                                icon: <Zap />
                            },
                            {
                                step: "06",
                                title: "R&D Lab / Testing",
                                desc: "Extensive quality control using ICP-MS and SEM analysis to guarantee material composition and performance.",
                                icon: <Microscope />
                            }
                        ].map((step, i) => (
                            <div key={i} className="group p-8 rounded-2xl border border-emerald-100 dark:border-emerald-800 hover:border-primary/30 transition-all bg-emerald-50/30 dark:bg-emerald-900/40">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="p-3 bg-primary/10 rounded-lg text-primary group-hover:scale-110 transition-transform">
                                        {step.icon}
                                    </div>
                                    <span className="text-4xl font-display font-black text-emerald-100 dark:text-emerald-800">{step.step}</span>
                                </div>
                                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                                <p className="text-emerald-900/60 dark:text-emerald-400 text-sm leading-relaxed">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Applications Section */}
            <section className="py-24 bg-emerald-950 text-white">
                <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-display font-bold mb-8">Purity that Powers the Planet</h2>
                            <ul className="space-y-6">
                                <li className="flex items-start space-x-4">
                                    <div className="mt-1 bg-emerald-800 px-2 py-1 rounded text-emerald-300 text-xs font-bold">NdPr</div>
                                    <div>
                                        <h4 className="font-bold">Neodymium-Praseodymium</h4>
                                        <p className="text-sm text-emerald-100/60 font-sans">Essential for high-performance permanent magnets used in EV motors and wind turbines.</p>
                                    </div>
                                </li>
                                <li className="flex items-start space-x-4">
                                    <div className="mt-1 bg-emerald-800 px-2 py-1 rounded text-emerald-300 text-xs font-bold">DyTb</div>
                                    <div>
                                        <h4 className="font-bold">Dysprosium & Terbium</h4>
                                        <p className="text-sm text-emerald-100/60">Critical heavy rare earths for heat-stable magnets in demanding aerospace and defense systems.</p>
                                    </div>
                                </li>
                                <li className="flex items-start space-x-4">
                                    <div className="mt-1 bg-emerald-800 px-2 py-1 rounded text-emerald-300 text-xs font-bold">LaCe</div>
                                    <div>
                                        <h4 className="font-bold">Lanthanum & Cerium</h4>
                                        <p className="text-sm text-emerald-100/60">Crucial for catalytic converters, glass polishing, and optical lenses.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-emerald-900/40 p-8 rounded-3xl border border-emerald-800 aspect-video flex items-center justify-center">
                            <div className="text-center">
                                <Globe size={80} className="mx-auto mb-6 text-primary animate-pulse" />
                                <p className="text-emerald-100/80 italic">&quot;Advancing India&apos;s Material Science Frontier&quot;</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sustainable Manufacturing */}
            <section className="py-24 bg-white dark:bg-emerald-950">
                <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
                    <h2 className="text-3xl font-display font-bold mb-12 text-center">Responsible Production</h2>
                    <div className="max-w-4xl text-center space-y-6">
                        <p className="text-lg text-emerald-900/60 dark:text-emerald-400">
                            Rare earth processing is historically energy-intensive and chemically challenging.
                            At Entellus, we&apos;re pioneering a cleaner way. Our facilities implement
                            closed-loop water recycling, solar-powered beneficiation, and zero-liquid-discharge
                            waste management protocols.
                        </p>
                        <div className="flex flex-wrap justify-center gap-6 pt-6 font-sans">
                            <div className="px-6 py-2 bg-emerald-50 text-emerald-700 rounded-full text-sm font-medium border border-emerald-100">95% Water Recycled</div>
                            <div className="px-6 py-2 bg-emerald-50 text-emerald-700 rounded-full text-sm font-medium border border-emerald-100">Zero Waste Discharge</div>
                            <div className="px-6 py-2 bg-emerald-50 text-emerald-700 rounded-full text-sm font-medium border border-emerald-100">ISO 14001 Certified Goal</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
