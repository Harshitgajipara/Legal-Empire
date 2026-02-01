import { CheckCircle } from "lucide-react";
import "./About.css";

const About = () => {
  return (
    <div className="about-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1 className="animate-fade-up">About Legal Empire</h1>
          <p className="animate-fade-up">
            Dedication, Integrity, and Results since 1986.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section">
        <div className="container">
          <div className="about-grid">
            <div className="about-content animate-fade-up scroll-reveal">
              <span className="section-label scroll-reveal">Our Mission</span>
              <h2 className="scroll-reveal">We Fight For What Matters Most</h2>
              <p className="scroll-reveal">
                At Legal Empire, our mission is simple: to provide unparalleled
                legal representation that protects our clients' rights and
                secures their future. We believe that everyone deserves a
                passionate advocate in their corner.
              </p>
              <p className="scroll-reveal">
                We approach every case with a combination of strategic thinking,
                legal expertise, and genuine compassion for our clients'
                situations. We don't just handle cases; we help people navigate
                some of the most challenging moments of their lives.
              </p>
            </div>
            <div className="about-image animate-fade-in">
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
          <div className="text-center mb-xl animate-fade-up scroll-reveal">
            <h2 className="scroll-reveal">Our Core Values</h2>
            <p className="scroll-reveal">
              The principles that guide our practice every day.
            </p>
          </div>

          <div className="values-grid animate-stagger-container">
            <div className="value-card animate-stagger-item scroll-reveal">
              <h3 className="scroll-reveal">Integrity</h3>
              <p className="scroll-reveal">
                We operate with the highest ethical standards, ensuring honesty
                and transparency in all we do.
              </p>
            </div>
            <div className="value-card animate-stagger-item scroll-reveal">
              <h3 className="scroll-reveal">Excellence</h3>
              <p className="scroll-reveal">
                We strive for perfection in our legal arguments, research, and
                client service.
              </p>
            </div>
            <div className="value-card animate-stagger-item scroll-reveal">
              <h3 className="scroll-reveal">Commitment</h3>
              <p className="scroll-reveal">
                We are fully dedicated to our clients, available when needed and
                relentless in pursuit of results.
              </p>
            </div>
            <div className="value-card animate-stagger-item scroll-reveal">
              <h3 className="scroll-reveal">Empathy</h3>
              <p className="scroll-reveal">
                We understand the human cost of legal battles and treat every
                client with dignity and respect.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team/History Section */}
      <section className="section">
        <div className="container">
          <div className="history-container">
            <div className="history-text animate-fade-up scroll-reveal">
              <h2 className="scroll-reveal">Our History</h2>
              <p className="scroll-reveal">
                Established in 1986 by Senior Partner Mr. Viral P. Patel, Legal
                Empire was founded with a clear vision: to deliver principled,
                fearless, and result-oriented legal representation. What began
                as a focused legal practice soon earned a reputation for
                integrity, strategic thinking, and unwavering client commitment.
              </p>
              <ul className="milestones-list animate-stagger-container">
                <li className="animate-stagger-item scroll-reveal">
                  <CheckCircle size={20} className="text-accent" />
                  <span className="scroll-reveal">
                    <strong>1986:</strong> Firm founded by Mr. Viral P Patel
                  </span>
                </li>
                <li className="animate-stagger-item scroll-reveal">
                  <CheckCircle size={20} className="text-accent" />
                  <span className="scroll-reveal">
                    <strong>1995:</strong> Opened office at Rajkot and expanded
                  </span>
                </li>
                <li className="animate-stagger-item scroll-reveal">
                  <CheckCircle size={20} className="text-accent" />
                  <span className="scroll-reveal">
                    <strong>2015:</strong> Opened office at Ahmedabad and
                    Expanded
                  </span>
                </li>
                <li className="animate-stagger-item scroll-reveal">
                  <CheckCircle size={20} className="text-accent" />
                  <span className="scroll-reveal">
                    <strong>2025:</strong> Opened another office at Ahmedabad
                  </span>
                </li>
              </ul>
              <p className="scroll-reveal">
                Tendency to cover Gujarat with vide network of Lawyers as well
                as Professionals.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
