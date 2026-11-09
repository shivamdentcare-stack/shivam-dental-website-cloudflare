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
              </h3>
              <p className="mt-3 text-[#1f3a6e] font-medium">{doc.qualification}</p>
              <p className="text-sm text-slate-500 mt-1">{doc.experience}</p>
              <p className="mt-6 text-slate-600 leading-relaxed">{doc.bio}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {doc.specialties.map((s) => (
                  <span
                    key={s}
                    className="text-xs px-3 py-1.5 rounded-full bg-[#1f3a6e]/10 text-[#1f3a6e]"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* STATS */}
      <section className="bg-[#0b1424] text-white py-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-serif text-4xl md:text-5xl text-[#7fb3ff]">{s.value}</div>
              <div className="mt-2 text-sm text-white/70 tracking-wide">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* INSTAGRAM */}
      <section className="py-20 md:py-28 px-6 md:px-12 bg-[#f7f9fc]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-xs tracking-[0.3em] text-[#1f3a6e] uppercase mb-4">
              <Instagram size={14} /> Follow Us
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-[#0b1424] leading-tight">
              <span className="italic text-[#1f3a6e]">@ssdcvapi</span> on Instagram
            </h2>
            <p className="mt-4 text-slate-600">
              Smiles, stories and behind-the-scenes from our clinic.
            </p>
          </div>

          {/* Behold.so live Instagram feed */}
          <div className="behold-wrap">
            <behold-widget feed-id="NfkO6iCwq2u6981pHMam"></behold-widget>
          </div>

          <div className="mt-10 text-center">
            <a
              href="https://www.instagram.com/ssdcvapi/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-[#0b1424] text-white px-7 py-3.5 rounded-full hover:bg-[#1f3a6e] transition-colors"
            >
              <Instagram size={16} /> Follow @ssdcvapi
            </a>
          </div>
        </div>
      </section>

      {/* TECHNOLOGY */}
      <section className="py-20 md:py-28 px-6 md:px-12 bg-[#f7f9fc]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center mb-14">
            <div>
              <div className="text-xs tracking-[0.3em] text-[#1f3a6e] uppercase mb-4">
                Technology
              </div>
              <h2 className="font-serif text-4xl md:text-5xl text-[#0b1424] leading-tight">
                Certified Advanced Technology for the Best Care for You
              </h2>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1626878880028-0438b1403b3f?auto=format&fit=crop&w=1200&q=80"
                alt="Dental technology"
                className="w-full h-72 md:h-80 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {technologies.map((t) => (
              <div
                key={t.title}
                className="bg-white p-6 rounded-xl border border-slate-200 hover:border-[#1f3a6e]/30 hover:shadow-md transition-all"
              >
                <div className="h-10 w-10 rounded-lg bg-[#1f3a6e]/10 flex items-center justify-center mb-4">
                  <Sparkles size={18} className="text-[#1f3a6e]" />
                </div>
                <h4 className="font-serif text-lg text-[#0b1424]">{t.title}</h4>
                <p className="mt-2 text-sm text-slate-600">{t.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STERILIZATION PROTOCOL — featured highlight */}
      <section className="relative py-20 md:py-28 px-6 md:px-12 bg-[#0b1424] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" aria-hidden="true">
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#7fb3ff] blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-[#7fb3ff] blur-3xl" />
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Left — copy */}
            <div>
              <div className="inline-flex items-center gap-2 bg-[#7fb3ff]/15 border border-[#7fb3ff]/30 text-[#7fb3ff] text-xs tracking-[0.25em] uppercase px-4 py-2 rounded-full mb-6">
                <ShieldCheck size={14} />
                Featured · Patient Safety
              </div>
              <h2 className="font-serif text-4xl md:text-5xl leading-tight">
                Our Sterilization Protocol
              </h2>
              <p className="mt-6 text-white/80 leading-relaxed text-[17px]">
                Your safety is non-negotiable. At Shivam Speciality Dental Care, we follow a strict
                hospital-grade sterilization protocol on every patient — every single time. From
                the moment instruments leave the operatory to the moment they return, every step
                is documented, monitored and verified.
              </p>
              <p className="mt-4 text-white/70 leading-relaxed">
                We're committed to the highest standards of infection control, because trust is
                built one detail at a time. Take a look behind the scenes at how we keep our
                clinic spotless and our patients safe.
              </p>

              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                {[
                  { icon: ShieldPlus, label: "Hospital Grade Autoclaving", desc: "Steam-pressure sterilization cycles" },
                  { icon: Droplets, label: "Single-use Disposables", desc: "Fresh needles, gloves & barriers" },
                  { icon: Sparkle, label: "Surface Disinfection", desc: "Between every patient" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl p-4"
                  >
                    <div className="h-9 w-9 rounded-lg bg-[#7fb3ff]/15 flex items-center justify-center flex-shrink-0">
                      <item.icon size={16} className="text-[#7fb3ff]" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white">{item.label}</div>
                      <div className="text-xs text-white/60 mt-0.5">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — video */}
            <div className="relative">
              <div className="absolute -inset-3 bg-gradient-to-br from-[#7fb3ff]/30 to-[#1f3a6e]/0 rounded-3xl blur-xl" />
              <div className="relative rounded-2xl overflow-hidden border border-white/15 shadow-2xl bg-black">
                <video
                  className="w-full h-full block"
                  controls
                  playsInline
                  preload="metadata"
                  poster=""
                >
                  <source
                    src="/assets/emergent-e0bb102996a6bb5a.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
              <p className="mt-4 text-center text-xs tracking-[0.2em] uppercase text-white/50">
                Behind the scenes · Infection control at SSDC
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BRANDS / MATERIALS WE USE */}
      <section className="py-20 md:py-24 px-6 md:px-12 bg-[#f7f9fc]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="text-xs tracking-[0.3em] text-[#1f3a6e] uppercase mb-4">
              Quality You Can Trust
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-[#0b1424] leading-tight">
              Brands &amp; Materials We Use
            </h2>
            <p className="mt-5 text-slate-600 max-w-2xl mx-auto">
              We work only with internationally trusted, certified dental brands — the same
              materials chosen by leading dental clinics worldwide.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-5">
            {brands.map((b) => (
              <div
                key={b.name}
                className={`group border rounded-xl px-5 py-7 flex flex-col items-center justify-center text-center hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 min-h-[130px] ${
                  b.darkBg
                    ? "bg-[#0b1424] border-[#0b1424] hover:border-[#1f3a6e]"
                    : "bg-white border-slate-200 hover:border-[#1f3a6e]/30"
                }`}
              >
                {b.logo ? (
                  <img
                    src={b.logo}
                    alt={b.name}
                    className="h-12 md:h-14 w-auto max-w-[160px] object-contain transition-transform group-hover:scale-105"
                  />
                ) : (
                  <div
                    className={
                      b.style === "elegant"
                        ? "font-serif text-2xl text-[#0b1424] tracking-tight italic"
                        : b.style === "bold"
                        ? "font-sans text-2xl font-bold tracking-tight text-[#0b1424]"
                        : "font-sans text-xl font-semibold tracking-wide text-[#0b1424]"
                    }
                  >
                    {b.name}
                  </div>
                )}
                <div
                  className={`mt-2 text-[10px] tracking-[0.18em] uppercase ${
                    b.darkBg ? "text-white/60" : "text-slate-500"
                  }`}
                >
                  {b.subtitle}
                </div>
              </div>
            ))}
          </div>

          {/* Lab Partner — featured callout */}
          <div className="mt-12">
            <div className="relative bg-white border border-slate-200 rounded-2xl p-8 md:p-10 overflow-hidden">
              <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-[#1f3a6e]/5 blur-3xl pointer-events-none" />
              <div className="relative grid md:grid-cols-[auto_1fr] gap-6 md:gap-10 items-center">
                <div className="flex flex-col items-center md:items-start">
                  <div className="text-xs tracking-[0.3em] uppercase text-[#1f3a6e] mb-3">
                    Lab Partner
                  </div>
                  {labPartner.logo ? (
                    <img
                      src={labPartner.logo}
                      alt={labPartner.name}
                      className="h-20 md:h-24 w-auto object-contain rounded-lg"
                    />
                  ) : (
                    <div className="font-serif text-3xl md:text-4xl italic text-[#0b1424] leading-tight">
                      {labPartner.name}
                    </div>
                  )}
                  <div className="mt-3 text-sm text-slate-500">
                    {labPartner.location}
                  </div>
                </div>
                <div className="md:border-l md:border-slate-200 md:pl-10">
                  <p className="text-slate-600 leading-relaxed">{labPartner.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 md:py-28 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="text-xs tracking-[0.3em] text-[#1f3a6e] uppercase mb-4">
              Why Choose SSDC
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-[#0b1424]">
              Care that's gentle, expert and personal
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: ShieldCheck, title: "Sterile & Safe", desc: "Hospital-grade sterilisation for every procedure." },
              { icon: Heart, title: "Painless Dentistry", desc: "Modern anesthesia and gentle techniques." },
              { icon: CheckCircle2, title: "Transparent Pricing", desc: "Detailed treatment plans, no hidden costs." },
            ].map((item) => (
              <div
                key={item.title}
                className="text-center p-6 rounded-2xl border border-slate-200 hover:border-[#1f3a6e]/30 hover:shadow-md transition-all"
              >
                <div className="h-14 w-14 rounded-full bg-[#1f3a6e]/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon size={22} className="text-[#1f3a6e]" />
                </div>
                <h4 className="font-serif text-lg text-[#0b1424]">{item.title}</h4>
                <p className="mt-2 text-sm text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 md:py-28 px-6 md:px-12 bg-[#f7f9fc]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="text-xs tracking-[0.3em] text-[#1f3a6e] uppercase mb-4">
              Real Patients. Real Stories
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-[#0b1424]">
              Our patients, and their smiles speak for themselves
            </h2>
            <div className="mt-6 inline-flex items-center gap-3 bg-white border border-slate-200 rounded-full px-5 py-2.5 shadow-sm">
              <div className="flex gap-0.5">
                {["s1", "s2", "s3", "s4", "s5"].map((sid) => (
                  <Star key={sid} size={16} className="fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="font-semibold text-[#0b1424]">4.9</span>
              <span className="text-sm text-slate-500">based on 73+ patient reviews</span>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="bg-white p-6 rounded-2xl border border-slate-200 hover:shadow-lg transition-shadow"
              >
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.rating }, (_, i) => `${t.id}-star-${i}`).map((sid) => (
                    <Star key={sid} size={14} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-slate-700 leading-relaxed">{t.quote}</p>
                <div className="mt-5 pt-4 border-t border-slate-100">
                  <div className="font-medium text-[#0b1424]">{t.name}</div>
                  <div className="text-xs text-slate-500">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <a
              href="https://www.google.com/maps/search/Shivam+Speciality+Dental+Care+Vapi"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 bg-white border border-slate-200 hover:border-[#1f3a6e] hover:shadow-md text-[#0b1424] px-7 py-3.5 rounded-full transition-all"
            >
              <svg width="18" height="18" viewBox="0 0 48 48" aria-hidden="true">
                <path fill="#4285F4" d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z"/>
                <path fill="#34A853" d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z"/>
                <path fill="#FBBC05" d="M11.69 28.18C11.25 26.86 11 25.45 11 24s.25-2.86.69-4.18v-5.7H4.34C2.85 17.09 2 20.45 2 24c0 3.55.85 6.91 2.34 9.88l7.35-5.7z"/>
                <path fill="#EA4335" d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7C13.42 14.62 18.27 10.75 24 10.75z"/>
              </svg>
              Read all reviews on Google
            </a>
          </div>
        </div>
      </section>

      {/* INSTAGRAM (moved up — placeholder removed) */}

      {/* CTA */}
      <section className="py-20 px-6 md:px-12 bg-[#0b1424] text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl md:text-5xl leading-tight">
            Ready to start your smile journey?
          </h2>
          <p className="mt-5 text-white/70">
            Book a consultation today — we'll design a treatment plan tailored just for you.
          </p>
          <a
            href={buildWhatsAppUrl(defaultAppointmentMessage)}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 bg-white text-[#0b1424] px-8 py-4 rounded-full hover:bg-[#7fb3ff] transition-colors"
          >
            <MessageCircle size={16} /> Book on WhatsApp <ArrowRight size={16} />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;