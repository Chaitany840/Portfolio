import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Mail, Phone, Github, Linkedin, FileDown, Send } from "lucide-react";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "chaitanykumar706@gmail.com",
      href: "mailto:chaitanykumar706@gmail.com",
      gradient: "from-purple-600 to-purple-400",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91-8409488982",
      href: "tel:+918409488982",
      gradient: "from-blue-600 to-blue-400",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "Chaitany840",
      href: "https://github.com/Chaitany840",
      gradient: "from-purple-600 to-blue-600",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "chaitany-kumar",
      href: "https://www.linkedin.com/in/chaitany-kumar-7999652b5/",
      gradient: "from-blue-600 to-purple-600",
    },
  ];

  const handleDownloadResume = () => {
    // In a real implementation, this would download the actual resume file
    alert("Resume download functionality - Please add your resume PDF to the project.");
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden" ref={ref}>
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/20 to-transparent" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent text-center">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-6 rounded-full" />
          <p className="text-center text-slate-400 mb-12 text-lg max-w-2xl mx-auto">
            I'm always open to discussing new projects, opportunities, or collaborations. 
            Feel free to reach out!
          </p>

          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            {contactInfo.map((contact, index) => {
              const Icon = contact.icon;
              return (
                <motion.a
                  key={contact.label}
                  href={contact.href}
                  target={contact.href.startsWith("http") ? "_blank" : undefined}
                  rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-14 h-14 bg-gradient-to-br ${contact.gradient} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm text-slate-500 mb-1">{contact.label}</h3>
                      <p className="text-white font-medium group-hover:text-purple-300 transition-colors duration-300 break-all">
                        {contact.value}
                      </p>
                    </div>
                    <Send className="w-5 h-5 text-slate-600 group-hover:text-purple-400 group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </motion.a>
              );
            })}
          </div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <button
              onClick={handleDownloadResume}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 group"
            >
              <FileDown className="w-5 h-5 group-hover:animate-bounce" />
              Download Resume
            </button>
          </motion.div>

          {/* Footer */}
          <motion.div
            className="mt-20 pt-8 border-t border-slate-800 text-center"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <p className="text-slate-500">
              © 2025 Chaitany Kumar. Built with React & Tailwind CSS.
            </p>
            <p className="text-slate-600 text-sm mt-2">
              Designed for excellence, coded with passion.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
