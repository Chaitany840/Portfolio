import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Code, Database, Server, Wrench, BookOpen } from "lucide-react";

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: "Languages",
      icon: Code,
      skills: ["Java (Primary)", "Python", "SQL"],
      gradient: "from-purple-600 to-purple-400",
    },
    {
      title: "Backend",
      icon: Server,
      skills: ["Spring Boot", "Flask", "REST APIs"],
      gradient: "from-blue-600 to-blue-400",
    },
    {
      title: "Database",
      icon: Database,
      skills: ["MySQL"],
      gradient: "from-purple-600 to-blue-600",
    },
    {
      title: "Core CS",
      icon: BookOpen,
      skills: ["DSA", "OOP", "OS", "DBMS"],
      gradient: "from-purple-500 to-purple-400",
    },
    {
      title: "Tools",
      icon: Wrench,
      skills: ["Git", "GitHub", "Postman", "IntelliJ", "VS Code"],
      gradient: "from-blue-500 to-blue-400",
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent text-center">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-12 rounded-full" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={category.title}
                  className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300 group hover:shadow-lg hover:shadow-purple-500/10"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ y: -5 }}
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${category.gradient} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-white">{category.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-slate-900/50 border border-slate-600 rounded-full text-sm text-slate-300 hover:border-purple-500/50 hover:text-purple-300 transition-all duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
