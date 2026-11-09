import React from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowRight, ChevronLeft, Clock, MessageCircle, Tag } from "lucide-react";
import {
  blogs,
  buildWhatsAppUrl,
  defaultAppointmentMessage,
} from "../mock";

const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogs.find((b) => String(b.id) === id);

  if (!blog) {
    return (
      <div className="py-32 text-center">
        <h2 className="font-serif text-3xl text-[#0b1424]">Article not found</h2>
        <Link
          to="/blogs"
          className="mt-4 inline-block text-[#1f3a6e] underline"
          data-testid="blog-not-found-back"
        >
          Back to blogs
        </Link>
      </div>
    );
  }

  const related = blogs.filter((b) => b.id !== blog.id).slice(0, 3);

  return (
    <div data-testid="blog-detail">
      {/* HERO */}
      <section className="relative h-[55vh] md:h-[60vh] overflow-hidden">
        <img
          src={blog.image}
          alt={blog.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b1424]/85 via-[#0b1424]/60 to-transparent" />
        <div className="relative h-full flex items-center px-6 md:px-12">
          <div className="max-w-3xl text-white">
            <Link
              to="/blogs"
              className="inline-flex items-center gap-1.5 text-sm text-white/80 hover:text-white mb-6"
              data-testid="blog-back-link"
            >
              <ChevronLeft size={16} /> Back to blogs
            </Link>
            <div className="flex items-center gap-4 text-xs text-white/80 mb-4">
              <span className="inline-flex items-center gap-1.5">
                <Tag size={12} /> {blog.category}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock size={12} /> {blog.readTime}
              </span>
              <span>{blog.date}</span>
            </div>
            <h1 className="font-serif text-3xl md:text-5xl leading-tight" data-testid="blog-title">
              {blog.title}
            </h1>
          </div>
        </div>
      </section>

      {/* BODY */}
      <section className="py-16 md:py-20 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-[#1f3a6e] leading-relaxed font-serif italic mb-10">
            {blog.excerpt}
          </p>
          <div className="space-y-6 text-slate-700 leading-relaxed text-[17px]" data-testid="blog-body">
            {(blog.body || []).map((item, i) => {
              if (typeof item === "object" && item.heading) {
                return (
                  <h2
                    key={`h-${item.heading}`}
                    className="font-serif text-2xl md:text-3xl text-[#0b1424] !mt-12 mb-2"
                  >
                    {item.heading}
                  </h2>
                );
              }
              return <p key={`p-${i}-${item.slice(0, 40)}`}>{item}</p>;
            })}
          </div>

          {blog.author && (
            <div
              className="mt-10 pt-6 border-t border-slate-200 text-sm text-slate-600"
              data-testid="blog-author"
            >
              <span className="text-slate-500">Author · </span>
              <span className="font-serif text-base text-[#0b1424]">
                {blog.author}
              </span>
            </div>
          )}

          {/* CTA */}
          <div className="mt-14 bg-[#f7f9fc] border border-slate-200 rounded-2xl p-8">
            <h3 className="font-serif text-2xl text-[#0b1424]">
              Have questions about your smile?
            </h3>
            <p className="mt-2 text-slate-600 text-sm">
              Talk to our specialists at Shivam Speciality Dental Care for expert
              guidance and a personalised treatment plan.
            </p>
            <a
              href={buildWhatsAppUrl(defaultAppointmentMessage)}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 bg-[#0b1424] text-white px-6 py-3 rounded-full hover:bg-[#1f3a6e] transition-colors"
              data-testid="blog-cta-whatsapp"
            >
              <MessageCircle size={16} /> Book on WhatsApp <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* RELATED */}
      {related.length > 0 && (
        <section className="py-16 px-6 md:px-12 bg-[#f7f9fc]">
          <div className="max-w-6xl mx-auto">
            <h3 className="font-serif text-2xl md:text-3xl text-[#0b1424] mb-8">
              More from our blog
            </h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
              {related.map((b) => (
                <Link
                  key={b.id}
                  to={`/blog/${b.id}`}
                  className="group bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow"
                  data-testid={`related-blog-${b.id}`}
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={b.image}
                      alt={b.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <div className="text-xs text-[#1f3a6e] mb-2">{b.category}</div>
                    <div className="font-serif text-lg text-[#0b1424] leading-snug">
                      {b.title}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default BlogDetail;
