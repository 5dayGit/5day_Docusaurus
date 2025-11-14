import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';
import HomePageSearch from '@site/src/components/HomepageFeatures/HomePageSearch';

function HomepageHeader() {



  return (
    <div className={styles.outerHeaderContainer}>
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <Heading as="h1" className="hero__title">
              How can we help you?
            </Heading>
            <p className="hero__subtitle">
              Search about anything you want to learn about 5day.io
            </p>
            <HomePageSearch />
          </div>
          <div className={styles.heroImage}>
            <img
              src="/img/home_background.png"
              alt="Illustration of girl with charts"
              className={styles.girlImage}
            />
          </div>
        </div>
      </header>
    </div>
  );
}
function QuickLinks() {
  const links = [
    {
      title: '5day.io Structure',
      description: 'Understand how spaces, and projects come together to organize the work.',
      to: '/docs/user-guide/5day.io%20Structure/5day.io%20Structure/Intro%20to%205day.io%20Structure',
      icon: '/img/quicklinks/Strucutre.svg'
    },
    {
      title: '5day.io Features',
      description: 'Explore all the tools and features that make 5day.io powerful and flexible.',
      to: '/docs/user-guide/5day.io%20Features/Automation/Intro%20to%20Automation',
      icon: '/img/quicklinks/Feature.svg'
    },
    {
      title: 'Views',
      description: 'Discover different types to visualize your work-List, Board, Timeline and more.',
      to: '/docs/user-guide/Views/List%20View/Intro%20to%20List%20View',
      icon: '/img/quicklinks/Views.svg'
    },
    {
      title: 'Dashboard',
      description: 'Track Progress, performance and key insights across your project in one place.',
      to: '/docs/user-guide/Analytics/Overview%20of%20Dashboard',
      icon: '/img/quicklinks/Dashboard.svg'
    },
    {
      title: 'My Space ',
      description: 'Customize your personal space to focus on what matters most to you.',
      to: '/docs/user-guide/My%20Space/My%20Work',
      icon: '/img/quicklinks/My Space.svg'
    },
    {
      title: 'General',
      description: 'Find answers to common questions, settings and overall platform guidance.',
      to: '/docs/user-guide/General/Quick%20Add',
      icon: '/img/quicklinks/General.svg'
    },
    {
      title: 'Integration',
      description: 'Learn how to connect 5day.io to your favourite tool for a seamless workflow.',
      to: '/docs/user-guide/Integrations/Microsoft%20Teams/Intro%20to%20Microsoft%20Teams%20Integration',
      icon: '/img/quicklinks/Integration.svg'
    },
    // {
    //   title: 'Videos',
    //   description: 'Watch quick tutorials and demos to learn 5day.io features in actions.',
    //   to: '/docs/user-guide/Videos',
    //   icon: '/img/quicklinks/Video.svg'
    // },
  ];
  return (
    <section className={styles.quickLinks}>
      <div className="container">
        <Heading as="h1" className="text--left margin-bottom--lg">
          Start exploring Yourself
        </Heading>
        <p className="hero__subtitle">Dive into the sections you want to explore.</p>
        <div className={styles.cardsGrid}>
          {links.map((link, idx) => (
            <Link key={idx} to={link.to} className={styles.quickLinkCard}>
              <div className={styles.cardIcon}><img src={link.icon} alt={link.title}/></div>
              <h3>{link.title}</h3>
              <p>{link.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="Complete guide to using our product effectively">
      <HomepageHeader />
      <main>
        <QuickLinks />
      </main>
    </Layout>
  );
}
