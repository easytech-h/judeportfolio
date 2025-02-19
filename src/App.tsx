import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, Linkedin, Mail, ExternalLink, Code2, Database, Wrench, Server, Menu, X, Terminal, Facebook, Instagram, Globe, Cpu, Cloud, Palette, ArrowRight } from 'lucide-react';
import Typewriter from 'typewriter-effect';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const skillsData = {
  frontend: {
    icon: Code2,
    title: "Front-end Development",
    description: "Building responsive and intuitive interfaces",
    skills: ["React", "Next.js","Vite", "TypeScript", "Tailwind CSS"]
  },
  backend: {
    icon: Server,
    title: "Back-end Development",
    description: "Creating robust server-side solutions",
    skills: ["Node.js", "Express", "Python"]
  },
  database: {
    icon: Database,
    title: "Database Management",
    description: "Efficient data architecture",
    skills: ["PostgreSQL", "MongoDB", "supabase", "Firebase"]
  },
  cloud: {
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "Scalable infrastructure solutions",
    skills: ["AWS", "Docker", "Kubernetes"]
  }
};

const projects = [
  {
    title: "RestaurantOS - Restaurant Management SaaS",
    description: "A comprehensive restaurant management system with features for order management, inventory tracking, staff scheduling, and real-time analytics. Includes POS integration and customer loyalty program management.",
    image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=800",
    tech: ["React", "Node.js", "PostgreSQL"],
    github: "https://github.com/easytech-h",
    
  },
  {
    title: "HotelHub - Hotel Management Platform",
    description: "All-in-one hotel management solution featuring reservation system, room management, housekeeping coordination, and guest services portal. Includes revenue management and forecasting tools.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800",
    tech: ["Next.js", "Supabase", "Vite", "TypeScript"],
    github: "https://github.com/easytech-h",
  },
  {
    title: "EduManage - School Management System",
    description: "Comprehensive school management platform with modules for student information, attendance tracking, grade management, and parent communication. Features curriculum planning and resource allocation tools.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800",
    tech: ["React", "Firebase", "Node.js"],
    github: "https://github.com/easytech-h",
  },
  {
    title: "HealthCore - Hospital Management System",
    description: "Advanced hospital management system with patient records management, appointment scheduling, pharmacy inventory, and billing integration. Includes telemedicine capabilities and lab result management.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800",
    tech: ["React", "Python", "PostgreSQL"],
    github: "https://github.com/easytech-h",
  },
  {
    title: "BusinessPro - Enterprise Management Suite",
    description: "Enterprise-grade business management solution with modules for HR, finance, inventory, and project management. Features advanced reporting and business intelligence tools.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    tech: ["React", "Node.js", "IndexDB"],
    github: "https://github.com/easytech-h",
  }
];

const experiences = [
  {
    period: "2024 - Present",
    title: "Senior Software Engineer",
    company: "Maurice Distribution,Easytech",
    description: "Leading development of enterprise-scale applications and mentoring junior developers",
    achievements: [
      "Reduced application load time by 60%",
      "Implemented CI/CD pipeline",
      "Led team of 5 developers"
    ]
  },
  {
    period: "2022 - 2024",
    title: "Software Developer ",
    company: "Yoncell , FC solar ,Up2date Fashion",
    description: "Leading development of enterprise-scale applications and mentoring junior developers",
    achievements: [
      "Reduced application load time by 60%",
      "Implemented CI/CD pipeline",
      "Led team of 5 developers"
    ]
  },
  {
    period: "2019 - 2022",
    title: "network administrator.",
    company: "Micro Crédit ",
    description: "As a Network Administrator at Micro Crédit, I was responsible for overseeing and maintaining the organization's network infrastructure, ensuring that all systems operated efficiently and securely ",
    achievements: [
      "Improved network security, implementing firewalls and security protocols that reduced unauthorized access incidents by 40%.",
      "Successfully managed and optimized the migration to a more efficient network infrastructure, enhancing data transfer speeds and reducing latency by 30%.",
      "Led the installation and configuration of a secure Virtual Private Network (VPN) for remote staff, enhancing access control and data protection."
    ]
  }
];

function Section({ children, id, className = "" }: { children: React.ReactNode; id: string; className?: string }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section
      ref={ref}
      id={id}
      className={`py-20 relative ${className}`}
    >
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeIn}
        className="relative z-10"
      >
        {children}
      </motion.div>
    </section>
  );
}

