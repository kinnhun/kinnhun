"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { Phone, MessageSquare, ShieldCheck, Clock, Send, Sparkles, CheckCircle2 } from "lucide-react";

export default function InteractiveContact() {
  const [selectedType, setSelectedType] = useState<string>("landing");

  const projectTypes = [
    { id: "landing", label: "Landing Page Chuẩn SEO", desc: "Tốc độ load < 1s, chuẩn SEO Audit Google 98+, Tăng tỷ lệ chuyển đổi" },
    { id: "webapp", label: "Web Application / SaaS App Router", desc: "Phát triển với Next.js 15, Tailwind v4, PostgreSQL, Auth & API" },
    { id: "ai", label: "Tích Hợp AI & Automation Tools", desc: "Tích hợp Gemini AI, ChatGPT LLM, Bot cào dữ liệu tự động" },
    { id: "erp", label: "Hệ Thống License Key & ERP", desc: "Hệ thống quản lý bản quyền phần mềm, khách hàng & thanh toán tự động" },
  ];

  return (
    <section id="contact" className="py-24 px-4 md:px-8 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto space-y-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Estimator & Type Selection */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill text-blue-400 text-xs font-mono uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Instant Consultation</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                Tư Vấn & <span className="text-accent-gradient">Báo Giá Dự Án</span>
              </h2>
              <p className="text-slate-400 text-sm md:text-base font-light">
                Chọn nhu cầu dự án của bạn để nhận tư vấn kỹ thuật & báo giá chi tiết từ Trần Trung Kiên.
              </p>
            </div>

            {/* Scope Selection Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {projectTypes.map((pt) => (
                <button
                  key={pt.id}
                  type="button"
                  onClick={() => setSelectedType(pt.id)}
                  className={`p-5 rounded-2xl text-left transition-all duration-300 flex flex-col justify-between border ${
                    selectedType === pt.id
                      ? "bg-blue-600/10 border-blue-500 text-white shadow-lg shadow-blue-500/20"
                      : "glass-panel border-white/10 text-slate-300 hover:border-blue-500/30"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-sm">{pt.label}</span>
                    {selectedType === pt.id && (
                      <CheckCircle2 className="w-4 h-4 text-blue-400" />
                    )}
                  </div>
                  <p className="text-xs text-slate-400 font-light leading-relaxed">
                    {pt.desc}
                  </p>
                </button>
              ))}
            </div>

            {/* Guarantee Cards */}
            <div className="p-6 rounded-2xl glass-panel border-white/10 flex flex-wrap items-center justify-between gap-6">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-amber-400 shrink-0" />
                <div>
                  <p className="text-xs text-slate-400">Cam kết bảo hành</p>
                  <p className="text-sm font-bold text-white">6 Tháng Kỹ Thuật</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="w-6 h-6 text-emerald-400 shrink-0" />
                <div>
                  <p className="text-xs text-slate-400">Thời gian phản hồi</p>
                  <p className="text-sm font-bold text-white">Trực Tiếp 24/7</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Contact CTA Box */}
          <div className="lg:col-span-5">
            <div className="relative group">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-600/30 to-indigo-600/30 blur-xl opacity-60 group-hover:opacity-100 transition duration-1000" />
              
              <div className="relative rounded-3xl glass-panel p-8 border-white/10 space-y-8 text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center mx-auto text-white shadow-xl shadow-blue-600/30">
                  <Phone className="w-8 h-8" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-white">Liên Hệ Trực Tiếp</h3>
                  <p className="text-slate-400 text-sm font-light">
                    Hỗ trợ trao đổi ý tưởng, báo giá & tư vấn kiến trúc giải pháp.
                  </p>
                </div>

                {/* Zalo Button */}
                <a
                  href="https://zalo.me/0862497002"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-sm tracking-wider uppercase shadow-xl shadow-blue-600/30 hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>Chat Zalo: 0862 497 002</span>
                </a>

                {/* Facebook Button */}
                <a
                  href="https://www.facebook.com/trantrungkien.webai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 rounded-2xl glass-panel hover:bg-white/10 text-white font-bold text-sm tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 border-white/10 hover:border-blue-500/40"
                >
                  <span>Facebook Web & AI</span>
                </a>

                <p className="text-[11px] text-slate-500 font-mono">
                  Trần Trung Kiên • Web & AI Studio • 150+ Projects Completed
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
