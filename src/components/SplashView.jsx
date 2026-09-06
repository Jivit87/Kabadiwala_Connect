import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function SplashView({ t, onNext }) {
  return (
    <div className="splash-screen page-fade-enter">
      {/* Brand Header */}
      <div className="splash-header">
        <img 
          src="/assets/Kabadiwala_Connect_UI_Asset_Pack(1)/brand/kc_logo_lockup_transparent.png" 
          alt="Kabadiwala Connect Logo" 
          className="brand-logo-img" 
        />
      </div>

      {/* Hero Illustration */}
      <div className="splash-hero-container">
        <img 
          src="/assets/Kabadiwala_Connect_UI_Asset_Pack(1)/app/splash_hero_illustration_transparent.png" 
          alt="E-waste Collection Illustration" 
          className="hero-illustration-img"
        />
      </div>

      {/* Main Content Section */}
      <div className="splash-content-section">
        <h1 className="splash-headline">{t.headline}</h1>
        <p className="splash-subheadline">
          A smart way to sell e-waste,<br />
          earn better and build a cleaner future.
        </p>

        {/* Primary CTA */}
        <button className="primary-button splash-cta-btn" onClick={onNext}>
          <span>{t.getStarted}</span>
          <ArrowRight size={22} color="#FFFFFF" strokeWidth={2.5} />
        </button>

        {/* Feature Badges Grid */}
        <div className="feature-badges-grid">
          <div className="feature-badge-item">
            <div className="feature-icon-wrapper">
              <img 
                src="/assets/Kabadiwala_Connect_UI_Asset_Pack(1)/app/badge_better_prices.png" 
                alt="Better Prices" 
              />
            </div>
            <div className="feature-badge-text">
              <div className="feature-title">{t.betterPrices}</div>
              <div className="feature-desc">{t.betterPricesDesc}</div>
            </div>
          </div>

          <div className="feature-badge-item">
            <div className="feature-icon-wrapper">
              <img 
                src="/assets/Kabadiwala_Connect_UI_Asset_Pack(1)/app/badge_easy_pickups.png" 
                alt="Easy Pickups" 
              />
            </div>
            <div className="feature-badge-text">
              <div className="feature-title">{t.easyPickups}</div>
              <div className="feature-desc">{t.easyPickupsDesc}</div>
            </div>
          </div>

          <div className="feature-badge-item">
            <div className="feature-icon-wrapper">
              <img 
                src="/assets/Kabadiwala_Connect_UI_Asset_Pack(1)/app/badge_safe_trusted.png" 
                alt="Safe & Trusted" 
              />
            </div>
            <div className="feature-badge-text">
              <div className="feature-title">{t.safeTrusted}</div>
              <div className="feature-desc">{t.safeTrustedDesc}</div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .splash-screen {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 8px 24px 28px 24px;
          height: 100%;
          justify-content: space-between;
          background-color: var(--surface-warm);
        }

        .splash-header {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 4px;
          margin-bottom: 6px;
          width: 100%;
        }

        .brand-logo-img {
          height: 90px;
          max-width: 85%;
          object-fit: contain;
        }

        .splash-hero-container {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 8px;
        }

        .hero-illustration-img {
          width: 100%;
          max-width: 320px;
          height: auto;
          max-height: 220px;
          object-fit: contain;
        }

        .splash-content-section {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .splash-headline {
          font-size: 24px;
          font-weight: 800;
          color: var(--brand-deep-green);
          margin-bottom: 6px;
          letter-spacing: -0.3px;
          white-space: nowrap;
        }

        .splash-subheadline {
          font-size: 13.5px;
          color: var(--text-secondary);
          max-width: 320px;
          line-height: 1.45;
          margin-bottom: 20px;
        }

        .splash-cta-btn {
          height: 56px;
          width: 100%;
          border-radius: 22px;
          background-color: var(--brand-deep-green);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          font-size: 17px;
          font-weight: 700;
          color: #FFFFFF;
          margin-bottom: 22px;
          box-shadow: 0 6px 16px rgba(28, 82, 45, 0.25);
        }

        .feature-badges-grid {
          width: 100%;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
          margin-top: 2px;
        }

        .feature-badge-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .feature-icon-wrapper {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background: transparent;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 8px;
        }

        .feature-icon-wrapper img {
          width: 52px;
          height: 52px;
          object-fit: contain;
        }

        .feature-title {
          font-size: 12.5px;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 3px;
        }

        .feature-desc {
          font-size: 10.5px;
          color: var(--text-secondary);
          line-height: 1.3;
          white-space: pre-line;
        }
      `}</style>
    </div>
  );
}
