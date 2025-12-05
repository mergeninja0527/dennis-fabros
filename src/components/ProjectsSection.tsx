import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Full Stack",
    description: "A scalable e-commerce solution with payment gateway integration, inventory management, and real-time analytics.",
    tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
    year: "2024",
  },
  {
    id: 2,
    title: "Sneaker Bot Dashboard",
    category: "Frontend / Bot",
    description: "High-performance dashboard for managing sneaker bots with real-time monitoring, task scheduling, and proxy management.",
    tech: ["Electron", "React", "Node.js", "Discord.js"],
    year: "2023",
  },
  {
    id: 3,
    title: "NFT Marketplace",
    category: "Web3 / Full Stack",
    description: "Decentralized NFT platform with wallet integration, minting capabilities, and auction functionality.",
    tech: ["Next.js", "Solidity", "Web3.js", "IPFS"],
    year: "2023",
  },
  {
    id: 4,
    title: "Mobile Fitness App",
    category: "Mobile",
    description: "Cross-platform fitness application with workout tracking, nutrition logging, and social features.",
    tech: ["React Native", "Firebase", "Redux", "Node.js"],
    year: "2022",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredId, setHoveredId] = useState<number | null>(null);

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
                      className={`font-body text-xs tracking-widest uppercase transition-colors duration-300 ${
                        hoveredId === project.id ? "text-primary-foreground/60" : "text-muted-foreground"
                      }`}
                    >
                      {project.category}
                    </span>
                    <h3
                      className={`font-display text-4xl md:text-5xl mt-2 transition-colors duration-300 ${
                        hoveredId === project.id ? "text-primary-foreground" : "text-foreground"
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
                      className={`w-8 h-8 transition-colors duration-300 ${
                        hoveredId === project.id ? "text-primary-foreground" : "text-foreground"
                      }`}
                    />
                  </motion.div>
                </div>

                {/* Description */}
                <p
                  className={`font-body text-sm leading-relaxed mb-8 transition-colors duration-300 ${
                    hoveredId === project.id ? "text-primary-foreground/80" : "text-muted-foreground"
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
                        className={`font-body text-xs px-3 py-1 border transition-colors duration-300 ${
                          hoveredId === project.id
                            ? "border-primary-foreground/30 text-primary-foreground"
                            : "border-border text-foreground"
                        }`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <span
                    className={`font-display text-2xl transition-colors duration-300 ${
                      hoveredId === project.id ? "text-primary-foreground" : "text-foreground"
                    }`}
                  >
                    {project.year}
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
