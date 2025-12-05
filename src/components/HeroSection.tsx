import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-foreground text-primary-foreground relative overflow-hidden flex items-center"
    >
      {/* Geometric accent lines */}
      <div className="absolute top-1/4 left-0 w-32 h-px bg-primary-foreground/20" />
      <div className="absolute bottom-1/3 right-0 w-48 h-px bg-primary-foreground/20" />
      <div className="absolute top-0 right-1/4 w-px h-32 bg-primary-foreground/20" />

      <div className="section-padding w-full py-32">
        <div className="max-w-7xl mx-auto">
          {/* Top label */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="font-body text-xs tracking-[0.3em] uppercase text-primary-foreground/60">
              Full Stack Developer • 8 Years Experience
            </span>
          </motion.div>

          {/* Main Title */}
          <div className="relative">
            <motion.h1
              className="font-display text-[15vw] md:text-[12vw] lg:text-[10vw] leading-[0.85] tracking-tight"
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              DENNIS
            </motion.h1>
            <motion.h1
              className="font-display text-[15vw] md:text-[12vw] lg:text-[10vw] leading-[0.85] tracking-tight text-stroke-thin"
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              style={{
                WebkitTextStroke: "1px hsl(0 0% 100%)",
                color: "transparent",
              }}
            >
              FABROS
            </motion.h1>
          </div>

          {/* Subtitle and CTA */}
          <div className="mt-16 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <motion.p
              className="font-body text-lg md:text-xl max-w-md text-primary-foreground/80 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              Crafting exceptional digital experiences through code. Specializing in React, Node.js, and modern web technologies.
            </motion.p>

            <motion.div
              className="flex items-center gap-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <a
                href="/resume.pdf"
                download
                className="font-body text-sm tracking-widest uppercase border border-primary-foreground px-8 py-4 hover:bg-primary-foreground hover:text-foreground transition-all duration-300"
              >
                Resume
              </a>
              <a
                href="#projects"
                className="font-body text-sm tracking-widest uppercase link-underline"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                View Work
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <span className="font-body text-xs tracking-widest uppercase text-primary-foreground/60">
          Scroll
        </span>
        <motion.div
          className="w-px h-12 bg-primary-foreground/40"
          animate={{ scaleY: [1, 0.5, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
