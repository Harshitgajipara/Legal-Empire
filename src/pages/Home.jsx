import { Link } from "react-router-dom";
import { Shield, Users, Award, ArrowRight, CheckCircle } from "lucide-react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container hero-container">
          <div className="hero-content">
            <span className="hero-badge animate-fade-up">
              Est. 1986 • Excellence in Law
            </span>
            <h1 className="animate-fade-up">
              Defending Your Rights, <br />
              <span className="text-accent">Building Your Future.</span>
            </h1>
            <p className="hero-subtitle animate-fade-up">
              Legal Empire provides top-tier legal representation with a focus
              on results. We are dedicated to protecting what matters most to
              you.
            </p>
            <div className="hero-cta animate-fade-up">
              <Link to="/contact" className="btn btn-primary">
                24x7 Consultation
              </Link>
              <Link to="/services" className="btn btn-outline-light">
                Our Practice Areas
              </Link>
            </div>
          </div>
        </div>
        <div className="hero-overlay animate-fade-in"></div>
      </section>

      {/* Introduction Section */}
      <section className="section intro-section">
        <div className="container">
          <div className="intro-grid">
            <div className="intro-text animate-fade-up scroll-reveal">
              <h2 className="section-title scroll-reveal">
                A Legacy of{" "}
                <span className="text-accent">Legal Excellence</span>
              </h2>
              <p className="scroll-reveal">
                At Legal Empire, we understand that legal challenges can be
                overwhelming. With over long years of experience, our team of
                dedicated attorneys is here to guide you through every step of
                the process.
              </p>
              <p className="scroll-reveal">
                We believe in a client-first approach, ensuring clear
                communication and aggressive representation. Whether you are
                facing Criminal or Civil Charges, need assistance with Real
                Estate Documentation, involved in a Commercial Dispute or Civil
                Litigation, or navigating a Divorce.
              </p>

              <div className="court-list">
                <div className="court-list-item scroll-reveal">
                  <CheckCircle size={18} /> <span>Gujarat High Court</span>
                </div>
                <div className="court-list-item scroll-reveal">
                  <CheckCircle size={18} />{" "}
                  <span>City Civil Court, Ahmedabad</span>
                </div>
                <div className="court-list-item scroll-reveal">
                  <CheckCircle size={18} />{" "}
                  <span>Metropolitan Magistrate Court, Ahmedabad</span>
                </div>
                <div className="court-list-item scroll-reveal">
                  <CheckCircle size={18} /> <span>Ahmedabad Rural Courts</span>
                </div>
                <div className="court-list-item scroll-reveal">
                  <CheckCircle size={18} />{" "}
                  <span>District Collector / Deputy Collector</span>
                </div>
              </div>
              <Link to="/about" className="learn-more-link">
                Learn more about our firm <ArrowRight size={16} />
              </Link>
            </div>
            <div className="intro-stats animate-stagger-container">
              <div className="stat-card animate-stagger-item scroll-reveal">
                <span className="stat-number scroll-reveal">25+</span>
                <span className="stat-label scroll-reveal">
                  Years Experience
                </span>
              </div>
              <div className="stat-card animate-stagger-item scroll-reveal">
                <span className="stat-number scroll-reveal">5k+</span>
                <span className="stat-label scroll-reveal">Cases Won</span>
              </div>
              <div className="stat-card animate-stagger-item scroll-reveal">
                <span className="stat-number scroll-reveal">98%</span>
                <span className="stat-label scroll-reveal">
                  Client Satisfaction
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas Preview */}
      <section className="section services-preview">
        <div className="container">
          <div className="flex justify-between items-center mb-lg animate-fade-up">
            <h2>Our Practice Areas</h2>
            <Link to="/services" className="btn btn-outline">
              View All Services
            </Link>
          </div>

          <div className="services-grid animate-stagger-container">
            <div className="service-card animate-stagger-item">
              <h3>Civil Litigation</h3>
              <p>
                Expert representation in all civil matters and property
                disputes.
              </p>
              <ul className="service-list">
                <li>
                  <CheckCircle size={14} /> Will / Property Management
                </li>
                <li>
                  <CheckCircle size={14} /> Land Revenue / Property Card
                </li>
                <li>
                  <CheckCircle size={14} /> Commercial Dispute
                </li>
              </ul>
            </div>
            <div className="service-card animate-stagger-item">
              <h3>Criminal</h3>
              <p>Protecting your rights with aggressive legal defense.</p>
              <ul className="service-list">
                <li>
                  <CheckCircle size={14} /> Cheque Bounce
                </li>
                <li>
                  <CheckCircle size={14} /> Family Law / Child Custody
                </li>
                <li>
                  <CheckCircle size={14} /> Cyber Crime
                </li>
              </ul>
            </div>
            <div className="service-card animate-stagger-item">
              <h3>Corporate Laws</h3>
              <p>Strategic legal solutions for businesses of all sizes.</p>
              <ul className="service-list">
                <li>
                  <CheckCircle size={14} /> Litigation to Trademark
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section bg-light benefits-section">
        <div className="container">
          <div className="section-header text-center animate-fade-up scroll-reveal">
            <h2 className="scroll-reveal">
              Why Choose <span className="text-accent">Legal Empire</span>
            </h2>
            <p className="section-subtitle scroll-reveal">
              We stand apart through our dedication and results.
            </p>
          </div>

          <div className="benefits-grid animate-stagger-container">
            <div className="benefit-card animate-stagger-item scroll-reveal">
              <div className="benefit-icon">
                <Shield size={32} />
              </div>
              <h3 className="scroll-reveal">Unwavering Protection</h3>
              <p className="scroll-reveal">
                We are fierce advocates for our clients, protecting your rights
                and interests at every turn.
              </p>
            </div>
            <div className="benefit-card animate-stagger-item scroll-reveal">
              <div className="benefit-icon">
                <Award size={32} />
              </div>
              <h3 className="scroll-reveal">Proven Track Record</h3>
              <p className="scroll-reveal">
                Our history of successful verdicts and settlements speaks for
                itself. We deliver results.
              </p>
            </div>
            <div className="benefit-card animate-stagger-item scroll-reveal">
              <div className="benefit-icon">
                <Users size={32} />
              </div>
              <h3 className="scroll-reveal">Client-Centric Approach</h3>
              <p className="scroll-reveal">
                You are not just a case number. We provide personalized
                attention and tailored legal strategies.
              </p>
            </div>
          </div>
        </div>
      </section>    

      {/* CTA Section */}
      <section className="section cta-section text-center">
        <div className="container animate-fade-up">
          <h2>Ready to Discuss Your Case?</h2>
          <p>
            Contact us today for a free, confidential consultation. Let us fight
            for you.
          </p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn btn-primary">
              Schedule Consultation
            </Link>
            <a href="tel:5551234567" className="btn btn-outline-light">
              Call +91 98989 83573
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
