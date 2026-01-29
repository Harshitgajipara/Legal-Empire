import { Link } from 'react-router-dom';
import { Shield, Users, Award, ArrowRight, CheckCircle } from 'lucide-react';
import './Home.css';

const Home = () => {
    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="container hero-container">
                    <div className="hero-content">
                        <span className="hero-badge">Est. 1995 • Excellence in Law</span>
                        <h1>Defending Your Rights, <br /><span className="text-accent">Building Your Future.</span></h1>
                        <p className="hero-subtitle">
                            Legal Empire provides top-tier legal representation with a focus on results.
                            We are dedicated to protecting what matters most to you.
                        </p>
                        <div className="hero-cta">
                            <Link to="/contact" className="btn btn-primary">Free Consultation</Link>
                            <Link to="/services" className="btn btn-outline-light">Our Practice Areas</Link>
                        </div>
                    </div>
                </div>
                <div className="hero-overlay"></div>
            </section>

            {/* Introduction Section */}
            <section className="section intro-section">
                <div className="container">
                    <div className="intro-grid">
                        <div className="intro-text">
                            <h2 className="section-title">A Legacy of <span className="text-accent">Legal Excellence</span></h2>
                            <p>
                                At Legal Empire, we understand that legal challenges can be overwhelming.
                                With over 25 years of experience, our team of dedicated attorneys is here to guide you through every step of the process.
                            </p>
                            <p>
                                We believe in a client-first approach, ensuring clear communication and aggressive representation.
                                Whether you are facing criminal charges, navigating a divorce, or planning your estate, we have the expertise to help.
                            </p>
                            <Link to="/about" className="learn-more-link">
                                Learn more about our firm <ArrowRight size={16} />
                            </Link>
                        </div>
                        <div className="intro-stats">
                            <div className="stat-card">
                                <span className="stat-number">25+</span>
                                <span className="stat-label">Years Experience</span>
                            </div>
                            <div className="stat-card">
                                <span className="stat-number">5k+</span>
                                <span className="stat-label">Cases Won</span>
                            </div>
                            <div className="stat-card">
                                <span className="stat-number">98%</span>
                                <span className="stat-label">Client Satisfaction</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="section bg-light benefits-section">
                <div className="container">
                    <div className="section-header text-center">
                        <h2>Why Choose <span className="text-accent">Legal Empire</span></h2>
                        <p className="section-subtitle">We stand apart through our dedication and results.</p>
                    </div>

                    <div className="benefits-grid">
                        <div className="benefit-card">
                            <div className="benefit-icon"><Shield size={32} /></div>
                            <h3>Unwavering Protection</h3>
                            <p>We are fierce advocates for our clients, protecting your rights and interests at every turn.</p>
                        </div>
                        <div className="benefit-card">
                            <div className="benefit-icon"><Award size={32} /></div>
                            <h3>Proven Track Record</h3>
                            <p>Our history of successful verdicts and settlements speaks for itself. We deliver results.</p>
                        </div>
                        <div className="benefit-card">
                            <div className="benefit-icon"><Users size={32} /></div>
                            <h3>Client-Centric Approach</h3>
                            <p>You are not just a case number. We provide personalized attention and tailored legal strategies.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Practice Areas Preview */}
            <section className="section services-preview">
                <div className="container">
                    <div className="flex justify-between items-center mb-lg">
                        <h2>Our Practice Areas</h2>
                        <Link to="/services" className="btn btn-outline">View All Services</Link>
                    </div>

                    <div className="services-grid">
                        <div className="service-card">
                            <h3>Criminal Defense</h3>
                            <p>Protecting your freedom against all types of charges.</p>
                            <ul className="service-list">
                                <li><CheckCircle size={14} /> DUI/DWI Defense</li>
                                <li><CheckCircle size={14} /> Drug Offenses</li>
                                <li><CheckCircle size={14} /> White Collar Crime</li>
                            </ul>
                        </div>
                        <div className="service-card">
                            <h3>Family Law</h3>
                            <p>Compassionate guidance through family transitions.</p>
                            <ul className="service-list">
                                <li><CheckCircle size={14} /> Divorce & Separation</li>
                                <li><CheckCircle size={14} /> Child Custody</li>
                                <li><CheckCircle size={14} /> Asset Division</li>
                            </ul>
                        </div>
                        <div className="service-card">
                            <h3>Corporate Law</h3>
                            <p>Strategic legal solutions for businesses of all sizes.</p>
                            <ul className="service-list">
                                <li><CheckCircle size={14} /> Entity Formation</li>
                                <li><CheckCircle size={14} /> Contracts & Mergers</li>
                                <li><CheckCircle size={14} /> Litigation</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section cta-section text-center">
                <div className="container">
                    <h2>Ready to Discuss Your Case?</h2>
                    <p>Contact us today for a free, confidential consultation. Let us fight for you.</p>
                    <div className="cta-buttons">
                        <Link to="/contact" className="btn btn-primary">Schedule Consultation</Link>
                        <a href="tel:5551234567" className="btn btn-outline-light">Call (555) 123-4567</a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
