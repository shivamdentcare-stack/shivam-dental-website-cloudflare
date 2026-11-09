// Mock data for Shivam Speciality Dental Care

// WhatsApp helpers
// Number format: country code + number, no +, spaces or dashes
export const whatsappNumber = "919826668724";

export const buildWhatsAppUrl = (message) =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

export const defaultAppointmentMessage = `Hello Shivam Speciality Dental Care,

I would like to book an appointment. Please share available slots.

Name: 
Service: 
Preferred day/time: 

Thank you!`;

export const serviceEnquiryMessage = (serviceTitle) =>
  `Hello Shivam Speciality Dental Care,

I'm interested in ${serviceTitle}. Please share more details and available appointment slots.

Name: 
Preferred day/time: 

Thank you!`;

export const clinicInfo = {
  name: "Shivam Speciality Dental Care",
  shortName: "SSDC",
  tagline: "Vapi's Leading Dental Clinic",
  subTagline: "for Smile Makeovers, Implants & Complete Dental Solutions",
  hero: "Everyone deserves",
  heroAccent: "a Smile they Love",
  legacy:
    "Your smile is our priority. Experience painless, modern and personalized dental care under expert hands.",
  address:
    "Shop No. 4, Nirmal Co-op. Housing Society, Nearby Haria Hospital, Chharwada Road, Rotary Circle, Industrial Estate, Vapi-396195, Gujarat",
  phone: "+91 98266 68724",
  email: "shivamdentcare@gmail.com",
  instagram: "@ssdcvapi",
  hours: [
    { day: "Monday - Saturday", time: "10:00 AM - 1:00 PM, 4:30 PM - 8:00 PM" },
    { day: "Sunday", time: "Closed" },
  ],
};

export const doctors = [
  {
    id: 1,
    name: "Dr. Parashar Kirtibhai Desai",
    qualification: "MDS, Prosthodontist & Implantologist",
    experience: "10 Years of Experience",
    type: "in-house",
    role: "Founder & Chief Dental Surgeon",
    image:
      "/assets/emergent-a975ecebf62549a6.png",
    imagePosition: "center 15%",
    bio: "Dr. Parashar Kirtibhai Desai is an award-winning prosthodontist and implantologist based in Vapi. With a Master's in Dental Surgery (Prosthodontics) and over a decade of clinical experience, he specializes in dental implants and digital smile designing. He combines artistry with the latest evidence-based techniques to deliver natural, long-lasting results.",
    specialties: [
      "Dental Implants",
      "Smile Designing",
      "Full Mouth Rehabilitation",
      "Crowns & Veneers",
      "Prosthodontics",
    ],
  },
  {
    id: 2,
    name: "Dr. Himani Parashar Desai",
    qualification: "BDS, Dental Surgeon",
    experience: "6 Years of Experience",
    type: "in-house",
    role: "Resident Dental Surgeon",
    image:
      "/assets/emergent-a7ee9202bc155ee4.png",
    imagePosition: "center 25%",
    bio: "Dr. Himani Parashar Desai is a compassionate dental surgeon dedicated to preventive and restorative dentistry. She specializes in general dentistry, painless root canal treatments, and oral surgical procedures, ensuring every patient receives gentle, personalised, and evidence-based care.",
    specialties: [
      "General Dentistry",
      "Root Canal Treatment",
      "Oral Surgery",
      "Pediatric Dentistry",
      "Preventive Care",
    ],
  },
  {
    id: 3,
    name: "Dr. Aroon K. Bengani",
    qualification: "MDS, Oral & Maxillofacial Surgeon",
    experience: "Visiting Specialist",
    type: "visiting",
    role: "Oral & Maxillofacial Surgeon · Basal Implantologist",
    image:
      "/assets/emergent-f1bf1fd7936894a7.jpeg",
    imagePosition: "center 25%",
    bio: "Dr. Aroon K. Bengani is a highly experienced oral and maxillofacial surgeon and a certified basal implantologist. He visits SSDC for advanced surgical procedures including complex implant placements, full-arch basal implants, jaw surgeries and trauma management.",
    specialties: [
      "Basal Implants",
      "Maxillofacial Surgery",
      "Complex Extractions",
      "Trauma Management",
    ],
  },
  {
    id: 4,
    name: "Dr. Mrudul Vadiya",
    qualification: "MDS, Orthodontist",
    experience: "Visiting Specialist",
    type: "visiting",
    role: "Orthodontist & Dentofacial Orthopedist",
    image:
      "/assets/emergent-5e69c6daf287c5f7.jpeg",
    imagePosition: "center 20%",
    bio: "Dr. Mrudul Vadiya is a specialist orthodontist who visits SSDC to provide tailored orthodontic treatments — from traditional braces and ceramic brackets to clear aligners and advanced bite-correction protocols for both children and adults.",
    specialties: [
      "Metal & Ceramic Braces",
      "Clear Aligners",
      "Bite Correction",
      "Pediatric Orthodontics",
      "Dentofacial Orthopedics",
    ],
  },
];

