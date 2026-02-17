import Link from "next/link";
import { Mail, MapPin, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-emerald-950 text-emerald-100/70 pt-16 pb-8 border-t border-emerald-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Company Info */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-primary flex items-center justify-center rounded-lg">
                                <span className="text-white font-display font-bold text-lg">E</span>
                            </div>
                            <span className="font-display font-bold text-xl tracking-tight text-white">
                                ENTELLUS
                            </span>
                        </div>
                        <p className="text-emerald-100/60 text-sm leading-relaxed">
                            Leading India&apos;s transition to a sustainable future through advanced material manufacturing and strategic rare earth processing.
                        </p>
                        <div className="flex space-x-4">
                            <Link href="#" className="hover:text-primary transition-colors">
                                <Linkedin size={20} />
                            </Link>
                            <Link href="#" className="hover:text-primary transition-colors">
                                <Twitter size={20} />
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-6">Explore</h4>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                            <li><Link href="/technology" className="hover:text-white transition-colors">Technology</Link></li>
                            <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-white font-semibold mb-6">Contact</h4>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start space-x-3">
                                <MapPin size={18} className="text-primary mt-0.5 shrink-0" />
                                <span>TIL-2, No 3, Club House Road, Chennai – 600 002, TamilNadu, India</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Mail size={18} className="text-primary shrink-0" />
                                <span>careers@entellusind.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter/CTA */}
                    <div>
                        <h4 className="text-white font-semibold mb-6">Stay Updated</h4>
                        <p className="text-sm mb-4">Subscribe to our newsletter for industry insights.</p>
                        <div className="flex flex-col space-y-2">
                            <input
                                type="email"
                                placeholder="Email address"
                                className="bg-emerald-900/50 border border-emerald-800 rounded-md px-4 py-2 text-sm text-white focus:outline-none focus:border-primary"
                            />
                            <button className="bg-primary text-white text-sm font-medium py-2 rounded-md hover:bg-primary/90 transition-all">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-emerald-900 flex flex-col md:flex-row justify-between items-center text-xs text-emerald-100/40">
                    <p>© {new Date().getFullYear()} Entellus Industries Private Limited. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link href="#" className="hover:text-emerald-100/60">Privacy Policy</Link>
                        <Link href="#" className="hover:text-emerald-100/60">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
