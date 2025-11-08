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
    <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8 font-sans">
      <header className="flex justify-between items-center py-4 border-b border-slate-200">
        <h1 className="text-2xl font-bold text-slate-800">{companyInfo.name}</h1>
        <div className="flex items-center space-x-4">
          <a href={companyInfo.github} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-slate-800 transition-colors">
            <Github size={24} />
          </a>
          <a href={companyInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-slate-800 transition-colors">
            <Linkedin size={24} />
          </a>
        </div>
      </header>

      <main className="mt-10 space-y-16">

        {/* About the Company Section */}
        <section id="about">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Accessibility as Alignment</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            {companyInfo.brief}
          </p>
        </section>
        
        {/* Key Relationships Section */}
        <section id="partnerships">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">Key Relationships</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {partnerships.map((partner) => (
              <div key={partner.name} className="p-4 bg-white border border-slate-200 rounded-lg">
                <h3 className="text-lg font-semibold text-slate-800">{partner.name}</h3>
                <p className="mt-1 text-sm text-slate-500">{partner.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Work in Progress Section */}
        <section id="work">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <a href={project.url} key={project.name} target="_blank" rel="noopener noreferrer" className="block p-6 bg-white border border-slate-200 rounded-lg transition-shadow hover:shadow-lg">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-semibold text-slate-800">{project.name}</h3>
                  <ArrowUpRight className="text-slate-400" size={20} />
                </div>
                <p className="mt-2 text-slate-500">{project.description}</p>
                <span className="mt-4 inline-block bg-teal-100 text-teal-800 text-xs font-medium px-2.5 py-0.5 rounded-full">{project.status}</span>
              </a>
            ))}
          </div>
        </section>

        {/* Founders Section */}
        <section id="founders">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">The Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {founders.map((founder) => (
              <div key={founder.name} className="flex items-start space-x-4">
                <img src={founder.imageUrl} alt={founder.name} className="w-24 h-24 rounded-full border-2 border-slate-200" />
                <div>
                  <h3 className="text-xl font-semibold text-slate-800">{founder.name}</h3>
                  <p className="text-teal-600 font-medium">{founder.role}</p>
                  <p className="mt-2 text-slate-500">{founder.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contact" className="p-8 bg-white border border-slate-200 rounded-lg">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Get in Touch</h2>
          <p className="text-slate-600 mb-6">Interested in our vision or want to discuss a partnership? We'd love to hear from you.</p>
          <ContactForm />
        </section>
      </main>

      <footer className="text-center py-8 mt-16 border-t border-slate-200">
        <p className="text-slate-500">&copy; {new Date().getFullYear()} {companyInfo.name}. All rights reserved.</p>
      </footer>
    </div>
  );
}
