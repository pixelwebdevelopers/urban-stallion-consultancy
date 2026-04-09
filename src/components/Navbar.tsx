import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy-deep/95 backdrop-blur-md border-b border-gold/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Urban Stallion Consultancy" className="h-14 w-auto" />
            <div className="flex flex-col -space-y-1">
              <span className="text-white font-display text-lg md:text-xl font-bold leading-tight">URBAN STALLION</span>
              <span className="text-white/90 font-body text-[10px] md:text-xs tracking-[0.25em] font-medium">CONSULTANCY</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-body text-sm font-medium tracking-wide transition-colors duration-300 ${
                  location.pathname === link.path
                    ? "text-gold"
                    : "text-white/80 hover:text-gold"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+923193200332" className="flex items-center gap-2 text-white/80 hover:text-gold transition-colors text-sm">
              <Phone className="h-4 w-4" />
              +92 319 3200332
            </a>
            <Link to="/contact">
              <Button className="bg-gold-gradient text-navy-deep font-semibold hover:opacity-90 transition-opacity rounded-full px-6">
                Free Consultation
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-6 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`font-body text-base font-medium py-2 border-b border-white/10 transition-colors ${
                    location.pathname === link.path
                      ? "text-gold"
                      : "text-white/80 hover:text-gold"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <a href="tel:+923193200332" className="flex items-center gap-2 text-white/80 hover:text-gold transition-colors py-2">
                <Phone className="h-4 w-4" />
                +92 319 3200332
              </a>
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                <Button className="bg-gold-gradient text-navy-deep font-semibold w-full rounded-full">
                  Free Consultation
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
