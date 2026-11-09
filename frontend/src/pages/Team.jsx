import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Stethoscope, UserCheck, MessageCircle } from "lucide-react";
import { doctors, buildWhatsAppUrl, defaultAppointmentMessage } from "../mock";

const DoctorCard = ({ doc, compact = false }) => {
  const aspect = compact ? "aspect-[4/3]" : "aspect-[4/5]";
  const titleSize = compact ? "text-xl" : "text-2xl";
  const padding = compact ? "p-5" : "p-6";

  return (
    <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
      <div className={`${aspect} overflow-hidden bg-slate-100`}>
        <img
          src={doc.image}
          alt={doc.name}
          style={{ objectPosition: doc.imagePosition || "center" }}
          className="w-full h-full object-cover"
        />
      </div>
      <div className={padding}>
        <h3 className={`font-serif ${titleSize} text-[#0b1424] leading-tight`}>{doc.name}</h3>
        <p className="text-[#1f3a6e] font-medium mt-1.5 text-sm">{doc.qualification}</p>
        {doc.role && <p className="text-xs text-slate-500 mt-1">{doc.role}</p>}
        <p className={`mt-4 ${compact ? "text-[13px]" : "text-sm"} text-slate-600 leading-relaxed`}>
          {doc.bio}
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {doc.specialties.map((s) => (
            <span
              key={s}
              className={`${compact ? "text-[11px] px-2.5 py-1" : "text-xs px-3 py-1.5"} rounded-full bg-[#1f3a6e]/10 text-[#1f3a6e]`}
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Team = () => {
  const inHouse = doctors.filter((d) => d.type === "in-house");
  const visiting = doctors.filter((d) => d.type === "visiting");

  return (
    <div>
      {/* HERO */}
      <section className="py-20 md:py-28 px-6 md:px-12 bg-[#f7f9fc]">
        <div className="max-w-5xl mx-auto text-center">
          <div className="text-xs tracking-[0.3em] text-[#1f3a6e] uppercase mb-4">
            Meet the Team
          </div>
          <h1 className="font-serif text-4xl md:text-6xl text-[#0b1424] leading-tight">
            Specialists who care for your smile
          </h1>
          <p className="mt-6 text-slate-600 text-lg leading-relaxed">
            Our in-house doctors and visiting specialists work together to bring you a complete
            range of dental care under one roof — from routine check-ups to advanced surgical and
            orthodontic procedures.
          </p>
        </div>
      </section>

      {/* IN-HOUSE */}
      <section className="py-20 md:py-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-10 w-10 rounded-full bg-[#1f3a6e]/10 flex items-center justify-center">
              <UserCheck size={18} className="text-[#1f3a6e]" />
            </div>
            <span className="text-xs tracking-[0.3em] text-[#1f3a6e] uppercase">
              In-house · Full-time
            </span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-[#0b1424] mb-10">
            Our resident doctors
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {inHouse.map((doc) => (
              <DoctorCard key={doc.id} doc={doc} />
            ))}
          </div>
        </div>
      </section>

      {/* VISITING */}
      <section className="py-20 md:py-24 px-6 md:px-12 bg-[#f7f9fc]">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-10 w-10 rounded-full bg-[#1f3a6e]/10 flex items-center justify-center">
              <Stethoscope size={18} className="text-[#1f3a6e]" />
            </div>
            <span className="text-xs tracking-[0.3em] text-[#1f3a6e] uppercase">
              Visiting Specialists
            </span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-[#0b1424] mb-3">
            Specialist consultants
          </h2>
          <p className="text-slate-600 mb-10 max-w-2xl">
            Renowned specialists who visit SSDC for advanced consultations and procedures —
            ensuring you get expert care without travelling out of Vapi.
          </p>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
            {visiting.map((doc) => (
              <DoctorCard key={doc.id} doc={doc} compact />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 md:px-12 bg-[#0b1424] text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl leading-tight">
            Want to consult with our specialists?
          </h2>
          <p className="mt-4 text-white/70">
            Visiting specialists attend SSDC on scheduled days. Book in advance to secure your
            preferred time.
          </p>
          <a
            href={buildWhatsAppUrl(defaultAppointmentMessage)}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 bg-white text-[#0b1424] px-7 py-3.5 rounded-full hover:bg-[#7fb3ff] transition-colors"
          >
            <MessageCircle size={16} /> Book on WhatsApp <ArrowRight size={16} />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Team;
