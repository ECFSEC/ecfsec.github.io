import React, { useState, useEffect } from 'react';
import { Shield, Lock, EyeOff, Crosshair, Server, ChevronRight, Activity, Cpu, Menu, X, ArrowRight } from 'lucide-react';

const App = () => {
  const [view, setView] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [projects, setProjects] = useState([]);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    fetch('projects.json')
      .then(res => res.json())
      .then(data => setProjects(data))
      .catch(() => {
        setProjects([
          { id: 1, name: 'Project Nullify', description: 'Zero-day containment and eradication matrix deployed in hostile environments.', status: 'Active' },
          { id: 2, name: 'Blackout Protocol', description: 'Global threat neutralization grid. Disconnects compromised infrastructure instantly.', status: 'Classified' },
          { id: 3, name: 'Aegis Core', description: 'Immutable execution layer designed to trap and dissect polymorphic payloads.', status: 'Deployed' }
        ]);
      });

    fetch('blogs.json')
      .then(res => res.json())
      .then(data => setBlogs(data))
      .catch(() => {
        setBlogs([
          { id: 1, title: 'The Fallacy of Perimeter Defense', date: '2026.04.01', excerpt: 'Why traditional firewalls are obsolete against modern state-sponsored incursions.' },
          { id: 2, title: 'Architecting Paranoia', date: '2026.03.15', excerpt: 'Embedding zero-trust principles at the compiler level for absolute system integrity.' },
          { id: 3, title: 'Surgical Annihilation', date: '2026.02.28', excerpt: 'Case study: Neutralizing a self-replicating ransomware worm before network propagation.' }
        ]);
      });
  }, []);

  const navigate = (newView) => {
    setView(newView);
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const globalStyles = `
    @keyframes blob {
      0% { transform: translate(0px, 0px) scale(1); }
      33% { transform: translate(30px, -50px) scale(1.1); }
      66% { transform: translate(-20px, 20px) scale(0.9); }
      100% { transform: translate(0px, 0px) scale(1); }
    }
    .animate-blob {
      animation: blob 15s infinite alternate ease-in-out;
    }
    .nav-transition {
      transition: clip-path 0.7s cubic-bezier(0.86, 0, 0.07, 1);
    }
    .clip-circle-closed {
      clip-path: circle(0px at calc(100% - 3rem) 3rem);
    }
    .clip-circle-open {
      clip-path: circle(250% at calc(100% - 3rem) 3rem);
    }
    .glass-panel {
      background: rgba(5, 5, 5, 0.5);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      border: 1px solid rgba(39, 39, 42, 0.4);
    }
  `;

  const NavLinks = () => (
    <>
      {['home', 'about', 'projects', 'blogs', 'contact'].map((item) => (
        <button
          key={item}
          onClick={() => navigate(item)}
          className={`uppercase tracking-widest text-sm font-medium transition-colors hover:text-white ${view === item ? 'text-white' : 'text-zinc-500'}`}
        >
          {item}
        </button>
      ))}
    </>
  );

  const HomeView = () => (
    <div className="animate-in fade-in duration-700">
      <section className="relative pt-40 pb-32 px-6 flex flex-col justify-center min-h-[90vh] z-10">
        <div className="max-w-7xl mx-auto w-full">
          <div className="inline-block border border-zinc-800 glass-panel px-4 py-2 rounded-full text-xs font-semibold tracking-widest mb-8 text-zinc-300">
            ELITE CODE FORTIFICATION SECURITY
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white tracking-tighter leading-[1.1] mb-8 max-w-4xl drop-shadow-2xl">
            We architect absolute silence in the face of catastrophic threats.
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl leading-relaxed font-light mb-12">
            ECFSEC is a private, high‑integrity organization for security‑focused software engineers. We do not mitigate risk; we eradicate vulnerabilities with merciless precision before malicious actors can draw breath.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button onClick={() => navigate('contact')} className="bg-white text-black px-8 py-4 rounded-full font-semibold tracking-wide hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(255,255,255,0.1)]">
              INITIATE CONTACT <ChevronRight className="w-4 h-4" />
            </button>
            <button onClick={() => navigate('about')} className="glass-panel text-white px-8 py-4 rounded-full font-semibold tracking-wide hover:bg-zinc-900/80 transition-colors">
              VIEW CLASSIFIED DOCTRINE
            </button>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 z-10 relative">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">Tactical Operations</h2>
          <p className="text-zinc-400 mb-16 max-w-2xl text-lg">Our engineering protocols are ruthless. We deploy unrelenting defensive mechanisms designed to crush adversarial incursions upon impact.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 rounded-3xl glass-panel hover:border-zinc-500/50 transition-colors group">
              <Crosshair className="w-10 h-10 text-white mb-6 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
              <h3 className="text-xl font-bold text-white mb-3 tracking-wide">Adversarial Annihilation</h3>
              <p className="text-zinc-400 leading-relaxed text-sm">
                Surgical simulation of hostile state-actor breaches. We systematically dismantle your architecture to identify fatal flaws, weaponizing our findings to forge impenetrable infrastructure.
              </p>
            </div>
            <div className="p-8 rounded-3xl glass-panel hover:border-zinc-500/50 transition-colors group">
              <Server className="w-10 h-10 text-white mb-6 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
              <h3 className="text-xl font-bold text-white mb-3 tracking-wide">Cryptographic Quarantine</h3>
              <p className="text-zinc-400 leading-relaxed text-sm">
                Lethal containment strategies for volatile digital contagions. We isolate and dissect zero-day payloads in the abyss, neutralizing them before they can initiate catastrophic propagation.
              </p>
            </div>
            <div className="p-8 rounded-3xl glass-panel hover:border-zinc-500/50 transition-colors group">
              <EyeOff className="w-10 h-10 text-white mb-6 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
              <h3 className="text-xl font-bold text-white mb-3 tracking-wide">Perimeter Obliteration</h3>
              <p className="text-zinc-400 leading-relaxed text-sm">
                Advanced offensive security maneuvers masking as defense. We engineer shadow perimeters that actively retaliate against unauthorized telemetry and hostile reconnaissance sweeps.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  const AboutView = () => (
    <section className="py-40 px-6 min-h-screen z-10 relative flex items-center animate-in fade-in duration-700">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
        <div className="w-full lg:w-1/2">
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-square glass-panel rounded-3xl flex items-center justify-center p-8">
              <Lock className="w-full h-full text-zinc-600/50" strokeWidth={0.5} />
            </div>
            <div className="aspect-square glass-panel rounded-3xl flex items-center justify-center relative overflow-hidden">
              <Activity className="w-32 h-32 text-zinc-700/30 absolute -right-8 -bottom-8" />
            </div>
            <div className="aspect-square glass-panel rounded-3xl flex items-center justify-center relative overflow-hidden">
              <Cpu className="w-32 h-32 text-zinc-700/30 absolute -left-8 -top-8" />
            </div>
            <div className="aspect-square glass-panel rounded-3xl flex items-center justify-center p-8">
              <Shield className="w-full h-full text-zinc-600/50" strokeWidth={0.5} />
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-6">The Architecture of Fear</h2>
          <p className="text-zinc-300 text-lg leading-relaxed mb-6">
            Security is not a checkbox; it is the manifestation of paranoia engineered into immutable code. At ECFSEC, we operate in the shadows of the stack, identifying the microscopic fractures that lead to global systemic collapse.
          </p>
          <p className="text-zinc-300 text-lg leading-relaxed mb-8">
            We do not hire developers. We recruit architects of the abyss—individuals capable of staring into the void of compiled logic and anticipating the predatory instincts of the world's most dangerous adversaries.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-4 text-white glass-panel p-4 rounded-full">
              <div className="w-3 h-3 bg-white rounded-full"></div>
              <span className="font-medium tracking-wide">Zero Tolerance Configuration</span>
            </div>
            <div className="flex items-center gap-4 text-white glass-panel p-4 rounded-full">
              <div className="w-3 h-3 bg-white rounded-full"></div>
              <span className="font-medium tracking-wide">Hostile Environment Deployment</span>
            </div>
            <div className="flex items-center gap-4 text-white glass-panel p-4 rounded-full">
              <div className="w-3 h-3 bg-white rounded-full"></div>
              <span className="font-medium tracking-wide">Immutable Execution Layers</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  const ProjectsView = () => (
    <section className="py-40 px-6 min-h-screen z-10 relative animate-in fade-in duration-700">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">Active Fortifications</h2>
        <p className="text-zinc-400 mb-16 max-w-2xl text-lg">Classified architectural overhauls and grid neutralizations executed by our operatives.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((proj) => (
            <div key={proj.id} className="p-8 rounded-3xl glass-panel flex flex-col justify-between">
              <div>
                <div className="inline-block px-3 py-1 bg-white/10 text-white text-xs font-bold rounded-full mb-6 tracking-widest uppercase">
                  {proj.status}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{proj.name}</h3>
                <p className="text-zinc-400 leading-relaxed text-sm mb-8">{proj.description}</p>
              </div>
              <button className="text-white font-semibold flex items-center gap-2 hover:gap-4 transition-all text-sm tracking-widest">
                ACCESS RECORDS <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const BlogsView = () => (
    <section className="py-40 px-6 min-h-screen z-10 relative animate-in fade-in duration-700">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">Operational Intelligence</h2>
        <p className="text-zinc-400 mb-16 text-lg">Declassified findings, threat modeling theories, and architectural mandates.</p>
        <div className="space-y-6">
          {blogs.map((blog) => (
            <div key={blog.id} className="p-8 rounded-3xl glass-panel hover:bg-zinc-900/40 transition-colors cursor-pointer group">
              <div className="text-zinc-500 text-xs font-bold tracking-widest mb-3">{blog.date}</div>
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-zinc-300 transition-colors">{blog.title}</h3>
              <p className="text-zinc-400 leading-relaxed">{blog.excerpt}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const ContactView = () => (
    <section className="py-40 px-6 min-h-screen z-10 relative flex items-center justify-center animate-in fade-in duration-700">
      <div className="max-w-2xl w-full text-center glass-panel p-10 md:p-16 rounded-[3rem]">
        <Lock className="w-12 h-12 text-zinc-500 mx-auto mb-8" />
        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-6">Access is strictly regulated.</h2>
        <p className="text-zinc-400 text-lg leading-relaxed mb-10 mx-auto">
          ECFSEC operates beyond public scrutiny. Submitting your credentials does not guarantee acknowledgment.
        </p>
        <form className="space-y-6 text-left">
          <div>
            <label className="block text-xs font-bold tracking-widest text-zinc-400 mb-2 uppercase ml-2">Entity Designation</label>
            <input type="text" className="w-full bg-zinc-900/50 border border-zinc-700/50 focus:border-white text-white px-6 py-4 rounded-full outline-none transition-colors backdrop-blur-sm" />
          </div>
          <div>
            <label className="block text-xs font-bold tracking-widest text-zinc-400 mb-2 uppercase ml-2">Secure Comm Link</label>
            <input type="email" className="w-full bg-zinc-900/50 border border-zinc-700/50 focus:border-white text-white px-6 py-4 rounded-full outline-none transition-colors backdrop-blur-sm" />
          </div>
          <div>
            <label className="block text-xs font-bold tracking-widest text-zinc-400 mb-2 uppercase ml-2">Nature of Threat</label>
            <textarea rows={4} className="w-full bg-zinc-900/50 border border-zinc-700/50 focus:border-white text-white px-6 py-4 rounded-3xl outline-none transition-colors backdrop-blur-sm resize-none"></textarea>
          </div>
          <button type="button" className="w-full bg-white text-black font-bold tracking-widest py-4 rounded-full hover:bg-zinc-200 transition-colors mt-4 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
            SUBMIT FOR VERIFICATION
          </button>
        </form>
      </div>
    </section>
  );

  return (
    <div className="min-h-screen bg-[#050505] text-zinc-300 font-sans selection:bg-white selection:text-black relative overflow-hidden flex flex-col">
      <style dangerouslySetInnerHTML={{ __html: globalStyles }} />

      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[10%] left-[20%] w-[40rem] h-[40rem] bg-zinc-800/20 rounded-full mix-blend-screen filter blur-[120px] animate-blob"></div>
        <div className="absolute bottom-[10%] right-[10%] w-[45rem] h-[45rem] bg-zinc-900/40 rounded-full mix-blend-screen filter blur-[150px] animate-blob" style={{ animationDelay: '-5s' }}></div>
      </div>

      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'py-4' : 'py-6'}`}>
        <div className="absolute inset-0 glass-panel border-b-0 border-t-0 border-l-0 border-r-0 transition-opacity duration-300" style={{ opacity: scrolled ? 1 : 0 }}></div>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center relative z-10">
          <button onClick={() => navigate('home')} className="flex items-center gap-3 group">
            <Shield className="w-7 h-7 text-white group-hover:scale-110 transition-transform" />
            <span className="text-white font-bold tracking-widest text-xl">ECFSEC</span>
          </button>
          
          <div className="hidden md:flex gap-8 items-center glass-panel px-8 py-3 rounded-full">
            <NavLinks />
          </div>

          <button 
            className="md:hidden text-white z-50 p-2 glass-panel rounded-full"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      <div className={`fixed inset-0 z-40 md:hidden bg-[#050505]/90 backdrop-blur-2xl nav-transition ${isMobileMenuOpen ? 'clip-circle-open' : 'clip-circle-closed'} flex items-center justify-center`}>
        <div className="flex flex-col gap-10 items-center">
          <NavLinks />
        </div>
      </div>

      <main className="flex-grow z-10">
        {view === 'home' && <HomeView />}
        {view === 'about' && <AboutView />}
        {view === 'projects' && <ProjectsView />}
        {view === 'blogs' && <BlogsView />}
        {view === 'contact' && <ContactView />}
      </main>

      <footer className="py-8 px-6 border-t border-zinc-900/50 glass-panel z-10 text-center relative mt-auto">
        <p className="text-zinc-500 text-sm tracking-widest font-medium uppercase">
          &copy; {new Date().getFullYear()} ECFSEC. All rights reserved. Location: Undisclosed.
        </p>
      </footer>
    </div>
  );
};

export default App;