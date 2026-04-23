import React from 'react';
import Link from 'next/link';
import styles from '@/components/components.module.css';

export default function CaseStudyPage() {
  return (
    <main style={{ minHeight: '100vh', padding: '10vw 5vw', position: 'relative' }}>
      <div className={styles.galaxyCanvas}></div>
      
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <Link href="/" className={styles.btn} style={{ marginBottom: '4rem', padding: '0.8rem 1.5rem', fontSize: '1rem' }}>
          &larr; Back to Home
        </Link>
        
        <h1 className={styles.sectionTitle}>Case Studies</h1>
        <p className={styles.sectionSubtitle}>
          Deep dives into our selected projects, showcasing our process, challenges, and the ultimate solutions we delivered.
        </p>

          {/* Case Study 1 */}
          <div className={`${styles.bentoCard} ${styles.bentoSpan4}`} style={{ padding: 0 }}>
            <div style={{ width: '100%', height: '250px', position: 'relative', overflow: 'hidden' }}>
              <img src="/images/case-studies/tradinggeek.jpg" alt="The Trading Geek" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} className="hover-scale" />
            </div>
            <div style={{ padding: '2.5rem' }}>
              <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>The Trading Geek</h3>
              <p style={{ fontSize: '1rem', color: 'rgba(255, 255, 255, 0.6)', marginBottom: '2rem', lineHeight: '1.6' }}>
                We helped Brad Goh (The Trading Geek) reach a dramatically larger audience than ever before by leveraging our YouTube growth expertise, smarter content strategy, and data-driven marketing. Now at 1.55M subscribers, his channel impact is next-level.
              </p>
              <Link href="/case-study/trading-geek" style={{ color: 'var(--accent-primary)', fontWeight: 'bold', textTransform: 'uppercase', fontSize: '0.9rem', letterSpacing: '0.1em', textDecoration: 'none' }}>Read More &rarr;</Link>
            </div>
          </div>

          {/* Case Study 2 */}
          <div className={`${styles.bentoCard} ${styles.bentoSpan4}`} style={{ padding: 0 }}>
            <div style={{ width: '100%', height: '250px', position: 'relative', overflow: 'hidden' }}>
              <img src="/images/case-studies/ahmed.jpg" alt="Ahmed Eldin" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} className="hover-scale" />
            </div>
            <div style={{ padding: '2.5rem' }}>
              <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Ahmed Eldin</h3>
              <p style={{ fontSize: '1rem', color: 'rgba(255, 255, 255, 0.6)', marginBottom: '2rem', lineHeight: '1.6' }}>
                Within just 25 days, we helped Ahmed Eldin increase its subscriber base from 3,000 to over 12,000 subscribers. Our strategic approach, tailored content, and targeted marketing efforts drove a staggering 999% surge in impressions.
              </p>
              <Link href="/case-study/ahmed-eldin" style={{ color: 'var(--accent-primary)', fontWeight: 'bold', textTransform: 'uppercase', fontSize: '0.9rem', letterSpacing: '0.1em', textDecoration: 'none' }}>Read More &rarr;</Link>
            </div>
          </div>

          {/* Case Study 3 */}
          <div className={`${styles.bentoCard} ${styles.bentoSpan4}`} style={{ padding: 0 }}>
            <div style={{ width: '100%', height: '250px', position: 'relative', overflow: 'hidden' }}>
              <img src="/images/case-studies/brian.jpg" alt="Dr Brian Keating" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} className="hover-scale" />
            </div>
            <div style={{ padding: '2.5rem' }}>
              <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Dr Brian Keating</h3>
              <p style={{ fontSize: '1rem', color: 'rgba(255, 255, 255, 0.6)', marginBottom: '2rem', lineHeight: '1.6' }}>
                Through our strategic approach, tailored content, and targeted marketing efforts, we helped Brian Keating achieve 615% more views than usual. Our data-driven strategies and optimization techniques were key to this success.
              </p>
              <Link href="/case-study/dr-brian-keating" style={{ color: 'var(--accent-primary)', fontWeight: 'bold', textTransform: 'uppercase', fontSize: '0.9rem', letterSpacing: '0.1em', textDecoration: 'none' }}>Read More &rarr;</Link>
            </div>
          </div>
          
          <style dangerouslySetInnerHTML={{__html: `
            .hover-scale:hover {
              transform: scale(1.05);
            }
          `}} />
      </div>
    </main>
  );
}
