import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Github, ExternalLink } from "lucide-react";

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "E-commerce Backend",
      description: "Full-featured backend system with REST APIs, user authentication, and clean layered architecture. Implements secure data handling and optimized database queries.",
      tech: ["Spring Boot", "MySQL", "REST APIs"],
      features: ["REST APIs", "Authentication", "Layered Architecture"],
      github: "https://github.com/Chaitany840",
      gradient: "from-purple-600/20 to-blue-600/20",
      borderGradient: "from-purple-500/50 to-blue-500/50",
    },
    {
      title: "URL Shortener (Bit.ly Clone)",
      description: "High-performance URL shortening service with custom hashing algorithm, fast redirection, and optimized database indexing for millions of URLs.",
      tech: ["Java", "Backend", "Database Optimization"],
      features: ["Custom Hashing", "Fast Redirection", "Optimized Indexing"],
      github: "https://github.com/Chaitany840",
      gradient: "from-blue-600/20 to-purple-600/20",
      borderGradient: "from-blue-500/50 to-purple-500/50",
    },
    {
      title: "Online Job Portal",
      description: "Job portal platform with role-based authentication, job application tracking, and comprehensive admin dashboard for managing listings and users.",
      tech: ["Flask", "MySQL", "Python"],
      features: ["Role-based Auth", "Job Tracking", "Admin Dashboard"],
      github: "https://github.com/Chaitany840",
      gradient: "from-purple-600/20 to-blue-600/20",
      borderGradient: "from-purple-500/50 to-blue-500/50",
    },
    {
      title: "Library Management System",
      description: "Object-oriented library management system with complete CRUD operations, member management, and book inventory tracking using clean OOP design principles.",
      tech: ["Java", "OOP", "MySQL"],
      features: ["CRUD Operations", "OOP Design", "Inventory Management"],
      github: "https://github.com/Chaitany840",
      gradient: "from-blue-600/20 to-purple-600/20",
      borderGradient: "from-blue-500/50 to-purple-500/50",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent text-center">
            Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-12 rounded-full" />

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className={`relative bg-gradient-to-br ${project.gradient} border border-slate-700 rounded-xl p-6 group overflow-hidden hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300`}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -8 }}
              >
                {/* Gradient border effect on hover */}
                <div className={`absolute inset-0 bg-gradient-to-r ${project.borderGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl`} />
                
                <div className="bg-slate-900/90 rounded-lg p-6 relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-slate-800 border border-slate-700 rounded-lg hover:border-purple-500 hover:bg-purple-600/20 transition-all duration-300 hover:scale-110"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  </div>

                  <p className="text-slate-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-purple-400 mb-2">Key Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.features.map((feature) => (
                        <span
                          key={feature}
                          className="px-3 py-1 bg-purple-600/20 border border-purple-500/30 rounded-full text-xs text-purple-300"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-slate-800 border border-slate-600 rounded-full text-sm text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <a
              href="https://github.com/Chaitany840"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-slate-800/50 border border-purple-500/50 rounded-lg font-semibold hover:bg-purple-600/20 transition-all duration-300 hover:border-purple-400 hover:scale-105"
            >
              <ExternalLink className="w-5 h-5" />
              View All Projects on GitHub
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
