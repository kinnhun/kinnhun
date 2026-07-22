"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ExternalLink, Layers, ArrowUpRight, CheckCircle2 } from "lucide-react";

interface Project {
  id: string;
  title: string;
  category: "enterprise" | "energy" | "edtech";
  categoryLabel: string;
  description: string;
  tech: string[];
  image: string;
  url: string;
  isRepo?: boolean;
}

const projects: Project[] = [
  {
    id: "mercy-keys",
    title: "Mercy Keys — License & Authorization System",
    category: "enterprise",
    categoryLabel: "Enterprise & License ERP",
    description: "Hệ thống quản lý bản quyền & cấp phép phần mềm OnlyOffice doanh nghiệp tự động, bảo mật cao.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"],
    image: "/assets/projects/mercy-keys.png",
    url: "https://onlyoffice.mercytechglobal.com/",
  },
  {
    id: "mercy-tech",
    title: "Mercy Tech Global Corporate Portal",
    category: "enterprise",
    categoryLabel: "Enterprise & License ERP",
    description: "Portal chính thức của tập đoàn công nghệ Mercy Tech Global. Giao diện Glassmorphism hiện đại, tối ưu SEO 98/100.",
    tech: ["Next.js App Router", "Framer Motion", "SEO Standard"],
    image: "/assets/projects/mercy-tech.png",
    url: "https://mercytechglobal.com/",
  },
  {
    id: "tuankey",
    title: "TuanKey System — Key Distribution",
    category: "enterprise",
    categoryLabel: "Enterprise & License ERP",
    description: "Nền tảng phân phối & quản lý License key tự động 100%, tích hợp hệ thống thanh toán & API.",
    tech: ["Web App", "Node.js", "Automation", "Payment API"],
    image: "/assets/projects/tuankey.png",
    url: "https://www.tuankey.com/",
  },
  {
    id: "app-buffet",
    title: "App Buffet Manager — Smart Restaurant Platform",
    category: "enterprise",
    categoryLabel: "Enterprise & License ERP",
    description: "Web App quản lý nhà hàng & đặt món Buffet thông minh, quản lý sơ đồ bàn & thống kê doanh thu real-time.",
    tech: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    image: "/assets/projects/app-buffet.png",
    url: "https://app-buffet.vercel.app/",
  },
  {
    id: "ppa-binhminh",
    title: "PPA Bình Minh Power — Direct Power Purchase",
    category: "energy",
    categoryLabel: "Năng Lượng & CBAM Carbon",
    description: "Hệ thống Quản lý & Hợp đồng Mua bán Điện Trực tiếp (PPA) số hóa năng lượng mặt trời doanh nghiệp.",
    tech: ["Next.js", "Tailwind CSS", "Energy Tech"],
    image: "/assets/projects/ppa-binhminh.png",
    url: "https://ppa.binhminhpower.com/",
  },
  {
    id: "cbam-carbon",
    title: "CBAM Carbon Management — International Carbon Accounting",
    category: "energy",
    categoryLabel: "Năng Lượng & CBAM Carbon",
    description: "Nền tảng Kiểm kê & Tính toán Tải lượng Carbon CBAM xuất khẩu EU theo tiêu chuẩn quốc tế.",
    tech: ["Next.js", "Python Analytics", "Carbon CBAM"],
    image: "/assets/projects/cbam-carbon.png",
    url: "https://cbam.mercytechglobal.com/",
  },
  {
    id: "epc-binhminh",
    title: "EPC Bình Minh Power — Solar Project Engineering",
    category: "energy",
    categoryLabel: "Năng Lượng & CBAM Carbon",
    description: "Hệ thống Quản lý Dự án Thiết kế, Mua sắm & Thi công Năng lượng Mặt trời EPC.",
    tech: ["Web App", "PostgreSQL", "SaaS Dashboard"],
    image: "/assets/projects/epc-binhminh.png",
    url: "https://epc.binhminhpower.com/",
  },
  {
    id: "luyenthicaptoc",
    title: "Luyện Thi Cấp Tốc — EdTech Exam Prep Platform",
    category: "edtech",
    categoryLabel: "Giáo Dục & E-Commerce",
    description: "Nền tảng học & ôn thi trực tuyến với hàng ngàn đề thi trắc nghiệm tương tác & chấm điểm tức thì.",
    tech: ["React", "Next.js", "SEO Audit 98+"],
    image: "/assets/projects/luyenthicaptoc.png",
    url: "https://www.luyenthicaptoc.vn/",
  },
  {
    id: "langdevietnam",
    title: "Làng Đề Việt Nam — Cultural Heritage Portal",
    category: "edtech",
    categoryLabel: "Giáo Dục & E-Commerce",
    description: "Trang thông tin văn hóa & di sản làng nghề Việt Nam chuẩn SEO Google Top 1, tải trang cực nhanh.",
    tech: ["Next.js", "SEO Optimization", "Responsive"],
    image: "/assets/projects/langdevietnam.png",
    url: "https://langdevietnam.com/",
  },
  {
    id: "misu-closet",
    title: "MISU Closet — Modern E-Commerce Platform",
    category: "edtech",
    categoryLabel: "Giáo Dục & E-Commerce",
    description: "Nền tảng E-Commerce thời trang hiện đại & mượt mà, quản lý sản phẩm, giỏ hàng & thanh toán.",
    tech: ["Next.js", "Tailwind CSS", "TypeScript"],
    image: "/assets/projects/misu-closet.png",
    url: "https://github.com/kinnhun/misucloset",
    isRepo: true,
  },
  {
    id: "hgs-management",
    title: "HGS Management — School & Academy ERP",
    category: "edtech",
    categoryLabel: "Giáo Dục & E-Commerce",
    description: "Hệ thống quản lý trường học & đào tạo trực tuyến toàn diện (Capstone Project).",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    image: "/assets/projects/hgs-management.png",
    url: "https://github.com/khanhpd2402/hgs-management-system",
    isRepo: true,
  },
];

