import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, Plane, Package, ChevronRight, Award, Users, Globe, Clock, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollAnimator from "@/components/ScrollAnimator";
import CounterAnimation from "@/components/CounterAnimation";

import heroEducation from "@/assets/hero-education.jpg";
import heroTravel from "@/assets/hero-travel.jpg";
import heroLogistics from "@/assets/hero-logistics.jpg";
import student1 from "@/assets/student1.png";
import student2 from "@/assets/student2.png";
import student3 from "@/assets/student3.png";

const slides = [
  {
    image: heroEducation,
    title: "Your Gateway to\nGlobal Education",
    subtitle: "Expert student visa consultancy for UK, Australia, Canada & USA. We turn your study abroad dreams into reality.",
    cta: "Start Your Journey",
    ctaLink: "/services",
  },
  {
    image: heroTravel,
    title: "Travel the World\nWith Confidence",
    subtitle: "Comprehensive travel & tourism services including visa assistance, ticket booking, and curated tour packages to Europe and beyond.",
    cta: "Explore Destinations",
    ctaLink: "/services",
  },
  {
    image: heroLogistics,
    title: "Reliable Logistics\nSolutions",
    subtitle: "End-to-end shipping and logistics services that keep your business moving across borders seamlessly.",
    cta: "Learn More",
    ctaLink: "/services",
  },
];

const services = [
  {
    icon: GraduationCap,
    title: "Student Consultancy",
    desc: "Complete guidance for university admissions, visa applications, and scholarship opportunities in top study destinations worldwide.",
    color: "from-blue-500/20 to-indigo-600/20",
  },
  {
    icon: Plane,
    title: "Travel & Tourism",
    desc: "From visa assistance to ticket booking and tailored tour packages, we make your travel experience smooth and memorable.",
    color: "from-emerald-500/20 to-teal-600/20",
  },
  {
    icon: Package,
    title: "Logistics Solutions",
    desc: "Professional shipping and logistics services ensuring your goods reach their destination safely and on time.",
    color: "from-orange-500/20 to-amber-600/20",
  },
];

const countries = [
  { name: "United Kingdom", flag: "🇬🇧", unis: "150+ Partner Universities", code: "GB" },
  { name: "Australia", flag: "🇦🇺", unis: "120+ Partner Universities", code: "AU" },
  { name: "Canada", flag: "🇨🇦", unis: "100+ Partner Universities", code: "CA" },
  { name: "United States", flag: "🇺🇸", unis: "200+ Partner Universities", code: "US" },
];

