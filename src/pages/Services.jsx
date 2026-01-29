import { Link } from 'react-router-dom';
import {
    Briefcase,
    Users,
    Home as HomeIcon,
    FileText,
    AlertTriangle,
    Gavel,
    ArrowRight
} from 'lucide-react';
import './Services.css';

const servicesData = [
    {
        icon: <Gavel size={32} />,
        title: "Criminal Defense",
        description: "Aggressive defense against all types of criminal charges. We protect your rights and freedom.",
        features: ["DUI/DWI Defense", "Drug Offenses", "Assault & Battery", "White Collar Crime"]
    },
    {
        icon: <Users size={32} />,
        title: "Family Law",
        description: "Compassionate legal support for family-related matters during difficult times.",
        features: ["Divorce & Separation", "Child Custody & Support", "Adoption", "Prenuptial Agreements"]
    },
    {
        icon: <Briefcase size={32} />,
        title: "Corporate Law",
        description: "Strategic counsel for businesses, from startups to established corporations.",
        features: ["Entity Formation", "Contract Negotiation", "Mergers & Acquisitions", "Employment Law"]
    },
    {
        icon: <HomeIcon size={32} />,
        title: "Real Estate",
        description: "Expert guidance for residential and commercial real estate transactions and disputes.",
        features: ["Closings", "Lease Agreements", "Property Disputes", "Land Use & Zoning"]
    },
    {
        icon: <FileText size={32} />,
        title: "Estate Planning",
        description: "Helping you preserve your legacy and provide for your loved ones.",
        features: ["Wills & Trusts", "Probate Administration", "Power of Attorney", "Living Wills"]
    },
    {
        icon: <AlertTriangle size={32} />,
        title: "Personal Injury",
        description: "Fighting for fair compensation when you've been injured due to negligence.",
        features: ["Auto Accidents", "Medical Malpractice", "Slip & Fall", "Wrongful Death"]
    }
];

const Services = () => {
    return (
        <div className="services-page">
            {/* Page Header */}
            <section className="page-header services-header">
                <div className="container">
                    <h1>Practice Areas</h1>
                    <p>Comprehensive legal solutions tailored to your needs.</p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="section">
                <div className="container">
                    <div className="services-main-grid">
                        {servicesData.map((service, index) => (
                            <div key={index} className="service-detail-card">
                                <div className="service-icon-wrapper">
                                    {service.icon}
                                </div>
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                                <ul className="service-features-list">
                                    {service.features.map((feature, i) => (
                                        <li key={i}>{feature}</li>
                                    ))}
                                </ul>
                                <Link to="/contact" className="service-link">
                                    Consult With Us <ArrowRight size={16} />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="section bg-light">
                <div className="container">
                    <div className="text-center mb-xl">
                        <h2>Our Process</h2>
                        <p>How we handle your case from specialized start to finish.</p>
                    </div>

                    <div className="process-steps">
                        <div className="step">
                            <div className="step-number">1</div>
                            <h4>Consultation</h4>
                            <p>We meet to discuss your situation and evaluate your legal options.</p>
                        </div>
                        <div className="step-divider"></div>
                        <div className="step">
                            <div className="step-number">2</div>
                            <h4>Strategy</h4>
                            <p>We develop a tailored legal strategy designed to achieve your goals.</p>
                        </div>
                        <div className="step-divider"></div>
                        <div className="step">
                            <div className="step-number">3</div>
                            <h4>Execution</h4>
                            <p>We aggressively advocate for you, keeping you informed at every stage.</p>
                        </div>
                        <div className="step-divider"></div>
                        <div className="step">
                            <div className="step-number">4</div>
                            <h4>Resolution</h4>
                            <p>We fight for the best possible outcome for your case.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section text-center">
                <div className="container">
                    <h2>Need Legal Assistance?</h2>
                    <p className="mb-md">Don't navigate the legal system alone. We are here to help.</p>
                    <Link to="/contact" className="btn btn-primary">Get a Free Case Evaluation</Link>
                </div>
            </section>
        </div>
    );
};

export default Services;
