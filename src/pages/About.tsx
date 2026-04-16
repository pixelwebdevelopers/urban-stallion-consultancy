import { Target, Eye, Heart, Users, Award, Globe, Clock, ShieldCheck, Quote } from "lucide-react";
import ScrollAnimator from "@/components/ScrollAnimator";
import ceoImage from "@/assets/ceo.jpeg";
import directorImage from "@/assets/director.jpeg";

const steps = [
  { step: "01", title: "Free Consultation", desc: "Share your goals and aspirations with our expert counselors in a one-on-one session." },
  { step: "02", title: "Personalized Plan", desc: "We create a customized roadmap based on your academic profile, budget, and dream destination." },
  { step: "03", title: "Application & Visa", desc: "We handle your university applications and visa documentation with precision and care." },
  { step: "04", title: "Welcome Abroad!", desc: "From pre-departure briefing to airport pickup, we support you until you settle in." },
];

const values = [
  { icon: ShieldCheck, title: "Integrity", desc: "We operate with complete transparency in every interaction." },
  { icon: Award, title: "Excellence", desc: "We strive for the highest standards in consultancy services." },
  { icon: Heart, title: "Compassion", desc: "Every student is treated with genuine care and dedication." },
  { icon: Globe, title: "Global Vision", desc: "We connect local talent with worldwide opportunities." },
];