export const services = [
  // ================= COSMETIC DENTISTRY =================
  {
    id: "veneers",
    title: "Dental Veneers",
    short: "Thin, tooth-coloured shells for a flawless smile.",
    image:
      "/assets/emergent-1eb8ad68f37d9fe6.jpg",
    description:
      "Custom ceramic veneers correct stains, gaps, chips and uneven teeth — for a natural, brighter, well-shaped smile.",
    points: [
      "Customised shade matching",
      "Minimally invasive prep",
      "Natural translucency",
      "Long-lasting durable results",
    ],
    details: [
      {
        title: "Ceramic Veneers",
        body: "Ceramic veneers are thin, tooth-colored covers placed on the front of teeth to improve smile appearance. They help correct stains, gaps, chipped or uneven teeth and give a natural, brighter, well-shaped smile with long-lasting results.",
      },
    ],
    beforeAfter: [
      {
        label: "Ceramic Veneers · Gap Closure & Smile Correction",
        before:
          "/assets/emergent-12957bb9c281ed11.jpeg",
        after:
          "/assets/emergent-7de19e354262505f.jpeg",
      },
      {
        label: "Ceramic Veneers · Full Smile Makeover",
        before:
          "/assets/emergent-1be5784f52ce8a10.jpeg",
        after:
          "/assets/emergent-ecbb1ca0a8e76e8f.jpeg",
        beforeZoom: 2.0,
        beforePos: "center 48%",
        afterZoom: 2.0,
        afterPos: "center 48%",
      },
    ],
    category: "cosmetic",
    featured: true,
  },
  {
    id: "ceramic-crowns",
    title: "Full Ceramic (Metal-Free) Crowns",
    short: "Strong, lifelike crowns with no metal showing through.",
    image:
      "/assets/emergent-57552c8243d31624.jpeg",
    description:
      "All-ceramic, metal-free crowns that look identical to natural teeth and are biocompatible — the gold standard for front teeth restorations.",
    points: [
      "Zirconia & E-Max ceramic options",
      "No grey gum-line over time",
      "Biocompatible & hypoallergenic",
      "Natural translucency",
    ],
    category: "cosmetic",
  },
  {
    id: "dsd",
    title: "Digital Smile Designing",
    short: "Preview your new smile on screen before treatment begins.",
    image:
      "/assets/emergent-92997c5bf59060fc.jpg",
    description:
      "Digital Smile Design (DSD) lets us plan and visualise your final smile pixel-by-pixel using your facial photographs and 3D scans before any treatment starts.",
    points: [
      "Photographic smile analysis",
      "3D mock-up of new smile",
      "Try-in preview before treatment",
      "Predictable, planned outcome",
    ],
    category: "cosmetic",
  },
  {
    id: "whitening",
    title: "Teeth Whitening (Bleaching)",
    short: "Brighten your smile by several shades, safely.",
    image:
      "/assets/emergent-ba95ecc8b513233b.webp",
    description:
      "Professional in-office and take-home bleaching systems that deliver visibly whiter teeth without damaging enamel.",
    points: [
      "In-clinic LED whitening",
      "Custom take-home trays",
      "Stain removal & polishing",
      "Long-lasting results",
    ],
    category: "cosmetic",
    featured: true,
  },
  {
    id: "gum-contouring",
    title: "Gum Contouring",
    short: "Reshape uneven or excessive gum line for a balanced smile.",
    image:
      "/assets/emergent-ae8f12d4b21a9b61.jpg",
    description:
      "Laser-assisted gum reshaping to correct gummy smiles, uneven gum lines and improve overall smile aesthetics.",
    points: [
      "Painless laser procedure",
      "Treats gummy smile",
      "Even, balanced gum line",
      "Quick recovery",
    ],
    category: "cosmetic",
  },

  // ================= IMPLANT DENTISTRY =================
  {
    id: "single-implant",
    title: "Single Tooth Replacement",
    short: "Replace a missing tooth permanently with a dental implant.",
    image:
      "/assets/emergent-903d784046ef6e3e.jpeg",
    description:
      "A titanium implant placed into the jawbone topped with a natural-looking ceramic crown — the closest replacement to a real tooth.",
    points: [
      "Looks & feels natural",
      "Preserves adjacent teeth",
      "Prevents jawbone loss",
      "Lifetime solution",
    ],
    category: "implant",
    featured: true,
  },
  {
    id: "multiple-implant",
    title: "Multiple Tooth Replacement",
    short: "Implant-supported bridges for two or more missing teeth.",
    image:
      "/assets/emergent-5b568792643d244b.jpeg",
    description:
      "Two or more implants supporting a bridge — a stable, long-term replacement for several adjacent missing teeth without grinding healthy ones.",
    points: [
      "Implant-supported bridge",
      "Stable chewing function",
      "No need to drill healthy teeth",
      "Aesthetic ceramic finish",
    ],
    category: "implant",
  },
  {
    id: "full-mouth-implants",
    title: "Full Mouth Implants",
    short: "Restore a complete arch with All-on-4 / All-on-6 implants.",
    image:
      "/assets/emergent-226b751a73b9dbe7.jpeg",
    description:
      "Full-arch fixed teeth supported on 4 or 6 implants — replace all teeth with a fixed, lifelike set in as little as one visit.",
    points: [
      "All-on-4 & All-on-6 protocols",
      "Fixed, non-removable teeth",
      "Same-day teeth in selected cases",
      "Restores chewing & confidence",
    ],
    category: "implant",
  },
  {
    id: "basal-implants",
    title: "Basal Implants",
    short: "Immediate-loading implants for patients with bone loss.",
    image:
      "/assets/emergent-dcbf6fbdf58aef91.jpeg",
    description:
      "Advanced basal implant system that engages dense cortical bone — ideal for patients with low bone density, often avoiding the need for grafting.",
    points: [
      "Immediate loading possible",
      "Avoids bone grafting in many cases",
      "Single-visit teeth in 72 hours",
      "Performed by visiting specialist",
    ],
    category: "implant",
  },

  // ================= DENTURES =================
  {
    id: "complete-dentures",
    title: "Complete Dentures",
    short: "Comfortable removable dentures for full arches.",
    image:
      "/assets/emergent-af2466330b930192.jpeg",
    description:
      "High-quality, well-fitted complete dentures restoring chewing function and natural facial appearance for fully edentulous patients.",
    points: [
      "Custom-fitted upper & lower",
      "Lifelike teeth & gum aesthetics",
      "Restores chewing & speech",
      "Adjustments & relining included",
    ],
    category: "dentures",
    featured: true,
  },
  {
    id: "over-dentures",
    title: "Over Dentures",
    short: "Implant-retained dentures that snap into place securely.",
    image:
      "/assets/emergent-f51508964526151a.jpeg",
    description:
      "Removable dentures that clip onto 2 to 4 dental implants — combining stability of implants with the convenience of removable prosthetics.",
    points: [
      "No slipping while eating",
      "Easier cleaning",
      "Preserves jawbone",
      "Cost-effective vs full implants",
    ],
    category: "dentures",
  },
  {
    id: "cast-partial-dentures",
    title: "Cast Partial Dentures",
    short: "Strong, slim metal-framework dentures for partial gaps.",
    image:
      "/assets/emergent-f0ea8b6eb2d1132f.jpeg",
    description:
      "Cast metal-framework partial dentures that are slim, strong and clasp on to existing teeth — a durable mid-range option for partial tooth loss.",
    points: [
      "Slim & lightweight",
      "Stronger than acrylic",
      "Precise fit using metal framework",
      "Long lifespan",
    ],
    category: "dentures",
  },

  // ================= ORTHODONTICS =================
  {
    id: "metal-ceramic-braces",
    title: "Metal & Ceramic Braces",
    short: "Time-tested fixed braces for all kinds of misalignment.",
    image:
      "/assets/emergent-65ce1375b00a3a86.jpeg",
    description:
      "Conventional fixed braces in metal or tooth-coloured ceramic — the most reliable way to correct crowding, gaps, bite issues and severe misalignment.",
    points: [
      "Metal braces (most affordable)",
      "Ceramic / tooth-coloured option",
      "Treats complex misalignment",
      "Performed by visiting orthodontist",
    ],
    category: "ortho",
    featured: true,
  },
  {
    id: "aligners",
    title: "Dental Aligners",
    short: "Clear, removable aligners — straighten teeth invisibly.",
    image:
      "/assets/emergent-4f4497d978c243f1.png",
    description:
      "Virtually invisible clear aligners that gradually move teeth into position — comfortable, removable and ideal for adults.",
    points: [
      "Almost invisible",
      "Removable while eating",
      "Easy to clean",
      "Predictable digital plan",
    ],
    category: "ortho",
  },

  // ================= GENERAL DENTISTRY =================
  {
    id: "rct",
    title: "Root Canal Treatment",
    short: "Painless, single-visit root canals using rotary endodontics.",
    image:
      "/assets/emergent-855b2ce77d3a73ce.jpeg",
    description:
      "Save your natural tooth with modern, painless rotary root canal procedures performed in single or two visits.",
    points: [
      "Single-visit RCT",
      "Rotary endodontics",
      "Re-RCT & post-core",
      "Tooth-coloured restorations",
    ],
    category: "general",
    featured: true,
  },
  {
    id: "filling",
    title: "Tooth Filling (Light Cure Composites)",
    short: "Tooth-coloured fillings that blend in seamlessly.",
    image:
      "/assets/emergent-b06082ab459426ba.jpeg",
    description:
      "Modern light-cure composite fillings restore decayed or chipped teeth with a strong, tooth-coloured material that bonds invisibly.",
    points: [
      "Tooth-coloured & invisible",
      "Bonds chemically to tooth",
      "Single-visit procedure",
      "Long-lasting & strong",
    ],
    category: "general",
  },
  {
    id: "cleaning",
    title: "Cleaning & Polishing",
    short: "Professional scaling to keep gums and teeth healthy.",
    image:
      "/assets/emergent-ae87e1d45df07633.jpeg",
    description:
      "Ultrasonic scaling and polishing to remove plaque, tartar and surface stains — the foundation of long-term oral health.",
    points: [
      "Ultrasonic scaling",
      "Stain removal & polishing",
      "Fluoride application",
      "Recommended every 6 months",
    ],
    category: "general",
  },
  {
    id: "gum-surgery",
    title: "Gum Surgeries",
    short: "Treatment for advanced gum disease and recession.",
    image:
      "/assets/emergent-8653afa543e86891.jpeg",
    description:
      "Surgical procedures including flap surgery, gum grafting and pocket reduction to treat advanced periodontal (gum) disease.",
    points: [
      "Flap surgery",
      "Gum grafting",
      "Pocket-reduction surgery",
      "Saves loose teeth",
    ],
    category: "general",
  },
  {
    id: "extraction",
    title: "Tooth Extractions",
    short: "Painless simple & surgical extractions under local anesthesia.",
    image:
      "/assets/emergent-c5869b1f7bc8a5f7.jpeg",
    description:
      "From simple, atraumatic removals of damaged teeth to surgical extractions of broken-down, impacted or root-stump teeth — all performed under modern local anesthesia with bone-preserving techniques and replacement planning.",
    points: [
      "Painless local anesthesia",
      "Atraumatic simple extractions",
      "Surgical removal for broken / root-stump teeth",
      "Bone-preserving technique with suturing",
      "Same-day procedure & replacement options discussed",
    ],
    category: "general",
  },
  {
    id: "wisdom-tooth",
    title: "Wisdom Tooth Surgery",
    short: "Specialist removal of impacted wisdom teeth.",
    image:
      "/assets/emergent-4acf25cf22f57134.jpeg",
    description:
      "Surgical removal of partially erupted or impacted wisdom teeth that cause pain, infection, swelling or damage to adjacent teeth.",
    points: [
      "3D CBCT planning",
      "Impacted & angular cases",
      "Minimal swelling protocol",
      "Performed by specialist",
    ],
    category: "general",
  },
];

