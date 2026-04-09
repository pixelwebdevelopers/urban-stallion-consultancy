import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import logo from "@/assets/logo.png";
import pixelLogo from "@/assets/pixel-logo.png";

const Footer = () => {
  return (
    <footer className="bg-navy-deep text-white/80">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <img src={logo} alt="Urban Stallion Consultancy" className="h-16 w-auto" />
            <p className="text-sm leading-relaxed text-white/60">
              Your trusted partner for international education, travel solutions, and logistics services. Turning your global dreams into reality.
            </p>
            <div className="flex gap-3 pt-2">
              {[Facebook, Instagram, Linkedin, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold hover:text-navy-deep transition-all duration-300"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg text-white mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "Contact Us", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm hover:text-gold transition-colors duration-300">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-lg text-white mb-5">Our Services</h4>
            <ul className="space-y-3">
              {["Student Consultancy", "Visa Assistance", "Travel & Tourism", "Ticket Booking", "Tour Packages", "Logistics Solutions"].map((s) => (
                <li key={s}>
                  <Link to="/services" className="text-sm hover:text-gold transition-colors duration-300">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg text-white mb-5">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="h-4 w-4 mt-0.5 text-gold shrink-0" />
                Office #12, 2nd Floor, Al-Rehman Plaza, Murree Road, Rawalpindi, Pakistan
              </li>
              <li>
                <a href="tel:+923193200332" className="flex items-center gap-3 text-sm hover:text-gold transition-colors">
                  <Phone className="h-4 w-4 text-gold shrink-0" />
                  +92 319 3200332
                </a>
              </li>
              <li>
                <a href="mailto:info@urbanstallion.com" className="flex items-center gap-3 text-sm hover:text-gold transition-colors">
                  <Mail className="h-4 w-4 text-gold shrink-0" />
                  info@urbanstallion.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Urban Stallion Consultancy Pvt Ltd. All rights reserved.
          </p>
          <p className="text-xs text-white/40 flex items-center justify-center sm:justify-end gap-2">
            Developed by{" "}
            <a
              href="https://pixelwebdevelopers.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:text-gold-light transition-colors flex items-center gap-1.5"
            >
              <img src={pixelLogo} alt="Pixel Web Developers" className="h-4 w-auto" />
              Pixel Web Developers
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
