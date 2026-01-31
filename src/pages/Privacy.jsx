const Privacy = () => {
    return (
        <div className="privacy-page">
            {/* Page Header */}
            <section className="page-header" style={{ padding: '4rem 0', backgroundColor: '#0F172A', color: '#FFFFFF', textAlign: 'center' }}>
                <div className="container">
                    <h1 className="animate-fade-up">Privacy Policy</h1>
                    <p className="animate-fade-up" style={{ maxWidth: '600px', margin: '0 auto', color: '#E2E8F0' }}>
                        Your privacy and trust are paramount to us.
                    </p>
                </div>
            </section>

            <div className="section animate-fade-up">
                <div className="container" style={{ maxWidth: '800px' }}>
                    <p className="text-sm text-light mb-lg">Last Updated: January 1, 2024</p>

                    <div className="mb-lg">
                        <h3>1. Introduction</h3>
                        <p>
                            Legal Empire ("we," "our," or "us") respects your privacy and is committed to protecting it through our compliance with this policy.
                            This policy describes the types of information we may collect from you or that you may provide when you visit the website
                            LegalEmpire.com (our "Website") and our practices for collecting, using, maintaining, protecting, and disclosing that information.
                        </p>
                    </div>

                    <div className="mb-lg">
                        <h3>2. Attorney-Client Privilege</h3>
                        <p>
                            <strong>Important:</strong> Submitting a form or contacting us via email does not create an attorney-client relationship.
                            While we keep all communications confidential to the fullest extent of the law, please do not send confidential
                            or sensitive information until an attorney-client relationship has been formally established.
                        </p>
                    </div>

                    <div className="mb-lg">
                        <h3>3. Information We Collect</h3>
                        <p>We collect several types of information from and about users of our Website, including information:</p>
                        <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginBottom: '1rem', color: 'var(--color-text)' }}>
                            <li style={{ marginBottom: '0.5rem' }}>By which you may be personally identified, such as name, postal address, e-mail address, or telephone number ("personal information").</li>
                            <li style={{ marginBottom: '0.5rem' }}>That is about you but individually does not identify you, such as practice area interests.</li>
                            <li style={{ marginBottom: '0.5rem' }}>About your internet connection, the equipment you use to access our Website, and usage details.</li>
                        </ul>
                    </div>

                    <div className="mb-lg">
                        <h3>4. How We Use Your Information</h3>
                        <p>We use information that we collect about you or that you provide to us, including any personal information:</p>
                        <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginBottom: '1rem', color: 'var(--color-text)' }}>
                            <li style={{ marginBottom: '0.5rem' }}>To present our Website and its contents to you.</li>
                            <li style={{ marginBottom: '0.5rem' }}>To provide you with information, products, or services that you request from us.</li>
                            <li style={{ marginBottom: '0.5rem' }}>To fulfill any other purpose for which you provide it (e.g., consultation requests).</li>
                            <li style={{ marginBottom: '0.5rem' }}>To notify you about changes to our Website or any products or services we offer or provide though it.</li>
                        </ul>
                    </div>

                    <div className="mb-lg">
                        <h3>5. Data Security</h3>
                        <p>
                            We have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure.
                            However, the safety and security of your information also depends on you. Unfortunately, the transmission of information via the internet is not completely secure.
                            Although we do our best to protect your personal information, we cannot guarantee the security of your personal information transmitted to our Website.
                        </p>
                    </div>

                    <div className="mb-lg">
                        <h3>6. Contact Information</h3>
                        <p>
                            To ask questions or comment about this privacy policy and our privacy practices, contact us at:<br />
                            <strong>Email:</strong> privacy@legalempire.com<br />
                            <strong>Phone:</strong> (555) 123-4567<br />
                            <strong>Address:</strong> 123 Justice Blvd, Suite 100, Legal City, ST 12345
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Privacy;
