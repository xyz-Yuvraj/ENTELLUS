import { Briefcase, GraduationCap, Heart, Rocket, Users, ArrowRight } from "lucide-react";

const openings = [
    {
        title: "Senior Process Engineer (Hydrometallurgy)",
        location: "Bengaluru, India",
        type: "Full-time",
        dept: "Engineering"
    },
    {
        title: "Material Scientist - Rare Earth Separation",
        location: "Bengaluru, India",
        type: "Full-time",
        dept: "R&D"
    },
    {
        title: "Supply Chain Manager",
        location: "Bengaluru, India",
        type: "Full-time",
        dept: "Operations"
    },
    {
        title: "Chemical Lab Technician",
        location: "Bengaluru, India",
        type: "Full-time",
        dept: "Quality Control"
    }
];

export default function CareersPage() {
    return (
        <div className="pt-24 min-h-screen">
            {/* Hero Section */}
            <section className="bg-emerald-950 py-24 text-white text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px]"></div>
                </div>
                <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">Build the Future of Advanced Materials</h1>
                    <p className="text-xl text-emerald-100/70 mb-10">
                        Join a mission-driven team working on the frontier of material science and strategic manufacturing.
                    </p>
                    <a href="#openings" className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-bold transition-all inline-block shadow-lg shadow-primary/20">
                        View Open Positions
                    </a>
                </div>
            </section>

            {/* Why Work with Us */}
            <section className="py-24 bg-white dark:bg-emerald-900/10">
                <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-display font-bold text-emerald-950 dark:text-white">Why Work at Entellus?</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: <Rocket />, title: "Innovation First", desc: "Work on cutting-edge separation technologies and material science breakthroughs." },
                            { icon: <Heart />, title: "Impactful Work", desc: "Contribute directly to India's energy transition and strategic material sovereignty." },
                            { icon: <GraduationCap />, title: "Growth & Learning", desc: "Continuous professional development and mentorship from industry veterans." },
                            { icon: <Users />, title: "Collaborative Culture", desc: "A diverse team of engineers and scientists solving complex problems together." }
                        ].map((item, i) => (
                            <div key={i} className="text-center p-6 border border-emerald-100 dark:border-emerald-800 rounded-2xl bg-emerald-50/30 dark:bg-emerald-900/40">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-4">
                                    {item.icon}
                                </div>
                                <h3 className="font-bold mb-2 text-emerald-950 dark:text-white">{item.title}</h3>
                                <p className="text-sm text-emerald-950 dark:text-emerald-50">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Openings Section */}
            <section id="openings" className="py-24 bg-emerald-50/10 dark:bg-emerald-950">
                <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-display font-bold mb-12 text-center text-emerald-950 dark:text-white">Current Opportunities</h2>

                    <div className="space-y-4">
                        {openings.map((job, i) => (
                            <div key={i} className="bg-white dark:bg-emerald-900/30 p-6 rounded-xl border border-emerald-100 dark:border-emerald-800 shadow-sm hover:border-primary/50 transition-all flex flex-col md:flex-row justify-between items-start md:items-center group">
                                <div>
                                    <div className="text-xs font-bold text-primary mb-1 uppercase tracking-wider">{job.dept}</div>
                                    <h3 className="text-xl font-bold mb-2 text-emerald-950 dark:text-white">{job.title}</h3>
                                    <div className="flex space-x-4 text-sm text-emerald-900/80 dark:text-emerald-200 font-sans">
                                        <span className="flex items-center space-x-1"><Briefcase size={14} /> <span>{job.type}</span></span>
                                        <span>{job.location}</span>
                                    </div>
                                </div>
                                <button className="mt-4 md:mt-0 px-6 py-2 border-2 border-primary text-primary font-bold rounded-full hover:bg-primary hover:text-white transition-all text-sm">
                                    Apply Now
                                </button>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 bg-emerald-900/20 dark:bg-emerald-900/30 p-10 rounded-3xl text-center border border-emerald-100 dark:border-emerald-800">
                        <h3 className="text-2xl font-bold mb-4 italic text-emerald-950 dark:text-white">Don&apos;t see a role that fits?</h3>
                        <p className="text-emerald-900/80 dark:text-emerald-300 mb-8 max-w-lg mx-auto">We&apos;re always looking for exceptional talent. Send your resume to our general pool.</p>
                        <a href="mailto:careers@entellusind.com" className="text-primary font-bold hover:underline flex items-center justify-center space-x-2">
                            <span>careers@entellusind.com</span>
                            <ArrowRight size={18} />
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
