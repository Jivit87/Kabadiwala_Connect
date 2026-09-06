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
          alt="E-waste Collection & Delivery Illustration" 
          className="hero-illustration-img"
        />
      </div>

      {/* Main Content Section */}
      <div className="splash-content-section">
        <h1 className="splash-headline">{t.headline}</h1>
        <p className="splash-subheadline">{t.subheadline}</p>

        {/* Primary CTA */}
        <button className="primary-button splash-cta-btn" onClick={onNext}>
          <span>{t.getStarted}</span>
          <ArrowRight size={20} />
        </button>

        {/* Feature Badges Grid */}
        <div className="feature-badges-grid">
          <div className="feature-badge-item">
            <div className="feature-icon-wrapper">
              <img 
                src="/assets/Kabadiwala_Connect_UI_Asset_Pack(1)/app/icon_better_prices_transparent.png" 
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
                src="/assets/Kabadiwala_Connect_UI_Asset_Pack(1)/app/icon_easy_pickups_transparent.png" 
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
                src="/assets/Kabadiwala_Connect_UI_Asset_Pack(1)/app/icon_safe_trusted_transparent.png" 
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
          padding: 10px 20px 24px 20px;
          min-height: 100%;
          justify-content: space-between;
          background-color: var(--surface-warm);
        }

        .splash-header {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 4px;
          margin-bottom: 12px;
        }

        .brand-logo-img {
          height: 64px;
          object-fit: contain;
        }

        .splash-hero-container {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 16px;
        }

        .hero-illustration-img {
          max-width: 92%;
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
          font-size: 26px;
          font-weight: 800;
          color: var(--brand-deep-green);
          margin-bottom: 8px;
          letter-spacing: -0.3px;
        }

        .splash-subheadline {
          font-size: 14px;
          color: var(--text-secondary);
          max-width: 320px;
          line-height: 1.45;
          margin-bottom: 24px;
        }

        .splash-cta-btn {
          margin-bottom: 24px;
        }

        .feature-badges-grid {
          width: 100%;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 8px;
          margin-top: 4px;
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
          background: #E1E5CE;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 8px;
        }

        .feature-icon-wrapper img {
          width: 28px;
          height: 28px;
          object-fit: contain;
        }

        .feature-title {
          font-size: 13px;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 2px;
        }

        .feature-desc {
          font-size: 11px;
          color: var(--text-secondary);
          line-height: 1.25;
        }
      `}</style>
    </div>
  );
}
