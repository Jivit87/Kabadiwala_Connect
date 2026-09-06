import React from 'react';
import { ArrowLeft } from 'lucide-react';

export default function NotificationView({ t, onNext, onBack }) {
  return (
    <div className="notification-screen page-fade-enter">
      {/* Top Navigation */}
      <div className="top-nav-bar">
        {onBack && (
          <button className="back-arrow-btn" onClick={onBack} aria-label="Go Back">
            <ArrowLeft size={20} color="#1C522D" />
          </button>
        )}
      </div>

      {/* Hero Illustration */}
      <div className="notification-hero-container">
        <img 
          src="/assets/Kabadiwala_Connect_Notification_UI_Asset_Pack/illustrations/notification_permission_hero_transparent.png" 
          alt="Notification Permission Hero" 
          className="notification-hero-img"
        />
      </div>

      {/* Main Content */}
      <div className="notification-content">
        <h1 className="notification-title">{t.allowNotificationsTitle}</h1>

        {/* Bullet List */}
        <div className="notification-bullets-list">
          <div className="bullet-item">
            <div className="bullet-icon-wrapper">
              <img 
                src="/assets/Kabadiwala_Connect_Notification_UI_Asset_Pack/icons/notif_partner_badge.png" 
                alt="Partner Updates" 
              />
            </div>
            <div className="bullet-text">
              <div className="bullet-title">{t.realtimePartnerUpdates}</div>
              <div className="bullet-desc">{t.realtimePartnerUpdatesDesc}</div>
            </div>
          </div>

          <div className="bullet-item">
            <div className="bullet-icon-wrapper">
              <img 
                src="/assets/Kabadiwala_Connect_Notification_UI_Asset_Pack/icons/notif_offers_badge.png" 
                alt="Offers & News" 
              />
            </div>
            <div className="bullet-text">
              <div className="bullet-title">{t.offersAndNews}</div>
              <div className="bullet-desc">{t.offersAndNewsDesc}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="notification-actions">
        <button className="primary-button notif-primary-btn" onClick={onNext}>
          <span>{t.allowPermission}</span>
        </button>

        <button className="secondary-button notif-secondary-btn" onClick={onNext}>
          <span>{t.maybeLater}</span>
        </button>
      </div>

      <style>{`
        .notification-screen {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 16px 20px 24px 20px;
          height: 100%;
          background-color: var(--surface-warm);
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
        }

        .top-nav-bar {
          width: 100%;
          display: flex;
          align-items: center;
          height: 40px;
        }

        .notification-hero-container {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 4px;
          margin-bottom: 16px;
        }

        .notification-hero-img {
          max-width: 90%;
          height: auto;
          max-height: 220px;
          object-fit: contain;
        }

        .notification-content {
          width: 100%;
        }

        .notification-title {
          font-size: 26px;
          font-weight: 800;
          color: var(--brand-dark-text);
          margin-bottom: 24px;
          line-height: 1.25;
        }

        .notification-bullets-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
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
          background: transparent;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .bullet-icon-wrapper img {
          width: 44px;
          height: 44px;
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

        .notification-actions {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-top: auto;
          padding-top: 16px;
        }

        .notif-primary-btn {
          height: 56px;
          border-radius: 22px;
          background-color: var(--brand-deep-green);
          box-shadow: 0 6px 16px rgba(28, 82, 45, 0.25);
        }

        .notif-secondary-btn {
          height: 56px;
          border-radius: 22px;
          background-color: var(--white);
          border: 1.5px solid var(--brand-green);
          color: var(--brand-deep-green);
        }
      `}</style>
    </div>
  );
}