export const technologies = [
  {
    title: "Digital Smile Design",
    description:
      "Preview your new smile on screen before treatment begins, designed pixel-by-pixel.",
  },
  {
    title: "Intraoral 3D Scanner",
    description:
      "Goodbye gooey impressions — accurate 3D scans for crowns, aligners and implants.",
  },
  {
    title: "Digital RVG X-rays",
    description:
      "Up to 90% lower radiation than conventional X-rays with instant high-resolution imaging.",
  },
  {
    title: "Rotary Endodontics",
    description:
      "Single-visit root canals with NiTi rotary files for predictable outcomes.",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Tejal Patel",
    role: "Verified Patient",
    quote:
      "Dr. Parashar is amazing — a very knowledgeable person for treatment as well as such a nice person. Highly recommend!",
    rating: 5,
  },
  {
    id: 2,
    name: "Rudra Maheshwari",
    role: "Verified Patient",
    quote:
      "I had a toothache which was managed very well by Dr. Parashar. He calmly explained all the details of the procedure and gave great guidance — worth every penny. Happy with Shivam Speciality Dental Care staff and treatment. I recommend everyone.",
    rating: 5,
  },
  {
    id: 3,
    name: "Priyanka",
    role: "Verified Patient",
    quote:
      "The best dental care I have ever experienced! This is a great place to take care of your teeth. Dr. Himani did such a great job! Highly recommend if you're looking for a dentist in Vapi.",
    rating: 5,
  },
  {
    id: 4,
    name: "Jayam Modi",
    role: "Verified Patient",
    quote:
      "Dr. Parashar is an amazing doctor. Very patiently explains your situation and ensures that you are fully convinced of any treatment you are undergoing.",
    rating: 5,
  },
];

