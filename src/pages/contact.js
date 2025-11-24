import React from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

export default function Contact() {
  return (
    <Layout
      title="Contact Support"
      description="Get help with our product">
      <div className="container margin-vert--lg">
        <div style={{
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          backgroundColor: 'var(--ifm-color-primary)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginLeft: 'auto',
          marginRight: 'auto',
          marginBottom: '1rem'
        }}>
        <span className="support-icon support-icon-call"></span>
        </div>
        <Heading as="h1" className="text--center margin-bottom--lg">
          Contact Support
        </Heading>
        <p className="text--center margin-bottom--xl" style={{ fontSize: '1.2rem', color: 'var(--ifm-color-emphasis-700)' }}>
          We're here to help! Choose the best way to reach us.
        </p>

        <div className="row"
          style={{
            display: 'flex',
          }}>
          <div className="col col--6">
            <div style={{
              alignment: 'center',
              border: '1px solid var(--ifm-color-emphasis-300)',
              borderRadius: '12px',
              padding: '2rem',
              height: '100%',
              marginBottom: '1rem'
            }}>
              <span className="support-icon support-icon-email"></span>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                <h2>Email Support</h2>
              </div>

              <p style={{ color: 'var(--ifm-color-emphasis-700)', marginBottom: '1rem' }}>
                Get Detailed help via email. We typically respond within 24-48 hours.
              </p>

              <p style={{ marginBottom: '0.5rem' }}>
                <strong>General Support:</strong> <a href="mailto:support@5day.io">support@5day.io</a>
              </p>
              <p style={{ marginBottom: '0.5rem' }}>
                <strong>Sales Inquiries:</strong> <a href="mailto:sales@5day.io">sales@5day.io</a>
              </p>
              {/* <p style={{ marginBottom: '0.5rem' }}>
                <strong>Technical Assistance:</strong> <a href="mailto:techsupport@example.com">techsupport@example.com</a>
              </p>
              <p style={{ marginBottom: '0' }}>
                <strong>Feedback and Suggestions:</strong> <a href="mailto:feedback@example.com">feedback@example.com</a>
              </p> */}
            </div>
          </div>

          <div className="col col--6">
            <div style={{
              border: '1px solid var(--ifm-color-emphasis-300)',
              borderRadius: '12px',
              padding: '2rem',
              height: '100%',
              marginBottom: '1rem',
              alignment: 'center'
            }}>
             <span className="support-icon support-icon-call"></span>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                <h2>Call Support</h2>
              </div>

              <p style={{ color: 'var(--ifm-color-emphasis-700)', marginBottom: '1rem' }}>
                Get Detailed help via email. We typically respond within 24-48 hours
              </p>

              <p style={{ marginBottom: '0.5rem' }}>
                <strong>United Kingdoms:</strong> <a href="tel:+442080683967">+44 20 8068 3967</a>
              </p>
              <p style={{ marginBottom: '0.5rem' }}>
                <strong>United States:</strong> <a href="tel:+14157238242">+1 415 723 8242</a>
              </p>
              <p style={{ marginBottom: '0.5rem' }}>
                <strong>Europe:</strong> <a href="tel:+442080683978">+44 20 8068 3978</a>
              </p>
              <p style={{ marginBottom: '0' }}>
                <strong>India:</strong> <a href="tel:+919205283329">+91 92052 83329</a>
              </p>
            </div>
          </div>
        </div>

      </div>
    </Layout >
  );
}

