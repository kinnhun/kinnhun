"use client";

import React from "react";
import { motion } from "motion/react";
import { Cpu, Code, Database, Cloud, Terminal, Sparkles } from "lucide-react";

interface TechItem {
  name: string;
  level: string;
  badge: string;
  category: string;
  color: string;
}

const techStack: TechItem[] = [
  { name: "Next.js 15", level: "App Router & SSR", badge: "Core Stack", category: "Frontend", color: "from-blue-600 to-cyan-500" },
  { name: "React 19", level: "Hooks & Server Components", badge: "Core Stack", category: "Frontend", color: "from-cyan-500 to-blue-500" },
  { name: "TypeScript", level: "Strict Type Safety", badge: "Language", category: "Frontend", color: "from-blue-500 to-indigo-600" },
  { name: "Tailwind CSS v4", level: "Modern Utility Styling", badge: "Design System", category: "Frontend", color: "from-sky-400 to-blue-600" },
  { name: "Node.js & Express", level: "RESTful API & Auth", badge: "Backend", category: "Backend", color: "from-emerald-500 to-teal-600" },
  { name: "Python", level: "Automation & Web Scraping", badge: "Automation", category: "Backend", color: "from-amber-400 to-orange-500" },
  { name: "Gemini AI API", level: "LLM & Chatbot Integration", badge: "AI Native", category: "AI & Data", color: "from-purple-500 to-indigo-500" },
  { name: "OpenAI LLM", level: "Prompt & Fine-Tuning", badge: "AI Native", category: "AI & Data", color: "from-indigo-400 to-purple-600" },
  { name: "PostgreSQL", level: "Relational DB & Prisma", badge: "Database", category: "AI & Data", color: "from-blue-600 to-indigo-700" },
  { name: "MongoDB & Redis", level: "NoSQL & Caching", badge: "Database", category: "AI & Data", color: "from-emerald-600 to-green-500" },
  { name: "Docker & Linux VPS", level: "Containerization & Nginx", badge: "DevOps", category: "Cloud", color: "from-blue-500 to-sky-600" },
  { name: "Vercel & CI/CD", level: "Edge Deployment & Git", badge: "Cloud", category: "Cloud", color: "from-slate-200 to-slate-400" },
];

export default function TechMatrix() {
  return (
    <section id="tech" className="py-24 px-4 md:px-8 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Title */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill text-blue-400 text-xs font-mono uppercase tracking-widest">
            <Cpu className="w-3.5 h-3.5 text-blue-400 animate-pulse" />
            <span>Tech Ecosystem</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            Công Nghệ & <span className="text-accent-gradient">Hệ Thống AI</span>
          </h2>
          <p className="text-slate-400 text-sm md:text-base font-light">
            Xây dựng trên các công nghệ tiên tiến nhất, bảo mật cao và tối ưu hiệu năng vận hành cho doanh nghiệp.
          </p>
        </div>

        {/* Tech Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {techStack.map((tech, idx) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.04 }}
              className="group relative rounded-2xl glass-panel p-6 border-white/10 hover:border-blue-500/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-400 text-[10px] font-mono border border-blue-500/20">
                    {tech.badge}
                  </span>
                  <Sparkles className="w-4 h-4 text-slate-600 group-hover:text-blue-400 transition-colors" />
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                    {tech.name}
                  </h3>
                  <p className="text-slate-400 text-xs font-light mt-1">
                    {tech.level}
                  </p>
                </div>
              </div>

              {/* Bottom Glow Indicator Bar */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-[11px] font-mono text-slate-500">{tech.category}</span>
                <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${tech.color} group-hover:scale-150 transition-transform`} />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