export const videos = [
  {
    id: "AkbsrcRm0c8",
    title: "What are dental veneers?",
    description:
      "Curious to know about smile makeovers? Veneers are one of the most commonly recommended procedures — get to know the science behind them.",
  },
  {
    id: "t7ljIWY6YMY",
    title: "Why off-the-shelf whitening doesn't work",
    description:
      "Thinking of buying a teeth-whitening product? Watch this before you do.",
  },
];

export const instagramPosts = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80",
    caption: "Happy patients, brighter smiles ✨ #SSDCVapi",
    likes: 248,
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=600&q=80",
    caption: "Behind the scenes with Dr. Parashar at work.",
    likes: 312,
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=600&q=80",
    caption: "Our clinic — where comfort meets care.",
    likes: 189,
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=600&q=80",
    caption: "Painless RCT done in a single visit.",
    likes: 274,
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1489278353717-f64c6ee8a4d2?auto=format&fit=crop&w=600&q=80",
    caption: "A smile makeover that speaks for itself.",
    likes: 421,
  },
  {
    id: 6,
    image:
      "https://images.pexels.com/photos/19976565/pexels-photo-19976565.jpeg?auto=compress&cs=tinysrgb&w=600",
    caption: "Gentle, family-first dentistry. #SmileWithUs",
    likes: 196,
  },
];

export const stats = [
  { value: "5+", label: "Years of Clinic" },
  { value: "3000+", label: "Happy Patients" },
  { value: "15+", label: "Dental Specialties" },
];

export const brands = [
  {
    name: "3M",
    subtitle: "Restorative Materials",
    logo:
      "/assets/emergent-95643991152747c7.png",
  },
  {
    name: "Ivoclar",
    subtitle: "Ceramics & Esthetics",
    logo:
      "/assets/emergent-ebdb3a2b1a0e7c4e.jpeg",
  },
  {
    name: "Shofu",
    subtitle: "Dental Materials",
    logo:
      "/assets/emergent-36dbbab3171b026d.png",
  },
  {
    name: "Coltene",
    subtitle: "Endodontics & Disinfection",
    logo:
      "/assets/emergent-85618b9f23b1356c.png",
  },
  {
    name: "NeoEndo",
    subtitle: "Endodontic Files & Sealers",
    logo:
      "/assets/emergent-b7b7c05de9489d89.png",
  },
  {
    name: "Meta Biomed",
    subtitle: "Endodontic Materials",
    logo:
      "/assets/emergent-a70d15616e0da512.png",
  },
  {
    name: "Eighteeth",
    subtitle: "Endodontic Equipment",
    logo:
      "/assets/emergent-fce966e9e1cb3ef5.png",
  },
  {
    name: "GC",
    subtitle: "Glass Ionomer & Composites",
    logo:
      "/assets/emergent-80eed05b0798f65d.png",
  },
];

export const labPartner = {
  name: "Illusion Dental Lab",
  location: "Mumbai",
  logo:
    "/assets/emergent-4007a3628200ac0e.png",
  description:
    "Our prosthetic laboratory partner — a leading dental lab known for its precision-crafted ceramics, zirconia restorations and digitally-designed prosthetics.",
};

