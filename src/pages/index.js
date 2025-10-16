import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/getting-started/introduction">
            Get Started - 5min ⏱️
          </Link>
          <Link
            className="button button--outline button--secondary button--lg"
            to="/docs/api/overview"
            style={{marginLeft: '1rem'}}>
            API Documentation
          </Link>
        </div>
      </div>
    </header>
  );
}

function QuickLinks() {
  const links = [
    {
      title: '📚 Documentation',
      description: 'Learn how to use all features effectively',
      to: '/docs/getting-started/introduction'
    },
    {
      title: '🚀 Quick Start',
      description: 'Get up and running in 5 minutes',
      to: '/docs/getting-started/quick-start'
    },
    {
      title: '🔧 API Reference',
      description: 'Build custom integrations',
      to: '/docs/api/overview'
    },
    {
      title: '❓ FAQ',
      description: 'Find answers to common questions',
      to: '/docs/faq/general'
    }
  ];

  return (
    <section className={styles.quickLinks}>
      <div className="container">
        <Heading as="h2" className="text--center margin-bottom--lg">
          Quick Links
        </Heading>
        <div className="row">
          {links.map((link, idx) => (
            <div key={idx} className="col col--3">
              <Link to={link.to} className={styles.quickLinkCard}>
                <h3>{link.title}</h3>
                <p>{link.description}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PopularTopics() {
  const topics = [
    {
      category: 'Getting Started',
      links: [
        { title: 'Installation', to: '/docs/getting-started/installation' },
        { title: 'Quick Start Guide', to: '/docs/getting-started/quick-start' },
        { title: 'Create Your First Project', to: '/docs/getting-started/first-project' }
      ]
    },
    {
      category: 'User Guide',
      links: [
        { title: 'Dashboard Overview', to: '/docs/user-guide/dashboard' },
        { title: 'Managing Projects', to: '/docs/user-guide/projects' },
        { title: 'Task Management', to: '/docs/user-guide/tasks' }
      ]
    },
    {
      category: 'Features',
      links: [
        { title: 'Collaboration', to: '/docs/features/collaboration' },
        { title: 'Integrations', to: '/docs/features/integrations' },
        { title: 'Automation', to: '/docs/features/automation' }
      ]
    },
    {
      category: 'API',
      links: [
        { title: 'API Overview', to: '/docs/api/overview' },
        { title: 'Authentication', to: '/docs/api/authentication/api-keys' },
        { title: 'Webhooks', to: '/docs/api/webhooks' }
      ]
    }
  ];

  return (
    <section className={styles.popularTopics}>
      <div className="container">
        <Heading as="h2" className="text--center margin-bottom--lg">
          Popular Topics
        </Heading>
        <div className="row">
          {topics.map((topic, idx) => (
            <div key={idx} className="col col--3">
              <h3>{topic.category}</h3>
              <ul className={styles.topicList}>
                {topic.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <Link to={link.to}>{link.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="Complete guide to using our product effectively">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <QuickLinks />
        <PopularTopics />
      </main>
    </Layout>
  );
}
