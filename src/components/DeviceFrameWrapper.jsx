import React, { useState, useEffect, useRef } from 'react';
import { Smartphone, Monitor, Layers, Wifi } from 'lucide-react';

const SCREEN_ORDER = ['splash', 'language', 'auth', 'location', 'notification', 'home'];

function StatusBar({ light, background }) {
  const [time, setTime] = useState(() => formatTime(new Date()));

  useEffect(() => {
    const id = setInterval(() => setTime(formatTime(new Date())), 15000);
    return () => clearInterval(id);
  }, []);

  function formatTime(d) {
    let h = d.getHours();
    const m = d.getMinutes();
    h = h % 12;
    if (h === 0) h = 12;
    return `${h}:${m.toString().padStart(2, '0')}`;
  }

  const iconColor = light ? '#FFFFFF' : 'var(--brand-dark-text)';

  return (
    <div
      className={`status-bar ${light ? 'status-bar-light' : 'status-bar-dark'}`}
      style={{ background }}
    >
      <span className="time-display">{time}</span>
      <div className="dynamic-island" />
      <div className="status-bar-icons">
        {/* Cellular signal bars */}
        <svg width="18" height="12" viewBox="0 0 18 12" fill="none">
          <rect x="0" y="7" width="3" height="5" rx="0.8" fill={iconColor} />
          <rect x="5" y="5" width="3" height="7" rx="0.8" fill={iconColor} />
          <rect x="10" y="3" width="3" height="9" rx="0.8" fill={iconColor} />
          <rect x="15" y="0" width="3" height="12" rx="0.8" fill={iconColor} />
        </svg>
        <Wifi size={14} color={iconColor} strokeWidth={2.5} />
        {/* Battery with fill */}
        <svg width="25" height="13" viewBox="0 0 25 13" fill="none">
          <rect x="0.75" y="0.75" width="20" height="11.5" rx="3.25" stroke={iconColor} strokeOpacity="0.4" strokeWidth="1" />
          <rect x="2.25" y="2.25" width="16" height="8.5" rx="2" fill={iconColor} />
          <path d="M22.5 4.5V8.5C23.3 8.1 23.8 7.3 23.8 6.5C23.8 5.7 23.3 4.9 22.5 4.5Z" fill={iconColor} fillOpacity="0.4" />
        </svg>
      </div>
    </div>
  );
}

