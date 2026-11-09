import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Clock, Tag } from "lucide-react";
import { blogs } from "../mock";

const Blogs = () => {
  return (
    <div>
      {/* HERO */}
      <section className="py-20 md:py-28 px-6 md:px-12 bg-[#f7f9fc]">
        <div className="max-w-5xl mx-auto text-center">
          <div className="text-xs tracking-[0.3em] text-[#1f3a6e] uppercase mb-4">
            Knowledge Centre
          </div>
          <h1 className="font-serif text-4xl md:text-6xl text-[#0b1424] leading-tight">
            Blogs &amp; Insights
          </h1>
          <p className="mt-6 text-slate-600 text-lg leading-relaxed">
            Tips, guides and stories from our doctors — to help you take better care of your
            smile.
          </p>
        </div>
      </section>

      {/* BLOGS GRID */}
      <section className="py-20 md:py-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((b) => (
              <Link
                key={b.id}
                to={`/blog/${b.id}`}
                data-testid={`blog-card-${b.id}`}
                className="group bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={b.image}
                    alt={b.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
                    <span className="inline-flex items-center gap-1.5 text-[#1f3a6e]">
                      <Tag size={12} /> {b.category}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock size={12} /> {b.readTime}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl text-[#0b1424] leading-snug">{b.title}</h3>
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">{b.excerpt}</p>
                  <div className="mt-5 inline-flex items-center gap-2 text-sm text-[#1f3a6e] font-medium">
                    Read article
                    <ArrowRight
                      size={14}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="inline-block bg-[#f7f9fc] border border-slate-200 rounded-2xl px-8 py-6">
              <h4 className="font-serif text-xl text-[#0b1424]">More articles coming soon</h4>
              <p className="mt-2 text-sm text-slate-600 max-w-md">
                Subscribe to our updates by following us on Instagram for the latest oral health
                tips and clinic stories.
              </p>
              <a
                href="https://www.instagram.com/ssdcvapi/"
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-2 bg-[#0b1424] text-white px-6 py-3 rounded-full hover:bg-[#1f3a6e] transition-colors text-sm"
              >
                Follow @ssdcvapi <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;
