import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Icon } from "@iconify/react";
import "../assets/css/project.css"

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Full Stack Web",
    description: "A scalable e-commerce solution with payment gateway integration, inventory management, and real-time analytics.",
    tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
  },
  {
    id: 2,
    title: "Sneaker Bot Dashboard",
    category: "Bots & Automation",
    description: "High-performance dashboard for managing sneaker bots with real-time monitoring, task scheduling, and proxy management.",
    tech: ["Electron", "React", "Node.js", "Discord.js"],
  },
  {
    id: 3,
    title: "NFT Marketplace",
    category: "Web3 / Blockchain",
    description: "Decentralized NFT platform with wallet integration, minting capabilities, and auction functionality.",
    tech: ["Next.js", "Solidity", "Web3.js", "IPFS"],
  },
  {
    id: 4,
    title: "Mobile Fitness App",
    category: "Mobile Apps",
    description: "Cross-platform fitness application with workout tracking, nutrition logging, and social features.",
    tech: ["React Native", "Firebase", "Redux", "Node.js"],
  },
  {
    id: 5,
    title: "Resume AI",
    category: "AI / Machine Learning",
    description: "AI-powered resume screening system using NLP for skill matching and scoring.",
    tech: ["Python", "Django", "PostgreSQL", "Tailwind CSS"],
  },
  {
    id: 6,
    title: "StockDesk",
    category: "Full Stack Web",
    description: "Real-time stock trading dashboard with automated bot strategies and charting.",
    tech: ["React", "Node.js", "MongoDB", "WebSockets"],
  },
  {
    id: 7,
    title: "TicketFlow",
    category: "Full Stack Web",
    description: "Secure event ticketing platform with QR validation and payment support.",
    tech: ["Laravel", "MySQL", "React", "Stripe"],
  },
  {
    id: 8,
    title: "SmartHome",
    category: "IoT / Hardware",
    description: "IoT home automation controller with voice commands and scheduling features.",
    tech: ["Flutter", "Firebase", "Node.js", "MQTT"],
  },
  {
    id: 9,
    title: "CryptoTrack",
    category: "Web3 / Blockchain",
    description: "Wallet-connected crypto dashboard with analytics, history, and staking.",
    tech: ["Next.js", "TypeScript", "Web3.js", "PostgreSQL"],
  },
  {
    id: 10,
    title: "Learnify",
    category: "Full Stack Web",
    description: "Online learning system with courses, quizzes, video modules, and certificates.",
    tech: ["Vue", "PHP", "Laravel", "MySQL"],
  },
  {
    id: 11,
    title: "ChatWave",
    category: "Mobile Apps",
    description: "Secure real-time chat app with end-to-end encryption and media sharing.",
    tech: ["React Native", "Node.js", "WebSockets", "MongoDB"],
  },
  {
    id: 12,
    title: "VaultX",
    category: "Desktop Software",
    description: "Encrypted password manager with offline mode, generator, and sync options.",
    tech: ["Electron", "Golang", "SQLite", "React"],
  },
  {
    id: 13,
    title: "FitDash",
    category: "Data & Visualization",
    description: "Visual fitness dashboard with progress charts, stats, and goal tracking.",
    tech: ["Angular", "TypeScript", "Node.js", "MongoDB"],
  },
  {
    id: 14,
    title: "Customizer 3D",
    category: "E-Commerce",
    description: "3D product customizer with pricing logic and checkout integration.",
    tech: ["React", "Three.js", "Node.js", "Stripe"],
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [activeView, setActiveView] = useState<'menu' | 'paragraph' | null>(null);
  const [hoveredButton, setHoveredButton] = useState<'menu' | 'paragraph' | null>(null);

  return (
    <section id="projects" className="py-32 bg-background relative">
      <div className="section-padding max-w-7xl mx-auto" ref={ref}>
        <motion.div
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div>
            <span className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground">
              Selected Work
            </span>
            <h2 className="font-display text-6xl md:text-8xl mt-4 leading-none">
              PROJECTS
            </h2>
          </div>
          <p className="font-body text-muted-foreground max-w-sm mt-6 md:mt-0">
            A curated selection of projects showcasing technical expertise and creative solutions
          </p>
        </motion.div>
        <div className="sort-method">
          <div className="seaerch-box">
            <Icon className="search-icon" icon="uil:search" />
            <input type="text" />
          </div>
          <div className="sort-btn-group">
            <button 
              className="sort-btn sort-btn-menu"
              onClick={() => setActiveView('menu')}
              onMouseEnter={() => setHoveredButton('menu')}
              onMouseLeave={() => setHoveredButton(null)}
              style={{ 
                borderBottom: activeView === 'menu' ? '1px solid black' : 'none',
                cursor: 'pointer'
              }}
            >
              <Icon icon="subway:menu" />
            </button>
            <button 
              className="sort-btn sort-btn-paragraph"
              onClick={() => setActiveView('paragraph')}
              onMouseEnter={() => setHoveredButton('paragraph')}
              onMouseLeave={() => setHoveredButton(null)}
              style={{ 
                borderBottom: activeView === 'paragraph' ? '1px solid black' : 'none',
                cursor: 'pointer'
              }}
            >
              <Icon icon="subway:paragraph" />
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group relative border border-border p-8 md:p-12 cursor-pointer overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.1 }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Background fill on hover */}
              <motion.div
                className="absolute inset-0 bg-foreground"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: hoveredId === project.id ? 1 : 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                style={{ originY: 1 }}
              />

              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-start justify-between mb-8">
                  <div>
                    <span
                      className={`font-body text-xs tracking-widest uppercase transition-colors duration-300 ${hoveredId === project.id ? "text-primary-foreground/60" : "text-muted-foreground"
                        }`}
                    >
                      {project.category}
                    </span>
                    <h3
                      className={`font-display text-4xl md:text-5xl mt-2 transition-colors duration-300 ${hoveredId === project.id ? "text-primary-foreground" : "text-foreground"
                        }`}
                    >
                      {project.title}
                    </h3>
                  </div>
                  <motion.div
                    animate={{
                      x: hoveredId === project.id ? 0 : -10,
                      y: hoveredId === project.id ? 0 : 10,
                      opacity: hoveredId === project.id ? 1 : 0.5,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <ArrowUpRight
                      className={`w-8 h-8 transition-colors duration-300 ${hoveredId === project.id ? "text-primary-foreground" : "text-foreground"
                        }`}
                    />
                  </motion.div>
                </div>

                {/* Description */}
                <p
                  className={`font-body text-sm leading-relaxed mb-8 transition-colors duration-300 ${hoveredId === project.id ? "text-primary-foreground/80" : "text-muted-foreground"
                    }`}
                >
                  {project.description}
                </p>

                {/* Footer */}
                <div className="flex items-end justify-between">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className={`font-body text-xs px-3 py-1 border transition-colors duration-300 ${hoveredId === project.id
                          ? "border-primary-foreground/30 text-primary-foreground"
                          : "border-border text-foreground"
                          }`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <span
                    className={`font-display text-2xl transition-colors duration-300 ${hoveredId === project.id ? "text-primary-foreground" : "text-foreground"
                      }`}
                  >
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

