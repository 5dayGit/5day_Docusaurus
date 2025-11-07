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
                <strong>General Support:</strong> <a href="mailto:support@example.com">support@example.com</a>
              </p>
              <p style={{ marginBottom: '0.5rem' }}>
                <strong>Sales Inquiries:</strong> <a href="mailto:sales@example.com">sales@example.com</a>
              </p>
              <p style={{ marginBottom: '0.5rem' }}>
                <strong>Technical Assistance:</strong> <a href="mailto:techsupport@example.com">techsupport@example.com</a>
              </p>
              <p style={{ marginBottom: '0' }}>
                <strong>Feedback and Suggestions:</strong> <a href="mailto:feedback@example.com">feedback@example.com</a>
              </p>
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
                <strong>United Kingdoms:</strong> <a href="tel:+442079460532">+44 20 7946 0532</a>
              </p>
              <p style={{ marginBottom: '0.5rem' }}>
                <strong>United States:</strong> <a href="tel:+16502530000">+1 650-253-0000</a>
              </p>
              <p style={{ marginBottom: '0' }}>
                <strong>India:</strong> <a href="tel:+914440421400">+91 44 4042 1400</a>
              </p>
            </div>
          </div>
        </div>

      </div>
    </Layout >
  );
}

