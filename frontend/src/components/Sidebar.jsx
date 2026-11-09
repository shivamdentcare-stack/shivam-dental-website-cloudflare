import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Search } from "lucide-react";
import { clinicInfo, navItems } from "../mock";

const LOGO_URL =
  "/assets/emergent-9bb1142647981d52.png";

const Sidebar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const isActive = (item) => {
    if (item.path === "/") return location.pathname === "/";
    if (location.pathname === item.path) return true;
    // Also highlight the parent when visiting any of its child treatment pages
    if (item.children && item.children.some((c) => location.pathname === c.path)) {
      return true;
    }
    return false;
  };

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      {/* Mobile top bar */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-40 bg-[#0b1424] text-white flex items-center justify-between px-4 h-16 border-b border-white/10">
        <Link to="/" className="flex items-center gap-2" onClick={closeMobile}>
          <img src={LOGO_URL} alt="SSDC" className="h-10 w-auto object-contain" />
        </Link>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="p-2 rounded hover:bg-white/10 transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-30 h-screen w-72 bg-[#0b1424] text-white border-r border-white/10 transform transition-transform duration-300 ease-out md:translate-x-0 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full overflow-y-auto pt-8 pb-6 px-7">
          {/* Logo */}
          <Link
            to="/"
            onClick={closeMobile}
            className="flex flex-col items-center gap-3 mb-10 group"
          >
            <img
              src={LOGO_URL}
              alt="Shivam Speciality Dental Care"
              className="w-44 h-auto object-contain group-hover:opacity-90 transition-opacity"
            />
          </Link>

          {/* Nav */}
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                onClick={closeMobile}
                className={`text-[15px] py-2.5 px-1 border-l-2 pl-4 transition-all duration-200 hover:text-[#7fb3ff] hover:border-[#7fb3ff] ${
                  isActive(item)
                    ? "text-[#7fb3ff] border-[#7fb3ff] font-medium"
                    : "text-white/85 border-transparent"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="mt-auto pt-10">
            <div className="text-xs text-white/50 leading-relaxed">
              <div className="mb-2 text-white/70">Visit us</div>
              <div>{clinicInfo.address}</div>
            </div>
            <button className="mt-6 flex items-center gap-2 text-xs text-white/60 hover:text-white transition-colors">
              <Search size={14} />
              Search this site
            </button>
          </div>
        </div>
      </aside>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          onClick={closeMobile}
          className="md:hidden fixed inset-0 bg-black/60 z-20"
        />
      )}
    </>
  );
};

export default Sidebar;
