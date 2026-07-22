import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProjectShowcase from "@/components/ProjectShowcase";
import TechMatrix from "@/components/TechMatrix";
import ServicesGrid from "@/components/ServicesGrid";
import InteractiveContact from "@/components/InteractiveContact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col justify-between selection:bg-blue-600 selection:text-white">
      <Navbar />
      <Hero />
      <ProjectShowcase />
      <TechMatrix />
      <ServicesGrid />
      <InteractiveContact />
      <Footer />
    </main>
  );
}
