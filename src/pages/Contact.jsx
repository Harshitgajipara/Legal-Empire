import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for your message. We will contact you shortly.');
    };

    return (
        <div className="contact-page">
            {/* Page Header */}
            <section className="page-header contact-header">
                <div className="container">
                    <h1>Contact Us</h1>
                    <p>We are here to help. Reach out to us today.</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="contact-container">
                        {/* Contact Info */}
                        <div className="contact-info">
                            <h2>Get In Touch</h2>
                            <p className="mb-lg">
                                Fill out the form or contact us directly. We respond to all inquiries within 24 hours.
                            </p>

                            <div className="info-item">
                                <div className="icon-box"><Phone size={24} /></div>
                                <div>
                                    <h3>Phone</h3>
                                    <p>(555) 123-4567</p>
                                    <p className="text-sm text-light">Mon-Fri 9am-6pm</p>
                                </div>
                            </div>

                            <div className="info-item">
                                <div className="icon-box"><Mail size={24} /></div>
                                <div>
                                    <h3>Email</h3>
                                    <p>info@legalempire.com</p>
                                    <p className="text-sm text-light">Send us your query anytime</p>
                                </div>
                            </div>

                            <div className="info-item">
                                <div className="icon-box"><MapPin size={24} /></div>
                                <div>
                                    <h3>Office</h3>
                                    <p>123 Justice Blvd, Suite 100</p>
                                    <p>Legal City, ST 12345</p>
                                </div>
                            </div>

                            <div className="info-item">
                                <div className="icon-box"><Clock size={24} /></div>
                                <div>
                                    <h3>Office Hours</h3>
                                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                                    <p>Saturday: By Appointment</p>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="contact-form-wrapper">
                            <h2>Send us a Message</h2>
                            <form className="contact-form" onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="name">Full Name</label>
                                    <input type="text" id="name" placeholder="John Doe" required />
                                </div>

                                <div className="form-grid">
                                    <div className="form-group">
                                        <label htmlFor="email">Email Address</label>
                                        <input type="email" id="email" placeholder="john@example.com" required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="phone">Phone Number</label>
                                        <input type="tel" id="phone" placeholder="(555) 123-4567" />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="subject">Practice Area</label>
                                    <select id="subject" required>
                                        <option value="">Select a Service</option>
                                        <option value="criminal">Criminal Defense</option>
                                        <option value="family">Family Law</option>
                                        <option value="corporate">Corporate Law</option>
                                        <option value="estate">Estate Planning</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message">Message</label>
                                    <textarea id="message" rows="5" placeholder="Briefly describe your case..." required></textarea>
                                </div>

                                <button type="submit" className="btn btn-primary submit-btn">Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Placeholder */}
            <section className="map-section">
                <div className="map-placeholder">
                    <div className="map-content">
                        <MapPin size={48} className="text-accent" />
                        <h3>Visit Our Office</h3>
                        <p>123 Justice Blvd, Suite 100, Legal City, ST 12345</p>
                        <a href="#" className="btn btn-outline" style={{ marginTop: '1rem' }}>Get Directions (Open Maps)</a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
