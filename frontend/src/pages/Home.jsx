import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Phone, Star, CheckCircle2, Sparkles, Award, Heart, ShieldCheck, Instagram, Heart as HeartIcon, MessageCircle, ShieldPlus, Sparkle, Droplets } from "lucide-react";
import { clinicInfo, doctors, services, technologies, testimonials, videos, stats, instagramPosts, buildWhatsAppUrl, defaultAppointmentMessage, brands, labPartner } from "../mock";

const Home = () => {
  const inHouseDoctors = useMemo(
    () => doctors.filter((d) => d.type === "in-house"),
    []
  );
  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="relative w-full overflow-hidden">
        <div className="grid md:grid-cols-2 min-h-[88vh]">
          <div className="flex items-center px-6 md:px-16 lg:px-20 py-20 bg-white order-2 md:order-1">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 text-xs tracking-[0.3em] text-[#1f3a6e] uppercase mb-6">
                <span className="h-px w-8 bg-[#1f3a6e]" /> Welcome to SSDC
              </div>
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-[#0b1424] leading-[1.05] tracking-tight">
                {clinicInfo.hero}
                <br />
                <span className="italic text-[#1f3a6e]">{clinicInfo.heroAccent}</span>
              </h1>
              <p className="mt-8 text-base md:text-lg text-slate-600 leading-relaxed">
                {clinicInfo.legacy}
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href={buildWhatsAppUrl(defaultAppointmentMessage)}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 bg-[#0b1424] text-white px-7 py-3.5 rounded-full hover:bg-[#1f3a6e] transition-colors"
                >
                  <MessageCircle size={16} />
                  Book on WhatsApp
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href={`tel:+${clinicInfo.phone.replace(/\D/g, "")}`}
                  className="inline-flex items-center gap-2 border border-[#0b1424]/20 text-[#0b1424] px-7 py-3.5 rounded-full hover:border-[#0b1424] transition-colors"
                >
                  <Phone size={16} /> Call Clinic
                </a>
              </div>
            </div>
          </div>
          <div className="relative order-1 md:order-2 h-[50vh] md:h-auto">
            <img
              src="https://images.unsplash.com/photo-1489278353717-f64c6ee8a4d2?auto=format&fit=crop&w=1600&q=80"
              alt="Beautiful smile"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white/40 via-transparent to-transparent md:from-white/60" />
          </div>
        </div>
      </section>

      {/* TAGLINE STRIP */}
      <section className="py-20 md:py-24 px-6 md:px-12 bg-[#f7f9fc] border-y border-slate-100">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-5xl text-[#1f3a6e] leading-tight">
            {clinicInfo.tagline}
            <br />
            <span className="text-[#0b1424]">{clinicInfo.subTagline}</span>
          </h2>
        </div>
      </section>

      {/* DOCTORS */}
      {inHouseDoctors.map((doc, idx) => (
        <section
          key={doc.id}
          className={`py-20 md:py-28 px-6 md:px-12 ${idx % 2 === 0 ? "bg-white" : "bg-[#f7f9fc]"}`}
        >
          <div
            className={`max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center ${
              idx % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
            }`}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-[#1f3a6e]/5 rounded-2xl rotate-2" />
              <img
                src={doc.image}
                alt={doc.name}
                style={{ objectPosition: doc.imagePosition || "center" }}
                className="relative w-full h-[480px] object-cover rounded-2xl shadow-xl"
              />
            </div>
            <div>
              <div className="text-xs tracking-[0.3em] text-[#1f3a6e] uppercase mb-4">
                Meet our Specialist
              </div>
              <h3 className="font-serif text-4xl md:text-5xl text-[#0b1424] leading-tight">
                {doc.name}
