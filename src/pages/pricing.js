import React from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

export default function Pricing() {
  const plans = [
    {
      name: 'Free',
      price: '$0',
      period: 'forever',
      description: 'Perfect for individuals and small teams',
      features: [
        'Up to 5 team members',
        'Unlimited tasks & projects',
        '2 GB storage',
        'Basic integrations',
        'Mobile apps',
        'Community support'
      ],
      cta: 'Get Started',
      ctaLink: 'https://app.example.com/signup',
      highlighted: false
    },
    {
      name: 'Professional',
      price: '$12',
      period: 'per user/month',
      description: 'For growing teams that need more',
      features: [
        'Unlimited team members',
        'Unlimited tasks & projects',
        '100 GB storage',
        'All integrations',
        'Priority support',
        'Advanced features',
        'API access',
        'Custom fields'
      ],
      cta: 'Start Free Trial',
      ctaLink: 'https://app.example.com/signup?plan=pro',
      highlighted: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'contact sales',
      description: 'For large organizations with specific needs',
      features: [
        'Everything in Professional',
        'Unlimited storage',
        'SSO & advanced security',
        'Dedicated support',
        'Custom contracts',
        'SLA guarantees',
        'On-premise option',
        'Custom integrations'
      ],
      cta: 'Contact Sales',
      ctaLink: '/contact',
      highlighted: false
    }
  ];

  return (
    <Layout
      title="Pricing"
      description="Choose the plan that's right for your team">
      <div className="container margin-vert--lg">
        <Heading as="h1" className="text--center margin-bottom--lg">
          Simple, Transparent Pricing
        </Heading>
        <p className="text--center margin-bottom--xl" style={{fontSize: '1.2rem', color: 'var(--ifm-color-emphasis-700)'}}>
          Start free, upgrade when you're ready. No credit card required.
        </p>

        <div className="row">
          {plans.map((plan, idx) => (
            <div key={idx} className="col col--4">
              <div 
                style={{
                  border: plan.highlighted ? '2px solid var(--ifm-color-primary)' : '1px solid var(--ifm-color-emphasis-300)',
                  borderRadius: '12px',
                  padding: '2rem',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  backgroundColor: plan.highlighted ? 'var(--ifm-color-primary-lightest)' : 'var(--ifm-background-color)'
                }}
              >
                {plan.highlighted && (
                  <div style={{
                    position: 'absolute',
                    top: '-12px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    backgroundColor: 'var(--ifm-color-primary)',
                    color: 'white',
                    padding: '0.25rem 1rem',
                    borderRadius: '12px',
                    fontSize: '0.875rem',
                    fontWeight: 'bold'
                  }}>
                    MOST POPULAR
                  </div>
                )}
                
                <Heading as="h2" style={{marginBottom: '0.5rem'}}>
                  {plan.name}
                </Heading>
                
                <div style={{marginBottom: '1rem'}}>
                  <span style={{fontSize: '3rem', fontWeight: 'bold', color: 'var(--ifm-color-primary)'}}>
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span style={{color: 'var(--ifm-color-emphasis-700)', marginLeft: '0.5rem'}}>
                      {plan.period}
                    </span>
                  )}
                </div>

                <p style={{color: 'var(--ifm-color-emphasis-700)', marginBottom: '2rem'}}>
                  {plan.description}
                </p>

                <ul style={{listStyle: 'none', padding: 0, marginBottom: '2rem', flexGrow: 1}}>
                  {plan.features.map((feature, featureIdx) => (
                    <li key={featureIdx} style={{marginBottom: '0.75rem', display: 'flex', alignItems: 'flex-start'}}>
                      <span style={{color: 'var(--ifm-color-success)', marginRight: '0.5rem'}}>✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={plan.ctaLink}
                  className={`button button--${plan.highlighted ? 'primary' : 'outline button--primary'} button--lg button--block`}
                >
                  {plan.cta}
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="margin-top--xl text--center">
          <Heading as="h2" className="margin-bottom--lg">
            Frequently Asked Questions
          </Heading>
          
          <div style={{maxWidth: '800px', margin: '0 auto', textAlign: 'left'}}>
            <div style={{marginBottom: '2rem'}}>
              <Heading as="h3">Can I change plans later?</Heading>
              <p>Yes! You can upgrade or downgrade at any time. Changes take effect immediately for upgrades, or at the end of your billing period for downgrades.</p>
            </div>

            <div style={{marginBottom: '2rem'}}>
              <Heading as="h3">Is there a free trial?</Heading>
              <p>Yes! Professional and Enterprise plans come with a 14-day free trial. No credit card required.</p>
            </div>

            <div style={{marginBottom: '2rem'}}>
              <Heading as="h3">What payment methods do you accept?</Heading>
              <p>We accept all major credit cards (Visa, Mastercard, Amex), debit cards, and PayPal. Enterprise customers can also pay via wire transfer or purchase order.</p>
            </div>

            <div style={{marginBottom: '2rem'}}>
              <Heading as="h3">Can I get a refund?</Heading>
              <p>Yes! We offer refunds within 30 days of purchase if you're not satisfied with our product.</p>
            </div>
          </div>

          <div className="margin-top--xl">
            <p style={{fontSize: '1.1rem'}}>
              Have more questions? <a href="/contact">Contact our sales team</a> or check our <a href="/docs/faq/billing">billing FAQ</a>.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

