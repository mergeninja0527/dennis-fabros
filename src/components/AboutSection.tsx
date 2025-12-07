import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skills = {
  backend: ["PHP", "Python", "Node", "Golang", "Laravel", "Django", "Flask", "C++", "C#"],
  frontend: ["React", "Angular", "Vue", "Next.js", "TypeScript", "Tailwind CSS", "Electron"],
  mobile: ["React Native", "Flutter", "Swift", "Kotlin"],
  database: ["PostgreSQL", "MongoDB", "MySQL", "MSSQL"],
};

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 bg-background relative overflow-hidden">
      {/* Geometric accents */}

      <div className="section-padding max-w-7xl mx-auto" ref={ref}>
        <motion.div
          className="grid lg:grid-cols-2 gap-16 lg:gap-24"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Left Column */}
          <div>
            <motion.span
              className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              About Me
            </motion.span>

            <motion.h2
              className="font-display text-6xl md:text-8xl mt-4 leading-none"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
            >
              BUILDING
              <br />
              <span className="text-stroke">DIGITAL</span>
              <br />
              FUTURES
            </motion.h2>

            <motion.p
              className="font-body text-lg text-muted-foreground mt-8 leading-relaxed max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
            >
              Seasoned Full Stack Developer with 8+ years of hands-on experience in website UI/UX, 
              Sneaker bot Dashboard/Module development, Discord bots, NFT platforms, and Mobile app 
              development. I leverage broad development experience and technical expertise to deliver 
              exceptional solutions.
            </motion.p>

            <motion.div
              className="mt-12 flex gap-12"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
            >
              <div>
                <span className="font-display text-5xl">8+</span>
                <p className="font-body text-sm text-muted-foreground mt-1">Years Experience</p>
              </div>
              <div>
                <span className="font-display text-5xl">50+</span>
                <p className="font-body text-sm text-muted-foreground mt-1">Projects Completed</p>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Skills */}
          <div className="space-y-10">
            {Object.entries(skills).map(([category, items], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, x: 40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + categoryIndex * 0.1 }}
              >
                <h3 className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="font-body text-sm px-4 py-2 border border-border hover:bg-foreground hover:text-background transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
