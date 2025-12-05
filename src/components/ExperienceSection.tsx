import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    period: "02/2023 - 05/2025",
    company: "007PercentLLC",
    role: "Software Engineer | Frontend & Backend Developer | Mobile Developer",
    description:
      "Collaborated with management and development partners on software design and project progress. Built applications using Node, React, Angular, React Native, Firebase, and implemented CI/CD pipelines.",
    technologies: ["Node", "React", "Angular", "React Native", "Firebase", "Fastlane", "Codepush"],
  },
  {
    period: "03/2022 - 02/2023",
    company: "Ocean Capital",
    role: "Software Engineer",
    description:
      "Designed robust Magento PHP backend systems following best practices. Created appealing interfaces with React, Vue.js, and Tailwind CSS. Achieved 99.9% uptime using AWS EC2 and S3.",
    technologies: ["PHP", "React", "Vue.js", "Next.js", "AWS", "Tailwind CSS"],
  },
  {
    period: "11/2018 - 02/2022",
    company: "OneModelPlaceLLC",
    role: "Full Stack Engineer | React & React Native Developer",
    description:
      "Reduced bundle size by 35% through optimization techniques. Implemented CI/CD pipelines and worked with AWS technologies including Lambda, API Gateway, ECS, and DynamoDB.",
    technologies: ["React", "React Native", "Redux", "AWS Lambda", "DynamoDB", "Storybook"],
  },
  {
    period: "03/2018 - Present",
    company: "Freelance",
    role: "Full Stack Developer (Remote)",
    description:
      "Website UI/UX development, Sneaker AIO bot development, Chrome extensions, Electron apps, web scraping, Discord bots, and mobile app development with various payment and API integrations.",
    technologies: ["Electron", "Discord.js", "Puppeteer", "Stripe", "PayPal", "Firebase"],
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-32 bg-muted relative">
      <div className="section-padding max-w-7xl mx-auto" ref={ref}>
        <motion.div
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div>
            <span className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground">
              Career Path
            </span>
            <h2 className="font-display text-6xl md:text-8xl mt-4 leading-none">
              EXPERIENCE
            </h2>
          </div>
          <p className="font-body text-muted-foreground max-w-sm mt-6 md:mt-0">
            A journey through impactful roles and innovative projects
          </p>
        </motion.div>

        <div className="space-y-0">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="border-t border-border py-12 group"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.1 }}
            >
              <div className="grid md:grid-cols-12 gap-6 md:gap-12">
                {/* Period */}
                <div className="md:col-span-2">
                  <span className="font-body text-sm text-muted-foreground">
                    {exp.period}
                  </span>
                </div>

                {/* Company & Role */}
                <div className="md:col-span-4">
                  <h3 className="font-display text-3xl group-hover:text-stroke transition-all duration-300">
                    {exp.company}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground mt-2">
                    {exp.role}
                  </p>
                </div>

                {/* Description */}
                <div className="md:col-span-6">
                  <p className="font-body text-foreground/80 leading-relaxed">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="font-body text-xs px-3 py-1 bg-background border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
