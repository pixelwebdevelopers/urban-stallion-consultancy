import { Link } from "react-router-dom";
import {
  GraduationCap, Plane, Package, FileText, BookOpen, Globe, Award, CheckCircle,
  MapPin, Ticket, Hotel, Ship, Truck, Warehouse, ArrowRight, Languages
} from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollAnimator from "@/components/ScrollAnimator";
import heroEducation from "@/assets/hero-education.jpg";
import heroTravel from "@/assets/hero-travel.jpg";
import heroLogistics from "@/assets/hero-logistics.jpg";

const studentServices = [
  { icon: BookOpen, title: "University Selection", desc: "Expert guidance in choosing the right university and program based on your academic profile and career goals." },
  { icon: FileText, title: "Application Processing", desc: "Complete assistance with university applications, including SOP writing, document preparation, and submission." },
  { icon: Globe, title: "Visa Consultation", desc: "Step-by-step visa application support with high success rates across all major study destinations." },
  { icon: Award, title: "Scholarship Guidance", desc: "We help identify and apply for scholarships and financial aid to reduce your study abroad costs." },
  { icon: Languages, title: "IELTS/Language Prep", desc: "Preparation guidance for IELTS, TOEFL, PTE, and other language proficiency requirements." },
  { icon: CheckCircle, title: "Pre-Departure Support", desc: "Comprehensive briefing on accommodation, travel, banking, and cultural integration before you fly." },
];

const travelServices = [
  { icon: FileText, title: "Visa Assistance", desc: "We handle tourist, business, and transit visa applications for destinations across Europe, Asia, and beyond." },
  { icon: Ticket, title: "Flight Booking", desc: "Get the best deals on domestic and international flights with our partner airlines worldwide." },
  { icon: MapPin, title: "Tour Packages", desc: "Curated tour packages to popular European cities including Paris, London, Barcelona, Rome, and more." },
  { icon: Hotel, title: "Hotel Reservations", desc: "From budget-friendly stays to luxury resorts, we arrange accommodation that suits your style and budget." },
];

const logisticsServices = [
  { icon: Ship, title: "International Shipping", desc: "Safe and reliable shipping of goods across borders with real-time tracking and insurance options." },
  { icon: Truck, title: "Door-to-Door Delivery", desc: "Complete logistics chain from pickup at origin to delivery at destination, hassle-free." },
  { icon: Warehouse, title: "Warehousing", desc: "Secure storage facilities to keep your goods safe during transit or before distribution." },
  { icon: Package, title: "Customs Clearance", desc: "Expert handling of customs documentation and regulatory compliance for smooth cross-border movement." },
];

