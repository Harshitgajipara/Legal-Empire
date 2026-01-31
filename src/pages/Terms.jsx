const Terms = () => {
    return (
        <div className="terms-page">
            {/* Page Header */}
            <section className="page-header" style={{ padding: '4rem 0', backgroundColor: '#0F172A', color: '#FFFFFF', textAlign: 'center' }}>
                <div className="container">
                    <h1>Terms and Conditions</h1>
                    <p style={{ maxWidth: '600px', margin: '0 auto', color: '#E2E8F0' }}>
                        Please read these terms carefully before using our services.
                    </p>
                </div>
            </section>

            <div className="section">
                <div className="container" style={{ maxWidth: '800px' }}>
                    <p className="text-sm text-light mb-lg">Last Updated: January 1, 2024</p>

                    <div className="mb-lg">
                        <h3>1. Agreement to Terms</h3>
                        <p>
                            These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and Legal Empire ("we," "us," or "our"),
                            concerning your access to and use of the LegalEmpire.com website as well as any other media form, media channel, mobile website or mobile application related, linked,
                            or otherwise connected thereto (collectively, the "Site").
                        </p>
                    </div>

                    <div className="mb-lg" style={{ padding: '1.5rem', backgroundColor: 'var(--color-background)', borderLeft: '4px solid var(--color-accent)', borderRadius: '4px' }}>
                        <h3 style={{ marginTop: 0 }}>2. No Legal Advice & No Attorney-Client Relationship</h3>
                        <p style={{ marginBottom: 0 }}>
                            The information provided on this Site is for general informational purposes only and does not constitute legal advice.
                            <strong>Accessing this Site or communicating with Legal Empire through this Site does not create an attorney-client relationship.</strong>
                            An attorney-client relationship is only established after we have completed a conflict check and you have signed an engagement letter.
                        </p>
                    </div>

                    <div className="mb-lg" style={{ marginTop: '2rem' }}>
                        <h3>3. Intellectual Property Rights</h3>
                        <p>
                            Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs,
                            and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or
                            licensed to us, and are protected by copyright and trademark laws.
                        </p>
                    </div>

                    <div className="mb-lg">
                        <h3>4. Prohibited Activities</h3>
                        <p>
                            You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors
                            except those that are specifically endorsed or approved by us.
                        </p>
                    </div>

                    <div className="mb-lg">
                        <h3>5. Limitation of Liability</h3>
                        <p>
                            In no event will we be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages,
                            including lost profit, lost revenue, loss of data, or other damages arising from your use of the site, even if we have been advised of the possibility of such damages.
                        </p>
                    </div>

                    <div className="mb-lg">
                        <h3>6. Governing Law</h3>
                        <p>
                            These Conditions shall be governed by and construed in accordance with the laws of the State, without regard to its conflict of law principles.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Terms;
