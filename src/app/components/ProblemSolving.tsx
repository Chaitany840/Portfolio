import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Trophy, Code2, Brain } from "lucide-react";

export function ProblemSolving() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const dsaTopics = [
    "Arrays",
    "Strings",
    "Linked Lists",
    "Stack",
    "Queue",
    "Recursion",
    "Binary Search",
    "Trees",
    "Sorting",
    "Hashing",
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent text-center">
            Problem Solving
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-12 rounded-full" />

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <motion.div
              className="bg-gradient-to-br from-purple-600/20 to-purple-800/20 border border-purple-500/50 rounded-xl p-8 text-center group hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300">
                <Trophy className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-purple-300 mb-2">Strong</h3>
              <p className="text-slate-400">DSA Foundation</p>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-blue-600/20 to-blue-800/20 border border-blue-500/50 rounded-xl p-8 text-center group hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-400 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300">
                <Code2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-blue-300 mb-2">Consistent</h3>
              <p className="text-slate-400">Practice</p>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 border border-purple-500/50 rounded-xl p-8 text-center group hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-purple-300 mb-2">Analytical</h3>
              <p className="text-slate-400">Problem Solver</p>
            </motion.div>
          </div>

          <motion.div
            className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Core DSA Expertise
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {dsaTopics.map((topic, index) => (
                <motion.div
                  key={topic}
                  className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 border border-slate-600 rounded-lg p-4 text-center hover:border-purple-500/50 hover:bg-purple-600/10 transition-all duration-300 group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.6 + index * 0.05, duration: 0.4 }}
                  whileHover={{ y: -5 }}
                >
                  <span className="text-slate-300 font-medium group-hover:text-purple-300 transition-colors duration-300">
                    {topic}
                  </span>
                </motion.div>
              ))}
            </div>
            <p className="text-center text-slate-400 mt-8 leading-relaxed">
              Consistent practice on coding platforms with a focus on problem-solving efficiency, 
              clean code, and optimal time complexity. Actively solving challenging problems to strengthen 
              algorithmic thinking and implementation skills.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