const Services = () => {
  return (
    <div className="font-body pt-20">
      {/* Hero */}
      <section className="bg-navy-gradient py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <ScrollAnimator>
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-gold font-semibold text-sm uppercase tracking-widest">Our Services</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mt-4">
                Comprehensive <span className="text-gradient-gold">Solutions</span>
              </h1>
              <p className="text-white/70 mt-6 text-lg leading-relaxed">
                From helping students achieve their study abroad dreams to providing world-class travel and logistics solutions — we do it all.
              </p>
            </div>
          </ScrollAnimator>
        </div>
      </section>

      {/* Student Consultancy */}
      <section id="student-consultancy" className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <ScrollAnimator direction="left">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center">
                    <GraduationCap className="h-6 w-6 text-gold" />
                  </div>
                  <span className="text-gold font-semibold text-sm uppercase tracking-widest">Education</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                  Student Consultancy & Visa Services
                </h2>
                <p className="text-muted-foreground mt-4 text-lg leading-relaxed">
                  We are a leading student consultancy firm offering end-to-end guidance for students aspiring to study in the UK, Australia, Canada, and the USA. Our experienced counselors have helped over 2,500 students successfully secure admissions and visas at top-ranked universities worldwide.
                </p>
                <div className="flex flex-wrap gap-3 mt-6">
                  {["🇬🇧 UK", "🇦🇺 Australia", "🇨🇦 Canada", "🇺🇸 USA"].map((c) => (
                    <span key={c} className="px-4 py-2 rounded-full bg-gold/10 text-foreground text-sm font-medium">{c}</span>
                  ))}
                </div>
              </div>
            </ScrollAnimator>
            <ScrollAnimator direction="right">
              <div className="rounded-2xl overflow-hidden">
                <img src={heroEducation} alt="Students celebrating graduation" className="w-full h-80 object-cover rounded-2xl" loading="lazy" width={1920} height={1080} />
              </div>
            </ScrollAnimator>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {studentServices.map((s, i) => (
              <ScrollAnimator key={i} delay={i * 0.1}>
                <div className="p-7 rounded-xl bg-card border border-border hover:border-gold/20 transition-all duration-300 hover:shadow-lg h-full">
                  <s.icon className="h-8 w-8 text-gold mb-4" />
                  <h3 className="font-display font-bold text-foreground mb-2">{s.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                </div>
              </ScrollAnimator>
            ))}
          </div>
        </div>
      </section>

      {/* Travel & Tourism */}
      <section id="travel-tourism" className="py-20 lg:py-28 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <ScrollAnimator direction="left" className="order-2 lg:order-1">
              <div className="rounded-2xl overflow-hidden">
                <img src={heroTravel} alt="Travel and tourism destinations" className="w-full h-80 object-cover rounded-2xl" loading="lazy" width={1920} height={1080} />
              </div>
            </ScrollAnimator>
            <ScrollAnimator direction="right" className="order-1 lg:order-2">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center">
                    <Plane className="h-6 w-6 text-gold" />
                  </div>
                  <span className="text-gold font-semibold text-sm uppercase tracking-widest">Travel</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                  Travel & Tourism Services
                </h2>
                <p className="text-muted-foreground mt-4 text-lg leading-relaxed">
                  Explore the world with Urban Stallion! We provide complete travel assistance including visa processing, flight booking, hotel reservations, and curated tour packages to stunning destinations across Europe, Asia, the Middle East, and beyond. Whether it's a family vacation, honeymoon, or business trip — we've got you covered.
                </p>
              </div>
            </ScrollAnimator>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {travelServices.map((s, i) => (
              <ScrollAnimator key={i} delay={i * 0.1}>
                <div className="p-7 rounded-xl bg-card border border-border hover:border-gold/20 transition-all duration-300 hover:shadow-lg h-full">
                  <s.icon className="h-8 w-8 text-gold mb-4" />
                  <h3 className="font-display font-bold text-foreground mb-2">{s.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                </div>
              </ScrollAnimator>
            ))}
          </div>
        </div>
      </section>

      {/* Logistics */}
      <section id="logistics" className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <ScrollAnimator direction="left">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center">
                    <Package className="h-6 w-6 text-gold" />
                  </div>
                  <span className="text-gold font-semibold text-sm uppercase tracking-widest">Logistics</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                  Logistics & Shipping Solutions
                </h2>
                <p className="text-muted-foreground mt-4 text-lg leading-relaxed">
                  Urban Stallion Consultancy also offers professional logistics and shipping services designed to move your goods across borders efficiently and safely. From international freight forwarding to customs clearance and warehousing, our logistics division ensures timely delivery and full compliance with international trade regulations.
                </p>
              </div>
            </ScrollAnimator>
            <ScrollAnimator direction="right">
              <div className="rounded-2xl overflow-hidden">
                <img src={heroLogistics} alt="Logistics and shipping operations" className="w-full h-80 object-cover rounded-2xl" loading="lazy" width={1920} height={1080} />
              </div>
            </ScrollAnimator>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {logisticsServices.map((s, i) => (
              <ScrollAnimator key={i} delay={i * 0.1}>
                <div className="p-7 rounded-xl bg-card border border-border hover:border-gold/20 transition-all duration-300 hover:shadow-lg h-full">
                  <s.icon className="h-8 w-8 text-gold mb-4" />
                  <h3 className="font-display font-bold text-foreground mb-2">{s.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                </div>
              </ScrollAnimator>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy-gradient">
        <div className="container mx-auto px-4 text-center">
          <ScrollAnimator>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white">
              Need Our Services? <span className="text-gradient-gold">Let's Talk!</span>
            </h2>
            <p className="text-white/70 mt-4 text-lg max-w-2xl mx-auto">
              Get a free consultation with our experts today. We're here to help you every step of the way.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Link to="/contact">
                <Button size="lg" className="bg-gold-gradient text-navy-deep font-semibold rounded-full px-10 py-6 text-base hover:opacity-90">
                  Contact Us <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </ScrollAnimator>
        </div>
      </section>
    </div>
  );
};

export default Services;
