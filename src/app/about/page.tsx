import { Target, Users, BarChart, ShieldCheck, Recycle } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="pt-24 min-h-screen">
            {/* Hero Section */}
            <section className="bg-emerald-950 py-20 text-white overflow-hidden relative">
                <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
                    <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-primary/30 rounded-full blur-[120px]"></div>
                </div>
                <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 italic">Pioneering Progress</h1>
                    <p className="text-xl text-emerald-100 max-w-3xl leading-relaxed">
                        Founded with a vision to redefine India&apos;s material independence,
                        Entellus Industries is bridging the gap in the global clean energy supply chain.
                    </p>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-24 bg-white dark:bg-emerald-900/50">
                <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="bg-emerald-50/50 dark:bg-emerald-800/40 p-10 rounded-3xl border border-emerald-100 dark:border-emerald-800">
                            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                                <Target size={24} />
                            </div>
                            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                            <p className="text-emerald-900/80 dark:text-emerald-100 leading-relaxed">
                                To establish a world-class manufacturing ecosystem for rare earth elements
                                and advanced materials in India, ensuring strategic sovereignty and
                                powering the transition to sustainable energy.
                            </p>
                        </div>
                        <div className="bg-emerald-50/50 dark:bg-emerald-800/40 p-10 rounded-3xl border border-emerald-100 dark:border-emerald-800">
                            <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent mb-6">
                                <BarChart size={24} />
                            </div>
                            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
                            <p className="text-emerald-900/80 dark:text-emerald-100 leading-relaxed">
                                To become a global leader in high-purity material science,
                                setting the benchmark for innovation, sustainability, and industrial
                                excellence by 2030.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Strategic Pillars */}
            <section className="py-24 bg-emerald-50/30 dark:bg-emerald-950">
                <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-display font-bold mb-4">Our Strategic Pillars</h2>
                        <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <Users />,
                                title: "Expertise-Driven",
                                desc: "Led by a team of material scientists and industry veterans with decades of experience in chemical engineering."
                            },
                            {
                                icon: <ShieldCheck />,
                                title: "Reliable Quality",
                                desc: "Adherence to the most stringent international standards for material purity and industrial consistency."
                            },
                            {
                                icon: <Recycle />,
                                title: "Eco-First Approach",
                                desc: "Minimizing environmental footprint through advanced closed-loop processing and waste neutralization."
                            }
                        ].map((pillar, i) => (
                            <div key={i} className="text-center p-8">
                                <div className="mx-auto w-16 h-16 bg-white dark:bg-emerald-800 rounded-full shadow-md flex items-center justify-center text-primary mb-6">
                                    {pillar.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3">{pillar.title}</h3>
                                <p className="text-sm text-emerald-900/70 dark:text-emerald-200 leading-relaxed">{pillar.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team CTA */}
            <section className="py-24 bg-primary text-white text-center">
                <div className="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-display font-bold mb-6">Want to be part of the material science revolution?</h2>
                    <p className="text-lg opacity-90 mb-10">We are always looking for visionary engineers and innovative thinkers to join our mission.</p>
                    <a href="/careers" className="bg-white text-primary px-10 py-3 rounded-full font-bold hover:bg-emerald-50 transition-all inline-block">
                        View Career Opportunities
                    </a>
                </div>
            </section>
        </div>
    );
}