export const blogs = [
  {
    id: "neet-pg-centralized-vs-decentralized",
    title: "NEET PG: The Centralization vs Decentralization Debate",
    excerpt:
      "A practising dentist's perspective on how India's medical and dental entrance system has evolved — and what the recent paper-leak controversy tells us about the trade-offs.",
    image:
      "/assets/emergent-099cb77e2cdf4730.jpeg",
    category: "Opinion · Medical Education",
    date: "Feb 2026",
    readTime: "5 min read",
    author: "Dr. Parashar Desai",
    body: [
      "Nowadays, one of the most trending and widely discussed topics is the NEET PG examination. Let us talk about the same in this blog.",
      "As a dentist, and like many of my juniors who are now qualified dentists, we have all gone through entrance examinations — NEET PG and NEET UG being the current standard. However, during our time, NEET did not exist for either UG or PG admissions. It was introduced later.",
      "The main difference between NEET and the admission pattern that existed earlier is the concept of centralization versus decentralization.",
      "NEET, as we all know, is a centralized examination, conducted by a single authority. On the other hand, during our time, there were multiple entrance examinations. We had national-level exams such as AIPMT for undergraduate admissions and AIPGDEE (All India Post Graduate Dental Entrance Examination) for postgraduate courses. Along with these centralized exams, there were several state-level entrance tests as well. For example, Gujarat had Gujarat CET, Maharashtra had Maharashtra CET, Karnataka had COMEDK, and many others.",
      "Since these exams were conducted independently, candidates had the opportunity to appear for multiple exams and increase their chances of securing admission.",
      "Now, both systems — NEET and the old pattern — had their own advantages and disadvantages. Let us discuss them.",
      { heading: "Advantages of NEET (Centralized Pattern)" },
      "The biggest advantage of NEET is that it is a single examination, so students do not have to divide their focus across multiple entrance tests. It also ensures a standardized evaluation system, giving students the opportunity to apply across India at the same time and explore multiple options nationwide.",
      "Another important advantage is that even seats under the management quota are required to be filled through NEET merit, ensuring more transparency. This has significantly reduced corruption and unfair admission practices in many institutions.",
      { heading: "Advantages of the Old Pattern (Decentralized Multiple Exams)" },
      "The old system of multiple exams also had certain benefits. Since entrance tests were state-based, students had better chances of getting admission within their own state, allowing them to study closer to home. It also reduced the burden of relocation and financial stress for many students.",
      "Additionally, if a candidate did not perform well in one exam, they still had the opportunity to secure admission through another exam. In a way, students had multiple chances to prove themselves.",
      "Different states also had their own independent rules for seat allotment, which in some cases benefited local students.",
      { heading: "Paper Leak Issue: Centralized vs Decentralized" },
      "Now coming to the recent concern of paper leaks — this is where centralization becomes a major issue. When there is only one national-level exam and its paper gets leaked, the impact is massive. Students across the entire country suffer, and re-examinations affect lakhs of candidates.",
      "In a decentralized system, even though paper leaks are equally wrong and unacceptable, the damage would be limited to the candidates appearing for that particular exam, rather than affecting the entire nation at once.",
      { heading: "Conclusion" },
      "To conclude, both systems have their strengths and weaknesses. NEET offers uniformity and transparency, while the older decentralized system offered flexibility and multiple opportunities.",
      "Finding the perfect balance between these two patterns is not easy. However, what is most important is that strict action must be taken against those involved in paper leaks, because such incidents destroy the trust and future of hardworking students.",
      "I hope the government continues to work seriously on this issue and ensures that examinations remain fair, secure, and corruption-free.",
      "Thank you.",
    ],
  },
  {
    id: "dentistry-in-west-bengal",
    title: "Dentistry in West Bengal: A Proud Legacy in Indian Dental History",
    excerpt:
      "Beyond the political spotlight, West Bengal — and Kolkata in particular — holds an extraordinary place in the story of Indian dentistry.",
    image:
      "/assets/emergent-6de9288f9cf200db.png",
    category: "Dental Heritage",
    date: "Feb 2026",
    readTime: "4 min read",
    body: [
      "Amid ongoing discussions and widespread attention around the recent elections in West Bengal, it's also important to recognize another important story tied to the state — its remarkable contribution to dentistry and oral healthcare in India.",
      "West Bengal, especially Kolkata, holds an important place in the history of dentistry in India. Known for its contribution to medical education, Kolkata played a major role in shaping modern dental healthcare in the country.",
      "One of the biggest milestones in Indian dentistry was the establishment of the first dental college in India in Kolkata, which marked the beginning of organized dental education. This development is often linked with Dr. Fakaruddin Ahmed, widely recognized as the Father of Dentistry, who contributed significantly to the growth of professional dental training in India.",
      "Over the years, West Bengal has remained a strong hub for dental education and advanced dental treatments. Today, dentistry in Kolkata has evolved with modern technology, offering world-class procedures such as dental implants, cosmetic dentistry, ceramic crowns, veneers, orthodontics, and smile designing.",
      "West Bengal also plays a key role in spreading awareness about oral hygiene and oral cancer prevention through community healthcare initiatives and dental camps.",
      "With a rich history and continuous progress, dentistry in West Bengal continues to inspire and lead India's journey toward better oral health and confident smiles.",
      "Looking for advanced dental care or oral health guidance? Contact our clinic today for expert treatment with a personal touch!",
    ],
  },
  {
    id: "off-the-shelf-whitening",
    title: "Why off-the-shelf teeth whitening doesn't work",
    excerpt:
      "Thinking of buying a whitening kit from your local pharmacy? Here's why professional whitening delivers better, safer results.",
    image:
      "https://images.unsplash.com/photo-1654373535457-383a0a4d00f9?auto=format&fit=crop&w=1200&q=80",
    category: "Cosmetic Dentistry",
    date: "Coming soon",
    readTime: "4 min read",
    body: [
      "Walk into any pharmacy and you'll find shelves of whitening strips, pens and rinses promising a Hollywood smile. Most patients are disappointed — and a few end up with sensitive teeth or irritated gums.",
      "Off-the-shelf kits use weak peroxide concentrations and a one-size-fits-all tray that rarely sits flush against your teeth. The result is uneven whitening, gel leaking onto the gums, and rebound staining within weeks.",
      "Professional in-clinic whitening uses dental-grade peroxide under controlled exposure, custom trays moulded to your bite, and shade matching against your natural enamel. Results are visible the same day and last months — not days.",
      "If you're considering whitening, book a consultation. We'll assess your enamel, recommend the right protocol, and walk you through a take-home kit to maintain results safely.",
    ],
  },
  {
    id: "implants-vs-dentures",
    title: "Dental implants vs. dentures: which is right for you?",
    excerpt:
      "A side-by-side guide to help you understand the pros, cons and long-term costs of both tooth replacement options.",
    image:
      "https://images.unsplash.com/photo-1593022356769-11f762e25ed9?auto=format&fit=crop&w=1200&q=80",
    category: "Implants",
    date: "Coming soon",
    readTime: "6 min read",
    body: [
      "Missing teeth aren't just a cosmetic issue — they affect chewing, speech, jawbone density and even facial structure over time. The two most common solutions are dental implants and dentures, and they serve very different patients.",
      "Dental implants are titanium roots fused into the jawbone, topped with a ceramic crown. They feel and function like natural teeth, prevent bone loss, and last decades with basic care. The trade-off is higher upfront cost and a 3–6 month healing window.",
      "Dentures are removable, faster to deliver and far more affordable. Modern dentures fit better than ever, but they don't stop bone resorption, can slip while eating, and need relining every few years.",
      "For most patients with one or two missing teeth, implants are the long-term winner. For full-arch cases on a budget, implant-supported overdentures often offer the best of both worlds. A consultation and CBCT scan will tell you which path fits your bone, lifestyle and budget.",
    ],
  },
  {
    id: "daily-habits-for-smile",
    title: "5 daily habits that protect your smile",
    excerpt:
      "Small, consistent habits that go far beyond brushing — practical tips from our doctors for a healthy mouth.",
    image:
      "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1200&q=80",
    category: "Oral Health",
    date: "Coming soon",
    readTime: "3 min read",
    body: [
      "Most cavities and gum problems are preventable with five simple habits.",
      "1. Brush twice — gently. Use a soft-bristled brush and fluoride toothpaste for two minutes, morning and night. Aggressive scrubbing wears down enamel and recedes gums.",
      "2. Floss once a day. A toothbrush only reaches three of the five surfaces of each tooth. Flossing removes the plaque your brush misses.",
      "3. Rinse after sugary or acidic foods. Don't brush immediately — rinse with water first to neutralise acid, then brush after 30 minutes.",
      "4. Replace your brush every 3 months. Frayed bristles clean less than half as well as fresh ones.",
      "5. Visit your dentist every 6 months. Early detection of cavities or gum disease keeps treatment quick, painless and affordable.",
    ],
  },
];

