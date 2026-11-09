import React, { useState } from "react";
import { Phone, Mail, MapPin, Clock, Instagram, Send, CheckCircle2, MessageCircle } from "lucide-react";
import { clinicInfo, buildWhatsAppUrl } from "../mock";
import { useToast } from "../hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.phone) {
      toast({
        title: "Missing fields",
        description: "Please enter your name and phone number.",
      });
      return;
    }
    // Save locally as a backup
    const existing = JSON.parse(localStorage.getItem("ssdc_appointments") || "[]");
    existing.push({ ...form, at: new Date().toISOString() });
    localStorage.setItem("ssdc_appointments", JSON.stringify(existing));

    // Build pre-filled WhatsApp message and open chat
    const msg = `Hello Shivam Speciality Dental Care,

I would like to book an appointment.

Name: ${form.name}
Phone: ${form.phone}${form.email ? `\nEmail: ${form.email}` : ""}${form.service ? `\nService: ${form.service}` : ""}${form.message ? `\nMessage: ${form.message}` : ""}

Please share available slots. Thank you!`;

    window.open(buildWhatsAppUrl(msg), "_blank");

    setSubmitted(true);
    toast({
      title: "Opening WhatsApp",
      description: "Your appointment request is ready to send.",
    });
    setForm({ name: "", phone: "", email: "", service: "", message: "" });
  };

  return (
    <div>
      <section className="py-20 md:py-28 px-6 md:px-12 bg-[#f7f9fc]">
        <div className="max-w-5xl mx-auto text-center">
          <div className="text-xs tracking-[0.3em] text-[#1f3a6e] uppercase mb-4">Get In Touch</div>
          <h1 className="font-serif text-4xl md:text-6xl text-[#0b1424] leading-tight">
            Book your visit
          </h1>
          <p className="mt-5 text-slate-600 text-lg">
            We're here to help. Reach out to schedule a consultation or ask any question.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-10">
          <div className="md:col-span-2 space-y-6">
            <div className="bg-white border border-slate-200 rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="h-11 w-11 rounded-full bg-[#1f3a6e]/10 flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} className="text-[#1f3a6e]" />
                </div>
                <div>
                  <div className="font-medium text-[#0b1424]">Visit Us</div>
                  <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                    {clinicInfo.address}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="h-11 w-11 rounded-full bg-[#1f3a6e]/10 flex items-center justify-center flex-shrink-0">
                  <Phone size={18} className="text-[#1f3a6e]" />
                </div>
                <div>
                  <div className="font-medium text-[#0b1424]">Call Us</div>
                  <p className="text-sm text-slate-600 mt-1">{clinicInfo.phone}</p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="h-11 w-11 rounded-full bg-[#1f3a6e]/10 flex items-center justify-center flex-shrink-0">
                  <Mail size={18} className="text-[#1f3a6e]" />
                </div>
                <div>
                  <div className="font-medium text-[#0b1424]">Email</div>
                  <p className="text-sm text-slate-600 mt-1">{clinicInfo.email}</p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="h-11 w-11 rounded-full bg-[#1f3a6e]/10 flex items-center justify-center flex-shrink-0">
                  <Clock size={18} className="text-[#1f3a6e]" />
                </div>
                <div>
                  <div className="font-medium text-[#0b1424]">Hours</div>
                  {clinicInfo.hours.map((h) => (
                    <p key={h.day} className="text-sm text-slate-600 mt-1">
                      <span className="text-[#0b1424]">{h.day}</span> · {h.time}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            <a
              href="https://www.instagram.com/ssdcvapi/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 bg-[#0b1424] text-white px-6 py-4 rounded-2xl hover:bg-[#1f3a6e] transition-colors"
            >
              <Instagram size={18} />
              <span>Follow us on Instagram · {clinicInfo.instagram}</span>
            </a>
          </div>

          <div className="md:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="bg-white border border-slate-200 rounded-2xl p-8"
            >
              <h2 className="font-serif text-2xl text-[#0b1424] mb-6">Request an Appointment</h2>
              {submitted && (
                <div className="flex items-center gap-2 text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg px-4 py-3 mb-6 text-sm">
                  <CheckCircle2 size={16} /> Thank you! We'll get back to you shortly.
                </div>
              )}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-slate-600">Full Name *</label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="mt-1 w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#1f3a6e]/30 focus:border-[#1f3a6e] transition"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="text-xs text-slate-600">Phone Number *</label>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    className="mt-1 w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#1f3a6e]/30 focus:border-[#1f3a6e] transition"
                    placeholder="+91"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="text-xs text-slate-600">Email</label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    className="mt-1 w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#1f3a6e]/30 focus:border-[#1f3a6e] transition"
                    placeholder="you@example.com"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="text-xs text-slate-600">Service Interested In</label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="mt-1 w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#1f3a6e]/30 focus:border-[#1f3a6e] transition bg-white"
                  >
                    <option value="">Select a service</option>
                    <option>Dental Check-up</option>
                    <option>Teeth Whitening</option>
                    <option>Braces / Aligners</option>
                    <option>Dental Implants</option>
                    <option>Root Canal Treatment</option>
                    <option>Smile Makeover</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className="text-xs text-slate-600">Message</label>
                  <textarea
                    name="message"
                    rows="4"
                    value={form.message}
                    onChange={handleChange}
                    className="mt-1 w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#1f3a6e]/30 focus:border-[#1f3a6e] transition resize-none"
                    placeholder="Tell us briefly about your concern…"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="mt-6 inline-flex items-center gap-2 bg-[#25D366] text-white px-7 py-3.5 rounded-full hover:bg-[#1ebe5a] transition-colors"
              >
                <MessageCircle size={16} /> Send via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-12 pb-20">
        <div className="max-w-6xl mx-auto rounded-2xl overflow-hidden border border-slate-200">
          <iframe
            title="clinic-map"
            src="https://www.google.com/maps?q=Shivam+Speciality+Dental+Care+Vapi&output=embed"
            width="100%"
            height="400"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </div>
  );
};

export default Contact;
