import React from "react";
import { MessageCircle } from "lucide-react";
import { buildWhatsAppUrl, defaultAppointmentMessage } from "../mock";

const WhatsAppFab = () => {
  return (
    <a
      href={buildWhatsAppUrl(defaultAppointmentMessage)}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2 bg-[#25D366] text-white pl-4 pr-5 py-3 rounded-full shadow-2xl hover:bg-[#1ebe5a] hover:scale-105 transition-all duration-200 group"
      style={{ boxShadow: "0 8px 24px rgba(37, 211, 102, 0.4)" }}
    >
      <span className="relative flex h-3 w-3">
        <span className="absolute inline-flex h-full w-full rounded-full bg-white opacity-60 animate-ping" />
        <span className="relative inline-flex rounded-full h-3 w-3 bg-white" />
      </span>
      <MessageCircle size={20} className="fill-white" />
      <span className="hidden sm:inline text-sm font-medium">Chat on WhatsApp</span>
    </a>
  );
};

export default WhatsAppFab;
