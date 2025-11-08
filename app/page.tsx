import { Github, Linkedin, ArrowUpRight, Handshake } from 'lucide-react';
import ContactForm from './ContactForm';

// --- DATA: Updated with your company's information ---

const companyInfo = {
  name: "DoubleThink Solutions",
  brief: "Project Guy is an accessibility-first AI architecture, born from lived experience with PTSD, dyslexia, and aphasia, and amplified by input from the broader disabled community and health sector caretakers. Its design treats AI as a mental prosthetic, built to reduce cognitive load, protect perception, and ensure alignment that’s safe for all users, beginning with the most vulnerable, and never giving up on the most hostile.",
  github: "https://github.com/DoubleThinkSolutions",
  linkedin: "https://linkedin.com/company/doublethink-solutions",
};

const heroImages = [
  {
    src: "/nc-state.jpg",
    alt: "Autumn view of the Ohio State University campus library"
  },
  {
    src: "/fall.jpg",
    alt: "Sunlight filtering through trees in Hocking Hills State Park, Ohio"
  },
  {
    src: "/columbus.jpg",
    alt: "The Columbus, Ohio city skyline at dusk"
  },
];

const projects = [
  {
    name: "Project Guy",
    description: "An accessibility-first AI architecture designed as a mental prosthetic to reduce cognitive load, protect perception, and ensure human-compatible alignment.",
    url: "https://projectguyai.com",
    status: "Functional Prototype",
  },
  {
    name: "Open Source Panopticon (OSP)",
    description: "A system for external verification and creating 'Trust Packs' to keep AI agents like Project Guy grounded in verifiable reality.",
    url: "https://osp.doublethinksolutions.com",
    status: "Working Mobile App & Portal",
  },
];

const partnerships = [
    {
        name: "The Ohio State University, EBLC",
        description: "A formal partnership providing pro bono legal services. Law student interns have completed LLC formation and are drafting foundational IP and NDAs."
    },
    {
        name: "Microsoft AI for Accessibility",
        description: "Initial contact established with expressed interest from leadership, with follow-up conversations pending."
    }
];

const founders = [
  {
    name: "David Berlekamp",
    role: "CEO & Visionary",
    bio: "Leveraging lived experience and a deep background in systems thinking to pioneer accessibility-first AI alignment.",
    imageUrl: "/Decker_and_Dave_minus_background.png",
  },
  {
    name: "Benjamin Moen",
    role: "CTO & Lead Developer",
    bio: "Expertise in full stack development and scalable deployment, leading the technical implementation of core prototypes.",
    imageUrl: "/Founder-photo.png",
  },
];


// --- Main Page Component ---

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <div className="max-w-5xl mx-auto p-4 sm:p-6 lg:p-8 font-sans">
        <header className="flex justify-between items-center py-6 border-b border-slate-200 dark:border-slate-700">
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100">{companyInfo.name}</h1>
          <div className="flex items-center space-x-4">
            <a href={companyInfo.github} target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-teal-600 dark:text-slate-400 dark:hover:text-teal-400 transition-colors">
              <Github size={24} />
            </a>
            <a href={companyInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-teal-600 dark:text-slate-400 dark:hover:text-teal-400 transition-colors">
              <Linkedin size={24} />
            </a>
          </div>
        </header>

        <main className="mt-12 space-y-20">

          {/* Hero/About Section */}
          <section id="about" className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-6 leading-tight">Accessibility as Alignment</h2>
            <p className="text-lg sm:text-xl text-slate-700 dark:text-slate-300 leading-relaxed">
              {companyInfo.brief}
            </p>
          </section>
        
          {/* Key Relationships Section */}
          <section id="partnerships">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-8 text-center">Key Relationships</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {partnerships.map((partner) => (
                <div key={partner.name} className="p-6 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-2">{partner.name}</h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{partner.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Projects Section */}
          <section id="work">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-8 text-center">Our Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project) => (
                <a href={project.url} key={project.name} target="_blank" rel="noopener noreferrer" className="group block p-6 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl transition-all hover:shadow-lg hover:border-teal-500 dark:hover:border-teal-500">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">{project.name}</h3>
                    <ArrowUpRight className="text-slate-400 dark:text-slate-500 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors" size={20} />
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">{project.description}</p>
                  <span className="inline-block bg-teal-100 dark:bg-teal-900/30 text-teal-800 dark:text-teal-300 text-xs font-medium px-3 py-1 rounded-full">{project.status}</span>
                </a>
              ))}
            </div>
          </section>

          {/* Team Section */}
          <section id="founders">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-8 text-center">The Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {founders.map((founder) => (
                <div key={founder.name} className="group relative overflow-hidden bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300">
                  <div className="p-8">
                    <div className="flex flex-col items-center text-center">
                      <div className="relative mb-6">
                        <div className="absolute inset-0 bg-teal-500/20 dark:bg-teal-400/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                        <img
                          src={founder.imageUrl}
                          alt={founder.name}
                          className="relative w-32 h-32 rounded-full border-4 border-white dark:border-slate-700 shadow-lg object-cover object-center"
                        />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">{founder.name}</h3>
                      <p className="text-teal-600 dark:text-teal-400 font-semibold text-lg mb-4">{founder.role}</p>
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{founder.bio}</p>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                </div>
              ))}
            </div>
          </section>

          {/* Contact Form Section */}
          <section id="contact" className="p-8 sm:p-10 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-sm">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">Get in Touch</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-8 text-lg">Interested in our vision or want to discuss a partnership? We'd love to hear from you.</p>
            <ContactForm />
          </section>
        </main>

        <footer className="text-center py-8 mt-20 border-t border-slate-200 dark:border-slate-700">
          <p className="text-slate-500 dark:text-slate-400">&copy; {new Date().getFullYear()} {companyInfo.name}. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
