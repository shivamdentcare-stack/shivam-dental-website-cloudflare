import React from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowRight, Check, ChevronLeft, MessageCircle } from "lucide-react";
import { services, serviceFaqs, buildWhatsAppUrl, serviceEnquiryMessage } from "../mock";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";

const ServiceDetail = () => {
  const { id } = useParams();
  const service = services.find((s) => s.id === id);

  if (!service) {
    return (
      <div className="py-32 text-center">
        <h2 className="font-serif text-3xl text-[#0b1424]">Service not found</h2>
        <Link to="/" className="mt-4 inline-block text-[#1f3a6e] underline">
          Back to home
        </Link>
      </div>
    );
  }

  const related = services.filter((s) => s.id !== service.id).slice(0, 3);
  const faqs = serviceFaqs[service.id] || [];

  const faqJsonLd =
    faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: {
              "@type": "Answer",
              text: f.a,
            },
          })),
        }
      : null;

  return (
    <div>
      {faqJsonLd && (
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
      <section className="relative h-[55vh] md:h-[60vh] overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b1424]/85 via-[#0b1424]/60 to-transparent" />
        <div className="relative h-full flex items-center px-6 md:px-12">
          <div className="max-w-3xl text-white">
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 text-sm text-white/80 hover:text-white mb-6"
            >
              <ChevronLeft size={16} /> Back to home
            </Link>
            <h1 className="font-serif text-4xl md:text-6xl leading-tight">{service.title}</h1>
            <p className="mt-5 text-lg text-white/85 max-w-2xl">{service.description}</p>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="font-serif text-3xl text-[#0b1424] mb-6">What's included</h2>
            <ul className="space-y-4">
              {service.points.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-[#1f3a6e]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={14} className="text-[#1f3a6e]" />
                  </div>
                  <span className="text-slate-700">{p}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-[#f7f9fc] p-8 rounded-2xl border border-slate-200">
            <h3 className="font-serif text-2xl text-[#0b1424]">Book a Consultation</h3>
            <p className="mt-3 text-slate-600 text-sm">
              Talk to our specialists about {service.title.toLowerCase()} and get a personalised
              treatment plan.
            </p>
            <a
              href={buildWhatsAppUrl(serviceEnquiryMessage(service.title))}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 bg-[#0b1424] text-white px-6 py-3 rounded-full hover:bg-[#1f3a6e] transition-colors"
            >
              <MessageCircle size={16} /> Book on WhatsApp <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {service.details && service.details.length > 0 && (
        <section className="py-16 md:py-20 px-6 md:px-12 bg-white border-t border-slate-100">
          <div className="max-w-4xl mx-auto space-y-12">
            {service.details.map((d) => (
              <div key={d.title}>
                <div className="text-xs tracking-[0.3em] text-[#1f3a6e] uppercase mb-3">
                  In focus
                </div>
                <h3 className="font-serif text-3xl md:text-4xl text-[#0b1424] leading-tight">
                  {d.title}
                </h3>
                <p className="mt-5 text-slate-600 leading-relaxed text-[17px]">{d.body}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {service.beforeAfter && service.beforeAfter.length > 0 && (
        <section className="py-16 md:py-20 px-6 md:px-12 bg-[#f7f9fc]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="text-xs tracking-[0.3em] text-[#1f3a6e] uppercase mb-4">
                Real Results
              </div>
              <h2 className="font-serif text-3xl md:text-5xl text-[#0b1424]">
                Before &amp; After
              </h2>
              <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
                Actual patient outcomes at Shivam Speciality Dental Care. Results may vary from
                person to person.
              </p>
            </div>
            <div className="space-y-12">
              {service.beforeAfter.map((ba, i) => (
                <div key={ba.before || `ba-${i}`}>
                  <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                    <div className="relative group rounded-2xl overflow-hidden border border-slate-200 bg-white">
                      <div className="aspect-[4/3] overflow-hidden">
                        <img
                          src={ba.before}
                          alt="Before treatment"
                          style={{
                            transform: ba.beforeZoom ? `scale(${ba.beforeZoom})` : undefined,
                            objectPosition: ba.beforePos || "center",
                            transformOrigin: ba.beforePos || "center",
                          }}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <span className="absolute top-4 left-4 bg-white/95 backdrop-blur text-[#0b1424] text-xs font-semibold tracking-[0.2em] uppercase px-3 py-1.5 rounded-full shadow">
                        Before
                      </span>
                    </div>
                    <div className="relative group rounded-2xl overflow-hidden border border-slate-200 bg-white">
                      <div className="aspect-[4/3] overflow-hidden">
                        <img
                          src={ba.after}
                          alt="After treatment"
                          style={{
                            transform: ba.afterZoom ? `scale(${ba.afterZoom})` : undefined,
                            objectPosition: ba.afterPos || "center",
                            transformOrigin: ba.afterPos || "center",
                          }}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <span className="absolute top-4 left-4 bg-[#1f3a6e] text-white text-xs font-semibold tracking-[0.2em] uppercase px-3 py-1.5 rounded-full shadow">
                        After
                      </span>
                    </div>
                  </div>
                  {ba.label && (
                    <p className="mt-4 text-center text-sm text-slate-600">{ba.label}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {faqs.length > 0 && (
        <section className="py-16 md:py-20 px-6 md:px-12 bg-white border-t border-slate-100">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <div className="text-xs tracking-[0.3em] text-[#1f3a6e] uppercase mb-4">
                FAQs
              </div>
              <h2 className="font-serif text-3xl md:text-4xl text-[#0b1424]">
                Frequently asked questions
              </h2>
              <p className="mt-4 text-slate-600">
                Quick answers about {service.title.toLowerCase()} at SSDC, Vapi.
              </p>
            </div>
            <Accordion type="single" collapsible className="w-full" data-testid="service-faqs">
              {faqs.map((f) => (
                <AccordionItem
                  key={f.q}
                  value={`faq-${f.q.slice(0, 20)}`}
                  className="border-b border-slate-200"
                  data-testid={`faq-item-${f.q.slice(0, 20)}`}
                >
                  <AccordionTrigger className="text-left font-serif text-lg text-[#0b1424] hover:no-underline py-5">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 leading-relaxed text-[15px] pb-5">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      )}

      <section className="py-16 px-6 md:px-12 bg-[#f7f9fc]">
        <div className="max-w-6xl mx-auto">
          <h3 className="font-serif text-2xl md:text-3xl text-[#0b1424] mb-8">Other services</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
            {related.map((s) => (
              <Link
                key={s.id}
                to={`/service/${s.id}`}
                className="group bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <div className="font-serif text-lg text-[#0b1424]">{s.title}</div>
                  <p className="text-sm text-slate-600 mt-1">{s.short}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
