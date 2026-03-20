import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { GraduationCap, Code2, Zap } from "lucide-react";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-12 rounded-full" />

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <motion.div
              className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-400 rounded-lg flex items-center justify-center mb-4">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-purple-300">Education</h3>
              <p className="text-slate-400">
                AI Undergraduate at Noida Institute of Engineering and Technology
              </p>
              <p className="text-slate-500 text-sm mt-2">Graduating 2027</p>
            </motion.div>

            <motion.div
              className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-400 rounded-lg flex items-center justify-center mb-4">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-blue-300">Specialization</h3>
              <p className="text-slate-400">
                Strong in Data Structures & Algorithms and Backend Development
              </p>
            </motion.div>

            <motion.div
              className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-purple-300">Passion</h3>
              <p className="text-slate-400">
                Building scalable systems and solving real-world problems
              </p>
            </motion.div>
          </div>

          <motion.div
            className="bg-gradient-to-br from-slate-800/70 to-slate-900/70 border border-slate-700 rounded-2xl p-8 backdrop-blur-sm"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <p className="text-lg text-slate-300 leading-relaxed">
              I'm an AI undergraduate student passionate about backend development and problem-solving. 
              With a strong foundation in Data Structures & Algorithms, I love building scalable backend 
              systems that solve real-world challenges. My expertise lies in Java and Spring Boot, where 
              I design RESTful APIs and implement robust, efficient solutions. I'm constantly learning and 
              growing, driven by curiosity and a commitment to writing clean, maintainable code.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
