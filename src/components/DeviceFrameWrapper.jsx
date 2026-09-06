import React, { useState } from 'react';
import { Smartphone, Monitor, Globe, Layers, Wifi, Battery, Signal } from 'lucide-react';

export default function DeviceFrameWrapper({ 
  currentScreen, 
  setCurrentScreen, 
  currentLang, 
  setLanguage, 
  children 
}) {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const screens = [
    { id: 'splash', label: '1. Splash' },
    { id: 'language', label: '2. Language' },
    { id: 'auth', label: '3. Mobile & OTP' },
    { id: 'location', label: '4. Location' },
    { id: 'notification', label: '5. Notifications' }
  ];

  return (
    <div className="app-viewport-wrapper">
      {/* Top Prototype Toolbar */}
      <div className="control-toolbar">
        <div className="toolbar-brand">
          <Layers size={18} color="#CAE0B8" />
          <span>Kabadiwala Connect Prototype</span>
        </div>

        <div className="toolbar-controls">
          {/* Viewport Mode Toggle */}
          <button 
            className={`btn-icon-toggle ${!isFullScreen ? 'active' : ''}`}
            onClick={() => setIsFullScreen(false)}
            title="Mobile Frame View"
          >
            <Smartphone size={14} />
            <span>Phone</span>
          </button>
          <button 
            className={`btn-icon-toggle ${isFullScreen ? 'active' : ''}`}
            onClick={() => setIsFullScreen(true)}
            title="Full Screen View"
          >
            <Monitor size={14} />
            <span>Full</span>
          </button>

          {/* Quick Language Toggle */}
          <div className="lang-quick-group">
            {['en', 'hi', 'mr'].map((l) => (
              <button 
                key={l}
                className={`lang-chip ${currentLang === l ? 'active' : ''}`}
                onClick={() => setLanguage(l)}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Screen Navigation Stepper Bar */}
      <div className="stepper-nav-bar">
        {screens.map((s) => (
          <button 
            key={s.id}
            className={`stepper-btn ${currentScreen === s.id ? 'active' : ''}`}
            onClick={() => setCurrentScreen(s.id)}
          >
            {s.label}
          </button>
        ))}
      </div>

      {/* Mobile Device Frame */}
      <div className={`phone-frame ${isFullScreen ? 'full-screen-mode' : ''}`}>
        {/* Status Bar */}
        <div className="status-bar">
          <span className="time-display">9:41</span>
          <div className="status-bar-icons">
            <Signal size={14} />
            <Wifi size={14} />
            <Battery size={16} />
          </div>
        </div>

        {/* Dynamic Screen Content */}
        <div className="screen-container">
          {children}
        </div>

        {/* iPhone Home Bar Indicator */}
        {!isFullScreen && <div className="phone-home-indicator" />}
      </div>

      <style>{`
        .stepper-nav-bar {
          display: flex;
          gap: 8px;
          margin-bottom: 16px;
          background: rgba(0, 0, 0, 0.4);
          padding: 6px 12px;
          border-radius: 20px;
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .stepper-btn {
          background: transparent;
          border: none;
          color: #A0AAB2;
          font-size: 12px;
          font-weight: 600;
          padding: 4px 10px;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .stepper-btn.active, .stepper-btn:hover {
          background: rgba(255, 255, 255, 0.15);
          color: white;
        }

        .stepper-btn.active {
          color: #CAE0B8;
          font-weight: 700;
        }

        .lang-quick-group {
          display: flex;
          background: rgba(0, 0, 0, 0.25);
          border-radius: 14px;
          padding: 2px;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .lang-chip {
          background: transparent;
          border: none;
          color: #A0AAB2;
          font-size: 10px;
          font-weight: 700;
          padding: 3px 8px;
          border-radius: 10px;
          cursor: pointer;
        }

        .lang-chip.active {
          background: var(--brand-green);
          color: white;
        }
      `}</style>
    </div>
  );
}