const About = () => {
  return (
    <div className="font-body pt-20">
      {/* Hero */}
      <section className="bg-navy-gradient py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <ScrollAnimator>
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-gold font-semibold text-sm uppercase tracking-widest">About Us</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mt-4">
                Empowering Dreams, <span className="text-gradient-gold">Globally</span>
              </h1>
              <p className="text-white/70 mt-6 text-lg leading-relaxed">
                Urban Stallion Consultancy Pvt Ltd is a premier consultancy firm based in Rawalpindi, Pakistan, dedicated to helping students and professionals navigate their path to international success.
              </p>
            </div>
          </ScrollAnimator>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10">
            <ScrollAnimator direction="left">
              <div className="p-10 rounded-2xl bg-card border border-border hover:border-gold/20 transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-6">
                  <Target className="h-7 w-7 text-gold" />
                </div>
                <h2 className="text-2xl font-display font-bold text-foreground mb-4">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To provide exceptional consultancy services that bridge the gap between ambition and achievement. We are committed to delivering personalized guidance for students seeking international education, travelers exploring the world, and businesses requiring seamless logistics solutions. Our mission is to make global opportunities accessible to everyone.
                </p>
              </div>
            </ScrollAnimator>
            <ScrollAnimator direction="right">
              <div className="p-10 rounded-2xl bg-card border border-border hover:border-gold/20 transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-6">
                  <Eye className="h-7 w-7 text-gold" />
                </div>
                <h2 className="text-2xl font-display font-bold text-foreground mb-4">Our Vision</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To become Pakistan's most trusted and innovative consultancy firm, recognized internationally for our commitment to excellence, integrity, and client success. We envision a world where every aspiring student and professional can access global opportunities without barriers, supported by expert guidance every step of the way.
                </p>
              </div>
            </ScrollAnimator>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 lg:py-28 bg-muted">
        <div className="container mx-auto px-4">
          <ScrollAnimator>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-gold font-semibold text-sm uppercase tracking-widest">Our Values</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-3">
                What Drives Us Forward
              </h2>
            </div>
          </ScrollAnimator>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <ScrollAnimator key={i} delay={i * 0.1}>
                <div className="text-center p-8 rounded-2xl bg-card border border-border hover:border-gold/20 transition-all duration-300 hover:shadow-lg">
                  <v.icon className="h-10 w-10 text-gold mx-auto mb-4" />
                  <h3 className="font-display font-bold text-foreground text-lg mb-2">{v.title}</h3>
                  <p className="text-muted-foreground text-sm">{v.desc}</p>
                </div>
              </ScrollAnimator>
            ))}
          </div>
        </div>
      </section>

      {/* CEO Message */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <ScrollAnimator>
              <div className="grid lg:grid-cols-2 gap-12 items-center bg-navy-gradient rounded-3xl overflow-hidden">
                <div className="h-full min-h-[400px]">
                  <img 
                    src={ceoImage} 
                    alt="Dr. Khalid Rajpoot - CEO" 
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="p-10 md:p-14 relative">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                  <div className="relative z-10">
                    <Quote className="h-12 w-12 text-gold/20 mb-6" />
                    <span className="text-gold font-semibold text-sm uppercase tracking-widest">Message from CEO</span>
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-white mt-4 mb-6">Dr. Khalid Rajpoot</h2>
                    <blockquote className="text-white/80 text-lg leading-relaxed italic border-l-4 border-gold pl-6 mb-8 text-justify">
                      "At Urban Stallion Consultancy, we don't just process applications — we build futures. Every student who walks through our doors becomes part of our family, and their success is our greatest achievement. Over the years, we have helped thousands of students realize their dreams of studying at world-renowned universities, and we continue to expand our horizons to offer even more services to our valued clients."
                    </blockquote>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center">
                        <Users className="h-6 w-6 text-gold" />
                      </div>
                      <div>
                        <p className="text-white font-display font-bold">Dr. Khalid Rajpoot</p>
                        <p className="text-white/50 text-sm">CEO, Urban Stallion Consultancy</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimator>
          </div>
        </div>
      </section>

      {/* Managing Director Message */}
      <section className="py-20 lg:py-28 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <ScrollAnimator direction="right">
              <div className="grid lg:grid-cols-2 gap-12 items-center bg-card border border-border rounded-3xl overflow-hidden">
                <div className="p-10 md:p-14 order-2 lg:order-1 relative">
                  <div className="relative z-10">
                    <Quote className="h-12 w-12 text-gold/10 mb-6" />
                    <span className="text-gold font-semibold text-sm uppercase tracking-widest">Message from Managing Director</span>
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-4 mb-6">Prof. Dr. Asif Mughal</h2>
                    <blockquote className="text-muted-foreground text-lg leading-relaxed italic border-l-4 border-gold pl-6 mb-8 text-justify">
                      "Success in the international arena requires more than just a visa; it requires a roadmap. We provide the academic and professional support needed to excel in your chosen destination. Our team is dedicated to providing personalized guidance for students seeking international education, travelers exploring the world, and businesses requiring seamless logistics solutions."
                    </blockquote>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                        <Award className="h-6 w-6 text-gold" />
                      </div>
                      <div>
                        <p className="text-foreground font-display font-bold">Prof. Dr. Asif Mughal</p>
                        <p className="text-muted-foreground text-sm">Managing Director, Urban Stallion Consultancy</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-full min-h-[400px] order-1 lg:order-2">
                  <img 
                    src={directorImage} 
                    alt="Prof. Dr. Asif Mughal - Managing Director" 
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </ScrollAnimator>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 lg:py-28 bg-muted">
        <div className="container mx-auto px-4">
          <ScrollAnimator>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-gold font-semibold text-sm uppercase tracking-widest">How It Works</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-3">
                Our Simple 4-Step Process
              </h2>
            </div>
          </ScrollAnimator>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s, i) => (
              <ScrollAnimator key={i} delay={i * 0.15}>
                <div className="relative p-8 rounded-2xl bg-card border border-border hover:border-gold/20 transition-all duration-300 hover:shadow-lg group">
                  <span className="text-6xl font-display font-bold text-gold/10 absolute top-4 right-6 group-hover:text-gold/20 transition-colors">
                    {s.step}
                  </span>
                  <div className="relative z-10">
                    <div className="w-10 h-10 rounded-full bg-gold text-navy-deep flex items-center justify-center font-bold text-sm mb-5">
                      {s.step}
                    </div>
                    <h3 className="font-display font-bold text-foreground text-lg mb-2">{s.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              </ScrollAnimator>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
