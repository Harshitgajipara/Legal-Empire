import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Instagram,
  Youtube,
} from "lucide-react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid animate-stagger-container">
          <div className="footer-brand animate-stagger-item">
            <Link to="/" className="logo">
              <img
                src="/logo.png"
                alt="Legal Empire Logo"
                className="logo-img"
              />
              <span className="logo-text">Legal Empire</span>
            </Link>
            <p className="footer-desc">
              Defending your rights and building your future with excellence and
              integrity.
            </p>
          </div>

          <div className="footer-links animate-stagger-item">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/services">Practice Areas</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div className="footer-services animate-stagger-item">
            <h3>Practice Areas</h3>
            <ul>
              <li>Corporate Law</li>
              <li>Criminal Defense</li>
              <li>Family Law</li>
              <li>Estate Planning</li>
            </ul>
          </div>

          <div className="footer-contact animate-stagger-item">
            <h3>Contact Us</h3>
            <ul className="contact-list">
              <li>
                <Phone size={18} className="contact-icon" />
                <span>+91 98989 83573</span>
              </li>
              <li>
                <Mail size={18} className="contact-icon" />
                <span>info@legalempire.com</span>
              </li>
              <li>
                <MapPin size={18} className="contact-icon" />
                <span>
                  1111, the empire, SG, Highway Road, Sola
                  <br />
                  Ahmedabad - 380060
                </span>
              </li>
            </ul>
            <div className="social-links">
              <a
                href="https://wa.me/919898983573"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <MessageCircle size={20} />
              </a>
              <a
                href="https://www.instagram.com/kishanpatel1?igsh=MTA2enljdGJjdHl2dg=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://youtube.com/shorts/9erYJMveUjU?si=5BEzeiumYfKvh_XZ"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} Legal Empire. All rights reserved.
          </p>
          <div className="legal-links">
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