const whyUs = [
  { icon: Award, title: "Expert Counselors", desc: "Our experienced team has helped thousands of students achieve their dreams." },
  { icon: Users, title: "Personalized Approach", desc: "Every student gets a customized plan tailored to their goals and background." },
  { icon: Globe, title: "Global Network", desc: "Strong partnerships with universities and institutions across 4 continents." },
  { icon: Clock, title: "End-to-End Support", desc: "From first consultation to arrival at your destination, we're with you at every step." },
];

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="font-body">
      {/* Hero Carousel */}
      <section className="relative h-screen overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            <div className="absolute inset-0 bg-navy-deep/70 z-10" />
            <img
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              className="w-full h-full object-cover"
              width={1920}
              height={1080}
            />
          </motion.div>
        </AnimatePresence>

        <div className="relative z-20 h-full flex items-center">
          <div className="container mx-auto px-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="max-w-3xl"
              >
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-tight whitespace-pre-line">
                  {slides[currentSlide].title.split("\n").map((line, i) => (
                    <span key={i}>
                      {i === 1 ? <span className="text-gradient-gold">{line}</span> : line}
                      {i === 0 && <br />}
                    </span>
                  ))}
                </h1>
                <p className="text-lg md:text-xl text-white/80 mt-6 max-w-2xl leading-relaxed">
                  {slides[currentSlide].subtitle}
                </p>
                <div className="flex flex-wrap gap-4 mt-8">
                  <Link to={slides[currentSlide].ctaLink}>
                    <Button size="lg" className="bg-gold-gradient text-navy-deep font-semibold rounded-full px-8 py-6 text-base hover:opacity-90 transition-opacity">
                      {slides[currentSlide].cta}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button size="lg" variant="outline" className="border-white/40 text-white bg-white/5 hover:bg-white/15 rounded-full px-8 py-6 text-base transition-all">
                      Get Free Consultation
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Slide Indicators */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`h-2 rounded-full transition-all duration-500 ${
                    i === currentSlide ? "w-10 bg-gold" : "w-2 bg-white/40"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-navy-gradient py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <CounterAnimation end={2500} suffix="+" label="Students Placed" />
            <CounterAnimation end={50} suffix="+" label="Partner Universities" />
            <CounterAnimation end={12} suffix="+" label="Years Experience" />
            <CounterAnimation end={15} suffix="+" label="Countries Served" />
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4">
          <ScrollAnimator>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-gold font-semibold text-sm uppercase tracking-widest">What We Offer</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mt-3">
                Our Core Services
              </h2>
              <p className="text-muted-foreground mt-4 text-lg">
                From education consultancy to travel and logistics, we provide comprehensive solutions to help you achieve your global ambitions.
              </p>
            </div>
          </ScrollAnimator>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <ScrollAnimator key={i} delay={i * 0.15}>
                <Link to="/services" className="group block h-full">
                  <div className="relative h-full p-8 rounded-2xl border border-border bg-card hover:border-gold/30 transition-all duration-500 hover:shadow-xl hover:shadow-gold/5 overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    <div className="relative z-10">
                      <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
                        <service.icon className="h-7 w-7 text-gold" />
                      </div>
                      <h3 className="text-xl font-display font-bold text-foreground mb-3">{service.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
                      <div className="flex items-center gap-2 text-gold font-medium text-sm mt-6 group-hover:gap-3 transition-all">
                        Learn More <ChevronRight className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </ScrollAnimator>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 lg:py-28 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollAnimator direction="left">
              <div>
                <span className="text-gold font-semibold text-sm uppercase tracking-widest">Why Choose Us</span>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-3">
                  Your Trusted Partner for Global Success
                </h2>
                <p className="text-muted-foreground mt-4 text-lg leading-relaxed">
                  At Urban Stallion Consultancy, we believe every individual deserves access to world-class opportunities. Our dedicated team works tirelessly to make your international aspirations a reality.
                </p>
                <div className="mt-8 space-y-3">
                  {["100% Transparent Process", "Affordable Service Packages", "Post-Arrival Support", "Dedicated Case Manager"].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-gold shrink-0" />
                      <span className="text-foreground font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollAnimator>
            <ScrollAnimator direction="right">
              <div className="grid grid-cols-2 gap-5">
                {whyUs.map((item, i) => (
                  <div key={i} className="p-6 rounded-xl bg-card border border-border hover:border-gold/20 transition-all duration-300 hover:shadow-lg">
                    <item.icon className="h-8 w-8 text-gold mb-4" />
                    <h4 className="font-display font-bold text-foreground mb-2">{item.title}</h4>
                    <p className="text-muted-foreground text-xs leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </ScrollAnimator>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4">
          <ScrollAnimator>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-gold font-semibold text-sm uppercase tracking-widest">Success Stories</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mt-3">
                Our Proud Achievers
              </h2>
              <p className="text-muted-foreground mt-4 text-lg">
                Hundreds of students have successfully reached their dream universities through our guidance.
              </p>
            </div>
          </ScrollAnimator>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { img: student1, name: "Successful Student", country: "United Kingdom", flag: "🇬🇧" },
              { img: student2, name: "Successful Student", country: "Australia", flag: "🇦🇺" },
              { img: student3, name: "Successful Student", country: "Canada", flag: "🇨🇦" },
            ].map((student, i) => (
              <ScrollAnimator key={i} delay={i * 0.15} direction="scale">
                <div className="group relative rounded-2xl overflow-hidden border border-border hover:border-gold/30 transition-all duration-500 hover:shadow-xl">
                  <div className="aspect-[3/4] overflow-hidden">
                    <img
                      src={student.img}
                      alt={`Student who studied in ${student.country}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy-deep/90 to-transparent p-6">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{student.flag}</span>
                      <div>
                        <p className="text-white font-display font-bold">{student.name}</p>
                        <p className="text-white/70 text-sm">{student.country}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollAnimator>
            ))}
          </div>
        </div>
      </section>

      {/* Countries We Serve */}
      <section className="py-20 lg:py-28 bg-navy-gradient">
        <div className="container mx-auto px-4">
          <ScrollAnimator>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-gold font-semibold text-sm uppercase tracking-widest">Study Destinations</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mt-3">
                Countries We Serve
              </h2>
              <p className="text-white/60 mt-4 text-lg">
                We have established partnerships with top-ranked universities across these premier study destinations.
              </p>
            </div>
          </ScrollAnimator>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {countries.map((country, i) => (
              <ScrollAnimator key={i} delay={i * 0.1}>
                <div className="text-center p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-gold/30 hover:bg-white/10 transition-all duration-500 group cursor-pointer">
                  <span className="text-5xl md:text-6xl block mb-4 group-hover:scale-110 transition-transform duration-300 text-gold">{country.flag}</span>
                  <h3 className="font-display font-bold text-white text-lg mb-1">
                    {country.name}
                  </h3>
                  <p className="text-white/50 text-sm">{country.unis}</p>
                </div>
              </ScrollAnimator>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 lg:py-28 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gold/5 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <ScrollAnimator>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground">
                Ready to Start Your <span className="text-gradient-gold">Journey?</span>
              </h2>
              <p className="text-muted-foreground mt-6 text-lg leading-relaxed">
                Whether you're planning to study abroad, travel the world, or need logistics solutions — we're here to help. Get in touch with our experts today for a free consultation.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <Link to="/contact">
                  <Button size="lg" className="bg-gold-gradient text-navy-deep font-semibold rounded-full px-10 py-6 text-base hover:opacity-90">
                    Get Free Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <a href="https://wa.me/923193200332" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline" className="border-gold/30 text-foreground hover:bg-gold/5 rounded-full px-10 py-6 text-base">
                    WhatsApp Us
                  </Button>
                </a>
              </div>
            </div>
          </ScrollAnimator>
        </div>
      </section>
    </div>
  );
};

export default Index;
