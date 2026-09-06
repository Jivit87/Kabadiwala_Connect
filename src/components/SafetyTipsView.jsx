import React, { useState } from 'react';
import { 
  X, Volume2, CheckCircle2, XCircle, ChevronLeft, ChevronRight, 
  Flame, Droplets, ShieldAlert, ArrowLeft, ArrowRight, BatteryCharging
} from 'lucide-react';

export default function SafetyTipsView({
  t,
  onClose,
  onProceed,
  onBack
}) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const tips = [
    {
      id: 1,
      badge: 'Battery Detected',
      title: 'A quick safety tip',
      subtitle: 'Before handing over your battery',
      tipHeading: 'Keep batteries away from heat',
      tipBody: 'Store them in a cool, dry place until pickup. Never expose lithium or lead-acid batteries to direct sunlight or open fire.',
      dos: 'Cool & dry indoor area',
      donts: 'Direct heat & flames',
      audioText: 'A quick safety tip. Please keep batteries away from heat. Store them in a cool, dry place until pickup.'
    },
    {
      id: 2,
      badge: 'Leakage Prevention',
      title: 'Prevent acid contact',
      subtitle: 'Keep terminals upright and dry',
      tipHeading: 'Check for terminal leaks or cracks',
      tipBody: 'Place battery in an upright position. If liquid is present on casing, avoid skin contact and keep away from paper scrap.',
      dos: 'Upright orientation',
      donts: 'Tilted or upside down',
      audioText: 'Prevent acid contact. Keep battery terminals upright and avoid touching any leaked fluids.'
    },
    {
      id: 3,
      badge: 'Safe Handover',
      title: 'Certified Recycling',
      subtitle: 'Government authorized handler pickup',
      tipHeading: 'Hand over only to verified recyclers',
      tipBody: 'Your assigned buyer GreenCycle has CPCB certified battery handling protocol and calibrated weight scales.',
      dos: 'CPCB Certified Buyer',
      donts: 'Informal burning or dumping',
      audioText: 'Ensure safe handover. Only give batteries to verified certified recycling partners.'
    }
  ];

  const currentTip = tips[currentSlide];

  const handleSpeak = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsPlayingAudio(true);
      const utterance = new SpeechSynthesisUtterance(currentTip.audioText);
      utterance.rate = 0.95;
      utterance.onend = () => setIsPlayingAudio(false);
      utterance.onerror = () => setIsPlayingAudio(false);
      window.speechSynthesis.speak(utterance);
    } else {
      setIsPlayingAudio(true);
      setTimeout(() => setIsPlayingAudio(false), 2000);
    }
  };

  const handleNextSlide = () => {
    if (currentSlide < tips.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else if (onProceed) {
      onProceed();
    } else if (onClose) {
      onClose();
    }
  };

  const handlePrevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <div className="safety-screen-wrapper page-fade-enter">
      {/* Top Header Row with Close / Back */}
      <div className="safety-top-nav">
        {onBack ? (
          <button className="step-back-btn" onClick={onBack} aria-label="Back">
            <ArrowLeft size={22} color="#101A24" strokeWidth={2.2} />
          </button>
        ) : (
          <div />
        )}

        <button 
          className="safety-close-btn" 
          onClick={onClose || onBack}
          aria-label="Close Safety Tips"
        >
          <X size={20} color="#101A24" strokeWidth={2.4} />
        </button>
      </div>

      {/* Main Scrollable Card */}
      <div className="safety-card-container">
        {/* Detection Pill Badge */}
        <div className="battery-pill-badge">
          <BatteryCharging size={15} color="#D97706" strokeWidth={2.5} />
          <span>{currentTip.badge}</span>
        </div>

        {/* Title Block */}
        <div className="safety-header-text">
          <h1 className="safety-title">{currentTip.title}</h1>
          <p className="safety-subtitle">{currentTip.subtitle}</p>
        </div>

        {/* Hero Illustration Box */}
        <div className="safety-illustration-box">
          <img 
            src="/assets/Kabadiwala_Connect_Safety_Tips_UI_Asset_Pack/01_safety_illustrations/battery_safety_hero.jpg" 
            alt="Battery safety handling"
            className="safety-hero-img"
          />
        </div>

        {/* Audio Listen & Instruction Box */}
        <div className="safety-instruction-card">
          <div className="safety-instruction-top">
            <h3 className="safety-tip-heading">{currentTip.tipHeading}</h3>
            
            <button 
              className={`safety-audio-pill-btn ${isPlayingAudio ? 'playing' : ''}`}
              onClick={handleSpeak}
              aria-label="Listen to safety advice"
            >
              <Volume2 size={16} color="#D97706" strokeWidth={2.4} />
              <span>Listen</span>
            </button>
          </div>

          <p className="safety-tip-body">{currentTip.tipBody}</p>

          {/* Do's and Don'ts Comparison Badges */}
          <div className="safety-comparison-row">
            <div className="safety-compare-item dos">
              <CheckCircle2 size={16} color="#0B6B4A" strokeWidth={2.5} />
              <span>{currentTip.dos}</span>
            </div>

            <div className="safety-compare-item donts">
              <XCircle size={16} color="#DC2626" strokeWidth={2.5} />
              <span>{currentTip.donts}</span>
            </div>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="safety-pagination-row">
          {tips.map((_, idx) => (
            <span 
              key={idx} 
              className={`safety-dot ${currentSlide === idx ? 'active' : ''}`}
              onClick={() => setCurrentSlide(idx)}
            />
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="safety-actions-wrap">
          <button 
            className="safety-primary-btn"
            onClick={handleNextSlide}
          >
            <span>{currentSlide === tips.length - 1 ? 'Got it' : 'Next Tip'}</span>
            <ArrowRight size={18} color="#FFFFFF" strokeWidth={2.4} />
          </button>

          <button 
            className="safety-secondary-btn"
            onClick={onClose || onBack}
          >
            <span>Remind me later</span>
          </button>
        </div>
      </div>
    </div>
  );
}
