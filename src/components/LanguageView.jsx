import React from 'react';
import { ArrowLeft } from 'lucide-react';

export default function LanguageView({ t, currentLang, setLanguage, onNext, onBack }) {
  const languages = [
    { code: 'en', name: 'English', icon: 'Aa' },
    { code: 'hi', name: 'हिंदी', icon: 'आ' },
    { code: 'mr', name: 'मराठी', icon: 'म' }
  ];

  return (
    <div className="language-screen page-fade-enter">
      {/* Header Bar */}
      <div className="top-nav-bar">
        {onBack && (
          <button className="back-arrow-btn" onClick={onBack} aria-label="Go Back">
            <ArrowLeft size={20} color="#1C522D" />
          </button>
        )}
      </div>

      <div className="language-container">
        <h1 className="language-title">{t.chooseLanguage}</h1>

        <div className="language-list">
          {languages.map((lang) => {
            const isSelected = currentLang === lang.code;
            return (
              <div 
                key={lang.code}
                className={`language-card ${isSelected ? 'selected' : ''}`}
                onClick={() => setLanguage(lang.code)}
              >
                <div className="language-card-left">
                  <div className="lang-icon-badge">
                    {lang.icon}
                  </div>
                  <span className="lang-name">{lang.name}</span>
                </div>

                <div className={`radio-circle ${isSelected ? 'active' : ''}`}>
                  {isSelected && <div className="radio-inner-dot" />}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="language-footer">
        <button className="primary-button continue-btn" onClick={onNext}>
          {t.continue}
        </button>
      </div>

      <style>{`
        .language-screen {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 16px 24px 32px 24px;
          height: 100%;
          background-color: var(--surface-warm);
        }

        .top-nav-bar {
          width: 100%;
          display: flex;
          align-items: center;
          height: 40px;
        }

        .language-container {
          flex: 1;
          display: flex;
          flex-direction: column;
          margin-top: 16px;
        }

        .language-title {
          font-size: 28px;
          font-weight: 800;
          color: var(--brand-dark-text);
          margin-bottom: 32px;
          text-align: center;
        }

        .language-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
          width: 100%;
        }

        .language-card {
          width: 100%;
          height: 72px;
          background: var(--white);
          border: 1.5px solid var(--border-soft);
          border-radius: var(--radius-card);
          padding: 0 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .language-card:hover {
          border-color: var(--brand-green);
        }

        .language-card.selected {
          background-color: #EEF4EA;
          border: 2px solid var(--brand-green);
          box-shadow: 0 2px 10px rgba(83, 138, 70, 0.12);
        }

        .language-card-left {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .lang-icon-badge {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: #E1E5CE;
          color: var(--brand-deep-green);
          font-size: 18px;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .language-card.selected .lang-icon-badge {
          background: var(--brand-green);
          color: white;
        }

        .lang-name {
          font-size: 18px;
          font-weight: 600;
          color: var(--text-primary);
        }

        .radio-circle {
          width: 26px;
          height: 26px;
          border-radius: 50%;
          border: 2px solid #C4C9C2;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
        }

        .radio-circle.active {
          border-color: var(--brand-green);
        }

        .radio-inner-dot {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background-color: var(--brand-green);
        }

        .language-footer {
          width: 100%;
          margin-top: auto;
        }

        .continue-btn {
          height: 56px;
          border-radius: 22px;
          background-color: var(--brand-deep-green);
          box-shadow: 0 6px 16px rgba(28, 82, 45, 0.25);
        }
      `}</style>
    </div>
  );
}
