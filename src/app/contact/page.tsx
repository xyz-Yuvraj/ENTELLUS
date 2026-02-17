import { Mail, MapPin, Send, MessageSquare } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="pt-24 min-h-screen bg-emerald-50/10 dark:bg-emerald-950">
            {/* Header */}
            <section className="bg-emerald-950 py-20 text-white">
                <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Connect with Entellus</h1>
                    <p className="text-xl text-emerald-100/70 max-w-2xl">
                        Whether you&apos;re a potential partner, investor, or job seeker,
                        we&apos;re eager to hear from you.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-24">
                <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

                        {/* Contact Info */}
                        <div className="space-y-12">
                            <div>
                                <h3 className="text-xl font-bold mb-6 text-emerald-950 dark:text-white">Our Offices</h3>
                                <div className="space-y-6">
                                    <div className="flex items-start space-x-4">
                                        <div className="w-10 h-10 bg-white dark:bg-emerald-900/30 rounded-lg flex items-center justify-center text-primary shadow-sm border border-emerald-100 dark:border-emerald-800">
                                            <MapPin size={20} />
                                        </div>
                                        <div>
                                            <p className="font-bold text-emerald-950 dark:text-white">INDIA CORPORATE OFFICE</p>
                                            <p className="text-sm text-emerald-900/60 dark:text-emerald-400 font-sans">
                                                3rd Floor, TIL-2,<br />
                                                No 3, Club House Road,<br />
                                                Chennai – 600 002<br />
                                                TamilNadu, India
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold mb-6 text-emerald-950 dark:text-white">Connect Directly</h3>
                                <div className="space-y-6">
                                    <div className="flex items-center space-x-4">
                                        <div className="w-10 h-10 bg-white dark:bg-emerald-900/30 rounded-lg flex items-center justify-center text-primary shadow-sm border border-emerald-100 dark:border-emerald-800">
                                            <Mail size={20} />
                                        </div>
                                        <p className="text-sm font-medium text-emerald-900/80 dark:text-emerald-200">careers@entellusind.com</p>
                                    </div>
                                    <div className="flex items-center space-x-4">
                                        <div className="w-10 h-10 bg-white dark:bg-emerald-900/30 rounded-lg flex items-center justify-center text-primary shadow-sm border border-emerald-100 dark:border-emerald-800">
                                            <MessageSquare size={20} />
                                        </div>
                                        <p className="text-sm font-medium text-emerald-900/80 dark:text-emerald-200">Investor Relations: ir@entellus.in</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Form */}
                        <div className="lg:col-span-2 bg-white dark:bg-emerald-900/20 p-8 md:p-12 rounded-3xl shadow-xl border border-emerald-100 dark:border-emerald-800">
                            <h3 className="text-2xl font-bold mb-8 italic text-emerald-950 dark:text-white">Send us an Inquiry</h3>
                            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-emerald-950 dark:text-emerald-100">Full Name</label>
                                    <input type="text" className="w-full bg-emerald-50/50 dark:bg-emerald-900/40 border border-emerald-100 dark:border-emerald-800 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-all text-emerald-950 dark:text-white" placeholder="John Doe" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-emerald-950 dark:text-emerald-100">Email Address</label>
                                    <input type="email" className="w-full bg-emerald-50/50 dark:bg-emerald-900/40 border border-emerald-100 dark:border-emerald-800 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-all text-emerald-950 dark:text-white" placeholder="john@company.com" />
                                </div>
                                <div className="space-y-2 md:col-span-2">
                                    <label className="text-sm font-semibold text-emerald-950 dark:text-emerald-100">Inquiry Type</label>
                                    <select className="w-full bg-emerald-50/50 dark:bg-emerald-900/40 border border-emerald-100 dark:border-emerald-800 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-all appearance-none text-emerald-950 dark:text-white">
                                        <option className="bg-white dark:bg-emerald-950">General Business Partnership</option>
                                        <option className="bg-white dark:bg-emerald-950">Investor Inquiry</option>
                                        <option className="bg-white dark:bg-emerald-950">Material Supply Info</option>
                                        <option className="bg-white dark:bg-emerald-950">Career Inquiry</option>
                                        <option className="bg-white dark:bg-emerald-950">Other</option>
                                    </select>
                                </div>
                                <div className="space-y-2 md:col-span-2">
                                    <label className="text-sm font-semibold text-emerald-950 dark:text-emerald-100">Message</label>
                                    <textarea className="w-full bg-emerald-50/50 dark:bg-emerald-900/40 border border-emerald-100 dark:border-emerald-800 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-all h-32 text-emerald-950 dark:text-white" placeholder="Tell us about your requirements..."></textarea>
                                </div>
                                <div className="md:col-span-2">
                                    <button type="submit" className="w-full bg-primary text-white font-bold py-4 rounded-xl hover:bg-primary/90 transition-all flex items-center justify-center space-x-2 shadow-lg shadow-primary/20">
                                        <span>Send Message</span>
                                        <Send size={18} />
                                    </button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </section>

            {/* Map Placeholder */}
            <section className="h-[400px] w-full bg-emerald-50 dark:bg-emerald-950 border-t border-emerald-100 dark:border-emerald-800 flex items-center justify-center grayscale">
                <div className="text-center">
                    <MapPin size={48} className="mx-auto mb-4 text-emerald-300 dark:text-emerald-800" />
                    <p className="text-emerald-900/40 dark:text-emerald-700 font-display font-bold">Interactive Map Component Placeholder</p>
                </div>
            </section>
        </div>
    );
}