export const navItems = [
  { id: "home", label: "Home", path: "/" },
  {
    id: "cosmetic",
    label: "Cosmetic Dentistry",
    path: "/cosmetic-dentistry",
    children: [
      { label: "Dental Veneers", path: "/service/veneers" },
      { label: "Full Ceramic (Metal-Free) Crowns", path: "/service/ceramic-crowns" },
      { label: "Digital Smile Designing", path: "/service/dsd" },
      { label: "Teeth Whitening (Bleaching)", path: "/service/whitening" },
      { label: "Gum Contouring", path: "/service/gum-contouring" },
    ],
  },
  {
    id: "implant",
    label: "Implant Dentistry",
    path: "/implant-dentistry",
    children: [
      { label: "Single Tooth Replacement", path: "/service/single-implant" },
      { label: "Multiple Tooth Replacement", path: "/service/multiple-implant" },
      { label: "Full Mouth Implants", path: "/service/full-mouth-implants" },
      { label: "Basal Implants", path: "/service/basal-implants" },
    ],
  },
  {
    id: "dentures",
    label: "Dentures",
    path: "/dentures",
    children: [
      { label: "Complete Dentures", path: "/service/complete-dentures" },
      { label: "Over Dentures", path: "/service/over-dentures" },
      { label: "Cast Partial Dentures", path: "/service/cast-partial-dentures" },
    ],
  },
  {
    id: "ortho",
    label: "Orthodontics",
    path: "/orthodontics",
    children: [
      { label: "Metal & Ceramic Braces", path: "/service/metal-ceramic-braces" },
      { label: "Dental Aligners", path: "/service/aligners" },
    ],
  },
  {
    id: "general",
    label: "General Dentistry",
    path: "/general-dentistry",
    children: [
      { label: "Root Canal Treatment", path: "/service/rct" },
      { label: "Tooth Filling (Light Cure)", path: "/service/filling" },
      { label: "Cleaning & Polishing", path: "/service/cleaning" },
      { label: "Gum Surgeries", path: "/service/gum-surgery" },
      { label: "Tooth Extractions", path: "/service/extraction" },
      { label: "Wisdom Tooth Surgery", path: "/service/wisdom-tooth" },
    ],
  },
  { id: "team", label: "Our Team", path: "/our-team" },
  { id: "blogs", label: "Blogs", path: "/blogs" },
  { id: "about", label: "About", path: "/about" },
  { id: "contact", label: "Contact", path: "/contact" },
];


