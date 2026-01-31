import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Scale } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    const isActive = (path) => {
        return location.pathname === path ? 'active' : '';
    };

    return (
        <nav className="navbar">
            <div className="container navbar-container">
                <Link to="/" className="logo">
                    <Scale className="logo-icon" size={32} />
                    <span className="logo-text">Legal Empire</span>
                </Link>

                {/* Desktop Menu */}
                <div className="nav-links desktop-menu">
                    <Link to="/" className={`nav-link ${isActive('/')}`}>Home</Link>
                    <Link to="/about" className={`nav-link ${isActive('/about')}`}>About Us</Link>
                    <Link to="/services" className={`nav-link ${isActive('/services')}`}>Services</Link>
                    <Link to="/contact" className={`nav-link ${isActive('/contact')}`}>Contact</Link>
                    <ThemeToggle />
                    <Link to="/contact" className="btn btn-primary">Free Consultation</Link>
                </div>

                {/* Mobile Menu Button */}
                <div className="mobile-menu-btn" onClick={toggleMenu}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </div>

                {/* Mobile Menu Backdrop */}
                {isOpen && <div className="mobile-menu-backdrop" onClick={closeMenu}></div>}

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="mobile-menu">
                        <Link to="/" className={`nav-link ${isActive('/')}`} onClick={closeMenu}>Home</Link>
                        <Link to="/about" className={`nav-link ${isActive('/about')}`} onClick={closeMenu}>About Us</Link>
                        <Link to="/services" className={`nav-link ${isActive('/services')}`} onClick={closeMenu}>Services</Link>
                        <Link to="/contact" className={`nav-link ${isActive('/contact')}`} onClick={closeMenu}>Contact</Link>
                        <ThemeToggle />
                        <Link to="/contact" className="btn btn-primary" onClick={closeMenu}>Free Consultation</Link>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
