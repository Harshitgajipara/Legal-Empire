import { CheckCircle } from 'lucide-react';
import './About.css';

const About = () => {
    return (
        <div className="about-page">
            {/* Page Header */}
            <section className="page-header">
                <div className="container">
                    <h1>About Legal Empire</h1>
                    <p>Dedication, Integrity, and Results since 1995.</p>
                </div>
            </section>

            {/* Mission Section */}
            <section className="section">
                <div className="container">
                    <div className="about-grid">
                        <div className="about-content">
                            <span className="section-label">Our Mission</span>
                            <h2>We Fight For What Matters Most</h2>
                            <p>
                                At Legal Empire, our mission is simple: to provide unparalleled legal representation
                                that protects our clients' rights and secures their future. We believe that everyone
                                deserves a passionate advocate in their corner.
                            </p>
                            <p>
                                We approach every case with a combination of strategic thinking, legal expertise,
                                and genuine compassion for our clients' situations. We don't just handle cases;
                                we help people navigate some of the most challenging moments of their lives.
                            </p>
                        </div>
                        <div className="about-image">
                            <img
                                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                                alt="Legal Team Meeting"
                                className="rounded-image"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="section bg-light">
                <div className="container">
                    <div className="text-center mb-xl">
                        <h2>Our Core Values</h2>
                        <p>The principles that guide our practice every day.</p>
                    </div>

                    <div className="values-grid">
                        <div className="value-card">
                            <h3>Integrity</h3>
                            <p>We operate with the highest ethical standards, ensuring honesty and transparency in all we do.</p>
                        </div>
                        <div className="value-card">
                            <h3>Excellence</h3>
                            <p>We strive for perfection in our legal arguments, research, and client service.</p>
                        </div>
                        <div className="value-card">
                            <h3>Commitment</h3>
                            <p>We are fully dedicated to our clients, available when needed and relentless in pursuit of results.</p>
                        </div>
                        <div className="value-card">
                            <h3>Empathy</h3>
                            <p>We understand the human cost of legal battles and treat every client with dignity and respect.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team/History Section */}
            <section className="section">
                <div className="container">
                    <div className="history-container">
                        <div className="history-text">
                            <h2>Our History</h2>
                            <p>
                                Founded in 1995 by Senior Partner Robert Thorne, Legal Empire began as a small boutique firm
                                specializing in criminal defense. Over the decades, we have expanded our practice areas and
                                team, becoming one of the most respected legal firms in the region.
                            </p>
                            <ul className="milestones-list">
                                <li>
                                    <CheckCircle size={20} className="text-accent" />
                                    <span><strong>1995:</strong> Firm founded by Robert Thorne</span>
                                </li>
                                <li>
                                    <CheckCircle size={20} className="text-accent" />
                                    <span><strong>2005:</strong> Expanded into Corporate and Family Law</span>
                                </li>
                                <li>
                                    <CheckCircle size={20} className="text-accent" />
                                    <span><strong>2015:</strong> Recognized as "Top Law Firm" by Legal Review</span>
                                </li>
                                <li>
                                    <CheckCircle size={20} className="text-accent" />
                                    <span><strong>2023:</strong> Opened new headquarters in downtown Legal City</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
