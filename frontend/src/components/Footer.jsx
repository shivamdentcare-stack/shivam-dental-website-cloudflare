import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Phone, Mail, MapPin, Clock } from "lucide-react";
import { clinicInfo, navItems } from "../mock";

const Footer = () => {
  return (
    <footer className="bg-[#0b1424] text-white/80 mt-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-1">
          <img
            src="/assets/emergent-9bb1142647981d52.png"
            alt="Shivam Speciality Dental Care"
            className="w-40 h-auto object-contain mb-6"
          />
          <p className="text-sm leading-relaxed text-white/60">
            Comprehensive dental care for the entire family — from routine check-ups to advanced
            implants and full smile makeovers.
          </p>
        </div>

        <div>
          <h4 className="text-white font-medium mb-4 text-sm tracking-wider uppercase">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm">
            {navItems.slice(0, 6).map((item) => (
              <li key={item.id}>
                <Link
                  to={item.path}
                  className="hover:text-[#7fb3ff] transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-medium mb-4 text-sm tracking-wider uppercase">
            Contact
          </h4>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-3">
              <MapPin size={16} className="flex-shrink-0 mt-0.5 text-[#7fb3ff]" />
              <span className="leading-relaxed">{clinicInfo.address}</span>
            </li>
            <li className="flex gap-3 items-center">
              <Phone size={16} className="text-[#7fb3ff]" />
              <span>{clinicInfo.phone}</span>
            </li>
            <li className="flex gap-3 items-center">
              <Mail size={16} className="text-[#7fb3ff]" />
              <span>{clinicInfo.email}</span>
            </li>
            <li className="flex gap-3 items-center">
              <Instagram size={16} className="text-[#7fb3ff]" />
              <a
                href="https://www.instagram.com/ssdcvapi/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white"
              >
                {clinicInfo.instagram}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-medium mb-4 text-sm tracking-wider uppercase">
            Working Hours
          </h4>
          <ul className="space-y-3 text-sm">
            {clinicInfo.hours.map((h) => (
              <li key={h.day} className="flex gap-3">
                <Clock size={16} className="flex-shrink-0 mt-0.5 text-[#7fb3ff]" />
                <div>
                  <div className="text-white">{h.day}</div>
                  <div className="text-white/60 text-xs">{h.time}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-5 text-xs text-white/50 flex flex-col md:flex-row items-center justify-between gap-2">
          <span>© {new Date().getFullYear()} Shivam Speciality Dental Care. All rights reserved.</span>
          <span>Crafted with care · Vapi, Gujarat</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
