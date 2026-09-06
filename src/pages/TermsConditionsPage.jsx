export default function TermsConditionsPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container" style={{ padding: '80px 0', minHeight: '30vh' }}>
          <span className="section-number">LEGAL</span>
          <h1>Terms & Conditions</h1>
          <p style={{ marginTop: '20px' }}>Standard terms of sale, delivery, and website usage.</p>
        </div>
      </section>
      
      <section className="legal-content" style={{ padding: '40px 0 80px' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto', lineHeight: '1.8' }}>
          <h3>1. General Disclaimers</h3>
          <p style={{ marginBottom: '24px' }}>The information provided on this website by Bentoclay Claytech is for general informational purposes only. While we strive to keep product specifications and technical data up to date, all information is provided in good faith without representation or warranty of any kind.</p>
          
          <h3 style={{ marginTop: '40px' }}>2. Product Specifications & Usage</h3>
          <p style={{ marginBottom: '24px' }}>Product data sheets, specifications, and test results represent typical values obtained under controlled laboratory conditions. They do not constitute a guarantee of performance in specific customer applications. It is the buyer's responsibility to test and determine the suitability of our products for their intended processes.</p>
          
          <h3 style={{ marginTop: '40px' }}>3. Sales & Delivery</h3>
          <p style={{ marginBottom: '24px' }}>All sales are subject to our standard commercial terms and conditions, which will be provided alongside formal quotations and invoices. Delivery timelines are estimates and are subject to logistical and operational variables.</p>
          
          <h3 style={{ marginTop: '40px' }}>4. Intellectual Property</h3>
          <p style={{ marginBottom: '24px' }}>All content on this website, including text, graphics, logos, and product information, is the property of Bentoclay Claytech and is protected by applicable intellectual property laws. Unauthorized reproduction is strictly prohibited.</p>

          <h3 style={{ marginTop: '40px' }}>5. Contact Information</h3>
          <p style={{ marginBottom: '24px' }}>If you have any questions about these Terms & Conditions, please contact us at <strong>bentoclayclaytech@gmail.com</strong>.</p>
        </div>
      </section>
    </main>
  );
}
