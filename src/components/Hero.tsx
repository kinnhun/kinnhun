"use client";

import React from "react";
import { motion } from "motion/react";
import { Sparkles, ArrowUpRight, ShieldCheck, Rocket, Code, Cpu, Award } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-36 pb-20 md:pt-48 md:pb-32 px-4 md:px-8 overflow-hidden">
      {/* Background Kinetic Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Bazil Editorial Headline */}
          <div className="lg:col-span-8 flex flex-col items-start text-left space-y-8">
            
            {/* Top Pill Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-pill border-blue-500/30 text-blue-400 text-xs font-mono uppercase tracking-widest"
            >
              <Sparkles className="w-4 h-4 text-blue-400 animate-spin" style={{ animationDuration: '8s' }} />
              <span>Fullstack Web & AI Developer</span>
            </motion.div>

            {/* Asymmetric Bazil Editorial Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.08]"
            >
              CRAFTING <span className="text-accent-gradient">DIGITAL</span> EXPERIENCES WITH{" "}
              <span className="underline decoration-blue-500/60 underline-offset-8">AI MOTION</span>
            </motion.h1>

            {/* Subheading & Core Value Proposition */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-slate-400 text-base md:text-xl max-w-2xl font-light leading-relaxed"
            >
              Chuyên thiết kế <strong className="text-slate-200 font-semibold">Website Chuẩn SEO</strong>,{" "}
              <strong className="text-slate-200 font-semibold">Web Application Next.js 15</strong>, Tích hợp{" "}
              <strong className="text-slate-200 font-semibold">AI Assistant & Automation Tools</strong> cho doanh nghiệp.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <a
                href="#showcase"
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-sm tracking-wider uppercase shadow-xl shadow-blue-600/30 hover:shadow-blue-500/50 hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2 group"
              >
                <span>Khám Phá Dự Án</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href="https://zalo.me/0862497002"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-2xl glass-panel hover:bg-white/10 text-white font-semibold text-sm tracking-wider uppercase transition-all duration-300 flex items-center gap-2 border-white/10 hover:border-blue-500/40"
              >
                <span>Tư Vấn Zalo 24/7</span>
              </a>
            </motion.div>

            {/* Key Trust Guarantee Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-6 grid grid-cols-2 sm:grid-cols-3 gap-4 w-full border-t border-slate-800/80"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                  <Rocket className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-white font-bold text-base">150+ Dự Án</p>
                  <p className="text-slate-500 text-xs">Đã hoàn thành</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-white font-bold text-base">6 Tháng</p>
                  <p className="text-slate-500 text-xs">Bảo hành kỹ thuật</p>
                </div>
              </div>

              <div className="flex items-center gap-3 col-span-2 sm:col-span-1">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-white font-bold text-base">SEO 98/100</p>
                  <p className="text-slate-500 text-xs">PageSpeed tối ưu</p>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Motion Card Preview (Bazil Style) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-4 relative group"
          >
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-600/40 to-indigo-600/40 blur-xl opacity-60 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
            
            <div className="relative rounded-3xl glass-panel p-6 border-white/10 space-y-6">
              
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <span className="text-[11px] font-mono text-slate-500">kinnhun-engine v2.5</span>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span className="flex items-center gap-1.5"><Code className="w-4 h-4 text-blue-400" /> Core Tech Stack</span>
                    <span className="text-emerald-400 font-mono">Next.js 15</span>
                  </div>
                  <p className="text-xs text-slate-300 font-mono">Tailwind v4 • TypeScript • motion/react</p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span className="flex items-center gap-1.5"><Cpu className="w-4 h-4 text-purple-400" /> AI Assistant</span>
                    <span className="text-purple-400 font-mono">Gemini & LLMs</span>
                  </div>
                  <p className="text-xs text-slate-300 font-mono">Auto Bot • Scraping • SaaS Automation</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-900/40 to-slate-900 border border-blue-500/30 flex items-center justify-between">
                <div>
                  <p className="text-xs text-slate-400">Tư vấn báo giá nhanh</p>
                  <p className="text-sm font-bold text-white">0862 497 002</p>
                </div>
                <a
                  href="https://zalo.me/0862497002"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-md transition-colors"
                >
                  Zalo Now ↗
                </a>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
