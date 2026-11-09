import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { services } from "../mock";

const CategoryPage = ({ title, subtitle, category }) => {
  const list = services.filter((s) => s.category === category);

  return (
    <div>
      <section className="py-20 md:py-28 px-6 md:px-12 bg-[#f7f9fc]">
        <div className="max-w-5xl mx-auto text-center">
          <div className="text-xs tracking-[0.3em] text-[#1f3a6e] uppercase mb-4">
            Our Specialities
          </div>
          <h1 className="font-serif text-4xl md:text-6xl text-[#0b1424] leading-tight">
            {title}
          </h1>
          <p className="mt-6 text-slate-600 text-lg">{subtitle}</p>
        </div>
      </section>

      <section className="py-16 md:py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map((s) => (
            <Link
              key={s.id}
              to={`/service/${s.id}`}
              className="group relative bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl text-[#0b1424] leading-snug">{s.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{s.short}</p>
                <div className="mt-4 inline-flex items-center gap-2 text-sm text-[#1f3a6e] font-medium">
                  Learn more
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
        {list.length === 0 && (
          <div className="text-center text-slate-500 py-20">
            More services in this category coming soon. Please get in touch for any specific
            treatment.
          </div>
        )}
      </section>
    </div>
  );
};

export default CategoryPage;
