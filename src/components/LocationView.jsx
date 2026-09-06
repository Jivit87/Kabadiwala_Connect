import React from 'react';
import { ArrowLeft } from 'lucide-react';

export default function LocationView({ t, onNext, onBack }) {
  return (
    <div className="location-screen page-fade-enter">
      {/* Top Navigation */}
      <div className="top-nav-bar">
        {onBack && (
          <button className="back-arrow-btn" onClick={onBack} aria-label="Go Back">
            <ArrowLeft size={20} color="#1C522D" />
          </button>
        )}
      </div>

      {/* Hero Illustration */}
      <div className="location-hero-container">
        <img 
          src="/assets/Kabadiwala_Connect_Location_UI_Asset_Pack/illustrations/location_map_hero_transparent.png" 
          alt="Map Location Hero" 
          className="location-hero-img"
        />
      </div>

      {/* Main Content */}
      <div className="location-content">
        <h1 className="location-title">{t.whatsYourLocation}</h1>
        <p className="location-subtitle">{t.locationSubtitle}</p>

        {/* Feature Bullets List */}
        <div className="location-bullets-list">
          <div className="bullet-item">
            <div className="bullet-icon-wrapper">
              <img 
                src="/assets/Kabadiwala_Connect_Location_UI_Asset_Pack/icons/find_nearby_transparent.png" 
                alt="Find Nearby" 
              />
            </div>
            <div className="bullet-text">
              <div className="bullet-title">{t.findNearbyPartners}</div>
              <div className="bullet-desc">{t.findNearbyPartnersDesc}</div>
            </div>
          </div>

          <div className="bullet-item">
            <div className="bullet-icon-wrapper">
              <img 
                src="/assets/Kabadiwala_Connect_Location_UI_Asset_Pack/icons/faster_pickups_transparent.png" 
                alt="Faster Pickups" 
              />
            </div>
            <div className="bullet-text">
              <div className="bullet-title">{t.fasterPickups}</div>
              <div className="bullet-desc">{t.fasterPickupsDesc}</div>
            </div>
          </div>

          <div className="bullet-item">
            <div className="bullet-icon-wrapper">
              <img 
                src="/assets/Kabadiwala_Connect_Location_UI_Asset_Pack/icons/secure_private_transparent.png" 
                alt="Secure & Private" 
              />
            </div>
            <div className="bullet-text">
              <div className="bullet-title">{t.securePrivate}</div>
              <div className="bullet-desc">{t.securePrivateDesc}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="location-actions">
        <button className="primary-button loc-primary-btn" onClick={onNext}>
          <img 
            src="/assets/Kabadiwala_Connect_Location_UI_Asset_Pack/icons/current_location_transparent.png" 
            alt="Current Location" 
            className="btn-icon-img"
          />
          <span>{t.useCurrentLocation}</span>
        </button>

        <button className="secondary-button loc-secondary-btn" onClick={onNext}>
          <img 
            src="/assets/Kabadiwala_Connect_Location_UI_Asset_Pack/icons/search_location_transparent.png" 
            alt="Search Location" 
            className="btn-icon-img"
          />
          <span>{t.searchLocationManually}</span>
        </button>
      </div>

      <style>{`
        .location-screen {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 16px 20px 24px 20px;
          height: 100%;
          background-color: var(--surface-warm);
        }

        .top-nav-bar {
          width: 100%;
          display: flex;
          align-items: center;
          height: 40px;
        }

        .location-hero-container {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 4px;
          margin-bottom: 12px;
        }

        .location-hero-img {
          max-width: 90%;
          height: auto;
          max-height: 210px;
          object-fit: contain;
        }

        .location-content {
          width: 100%;
        }

        .location-title {
          font-size: 26px;
          font-weight: 800;
          color: var(--brand-dark-text);
          margin-bottom: 6px;
          line-height: 1.25;
        }

        .location-subtitle {
          font-size: 14px;
          color: var(--text-secondary);
          line-height: 1.45;
          margin-bottom: 24px;
        }

        .location-bullets-list {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .bullet-item {
          display: flex;
          align-items: flex-start;
          gap: 14px;
        }

        .bullet-icon-wrapper {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: #E1E5CE;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .bullet-icon-wrapper img {
          width: 24px;
          height: 24px;
          object-fit: contain;
        }

        .bullet-title {
          font-size: 15px;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 2px;
        }

        .bullet-desc {
          font-size: 13px;
          color: var(--text-secondary);
          line-height: 1.35;
        }

        .location-actions {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-top: auto;
          padding-top: 16px;
        }

        .btn-icon-img {
          width: 20px;
          height: 20px;
          object-fit: contain;
        }

        .loc-primary-btn {
          background-color: var(--brand-deep-green);
        }

        .loc-secondary-btn {
          background-color: var(--white);
          border: 1.5px solid var(--brand-green);
          color: var(--brand-deep-green);
        }
      `}</style>
    </div>
  );
}
