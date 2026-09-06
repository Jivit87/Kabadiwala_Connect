import React, { useState } from 'react';
import { ChevronDown, Delete, ArrowLeft } from 'lucide-react';

export default function AuthView({ t, onSkip, onAuthenticated, onBack }) {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [step, setStep] = useState('phone'); // 'phone' | 'otp'
  const [otpCode, setOtpCode] = useState(['', '', '', '']);

  const handleHeaderBack = () => {
    if (step === 'otp') {
      setStep('phone');
    } else if (onBack) {
      onBack();
    }
  };

  // Handle custom numeric keypad press
  const handleKeyPress = (val) => {
    if (step === 'phone') {
      if (val === 'backspace') {
        setPhoneNumber(prev => prev.slice(0, -1));
      } else if (phoneNumber.length < 10) {
        setPhoneNumber(prev => prev + val);
      }
    } else {
      if (val === 'backspace') {
        const nextOtp = [...otpCode];
        for (let i = 3; i >= 0; i--) {
          if (nextOtp[i] !== '') {
            nextOtp[i] = '';
            break;
          }
        }
        setOtpCode(nextOtp);
      } else {
        const nextOtp = [...otpCode];
        for (let i = 0; i < 4; i++) {
          if (nextOtp[i] === '') {
            nextOtp[i] = val;
            break;
          }
        }
        setOtpCode(nextOtp);
      }
    }
  };

  const handleContinue = () => {
    if (step === 'phone') {
      if (phoneNumber.length < 10) {
        setPhoneNumber('9876543210');
      }
      setStep('otp');
    } else {
      onAuthenticated({ phone: phoneNumber || '9876543210' });
    }
  };

  const keypadKeys = [
    { num: '1', sub: '' },
    { num: '2', sub: 'ABC' },
    { num: '3', sub: 'DEF' },
    { num: '4', sub: 'GHI' },
    { num: '5', sub: 'JKL' },
    { num: '6', sub: 'MNO' },
    { num: '7', sub: 'PQRS' },
    { num: '8', sub: 'TUV' },
    { num: '9', sub: 'WXYZ' },
    { num: '', sub: '' },
    { num: '0', sub: '' },
    { num: 'backspace', sub: '' }
  ];

  return (
    <div className="auth-screen page-fade-enter">
      {/* Top Header */}
      <div className="auth-header">
        <button className="back-arrow-btn" onClick={handleHeaderBack} aria-label="Go Back">
          <ArrowLeft size={20} color="#1C522D" />
        </button>
        <button className="skip-pill" onClick={onSkip}>
          {t.skip}
        </button>
      </div>

      {/* Form Content */}
      <div className="auth-body">
        {step === 'phone' ? (
          <>
            <h1 className="auth-title">{t.enterMobile}</h1>
            <p className="auth-subtitle">{t.otpSubtitle}</p>

            {/* Mobile Input Field */}
            <div className={`phone-input-box ${phoneNumber ? 'has-value' : ''}`}>
              <div className="country-code">
                <span>+91</span>
                <ChevronDown size={16} color="#538A46" />
              </div>
              <div className="input-divider"></div>
              <div className="phone-display-value">
                {phoneNumber || <span className="placeholder">{t.mobilePlaceholder}</span>}
              </div>
            </div>

            <button className="primary-button continue-btn" onClick={handleContinue}>
              {t.continue}
            </button>

            <p className="terms-disclaimer">
              {t.termsText} <a href="#terms">{t.termsOfService}</a>,{' '}
              <a href="#privacy">{t.privacyPolicy}</a> and <a href="#content">{t.contentPolicy}</a>.
            </p>
          </>
        ) : (
          <>
            <h1 className="auth-title">{t.verifyOtpTitle}</h1>
            <p className="auth-subtitle">
              {t.verifyOtpSubtitle} <strong>+91 {phoneNumber || '9876543210'}</strong>
            </p>

            {/* 4-digit OTP Box */}
            <div className="otp-input-container">
              {[0, 1, 2, 3].map((idx) => (
                <div key={idx} className={`otp-box ${otpCode[idx] ? 'filled' : ''}`}>
                  {otpCode[idx] || (idx === otpCode.findIndex(c => c === '') ? '|' : '')}
                </div>
              ))}
            </div>

            <button className="primary-button continue-btn" onClick={handleContinue}>
              {t.verify}
            </button>

            <div className="resend-otp-link" onClick={() => setOtpCode(['1', '2', '3', '4'])}>
              {t.resendOtp} (Tap to Auto-Fill 1234)
            </div>
          </>
        )}
      </div>

      {/* On-Screen Touch Keypad */}
      <div className="custom-keypad">
        {keypadKeys.map((k, index) => {
          if (k.num === '') {
            return <div key={index} className="keypad-cell empty"></div>;
          }
          if (k.num === 'backspace') {
            return (
              <div 
                key={index} 
                className="keypad-cell backspace-cell"
                onClick={() => handleKeyPress('backspace')}
              >
                <Delete size={22} color="#1B1B1B" />
              </div>
            );
          }
          return (
            <div 
              key={index} 
              className="keypad-cell"
              onClick={() => handleKeyPress(k.num)}
            >
              <div className="key-num">{k.num}</div>
              {k.sub && <div className="key-sub">{k.sub}</div>}
            </div>
          );
        })}
      </div>

      <style>{`
        .auth-screen {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 16px 20px 20px 20px;
          height: 100%;
          background-color: var(--surface-warm);
        }

        .auth-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }

        .auth-body {
          flex: 1;
          display: flex;
          flex-direction: column;
          margin-top: 24px;
        }

        .auth-title {
          font-size: 26px;
          font-weight: 800;
          color: var(--brand-deep-green);
          margin-bottom: 8px;
          line-height: 1.2;
        }

        .auth-subtitle {
          font-size: 14px;
          color: var(--text-secondary);
          margin-bottom: 24px;
          line-height: 1.4;
        }

        .phone-input-box {
          width: 100%;
          height: 58px;
          background: var(--white);
          border: 1.5px solid var(--border-soft);
          border-radius: var(--radius-card);
          display: flex;
          align-items: center;
          padding: 0 16px;
          margin-bottom: 20px;
          transition: all 0.2s ease;
        }

        .phone-input-box.has-value {
          border: 2px solid var(--brand-green);
          background-color: #FAFCF8;
        }

        .country-code {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 16px;
          font-weight: 700;
          color: var(--brand-deep-green);
        }

        .input-divider {
          width: 1px;
          height: 24px;
          background-color: #DDE2D7;
          margin: 0 14px;
        }

        .phone-display-value {
          font-size: 18px;
          font-weight: 600;
          color: var(--text-primary);
          letter-spacing: 1px;
        }

        .placeholder {
          color: #9EA39F;
          font-weight: 400;
          letter-spacing: normal;
        }

        .continue-btn {
          height: 56px;
          border-radius: 22px;
          background-color: var(--brand-deep-green);
          margin-bottom: 16px;
          box-shadow: 0 6px 16px rgba(28, 82, 45, 0.25);
        }

        .terms-disclaimer {
          font-size: 12px;
          color: var(--text-secondary);
          line-height: 1.5;
          text-align: left;
        }

        .terms-disclaimer a {
          color: var(--brand-green);
          text-decoration: underline;
          font-weight: 600;
        }

        /* OTP Specific */
        .otp-input-container {
          display: flex;
          justify-content: space-between;
          gap: 12px;
          margin-bottom: 24px;
        }

        .otp-box {
          flex: 1;
          height: 60px;
          background: white;
          border: 1.5px solid var(--border-soft);
          border-radius: var(--radius-card);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          font-weight: 800;
          color: var(--brand-deep-green);
        }

        .otp-box.filled {
          border-color: var(--brand-green);
          background-color: #F4F8F1;
        }

        .resend-otp-link {
          text-align: center;
          font-size: 13px;
          font-weight: 600;
          color: var(--brand-green);
          cursor: pointer;
          margin-top: 4px;
        }

        /* Keypad Styling matching iOS/Android raster in UI_THEME */
        .custom-keypad {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 8px;
          width: 100%;
          margin-top: auto;
          padding-top: 10px;
        }

        .keypad-cell {
          height: 52px;
          background: var(--white);
          border-radius: 10px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          box-shadow: 0 1px 3px rgba(0,0,0,0.08);
          cursor: pointer;
          user-select: none;
          transition: background-color 0.1s ease;
        }

        .keypad-cell:active {
          background-color: #E2E6DE;
        }

        .keypad-cell.empty {
          background: transparent;
          box-shadow: none;
          cursor: default;
        }

        .key-num {
          font-size: 22px;
          font-weight: 600;
          color: #1B1B1B;
          line-height: 1;
        }

        .key-sub {
          font-size: 9px;
          font-weight: 700;
          color: #8E9390;
          margin-top: 2px;
          letter-spacing: 0.5px;
        }

        .backspace-cell {
          background: transparent;
          box-shadow: none;
        }
      `}</style>
    </div>
  );
}
