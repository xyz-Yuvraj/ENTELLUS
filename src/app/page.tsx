import Link from "next/link";
import { ArrowRight, Zap, Shield, Recycle, Cpu, Globe, Rocket } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-emerald-950">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[120px] animate-pulse delay-700"></div>
          {/* Decorative Grid */}
          <div className="absolute inset-0 opacity-[0.15]" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        </div>

        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1 rounded-full text-xs font-semibold text-emerald-300 mb-6 animate-in fade-in slide-in-from-bottom-3 duration-500">
              <Zap size={14} />
              <span>India&apos;s Advanced Materials Pioneer</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-[1.1] animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
              Building India&apos;s <br />
              <span className="text-primary italic">Rare Earth</span> Future
            </h1>
            <p className="text-lg md:text-xl text-emerald-100 mb-8 max-w-2xl leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
              Entellus Industries is at the forefront of the advanced materials revolution,
              securing a sustainable and resilient supply chain for clean energy,
              EVs, and aerospace.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
              <Link
                href="/technology"
                className="bg-primary text-white px-8 py-4 rounded-full font-semibold hover:bg-primary/90 transition-all flex items-center justify-center space-x-2 group"
              >
                <span>Explore Our Technology</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/careers"
                className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all text-center"
              >
                Join Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-24 bg-white dark:bg-emerald-900/10 overflow-hidden">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative group overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2070"
                alt="Advanced Materials Processing"
                className="w-full h-full object-cover rounded-2xl transition-transform duration-700 group-hover:scale-110 aspect-[4/3] md:aspect-auto h-[400px]"
              />
              <div className="absolute inset-0 bg-emerald-950/20 group-hover:bg-emerald-950/10 transition-colors"></div>
              <div className="absolute bottom-6 right-6 bg-primary p-6 rounded-xl text-white shadow-xl hidden md:block backdrop-blur-md">
                <p className="text-3xl font-bold mb-1 font-display">0%</p>
                <p className="text-xs opacity-90 font-sans">Import Dependency Goal</p>
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-emerald-950 dark:text-white">
                Securing Strategic Materials for a Greener India
              </h2>
              <p className="text-lg text-emerald-950 dark:text-emerald-50 leading-relaxed font-sans">
                At Entellus, we specialize in the extraction and processing of rare earth elements
                and advanced materials that are critical for modern high-tech industries.
              </p>
              <div className="space-y-4 pt-4 text-emerald-950 dark:text-emerald-50">
                <div className="flex items-start space-x-3">
                  <div className="mt-1 w-5 h-5 bg-primary/10 rounded flex items-center justify-center text-primary">
                    <Shield size={14} />
                  </div>
                  <p><strong>Strategic Sovereignty:</strong> Reducing dependence on critical material imports.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="mt-1 w-5 h-5 bg-primary/10 rounded flex items-center justify-center text-primary">
                    <Recycle size={14} />
                  </div>
                  <p><strong>Sustainability:</strong> Implementing eco-friendly beneficiation and separation processes.</p>
                </div>
              </div>
              <div className="pt-6">
                <Link href="/about" className="text-primary font-semibold flex items-center space-x-2 hover:underline">
                  <span>Learn more about our mission</span>
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-24 bg-emerald-50/30 dark:bg-emerald-950">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-emerald-950 dark:text-white">Our Core Capabilities</h2>
            <p className="text-lg text-emerald-900/80 dark:text-emerald-100/80">
              Innovative solutions at the intersection of material science and manufacturing engineering.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Cpu className="w-10 h-10 text-primary" />,
                title: "Rare Earth Processing",
                desc: "Advanced chemical separation and refinement of heavy and light rare earth elements."
              },
              {
                icon: <Zap className="w-10 h-10 text-primary" />,
                title: "Advanced Materials",
                desc: "Specialized alloys and high-purity metals for high-performance industrial applications."
              },
              {
                icon: <Globe className="w-10 h-10 text-primary" />,
                title: "Sustainable Supply Chain",
                desc: "Cradle-to-gate transparency and eco-conscious manufacturing practices."
              }
            ].map((tech, i) => (
              <div key={i} className="bg-white dark:bg-emerald-900/50 p-8 rounded-2xl border border-emerald-100 dark:border-emerald-800 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="mb-6">{tech.icon}</div>
                <h3 className="text-xl font-bold mb-4 text-emerald-950 dark:text-white">{tech.title}</h3>
                <p className="text-emerald-900 dark:text-emerald-100 mb-6 text-sm leading-relaxed font-sans">{tech.desc}</p>
                <Link href="/technology" className="text-sm font-bold text-primary flex items-center space-x-2 group">
                  <span>Details</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      < section className="py-24 bg-emerald-950 text-white relative overflow-hidden" >
        <div className="absolute top-0 right-0 p-24 opacity-10">
          <Globe size={400} />
        </div>
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 italic">Powering Modern Industries</h2>
            <p className="text-lg text-emerald-100/60">
              Our materials are the building blocks of the technologies that define the 21st century.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Zap />, label: "Electric Vehicles" },
              { icon: <Recycle />, label: "Renewable Energy" },
              { icon: <Shield />, label: "Defense & Aerospace" },
              { icon: <Rocket />, label: "High-Tech Mfg" }
            ].map((impact, i) => (
              <div key={i} className="flex flex-col items-center text-center space-y-4 p-6 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary">
                  {impact.icon}
                </div>
                <span className="font-semibold">{impact.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section >

      {/* Investor Section */}
      < section className="py-24 bg-white dark:bg-emerald-900/10" >
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-emerald-50/50 dark:bg-emerald-900/20 rounded-3xl p-12 border border-emerald-100 dark:border-emerald-800 flex flex-col items-center text-center">
            <h2 className="text-3xl font-display font-bold mb-6 text-emerald-950 dark:text-white">Invest in India&apos;s Innovation Economy</h2>
            <p className="text-lg text-emerald-900/70 dark:text-emerald-100/70 max-w-2xl mb-10">
              Backed by leading institutional investors and strategic government partnerships,
              Entellus is scaling production to meet global demand.
            </p>
            <div className="flex flex-wrap justify-center gap-12 opacity-30 grayscale mb-12">
              {/* Placeholder for logos */}
              <div className="text-2xl font-bold font-display italic">INVESTOR ONE</div>
              <div className="text-2xl font-bold font-display italic">VENTURE ALPHA</div>
              <div className="text-2xl font-bold font-display italic">STRATEGIC FUND</div>
            </div>
            <Link href="/contact" className="bg-emerald-950 dark:bg-primary dark:text-emerald-950 text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-all shadow-lg shadow-emerald-900/20">
              Investor Relations
            </Link>
          </div>
        </div>
      </section >
    </div >
  );
}
