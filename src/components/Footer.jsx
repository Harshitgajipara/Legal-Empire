import { Link } from 'react-router-dom';
import { Scale, Phone, Mail, MapPin, Facebook, Twitter, Linkedin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid animate-stagger-container">
                    <div className="footer-brand animate-stagger-item">
                        <Link to="/" className="logo">
                            <Scale className="logo-icon" size={28} />
                            <span className="logo-text">Legal Empire</span>
                        </Link>
                        <p className="footer-desc">
                            Defending your rights and building your future with excellence and integrity.
                        </p>
                    </div>

                    <div className="footer-links animate-stagger-item">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/services">Practice Areas</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
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
                                <span>123 Justice Blvd, Suite 100<br />Legal City, ST 12345</span>
                            </li>
                        </ul>
                        <div className="social-links">
                            <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
                            <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
                            <a href="#" aria-label="LinkedIn"><Linkedin size={20} /></a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Legal Empire. All rights reserved.</p>
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
