"use client";

import React from "react";
import { Zap, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 px-4 md:px-8 border-t border-slate-800/80 bg-[#040507]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white">
            <Zap className="w-4 h-4" />
          </div>
          <span className="text-sm font-bold text-white tracking-wider">
            kinnhun <span className="text-slate-500 font-normal text-xs">/ Web & AI Studio</span>
          </span>
        </div>

        {/* Links */}
        <div className="flex items-center gap-6 text-xs text-slate-400">
          <a href="https://zalo.me/0862497002" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            Zalo: 0862 497 002
          </a>
          <a href="https://www.facebook.com/trantrungkien.webai" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            Facebook Page
          </a>
          <a href="https://github.com/kinnhun" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            GitHub
          </a>
        </div>

        {/* Copyright */}
        <div className="text-xs text-slate-500 font-mono">
          © {new Date().getFullYear()} Trần Trung Kiên. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
