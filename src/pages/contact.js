import React from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

export default function Contact() {
  return (
    <Layout
      title="Contact Support"
      description="Get help with our product">
      <div className="container margin-vert--lg">
        <Heading as="h1" className="text--center margin-bottom--lg">
          Contact Support
        </Heading>
        <p className="text--center margin-bottom--xl" style={{fontSize: '1.2rem', color: 'var(--ifm-color-emphasis-700)'}}>
          We're here to help! Choose the best way to reach us.
        </p>

        <div className="row">
          <div className="col col--6">
            <div style={{
              border: '1px solid var(--ifm-color-emphasis-300)',
              borderRadius: '12px',
              padding: '2rem',
              height: '100%',
              marginBottom: '1rem'
            }}>
              <h2>📧 Email Support</h2>
              <p style={{color: 'var(--ifm-color-emphasis-700)', marginBottom: '1rem'}}>
                Get detailed help via email. We typically respond within 24-48 hours.
              </p>
              <p style={{marginBottom: '0.5rem'}}>
                <strong>General Support:</strong> <a href="mailto:support@example.com">support@example.com</a>
              </p>
              <p style={{marginBottom: '0.5rem'}}>
                <strong>Sales Inquiries:</strong> <a href="mailto:sales@example.com">sales@example.com</a>
              </p>
              <p style={{marginBottom: '0.5rem'}}>
                <strong>API Support:</strong> <a href="mailto:api-support@example.com">api-support@example.com</a>
              </p>
              <p style={{marginBottom: '0'}}>
                <strong>Security Issues:</strong> <a href="mailto:security@example.com">security@example.com</a>
              </p>
            </div>
          </div>

          <div className="col col--6">
            <div style={{
              border: '1px solid var(--ifm-color-emphasis-300)',
              borderRadius: '12px',
              padding: '2rem',
              height: '100%',
              marginBottom: '1rem'
            }}>
              <h2>💬 Live Chat</h2>
              <p style={{color: 'var(--ifm-color-emphasis-700)', marginBottom: '1rem'}}>
                Get instant help from our support team.
              </p>
              <p style={{marginBottom: '1rem'}}>
                Click the chat icon in the bottom right corner of any page to start a conversation.
              </p>
              <p style={{marginBottom: '0.5rem'}}>
                <strong>Hours:</strong> Monday - Friday, 9 AM - 5 PM PST
              </p>
              <p style={{marginBottom: '0'}}>
                <strong>Average response time:</strong> &lt; 2 minutes
              </p>
            </div>
          </div>
        </div>

        <div className="row margin-top--lg">
          <div className="col col--6">
            <div style={{
              border: '1px solid var(--ifm-color-emphasis-300)',
              borderRadius: '12px',
              padding: '2rem',
              height: '100%'
            }}>
              <h2>📚 Documentation</h2>
              <p style={{color: 'var(--ifm-color-emphasis-700)', marginBottom: '1rem'}}>
                Find answers in our comprehensive documentation.
              </p>
              <ul style={{marginBottom: '1rem'}}>
                <li><a href="/docs/getting-started/introduction">Getting Started Guide</a></li>
                <li><a href="/docs/user-guide/dashboard">User Guide</a></li>
                <li><a href="/docs/api/overview">API Documentation</a></li>
                <li><a href="/docs/faq/general">FAQ</a></li>
                <li><a href="/docs/troubleshooting/common-issues">Troubleshooting</a></li>
              </ul>
            </div>
          </div>

          <div className="col col--6">
            <div style={{
              border: '1px solid var(--ifm-color-emphasis-300)',
              borderRadius: '12px',
              padding: '2rem',
              height: '100%'
            }}>
              <h2>🤝 Community</h2>
              <p style={{color: 'var(--ifm-color-emphasis-700)', marginBottom: '1rem'}}>
                Connect with other users and get community support.
              </p>
              <p style={{marginBottom: '0.5rem'}}>
                <strong>Community Forum:</strong> <a href="https://community.example.com" target="_blank" rel="noopener noreferrer">community.example.com</a>
              </p>
              <p style={{marginBottom: '0.5rem'}}>
                <strong>Discord Server:</strong> <a href="https://discord.gg/example" target="_blank" rel="noopener noreferrer">Join our Discord</a>
              </p>
              <p style={{marginBottom: '0'}}>
                <strong>GitHub Discussions:</strong> <a href="https://github.com/product/discussions" target="_blank" rel="noopener noreferrer">Ask questions</a>
              </p>
            </div>
          </div>
        </div>

        <div className="margin-top--xl" style={{
          backgroundColor: 'var(--ifm-color-primary-lightest)',
          borderRadius: '12px',
          padding: '2rem',
          textAlign: 'center'
        }}>
          <Heading as="h2">Enterprise Support</Heading>
          <p style={{fontSize: '1.1rem', marginBottom: '1.5rem'}}>
            Need priority support with guaranteed response times?
          </p>
          <p style={{marginBottom: '1.5rem'}}>
            Enterprise customers get:
          </p>
          <ul style={{display: 'inline-block', textAlign: 'left', marginBottom: '1.5rem'}}>
            <li>24/7 priority support</li>
            <li>&lt; 4 hour response time</li>
            <li>Dedicated account manager</li>
            <li>Phone support</li>
            <li>Onboarding assistance</li>
            <li>Custom training</li>
          </ul>
          <div>
            <a href="mailto:sales@example.com" className="button button--primary button--lg">
              Contact Sales
            </a>
          </div>
        </div>

        <div className="margin-top--xl text--center">
          <Heading as="h2">System Status</Heading>
          <p style={{fontSize: '1.1rem'}}>
            Check the current status of our services at <a href="https://status.example.com" target="_blank" rel="noopener noreferrer">status.example.com</a>
          </p>
        </div>
      </div>
    </Layout>
  );
}