export default function DeviceFrameWrapper({
  currentScreen,
  setCurrentScreen,
  currentLang,
  setLanguage,
  children
}) {
  const [isNarrowViewport, setIsNarrowViewport] = useState(
    () => typeof window !== 'undefined' && window.innerWidth <= 520
  );
  // null = no manual override yet; follow the viewport (real phone → fullscreen automatically)
  const [manualFullScreen, setManualFullScreen] = useState(null);
  const isFullScreen = manualFullScreen !== null ? manualFullScreen : isNarrowViewport;
  const [direction, setDirection] = useState('forward');
  const prevScreenRef = useRef(currentScreen);

  useEffect(() => {
    const onResize = () => setIsNarrowViewport(window.innerWidth <= 520);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    const prevIndex = SCREEN_ORDER.indexOf(prevScreenRef.current);
    const nextIndex = SCREEN_ORDER.indexOf(currentScreen);
    setDirection(nextIndex >= prevIndex ? 'forward' : 'backward');
    prevScreenRef.current = currentScreen;
  }, [currentScreen]);

  const screens = [
    { id: 'splash', label: '1. Splash' },
    { id: 'language', label: '2. Language' },
    { id: 'auth', label: '3. Mobile & OTP' },
    { id: 'location', label: '4. Location' },
    { id: 'notification', label: '5. Notifications' },
    { id: 'home', label: '6. Home' }
  ];

  const isDarkHeaderScreen = currentScreen === 'home';

  return (
    <div className={`app-viewport-wrapper ${isFullScreen ? 'fullscreen-active' : ''}`}>
      {/* Top Prototype Toolbar */}
      <div className="control-toolbar">
        <div className="toolbar-brand">
          <Layers size={18} color="#CAE0B8" />
          <span>Kabadiwala Connect Prototype</span>
        </div>

        <div className="toolbar-controls">
          <button
            className={`btn-icon-toggle ${!isFullScreen ? 'active' : ''}`}
            onClick={() => setManualFullScreen(false)}
            title="Mobile Frame View"
          >
            <Smartphone size={14} />
            <span>Phone</span>
          </button>
          <button
            className={`btn-icon-toggle ${isFullScreen ? 'active' : ''}`}
            onClick={() => setManualFullScreen(true)}
            title="Full Screen View"
          >
            <Monitor size={14} />
            <span>Full</span>
          </button>

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
        <StatusBar
          light={isDarkHeaderScreen}
          background={isDarkHeaderScreen ? 'linear-gradient(180deg, #174826 0%, #1C522D 100%)' : 'transparent'}
        />

        {/* Dynamic Screen Content — direction-aware push transition */}
        <div
          key={currentScreen}
          className="screen-container"
          data-direction={direction}
        >
          {children}
        </div>

        {/* iPhone Home Bar Indicator — every screen's bottom chrome (including Home's
            white tab bar) is light, so the indicator is always the dark variant. */}
        <div className="phone-home-indicator" />
      </div>

      {/* Floating exit affordance — only relevant when a desktop user manually forced
          fullscreen; on a real phone viewport, fullscreen IS the natural state so there's
          nothing to "exit" to, and this would only clutter the status bar. */}
      {isFullScreen && !isNarrowViewport && (
        <button
          className="exit-fullscreen-btn"
          onClick={() => setManualFullScreen(false)}
          title="Exit Full Screen"
          aria-label="Exit Full Screen"
        >
          <Smartphone size={14} />
        </button>
      )}

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
          flex-wrap: wrap;
          justify-content: center;
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

        /* Status Bar */
        .status-bar {
          width: 100%;
          height: 48px;
          padding: 0 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 15px;
          font-weight: 700;
          letter-spacing: -0.2px;
          z-index: 55;
          flex-shrink: 0;
          background: transparent;
          position: relative;
          transition: color 0.3s ease, background 0.3s ease;
        }

        .status-bar-dark {
          color: var(--brand-dark-text);
        }

        .status-bar-light {
          color: #FFFFFF;
        }

        .status-bar-icons {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .dynamic-island {
          position: absolute;
          top: 10px;
          left: 50%;
          transform: translateX(-50%);
          width: 100px;
          height: 26px;
          background: #000000;
          border-radius: 16px;
          z-index: 60;
          pointer-events: none;
        }

        .full-screen-mode .dynamic-island {
          top: max(10px, env(safe-area-inset-top, 10px));
        }

        /* Mobile Phone Shell */
        .phone-frame {
          width: 100%;
          max-width: 390px;
          height: 844px;
          background: var(--surface-warm);
          border-radius: 44px;
          box-shadow: var(--elevation-device);
          border: 10px solid #2B332E;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: max-width 0.3s ease, height 0.3s ease, border-radius 0.3s ease;
        }

        .phone-frame.full-screen-mode {
          max-width: 100%;
          height: 100vh;
          height: 100dvh;
          border-radius: 0;
          border: none;
          box-shadow: none;
        }

        .full-screen-mode .status-bar {
          padding-top: env(safe-area-inset-top, 0px);
          height: calc(48px + env(safe-area-inset-top, 0px));
        }

        /* Dynamic Screen Viewport Area */
        .screen-container {
          flex: 1;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          position: relative;
          background-color: var(--surface-warm);
          scrollbar-width: none;
          -ms-overflow-style: none;
        }

        .screen-container::-webkit-scrollbar {
          display: none;
        }

        .screen-container[data-direction="forward"] {
          animation: slideInFromRight 0.32s cubic-bezier(0.32, 0.72, 0, 1) both;
        }

        .screen-container[data-direction="backward"] {
          animation: slideInFromLeft 0.32s cubic-bezier(0.32, 0.72, 0, 1) both;
        }

        @keyframes slideInFromRight {
          from { transform: translateX(28%); opacity: 0.4; }
          to { transform: translateX(0); opacity: 1; }
        }

        @keyframes slideInFromLeft {
          from { transform: translateX(-28%); opacity: 0.4; }
          to { transform: translateX(0); opacity: 1; }
        }

        /* Bottom Bar Indicator */
        .phone-home-indicator {
          width: 134px;
          height: 5px;
          background-color: #1B1B1B;
          border-radius: 100px;
          position: absolute;
          bottom: 8px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 60;
          transition: background-color 0.3s ease;
        }

        .full-screen-mode .phone-home-indicator {
          bottom: max(8px, env(safe-area-inset-bottom, 8px));
        }

        /* Fullscreen mode: hide prototype chrome, let the app fill the real viewport */
        .fullscreen-active .control-toolbar,
        .fullscreen-active .stepper-nav-bar {
          display: none;
        }

        .fullscreen-active {
          padding: 0;
        }

        .exit-fullscreen-btn {
          position: fixed;
          top: max(14px, env(safe-area-inset-top, 14px));
          right: 14px;
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: rgba(0, 0, 0, 0.35);
          backdrop-filter: blur(6px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 200;
          opacity: 0.55;
          transition: opacity 0.2s ease;
        }

        .exit-fullscreen-btn:hover,
        .exit-fullscreen-btn:active {
          opacity: 1;
        }
      `}</style>
    </div>
  );
}
