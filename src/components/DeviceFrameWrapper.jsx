import React, { useState, useEffect, useRef } from 'react';
import { Smartphone, Monitor, Layers, Wifi, BatteryCharging } from 'lucide-react';
import { haptics } from '../utils/haptics';

const SCREEN_ORDER = ['splash', 'language', 'auth', 'location', 'notification', 'home', 'book_pickup', 'step1_photo', 'step1_hazardous_battery_detected', 'step2_category', 'safety_tips', 'step3_weight', 'step4_value', 'step5_buyer', 'payment', 'receipt', 'todays_prices', 'my_earnings', 'history', 'sync_status', 'profile'];

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

  const iconColor = light ? '#FFFFFF' : '#101A24';

  return (
    <div
      className={`status-bar ${light ? 'status-bar-light' : 'status-bar-dark'}`}
      style={{ background }}
    >
      <div className="status-bar-left">
        <span className="time-display">{time}</span>
        <span className="carrier-badge">Jio 5G</span>
      </div>

      <div className="dynamic-island">
        <div className="island-camera-dot" />
      </div>

      <div className="status-bar-icons">
        {/* Cellular signal bars */}
        <svg width="17" height="11" viewBox="0 0 17 11" fill="none">
          <rect x="0" y="7" width="2.8" height="4" rx="0.8" fill={iconColor} />
          <rect x="4.5" y="5" width="2.8" height="6" rx="0.8" fill={iconColor} />
          <rect x="9" y="2.5" width="2.8" height="8.5" rx="0.8" fill={iconColor} />
          <rect x="13.5" y="0" width="2.8" height="11" rx="0.8" fill={iconColor} />
        </svg>
        <Wifi size={13} color={iconColor} strokeWidth={2.6} />
        {/* Battery with percentage & level */}
        <div className="battery-level-wrap">
          <span className="battery-pct-text">92%</span>
          <svg width="24" height="12" viewBox="0 0 24 12" fill="none">
            <rect x="0.75" y="0.75" width="19" height="10.5" rx="3" stroke={iconColor} strokeOpacity="0.4" strokeWidth="1" />
            <rect x="2" y="2" width="15" height="8" rx="2" fill={light ? '#4ADE80' : '#0B6B4A'} />
            <path d="M21.5 4V8C22.2 7.6 22.6 6.8 22.6 6C22.6 5.2 22.2 4.4 21.5 4Z" fill={iconColor} fillOpacity="0.4" />
          </svg>
        </div>
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
  const [isNarrowViewport, setIsNarrowViewport] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.innerWidth <= 768 || window.matchMedia('(max-width: 768px)').matches;
  });
  // null = no manual override yet; follow the viewport (real phone → fullscreen automatically)
  const [manualFullScreen, setManualFullScreen] = useState(null);
  const isFullScreen = manualFullScreen !== null ? manualFullScreen : isNarrowViewport;
  const [direction, setDirection] = useState('forward');
  const prevScreenRef = useRef(currentScreen);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    const handleViewportChange = (e) => {
      const narrow = e.matches !== undefined ? e.matches : window.innerWidth <= 768;
      setIsNarrowViewport(narrow);
      // Reset manual override if transitioning across major viewport thresholds
      if (narrow) {
        setManualFullScreen(null);
      }
    };

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleViewportChange);
    } else {
      mediaQuery.addListener(handleViewportChange);
    }

    window.addEventListener('resize', handleViewportChange);
    window.addEventListener('orientationchange', handleViewportChange);

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', handleViewportChange);
      } else {
        mediaQuery.removeListener(handleViewportChange);
      }
      window.removeEventListener('resize', handleViewportChange);
      window.removeEventListener('orientationchange', handleViewportChange);
    };
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
    { id: 'home', label: '6. Home' },
    { id: 'book_pickup', label: '7. Book Pickup' },
    { id: 'step1_photo', label: '8. Step 1: Photo' },
    { id: 'step1_hazardous_battery_detected', label: '9. AI Hazard Alert' },
    { id: 'step2_category', label: '10. Step 2: Category' },
    { id: 'safety_tips', label: '11. Safety Tips' },
    { id: 'step3_weight', label: '12. Step 3: Weight' },
    { id: 'step4_value', label: '13. Step 4: Value' },
    { id: 'step5_buyer', label: '14. Step 5: Buyer' },
    { id: 'payment', label: '15. Payment' },
    { id: 'receipt', label: '16. Receipt' },
    { id: 'todays_prices', label: "17. Today's Prices" },
    { id: 'my_earnings', label: '18. My Earnings' },
    { id: 'history', label: '19. History' },
    { id: 'sync_status', label: '20. Sync Status' },
    { id: 'profile', label: '21. Profile' }
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

        .status-bar-left {
          display: flex;
          align-items: center;
          gap: 7px;
        }

        .carrier-badge {
          font-size: 10px;
          font-weight: 700;
          opacity: 0.75;
          letter-spacing: 0.1px;
        }

        .battery-level-wrap {
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .battery-pct-text {
          font-size: 11px;
          font-weight: 800;
          letter-spacing: -0.2px;
        }

        .dynamic-island {
          position: absolute;
          top: 10px;
          left: 50%;
          transform: translateX(-50%);
          width: 105px;
          height: 26px;
          background: #000000;
          border-radius: 16px;
          z-index: 60;
          pointer-events: none;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          padding-right: 12px;
        }

        .island-camera-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #1A1A1A;
          border: 1.5px solid #0D0D0D;
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

        /* Fullscreen mode & Mobile Media Query */
        .fullscreen-active .control-toolbar,
        .fullscreen-active .stepper-nav-bar {
          display: none !important;
        }

        .fullscreen-active {
          padding: 0 !important;
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

        /* Pure Native Mobile Viewport (<= 768px) */
        @media (max-width: 768px) {
          .control-toolbar,
          .stepper-nav-bar,
          .exit-fullscreen-btn {
            display: none !important;
          }

          .app-viewport-wrapper {
            padding: 0 !important;
            margin: 0 !important;
            width: 100% !important;
            max-width: 100% !important;
            height: 100% !important;
            min-height: 100dvh !important;
            background-color: var(--surface-warm) !important;
            justify-content: flex-start !important;
          }

          .phone-frame {
            width: 100% !important;
            max-width: 100% !important;
            height: 100dvh !important;
            min-height: 100dvh !important;
            border-radius: 0 !important;
            border: none !important;
            box-shadow: none !important;
            margin: 0 !important;
            background: var(--surface-warm) !important;
          }

          .dynamic-island {
            display: none !important;
          }

          .phone-home-indicator {
            display: none !important;
          }

          .status-bar {
            padding-top: env(safe-area-inset-top, 0px) !important;
            height: calc(44px + env(safe-area-inset-top, 0px)) !important;
            padding-left: max(16px, env(safe-area-inset-left, 16px)) !important;
            padding-right: max(16px, env(safe-area-inset-right, 16px)) !important;
          }

          .screen-container {
            width: 100% !important;
            height: 100% !important;
            flex: 1 !important;
          }
        }
      `}</style>
    </div>
  );
}
