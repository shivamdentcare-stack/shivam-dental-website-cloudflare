import React, { useMemo } from "react";
import { Award, Heart, ShieldCheck, Users } from "lucide-react";
import { doctors, clinicInfo, stats } from "../mock";

const About = () => {
  const inHouseDoctors = useMemo(
    () => doctors.filter((d) => d.type === "in-house"),
    []
  );
  return (
    <div>
      <section className="py-20 md:py-28 px-6 md:px-12 bg-[#f7f9fc]">
        <div className="max-w-5xl mx-auto text-center">
          <div className="text-xs tracking-[0.3em] text-[#1f3a6e] uppercase mb-4">About Us</div>
          <h1 className="font-serif text-4xl md:text-6xl text-[#0b1424] leading-tight">
            A trusted name in dental care
          </h1>
          <p className="mt-6 text-slate-600 text-lg leading-relaxed">
            {clinicInfo.legacy}
          </p>
        </div>
      </section>

      <section className="py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <img
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80"
            alt="Clinic interior"
            className="w-full h-[450px] object-cover rounded-2xl shadow-lg"
          />
          <div>
            <h2 className="font-serif text-3xl md:text-4xl text-[#0b1424]">Our Philosophy</h2>
            <p className="mt-5 text-slate-600 leading-relaxed">
              At Shivam Speciality Dental Care, we believe great dentistry is a blend of science,
              skill and empathy. Every patient walking into our clinic is treated as family —
              listened to with patience, examined with care, and offered transparent choices.
            </p>
            <p className="mt-4 text-slate-600 leading-relaxed">
              From single-visit root canals to full-mouth implant rehabilitation and digital smile
              makeovers, we use evidence-based protocols and modern technology to deliver
              comfortable, predictable outcomes.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 md:px-12 bg-[#0b1424] text-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-serif text-4xl md:text-5xl text-[#7fb3ff]">{s.value}</div>
              <div className="mt-2 text-sm text-white/70">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 md:py-28 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-5xl text-[#0b1424]">Meet Our Doctors</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            {inHouseDoctors.map((d) => (
              <div
                key={d.id}
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden"
              >
                <img
                  src={d.image}
                  alt={d.name}
                  style={{ objectPosition: d.imagePosition || "center" }}
                  className="w-full h-72 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-serif text-2xl text-[#0b1424]">{d.name}</h3>
                  <p className="text-[#1f3a6e] font-medium mt-1">{d.qualification}</p>
                  <p className="text-xs text-slate-500">{d.experience}</p>
                  <p className="mt-4 text-sm text-slate-600 leading-relaxed">{d.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 md:px-12 bg-[#f7f9fc]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6">
          {[
            { icon: Award, title: "Award-winning", desc: "Recognised for excellence." },
            { icon: Users, title: "5000+ Patients", desc: "Trusted by families across Vapi." },
            { icon: ShieldCheck, title: "Sterile", desc: "Hospital-grade safety standards." },
            { icon: Heart, title: "Caring Team", desc: "Gentle, patient-first approach." },
          ].map((item) => (
            <div
              key={item.title}
              className="text-center p-6 bg-white rounded-2xl border border-slate-200"
            >
              <div className="h-14 w-14 rounded-full bg-[#1f3a6e]/10 flex items-center justify-center mx-auto mb-4">
                <item.icon size={22} className="text-[#1f3a6e]" />
              </div>
              <h4 className="font-serif text-lg text-[#0b1424]">{item.title}</h4>
              <p className="mt-2 text-sm text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
