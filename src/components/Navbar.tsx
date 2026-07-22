"use client";

import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Zap, Code2, Layers, Cpu, Mail, Phone, ExternalLink } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-4 py-4 md:px-8"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          className="flex items-center gap-3 group px-4 py-2 rounded-full glass-pill transition-all duration-300 hover:border-blue-500/50"
        >
          <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform">
            <Zap className="w-5 h-5 text-white fill-white/20" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-sm tracking-wider text-white flex items-center gap-1.5">
              kinnhun <span className="text-xs text-blue-400 font-mono font-normal">/ studio</span>
            </span>
            <span className="text-[10px] text-slate-400 font-medium">Trần Trung Kiên</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 px-4 py-1.5 rounded-full glass-pill">
          <a
            href="#showcase"
            className="px-4 py-2 text-xs uppercase tracking-widest text-slate-300 hover:text-white hover:bg-white/5 rounded-full transition-all"
          >
            Dự Án Tiêu Biểu
          </a>
          <a
            href="#tech"
            className="px-4 py-2 text-xs uppercase tracking-widest text-slate-300 hover:text-white hover:bg-white/5 rounded-full transition-all"
          >
            Công Nghệ
          </a>
          <a
            href="#services"
            className="px-4 py-2 text-xs uppercase tracking-widest text-slate-300 hover:text-white hover:bg-white/5 rounded-full transition-all"
          >
            Dịch Vụ
          </a>
          <a
            href="#contact"
            className="px-4 py-2 text-xs uppercase tracking-widest text-slate-300 hover:text-white hover:bg-white/5 rounded-full transition-all"
          >
            Báo Giá & Liên Hệ
          </a>
        </nav>

        {/* Status & CTA Button */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Sẵn sàng nhận dự án</span>
          </div>

          <a
            href="https://zalo.me/0862497002"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-xs tracking-wide shadow-lg shadow-blue-600/30 hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300 flex items-center gap-1.5"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Zalo: 0862 497 002</span>
          </a>
        </div>
      </div>
    </motion.header>
  );
}
