import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import ScrollAnimator from "@/components/ScrollAnimator";

const contactInfo = [
  { icon: Phone, label: "Phone / WhatsApp", value: "+92 319 3200332", href: "tel:+923193200332" },
  { icon: Mail, label: "Email", value: "info@urbanstallion.com", href: "mailto:info@urbanstallion.com" },
  { icon: MapPin, label: "Address", value: "Office #12, 2nd Floor, Al-Rehman Plaza, Murree Road, Rawalpindi, Pakistan", href: "#" },
  { icon: Clock, label: "Working Hours", value: "Mon - Sat: 9:00 AM - 6:00 PM", href: "#" },
];

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you within 24 hours.",
    });
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="font-body pt-20">
      {/* Hero */}
      <section className="bg-navy-gradient py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <ScrollAnimator>
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-gold font-semibold text-sm uppercase tracking-widest">Get In Touch</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mt-4">
                Contact <span className="text-gradient-gold">Us</span>
              </h1>
              <p className="text-white/70 mt-6 text-lg leading-relaxed">
                Have questions about our services? Ready to start your journey? We'd love to hear from you. Reach out to our team today.
              </p>
            </div>
          </ScrollAnimator>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Info */}
            <div className="lg:col-span-2">
              <ScrollAnimator direction="left">
                <div className="space-y-8">
                  <div>
                    <h2 className="text-2xl font-display font-bold text-foreground mb-4">Let's Connect</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Whether you need student visa guidance, travel assistance, or logistics solutions — our team is ready to help. Reach out via any of the channels below or fill out the contact form.
                    </p>
                  </div>
                  <div className="space-y-6">
                    {contactInfo.map((info, i) => (
                      <a
                        key={i}
                        href={info.href}
                        className="flex items-start gap-4 group"
                      >
                        <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-colors">
                          <info.icon className="h-5 w-5 text-gold" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">{info.label}</p>
                          <p className="text-foreground font-medium text-sm">{info.value}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </ScrollAnimator>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <ScrollAnimator direction="right">
                <form onSubmit={handleSubmit} className="p-8 md:p-10 rounded-2xl bg-card border border-border shadow-sm">
                  <h3 className="text-xl font-display font-bold text-foreground mb-6">Send Us a Message</h3>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        placeholder="Your full name"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2 mt-5">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      placeholder="+92 300 0000000"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2 mt-5">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your requirements..."
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      required
                    />
                  </div>
                  <Button type="submit" size="lg" className="mt-6 w-full bg-gold-gradient text-navy-deep font-semibold rounded-full hover:opacity-90">
                    Send Message <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </ScrollAnimator>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-muted">
        <div className="container mx-auto px-4 py-16">
          <ScrollAnimator>
            <div className="rounded-2xl overflow-hidden border border-border h-80">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3321.5!2d73.0479!3d33.5651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDMzJzU0LjQiTiA3M8KwMDInNTIuNCJF!5e0!3m2!1sen!2s!4v1680000000000!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Urban Stallion Consultancy Location"
              />
            </div>
          </ScrollAnimator>
        </div>
      </section>
    </div>
  );
};

export default Contact;