export default function ProjectShowcase() {
  const [activeTab, setActiveTab] = useState<"all" | "enterprise" | "energy" | "edtech">("all");

  const filteredProjects = projects.filter(
    (p) => activeTab === "all" || p.category === activeTab
  );

  return (
    <section id="showcase" className="py-24 px-4 md:px-8 relative">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-800 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 text-blue-400 text-xs font-mono uppercase tracking-widest mb-3">
              <Layers className="w-4 h-4" />
              <span>Selected Portfolio</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
              Dự Án Tiêu Biểu <span className="text-slate-500 font-normal text-2xl md:text-4xl">(150+)</span>
            </h2>
          </div>

          {/* Bazil Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: "all", label: "Tất cả" },
              { id: "enterprise", label: "Doanh Nghiệp & ERP" },
              { id: "energy", label: "Năng Lượng & CBAM" },
              { id: "edtech", label: "Giáo Dục & E-Commerce" },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                    : "glass-pill text-slate-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Bazil Asymmetric Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group rounded-3xl glass-panel overflow-hidden border-white/10 flex flex-col justify-between hover:border-blue-500/40 transition-all duration-500"
              >
                {/* Image Container with Zoom & Link */}
                <div className="relative aspect-[16/9] overflow-hidden bg-slate-950">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full h-full"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050608] via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
                  </a>

                  {/* Top Badge Overlay */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                    <span className="px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-[11px] font-mono text-blue-400 border border-white/10">
                      {project.categoryLabel}
                    </span>

                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pointer-events-auto w-9 h-9 rounded-full bg-blue-600 hover:bg-blue-500 text-white flex items-center justify-center shadow-lg transition-transform hover:scale-110"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 md:p-8 space-y-6 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      <a href={project.url} target="_blank" rel="noopener noreferrer">
                        {project.title}
                      </a>
                    </h3>
                    <p className="text-slate-400 text-sm font-light leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Tags & CTA Button Row */}
                  <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded-md bg-white/5 text-[11px] font-mono text-slate-300 border border-white/5"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-blue-400 hover:text-blue-300 transition-colors group/btn"
                    >
                      <span>{project.isRepo ? "GitHub Repo" : "Xem Live"}</span>
                      <ExternalLink className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                    </a>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
