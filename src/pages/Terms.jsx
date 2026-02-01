const Terms = () => {
  return (
    <div className="terms-page">
      {/* Page Header */}
      <section
        className="page-header"
        style={{
          padding: "4rem 0",
          backgroundColor: "#0F172A",
          color: "#FFFFFF",
          textAlign: "center",
        }}
      >
        <div className="container">
          <h1 className="animate-fade-up">Terms of Service</h1>
          <p
            className="animate-fade-up"
            style={{ maxWidth: "600px", margin: "0 auto", color: "#E2E8F0" }}
          >
            Please read these terms carefully before using our services.
          </p>
        </div>
      </section>

      <div className="section animate-fade-up">
        <div className="container" style={{ maxWidth: "800px" }}>
          <p className="text-sm text-light mb-lg">
            Last Updated: February 1, 2026
          </p>

          <div className="mb-lg">
            <h3>1. Agreement to Terms</h3>
            <p>
              These Terms of Service constitute a legally binding agreement
              between you ("Client") and Legal Empire ("Firm," "we," "us," or
              "our"). By accessing our website, submitting a contact form, or
              requesting our services, you agree to be bound by these terms. If
              you do not agree to these terms, do not use our services.
            </p>
          </div>

          <div
            className="mb-lg"
            style={{
              padding: "1.5rem",
              backgroundColor: "var(--color-background)",
              borderLeft: "4px solid var(--color-accent)",
              borderRadius: "4px",
            }}
          >
            <h3 style={{ marginTop: 0 }}>
              2. No Legal Advice & No Attorney-Client Relationship
            </h3>
            <p style={{ marginBottom: 0 }}>
              <strong>IMPORTANT:</strong> Information provided on this website
              is for general educational purposes only and does not constitute
              legal advice.{" "}
              <strong>
                Accessing this website or communicating with Legal Empire does
                not create an attorney-client relationship.
              </strong>{" "}
              An attorney-client relationship is only established after: (a) we
              have completed a conflict of interest check; (b) we have agreed to
              represent you; and (c) you have signed an engagement agreement.
              Until such time, we are not your attorneys.
            </p>
          </div>

          <div className="mb-lg" style={{ marginTop: "2rem" }}>
            <h3>3. Website Content</h3>
            <p>
              The content on our website, including text, graphics, logos,
              images, and software, is the property of Legal Empire or its
              content suppliers and is protected by international copyright
              laws. We grant you a limited license to access and display our
              website for personal, non-commercial use only. Any reproduction,
              republication, or distribution of our content is strictly
              prohibited without our written consent.
            </p>
          </div>

          <div className="mb-lg">
            <h3>4. Prohibited Activities</h3>
            <p>You agree not to:</p>
            <ul
              style={{
                listStyleType: "disc",
                paddingLeft: "20px",
                marginBottom: "1rem",
                color: "var(--color-text)",
              }}
            >
              <li>
                Use the website for any unlawful purpose or in violation of any
                applicable laws
              </li>
              <li>Harass, abuse, or harm others through this website</li>
              <li>
                Attempt to gain unauthorized access to our systems or networks
              </li>
              <li>Transmit viruses, malware, or harmful code</li>
              <li>Engage in spam, phishing, or fraudulent activities</li>
              <li>Impersonate any person or entity</li>
              <li>Interfere with the operation of the website or services</li>
            </ul>
          </div>

          <div className="mb-lg">
            <h3>5. Limitation of Liability</h3>
            <p>
              <strong>TO THE MAXIMUM EXTENT PERMITTED BY LAW:</strong> Legal
              Empire shall not be liable for any indirect, incidental, special,
              consequential, or punitive damages, including but not limited to
              loss of profits, data, or revenue, arising from your use of or
              inability to use the website or services, even if we have been
              advised of the possibility of such damages.
            </p>
          </div>

          <div className="mb-lg">
            <h3>6. Fee Structure and Payment Terms</h3>
            <p>
              Our legal fees are discussed and agreed upon in the engagement
              agreement. Payment terms, billing procedures, and refund policies
              will be specified in your engagement letter. Late payments may
              result in suspension of services. We retain the right to withdraw
              from representation if fees remain unpaid in accordance with
              applicable professional rules.
            </p>
          </div>

          <div className="mb-lg">
            <h3>7. Confidentiality and Privilege</h3>
            <p>
              Once an attorney-client relationship is established,
              communications between you and our firm are protected by
              attorney-client privilege and work product protection under
              applicable law. However, before such relationship is established,
              we cannot guarantee confidentiality. We recommend you do not
              disclose sensitive information via unsecured channels.
            </p>
          </div>

          <div className="mb-lg">
            <h3>8. Disclaimer of Warranties</h3>
            <p>
              Our website and services are provided "AS IS" and "AS AVAILABLE"
              without warranties of any kind, express or implied. We do not
              warrant that the website will be uninterrupted, error-free, or
              free from viruses or malicious code. To the extent permitted by
              law, we disclaim all implied warranties of merchantability,
              fitness for a particular purpose, and non-infringement.
            </p>
          </div>

          <div className="mb-lg">
            <h3>9. Third-Party Links</h3>
            <p>
              Our website may contain links to third-party websites. We are not
              responsible for the content, accuracy, or practices of those
              websites. Your access to and use of third-party websites are at
              your own risk and subject to their terms and conditions.
            </p>
          </div>

          <div className="mb-lg">
            <h3>10. Termination of Services</h3>
            <p>
              Legal Empire reserves the right to terminate or suspend services
              at any time, with or without cause, subject to applicable
              professional rules and regulations. Clients may terminate the
              attorney-client relationship by written notice. Termination does
              not relieve either party of obligations accrued prior to
              termination.
            </p>
          </div>

          <div className="mb-lg">
            <h3>11. Conflicts of Interest</h3>
            <p>
              We conduct conflict checks before accepting new clients. We
              maintain an internal database of conflicts to prevent
              representation that would be prohibited under professional rules.
              If a conflict is discovered after engagement, we will inform you
              immediately and discuss appropriate remedies.
            </p>
          </div>

          <div className="mb-lg">
            <h3>12. Jurisdictional Matters</h3>
            <p>
              These terms are governed by the laws of India, specifically the
              Indian Contract Act, 1872, and other applicable Indian statutes
              including the Advocate Act, 1961. Any disputes arising from these
              terms shall be subject to the exclusive jurisdiction of the courts
              located in Ahmedabad, Gujarat, India.
            </p>
          </div>

          <div className="mb-lg">
            <h3>13. Professional Responsibilities</h3>
            <p>
              Legal Empire adheres to the standards of professional conduct
              established by the Bar Council of India and applicable state bar
              associations. Our attorneys maintain professional liability
              insurance and comply with all ethical obligations, including
              confidentiality, conflicts of interest, and competence
              requirements.
            </p>
          </div>

          <div className="mb-lg">
            <h3>14. Changes to Terms</h3>
            <p>
              We reserve the right to modify these terms at any time. Changes
              will be effective upon posting to our website. Your continued use
              of the website constitutes acceptance of the modified terms. We
              recommend you review these terms periodically for updates.
            </p>
          </div>

          <div className="mb-lg">
            <h3>15. Contact Information</h3>
            <p>
              For questions regarding these terms or our services, please
              contact us at:
            </p>
            <p style={{ marginBottom: "0.5rem" }}>
              <strong>Legal Empire</strong>
              <br />
              1111, the empire, SG, Highway Road, Sola
              <br />
              Ahmedabad - 380060, Gujarat, India
              <br />
              Phone: +91 98989 83573
              <br />
              WhatsApp: +91 98989 83573
              <br />
              Email: info@legalempire.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