function ContactForm() {
  return (
    <motion.form 
      className="space-y-8 relative w-full max-w-2xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-green-500/5 to-transparent rounded-lg -z-10" />
      <div className="space-y-6">
        <div className="group">
          <label htmlFor="name" className="block text-lg font-medium text-slate-300 mb-3 group-focus-within:text-green-400 transition-colors">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="block w-full h-14 rounded-lg bg-slate-800/50 border-2 border-slate-700 text-slate-200 focus:border-green-500 focus:ring-green-500 text-lg transition-all duration-300 focus:shadow-[0_0_20px_rgba(74,222,128,0.1)]"
          />
        </div>
        
        <div className="group">
          <label htmlFor="email" className="block text-lg font-medium text-slate-300 mb-3 group-focus-within:text-green-400 transition-colors">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="block w-full h-14 rounded-lg bg-slate-800/50 border-2 border-slate-700 text-slate-200 focus:border-green-500 focus:ring-green-500 text-lg transition-all duration-300 focus:shadow-[0_0_20px_rgba(74,222,128,0.1)]"
          />
        </div>

        <div className="group">
          <label htmlFor="message" className="block text-lg font-medium text-slate-300 mb-3 group-focus-within:text-green-400 transition-colors">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={8}
            required
            className="block w-full rounded-lg bg-slate-800/50 border-2 border-slate-700 text-slate-200 focus:border-green-500 focus:ring-green-500 text-lg transition-all duration-300 focus:shadow-[0_0_20px_rgba(74,222,128,0.1)]"
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-green-500 text-slate-900 py-4 px-6 rounded-lg hover:bg-green-400 transition-all duration-300 font-medium text-lg flex items-center justify-center gap-2 group relative overflow-hidden"
      >
        <span className="relative z-10 flex items-center gap-2">
          Send Message
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </span>
        <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
      </button>
    </motion.form>
  );
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const menuItems = ["about", "compétences", "projets", "expérience", "contact"];
  const menuLabels = {
    "about": "About",
    "compétences": "Skills",
    "projets": "Projects",
    "expérience": "Experience",
    "contact": "Contact"
  };

  const socialLinks = [
    { 
      icon: Github, 
      href: "https://github.com/easytech-h", 
      label: "GitHub" 
    },
    { 
      icon: Linkedin, 
      href: "https://www.linkedin.com/in/jude-hawens-victor-995a83221", 
      label: "LinkedIn" 
    },
    { 
      icon: Facebook, 
      href: "https://www.facebook.com/judehawens.victor", 
      label: "Facebook" 
    },
    { 
      icon: Instagram, 
      href: "https://www.instagram.com/judehawens", 
      label: "Instagram" 
    },
    { 
      icon: Mail, 
      href: "mailto:pjudehawens12@gmail.com", 
      label: "Email" 
    }
  ];

  return (
    <div className="bg-slate-900 min-h-screen text-slate-200 relative bg-code-pattern">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.93),rgba(15,23,42,0.93))]" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Ctext x=\'30\' y=\'15\' font-family=\'monospace\' font-size=\'10\' fill=\'rgba(74, 222, 128, 0.15)\' text-anchor=\'middle\'%3E%7B%7D%3C/text%3E%3Ctext x=\'30\' y=\'30\' font-family=\'monospace\' font-size=\'8\' fill=\'rgba(74, 222, 128, 0.12)\' text-anchor=\'middle\'%3Efunction%3C/text%3E%3Ctext x=\'30\' y=\'45\' font-family=\'monospace\' font-size=\'12\' fill=\'rgba(74, 222, 128, 0.15)\' text-anchor=\'middle\'%3E()%3C/text%3E%3C/svg%3E')] bg-repeat opacity-50" />
      </div>

      <nav className="fixed w-full bg-slate-900/90 backdrop-blur-sm z-50 border-b border-green-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Terminal className="text-green-400 mr-2" />
              <span className="text-green-400 font-mono">~/portfolio</span>
            </div>
            
            <div className="hidden sm:flex sm:space-x-8">
              {menuItems.map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  className="inline-flex items-center px-1 pt-1 text-sm font-medium text-slate-200 hover:text-green-400 transition-colors"
                >
                  {menuLabels[item]}
                </a>
              ))}
            </div>

            <div className="flex items-center sm:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-200 hover:text-green-400 transition-colors"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="sm:hidden bg-slate-800/90 backdrop-blur-sm border-t border-green-500/10">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {menuItems.map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  className="block px-3 py-2 text-base font-medium text-slate-200 hover:text-green-400 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {menuLabels[item]}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      <div className="min-h-screen flex items-start pt-32 justify-center relative">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/95 to-slate-900" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(74,222,128,0.1)_0%,transparent_100%)]" />
        </div>
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative inline-block"
            >
              <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto rounded-full overflow-hidden border-4 border-green-500/20 mb-8 relative bg-slate-800">
                <img
                  src="https://i.imgur.com/RXG2GQB.jpeg"
                  alt="Profile"
                  className="200-full 200-full object-cover object-center transform scale-100"
                  style={{
                    objectPosition: "50% 15%",
                    imageRendering: "crisp-edges"
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-green-500/20 via-transparent to-transparent" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h1 className="text-4xl sm:text-6xl font-bold text-slate-200 mb-6">
                <Typewriter
                  options={{
                    strings: ['VICTOR Jude-Hawens', 'Software Developer & Administrative manager ', 'Problem Solver'],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 50,
                    delay: 80,
                  }}
                />
              </h1>
              <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-12">
                Crafting elegant solutions to complex problems with a focus on user experience and performance.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap justify-center gap-4 mb-12"
            >
              <a
                href="#contact"
                className="px-8 py-3 bg-green-500 text-slate-900 rounded-lg font-medium hover:bg-green-400 transition-all duration-300 flex items-center gap-2 group"
              >
                Contact Me
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#projets"
                className="px-8 py-3 border border-green-500/20 text-green-400 rounded-lg font-medium hover:bg-green-500/10 transition-all duration-300"
              >
                View Projects
              </a>
            </motion.div>

            <div className="flex justify-center space-x-6">
              {socialLinks.map((link, i) => (
                <motion.a
                  key={i}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-green-400 transition-colors relative group"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <link.icon size={24} />
                  <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-slate-800 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    {link.label}
                  </span>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Section id="about">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-200 mb-4">About</h2>
            <div className="w-20 h-1 bg-green-500 mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?auto=format&fit=crop&q=80&w=800"
                  alt="Working on computer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-green-500/20 via-transparent to-transparent" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="prose prose-invert max-w-none"
            >
              <div className="space-y-6">
                <p className="text-lg text-slate-300 leading-relaxed">
                  Passionate about programming for over 5 years, I specialize in creating modern and high-performance web applications. My approach combines technical creativity, attention to detail, and solid development expertise to deliver solutions that exceed user expectations.
                </p>
                
                <p className="text-lg text-slate-300 leading-relaxed">
                  As an administrative manager, I have developed strong project management skills, overseeing projects from start to finish while optimizing processes and coordinating teams efficiently.
                </p>
                
                <p className="text-lg text-slate-300 leading-relaxed">
                  Today, I am a freelancer and founder of my own company, EASYTECH, where I design custom systems for all types of businesses. Whether for startups, growing companies, or more established organizations, I am committed to delivering tailored solutions that meet each client's specific needs.
                </p>

                <div className="flex flex-wrap gap-4 pt-4">
                  <div className="flex items-center gap-2 text-green-400">
                    <Code2 className="w-5 h-5" />
                    <span>Web Development</span>
                  </div>
                  <div className="flex items-center gap-2 text-green-400">
                    <Database className="w-5 h-5" />
                    <span>Software developer</span>
                  </div>
                  <div className="flex items-center gap-2 text-green-400">
                    <Cloud className="w-5 h-5" />
                    <span>Database management system</span>
                  </div>
                  <div className="flex items-center gap-2 text-green-400">
                    <Palette className="w-5 h-5" />
                    <span>Cloud Solutions </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      <Section id="compétences">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-200 mb-4">Skills</h2>
            <div className="w-20 h-1 bg-green-500 mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skillsData).map(([key, category]) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group relative bg-slate-800/30 rounded-xl p-6 hover:bg-slate-800/50 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent rounded-xl" />
                <div className="relative">
                  <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-500/20 transition-colors">
                    <category.icon className="w-6 h-6 text-green-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-200 mb-2">{category.title}</h3>
                  <p className="text-slate-400 mb-4">{category.description}</p>
                  <div className="space-y-2">
                    {category.skills.map((skill) => (
                      <div key={skill} className="flex items-center">
                        <div className="w-1 h-1 bg-green-400 rounded-full mr-2" />
                        <span className="text-slate-300">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      <Section id="projets">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-200 mb-4">Projects</h2>
            <div className="w-20 h-1 bg-green-500 mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-slate-800/30 rounded-xl overflow-hidden hover:bg-slate-800/50 transition-all duration-300"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-slate-200">{project.title}</h3>
                  <p className="text-slate-400 mb-4 line-clamp-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-green-500/10 text-green-400 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-slate-400 hover:text-green-400 transition-colors"
                    >
                      <Github className="w-5 h-5 mr-2" />
                      Code
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-slate-400 hover:text-green-400 transition-colors"
                      >
                        <ExternalLink className="w-5 h-5 mr-2" />
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      <Section id="expérience">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-200 mb-4">Experience</h2>
            <div className="w-20 h-1 bg-green-500 mx-auto rounded-full" />
          </div>
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative pl-8 sm:pl-10 border-l-2 border-green-500/20"
              >
                <div className="absolute w-4 h-4 bg-green-500/20 rounded-full -left-[9px] top-0">
                  <div className="w-2 h-2 bg-green-400 rounded-full absolute top-1 left-1" />
                </div>
                <div className="mb-1">
                  <span className="text-sm text-green-400">{exp.period}</span>
                  <h3 className="text-xl font-semibold text-slate-200">{exp.title}</h3>
                  <p className="text-slate-400 mb-2">{exp.company}</p>
                </div>
                <p className="text-slate-400 mb-4">{exp.description}</p>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start">
                      <div className="w-1 h-1 bg-green-400 rounded-full mt-2 mr-2" />
                      <span className="text-slate-300">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      <Section id="contact" className="pb-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-200 mb-4">Contact</h2>
              <div className="w-20 h-1 bg-green-500 mx-auto rounded-full" />
              <p className="mt-6 text-slate-400 max-w-2xl mx-auto">
                Have a project in mind? Let's discuss how we can work together to create something amazing.
              </p>
            </motion.div>
          </div>

          <ContactForm />
        </div>
      </Section>
    </div>
  );
}

export default App;