// FAQs keyed by service id — used on individual treatment pages
export const serviceFaqs = {
  veneers: [
    {
      q: "Are dental veneers permanent?",
      a: "Veneers are a long-lasting restoration. Ceramic veneers typically last 10–15 years or more with proper care. The procedure involves minimal enamel reduction, so it is considered semi-permanent.",
    },
    {
      q: "Will my veneers look natural?",
      a: "Yes. Modern ceramic veneers are custom-shaded to match your facial features, lip line and adjacent teeth. We do a digital smile design preview before finalising the shape and shade so you approve the final look.",
    },
    {
      q: "Is the veneer procedure painful?",
      a: "No. Veneer prep is minimally invasive and performed under local anesthesia. Most patients report no discomfort during or after the visit.",
    },
    {
      q: "How many sittings does it take?",
      a: "Typically 2 to 3 visits over 7–10 days — one for design and prep, one for try-in and one for final cementation.",
    },
  ],
  "ceramic-crowns": [
    {
      q: "What is the difference between metal and full ceramic crowns?",
      a: "Metal-ceramic crowns have a metal substructure under porcelain, which can show as a grey line near the gum over time. Full ceramic (zirconia or E-Max) crowns are entirely tooth-coloured and biocompatible — ideal for front teeth.",
    },
    {
      q: "How long do ceramic crowns last?",
      a: "With routine cleaning and 6-monthly check-ups, full ceramic crowns can last 12–20 years.",
    },
    {
      q: "Can I eat normally with a ceramic crown?",
      a: "Yes. Zirconia crowns are extremely strong and let you chew naturally. We only advise avoiding extreme habits like chewing ice or opening bottles with teeth.",
    },
  ],
  dsd: [
    {
      q: "What exactly is Digital Smile Design?",
      a: "DSD is a planning protocol where we capture facial photos and 3D scans, then design your future smile pixel-by-pixel on screen. You preview the result before any treatment is started.",
    },
    {
      q: "Can I see a mock-up in my mouth before treatment?",
      a: "Yes. We can fabricate a temporary trial smile that we place over your existing teeth so you can see and feel the design before committing.",
    },
    {
      q: "Is DSD a treatment or a planning step?",
      a: "DSD is a planning service. The actual treatment may involve veneers, crowns, whitening or orthodontics — DSD ensures the final outcome is predictable.",
    },
  ],
  whitening: [
    {
      q: "How many shades whiter will my teeth get?",
      a: "On average, professional whitening lifts teeth by 4 to 8 shades in a single session. Results vary based on starting shade, age and the type of staining.",
    },
    {
      q: "Will whitening damage my enamel?",
      a: "No. Clinical whitening uses controlled-strength peroxide and is safe on enamel when performed by a dentist. Over-the-counter kits are riskier because of misuse and ill-fitting trays.",
    },
    {
      q: "How long do the results last?",
      a: "Typically 12–18 months, depending on diet (coffee, tea, tobacco), oral hygiene and follow-up touch-ups.",
    },
    {
      q: "Will my teeth feel sensitive after whitening?",
      a: "Mild sensitivity for 24–48 hours is common and settles on its own. We provide a desensitising paste to use during this period.",
    },
  ],
  "gum-contouring": [
    {
      q: "Is gum contouring painful?",
      a: "No. The procedure is performed under local anesthesia and laser, so there is little to no bleeding or post-op discomfort.",
    },
    {
      q: "How long does it take to heal?",
      a: "Soft tissue healing is rapid — most patients are back to normal eating within 3–5 days.",
    },
    {
      q: "Will the gums grow back?",
      a: "When done correctly with proper case selection, the contoured gum line is stable long-term.",
    },
  ],
  "single-implant": [
    {
      q: "How long does the entire implant treatment take?",
      a: "From implant placement to the final crown, the timeline is typically 3–6 months. In selected cases, immediate-loading implants allow a temporary crown the same day.",
    },
    {
      q: "Is the implant procedure painful?",
      a: "No. Implant placement is performed under local anesthesia. Most patients describe it as easier than a tooth extraction. Mild swelling for 2–3 days is normal.",
    },
    {
      q: "How long do dental implants last?",
      a: "With good oral hygiene and 6-monthly check-ups, implants are designed to last a lifetime. Crowns on top of implants may need replacement after 10–15 years.",
    },
    {
      q: "Am I eligible for an implant?",
      a: "Most adults with adequate jawbone are eligible. We do a CBCT scan during the consultation to assess bone volume, density and proximity to nerves.",
    },
  ],
  "multiple-implant": [
    {
      q: "Do I need one implant per missing tooth?",
      a: "Not necessarily. For two or three adjacent missing teeth, two strategically placed implants can support a bridge — saving cost and surgery.",
    },
    {
      q: "Is the bridge removable?",
      a: "No. Implant-supported bridges are fixed and cleaned like natural teeth.",
    },
    {
      q: "Will I lose more bone over time?",
      a: "Implants act like natural roots and stimulate the jawbone, preventing the bone resorption that normally follows tooth loss.",
    },
  ],
  "full-mouth-implants": [
    {
      q: "What is the All-on-4 / All-on-6 protocol?",
      a: "It is a full-arch restoration where 4 (or 6) implants strategically support a fixed set of 12–14 teeth — replacing an entire upper or lower jaw.",
    },
    {
      q: "Will I get teeth on the same day?",
      a: "In selected cases yes — a temporary fixed set of teeth is placed within 24–72 hours. The final ceramic prosthesis is delivered after 3–4 months of healing.",
    },
    {
      q: "Is full mouth implant treatment painful?",
      a: "Surgery is performed under local anesthesia (and sedation if requested). Post-op discomfort is mild and managed with simple medication.",
    },
  ],
  "basal-implants": [
    {
      q: "How are basal implants different from regular implants?",
      a: "Basal implants engage the dense cortical bone of the jaw, allowing immediate loading and avoiding bone grafting in many cases of severe bone loss.",
    },
    {
      q: "Can I get fixed teeth in 72 hours?",
      a: "Yes — in eligible cases, basal implants allow a fixed prosthesis to be delivered within 72 hours of surgery.",
    },
    {
      q: "Who should I see for basal implants?",
      a: "Basal implants are placed by our visiting maxillofacial surgeon Dr. Aroon K. Bengani at SSDC.",
    },
  ],
  "complete-dentures": [
    {
      q: "How long does it take to make complete dentures?",
      a: "Typically 4–5 visits over 2–3 weeks, including impressions, jaw relation, try-in and final delivery.",
    },
    {
      q: "Will my dentures feel loose while eating?",
      a: "Well-fitted complete dentures are stable for most patients. If looseness becomes an issue, we can convert them into implant-retained overdentures.",
    },
    {
      q: "How do I take care of my dentures?",
      a: "Clean them daily with a soft brush and denture cleanser, soak overnight in water, and visit us yearly for relining or adjustment.",
    },
  ],
  "over-dentures": [
    {
      q: "How many implants do I need for an overdenture?",
      a: "Usually 2 implants for a lower overdenture and 4 for an upper. The denture clips on to the implants and is removable for cleaning.",
    },
    {
      q: "Is it more comfortable than a regular denture?",
      a: "Significantly. Overdentures don't slip, allow stronger biting force, and preserve jawbone better than conventional dentures.",
    },
    {
      q: "Are overdentures fixed or removable?",
      a: "Removable by the patient for cleaning, but locked in place during use — combining the comfort of fixed teeth with easy hygiene.",
    },
  ],
  "cast-partial-dentures": [
    {
      q: "How is a cast partial denture different from acrylic?",
      a: "Cast partials use a slim metal framework that grips natural teeth precisely — they are stronger, thinner and more durable than acrylic partials.",
    },
    {
      q: "Will the metal clasps show when I smile?",
      a: "We design the framework so clasps sit on back teeth wherever possible. For aesthetic zones, we offer flexible or precision-attachment options.",
    },
    {
      q: "How long do cast partial dentures last?",
      a: "Typically 7–10 years with good hygiene. Adjustments may be needed if adjacent teeth change position.",
    },
  ],
  "metal-ceramic-braces": [
    {
      q: "How long does braces treatment take?",
      a: "Most cases finish in 12–24 months. Mild crowding can be corrected in under a year, while complex bite issues may take 2 years or more.",
    },
    {
      q: "Are ceramic braces as effective as metal?",
      a: "Yes. Ceramic brackets work the same way as metal but are tooth-coloured, making them less visible. They cost slightly more.",
    },
    {
      q: "Will braces hurt?",
      a: "Mild soreness for 2–3 days after each adjustment is normal and manageable with simple painkillers.",
    },
    {
      q: "Do I need to come in often?",
      a: "Adjustments are scheduled every 4–6 weeks with our visiting orthodontist.",
    },
  ],
  aligners: [
    {
      q: "Are aligners as effective as braces?",
      a: "For mild to moderate misalignment, clear aligners deliver comparable results to braces — and they are virtually invisible and removable.",
    },
    {
      q: "How long do I have to wear them every day?",
      a: "22 hours a day. You only remove them while eating, drinking anything other than water, or brushing.",
    },
    {
      q: "How long does aligner treatment take?",
      a: "Most cases complete in 6–18 months depending on complexity. We use a digital plan to predict the timeline upfront.",
    },
  ],
  rct: [
    {
      q: "Is root canal treatment painful?",
      a: "Modern rotary RCT is virtually painless. The procedure is done under local anesthesia, and patients typically describe it as similar to getting a filling.",
    },
    {
      q: "Can it be done in a single visit?",
      a: "Yes — most uncomplicated cases are completed in a single 60–90 minute session using rotary endodontics.",
    },
    {
      q: "Will I need a crown after RCT?",
      a: "In most back teeth, yes. A ceramic crown protects the weakened tooth from fracture and extends its lifespan significantly.",
    },
    {
      q: "How long does an RCT-treated tooth last?",
      a: "When properly restored with a crown, an RCT tooth can last a lifetime.",
    },
  ],
  filling: [
    {
      q: "How long does a tooth-coloured filling last?",
      a: "Composite fillings typically last 7–10 years with good oral hygiene. Larger fillings may eventually need replacement with onlays or crowns.",
    },
    {
      q: "Are tooth-coloured fillings as strong as silver fillings?",
      a: "Modern light-cure composites bond chemically to the tooth and are highly durable. They are the standard of care today and we no longer place silver amalgam fillings.",
    },
    {
      q: "Will I feel pain during the procedure?",
      a: "Most fillings need no anesthesia for shallow cavities. Deeper cavities are done painlessly under local anesthesia.",
    },
  ],
  cleaning: [
    {
      q: "How often should I get a professional cleaning?",
      a: "Every 6 months for most adults. Patients with gum disease or implants may need 3–4 monthly maintenance.",
    },
    {
      q: "Will scaling damage my teeth or loosen them?",
      a: "No. Scaling removes tartar that was already weakening your gum support. Teeth may feel slightly mobile for a day or two as inflammation settles.",
    },
    {
      q: "Will my teeth become whiter after cleaning?",
      a: "Cleaning removes surface stains and restores your natural shade. For a lighter shade than natural, you'll need professional whitening.",
    },
  ],
  "gum-surgery": [
    {
      q: "When is gum surgery actually needed?",
      a: "When deep pockets (>5mm), bone loss or gum recession cannot be controlled with scaling and oral hygiene alone.",
    },
    {
      q: "Is gum surgery painful?",
      a: "The procedure is done under local anesthesia. Mild soreness and swelling for 3–5 days is common and managed with medication.",
    },
    {
      q: "Will my gums grow back after surgery?",
      a: "Gum grafting can recover lost tissue in localised areas. Bone regeneration is also possible with grafts in selected cases.",
    },
  ],
  extraction: [
    {
      q: "Is tooth extraction painful?",
      a: "No. Extractions are performed under modern local anesthesia, so you feel pressure but no sharp pain. Mild post-op soreness is normal for 1–2 days.",
    },
    {
      q: "How long does the procedure take?",
      a: "Simple extractions take 10–15 minutes. Surgical extractions of broken or root-stump teeth take 30–60 minutes.",
    },
    {
      q: "How long is the recovery period?",
      a: "Most patients return to normal activity within 24 hours. Full socket healing takes 2–4 weeks. We give clear post-op care instructions and contact details.",
    },
    {
      q: "What about replacing the missing tooth?",
      a: "We discuss replacement options — implant, bridge or denture — at the same visit so you can plan ahead. Where possible, we preserve the socket bone for future implant placement.",
    },
  ],
  "wisdom-tooth": [
    {
      q: "Should I get my wisdom teeth removed even if they don't hurt?",
      a: "If they are impacted or angular, they often damage adjacent teeth or trap food and infection over time. We do a 3D CBCT scan to recommend whether removal is preventive or can wait.",
    },
    {
      q: "Is wisdom tooth surgery painful?",
      a: "The procedure is done under local anesthesia and is painless. Some swelling for 3–4 days is common; we follow a minimal-swelling protocol with cold packs and medication.",
    },
    {
      q: "How long does recovery take?",
      a: "Most patients return to work within 2–3 days. Full healing takes 2 weeks. Stitches (if used) are typically removed at day 7.",
    },
    {
      q: "Are all four wisdom teeth removed together?",
      a: "Depending on the case, we either remove one side per visit (more comfortable for patients) or all four under sedation in a single appointment.",
    },
  ],
};
