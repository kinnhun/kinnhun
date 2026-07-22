"use client";

import React from "react";
import { motion } from "motion/react";
import { Globe, Bot, ShieldCheck, Zap, ArrowUpRight, CheckCircle } from "lucide-react";

const services = [
  {
    num: "01",
    title: "Thiết Kế Website Chuẩn SEO",
    subtitle: "Landing Page & Web App Doanh Nghiệp",
    description: "Thiết kế giao diện hiện đại (Glassmorphism, Responsive), tối ưu điểm SEO Google PageSpeed 95+ giúp gia tăng tỷ lệ chuyển đổi.",
    features: ["Load trang < 1s", "Chuẩn SEO Audit Google", "Giao diện Responsive 100%", "Bảo hành kỹ thuật 6 tháng"],
    icon: Globe,
    color: "from-blue-600 to-cyan-500",
  },
  {
    num: "02",
    title: "Tích Hợp AI & Automation Tools",
    subtitle: "Gemini AI, Chatbot & Web Scraping Bot",
    description: "Tích hợp AI Assistant, Chatbot LLM, tự động hóa quy trình quản lý dữ liệu, cào dữ liệu tự động tiết kiệm 80% thời gian.",
    features: ["Gemini & ChatGPT API", "Auto Scraping Bot", "Xử lý dữ liệu tự động", "Tích hợp Web / Mobile"],
    icon: Bot,
    color: "from-purple-500 to-indigo-600",
  },
  {
    num: "03",
    title: "Hệ Thống Quản Lý Bản Quyền License",
    subtitle: "SaaS Dashboard & Cấp Phép Phần Mềm",
    description: "Phát triển các hệ thống cấp phép key OnlyOffice, phần mềm bản quyền tự động, quản lý khách hàng & thanh toán online.",
    tech: ["Key Generator Mã Hóa", "Quản lý Khách hàng ERP", "Tự động hóa Thanh toán", "Báo cáo Real-time"],
    features: ["Key Generator Mã Hóa", "Quản lý Khách hàng ERP", "Tự động hóa Thanh toán", "Báo cáo Real-time"],
    icon: ShieldCheck,
    color: "from-amber-500 to-orange-600",
  },
  {
    num: "04",
    title: "Giải Pháp Năng Lượng & CBAM Carbon",
    subtitle: "Hệ Thống PPA & Báo Cáo Carbon EU",
    description: "Số hóa hợp đồng mua bán điện PPA năng lượng mặt trời & nền tảng kiểm kê khí thải Carbon CBAM theo tiêu chuẩn quốc tế.",
    features: ["Chuẩn kiểm kê CBAM EU", "Số hóa hợp đồng PPA", "Quản lý dự án EPC", "Báo cáo dữ liệu năng lượng"],
    icon: Zap,
    color: "from-emerald-500 to-teal-600",
  },
];

export default function ServicesGrid() {
  return (
    <section id="services" className="py-24 px-4 md:px-8 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-800 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 text-blue-400 text-xs font-mono uppercase tracking-widest mb-3">
              <Zap className="w-4 h-4" />
              <span>Core Expertise</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
              Dịch Vụ <span className="text-accent-gradient">Cung Cấp</span>
            </h2>
          </div>
          <p className="text-slate-400 text-sm md:text-base font-light max-w-md">
            Cam kết chất lượng sản phẩm chuẩn clean architecture, mã nguồn tối ưu và hỗ trợ bảo hành 6 tháng toàn diện.
          </p>
        </div>

        {/* 4-Column Editorial Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((srv, idx) => {
            const Icon = srv.icon;
            return (
              <motion.div
                key={srv.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group rounded-3xl glass-panel p-8 border-white/10 flex flex-col justify-between hover:border-blue-500/40 transition-all duration-500"
              >
                <div className="space-y-6">
                  {/* Top Row: Number & Icon */}
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold font-mono text-slate-600 group-hover:text-blue-400 transition-colors">
                      {srv.num}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {srv.title}
                    </h3>
                    <p className="text-xs font-mono text-blue-400">
                      {srv.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-slate-400 text-sm font-light leading-relaxed">
                    {srv.description}
                  </p>

                  {/* Feature Checklist */}
                  <div className="space-y-2 pt-2 border-t border-slate-800/80">
                    {srv.features.map((ft) => (
                      <div key={ft} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{ft}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action */}
                <div className="pt-8">
                  <a
                    href="https://zalo.me/0862497002"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 rounded-xl bg-white/5 hover:bg-blue-600 text-white text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-blue-600/30"
                  >
                    <span>Tư Vấn Zalo</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
