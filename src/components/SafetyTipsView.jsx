import React, { useState } from 'react';
import { 
  X, Volume2, CheckCircle2, XCircle, ChevronLeft, ChevronRight, 
  Flame, Droplets, ShieldAlert, ArrowLeft, ArrowRight, BatteryCharging
} from 'lucide-react';
import { haptics } from '../utils/haptics';

export default function SafetyTipsView({
  t = {},
  currentLang = 'en',
  onClose,
  onProceed,
  onBack
}) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const getAudioText = (id) => {
    if (id === 1) {
      if (currentLang === 'hi') return 'सुरक्षा सुझाव। बैटरियों को गर्मी से दूर रखें। पिकअप तक उन्हें ठंडी और सूखी जगह पर रखें।';
      if (currentLang === 'mr') return 'सुरक्षा टीप। बॅटरी उष्णतेपासून दूर ठेवा. पिकअप होईपर्यंत त्यांना थंड आणि कोरड्या जागी ठेवा.';
      return 'A quick safety tip. Please keep batteries away from heat. Store them in a cool, dry place until pickup.';
    }
    if (id === 2) {
      if (currentLang === 'hi') return 'एसिड संपर्क से बचें। बैटरी टर्मिनल को सीधा और सूखा रखें और किसी भी लीक को छूने से बचें।';
      if (currentLang === 'mr') return 'अ‍ॅसिड संपर्कापासून बचाव करा. बॅटरी टर्मिनल्स सरळ आणि कोरडे ठेवा.';
      return 'Prevent acid contact. Keep battery terminals upright and avoid touching any leaked fluids.';
    }
    if (id === 3) {
      if (currentLang === 'hi') return 'सुरक्षित रीसाइक्लिंग सुनिश्चित करें। बैटरियां केवल CPCB अधिकृत रीसाइक्लर को सौंपें।';
      if (currentLang === 'mr') return 'सुरक्षित पुनर्वापर सुनिश्चित करा. बॅटरी केवळ अधिकृत रीसायकलिंग भागीदारांनाच द्या.';
      return 'Ensure safe handover. Only give batteries to verified certified recycling partners.';
    }
    return '';
  };

  const tips = [
    {
      id: 1,
      badge: t.batteryDetectedBanner || 'Battery Detected',
      title: t.safetyTipsHeading || 'A quick safety tip',
      subtitle: t.beforeHandoverSub || 'Before handing over your battery',
      tipHeading: t.keepAwayHeatHeading || 'Keep batteries away from heat',
      tipBody: t.keepAwayHeatBody || 'Store them in a cool, dry place until pickup. Never expose lithium or lead-acid batteries to direct sunlight or open fire.',
      dos: t.coolDryArea || 'Cool & dry indoor area',
      donts: t.directHeatFlames || 'Direct heat & flames',
      audioText: getAudioText(1)
    },
    {
      id: 2,
      badge: t.leakPreventionTitle || 'Leakage Prevention',
      title: t.leakPreventionTitle || 'Prevent acid contact',
      subtitle: t.leakPreventionSub || 'Keep terminals upright and dry',
      tipHeading: t.checkTerminalHeading || 'Check for terminal leaks or cracks',
      tipBody: t.checkTerminalBody || 'Place battery in an upright position. If liquid is present on casing, avoid skin contact and keep away from paper scrap.',
      dos: t.uprightOrientation || 'Upright orientation',
      donts: t.tiltedUpsideDown || 'Tilted or upside down',
      audioText: getAudioText(2)
    },
    {
      id: 3,
      badge: t.certifiedRecyclingTitle || 'Safe Handover',
      title: t.certifiedRecyclingTitle || 'Certified Recycling',
      subtitle: t.govtAuthHandlerSub || 'Government authorized handler pickup',
      tipHeading: t.handOverVerifiedHeading || 'Hand over only to verified recyclers',
      tipBody: t.handOverVerifiedBody || 'Your assigned buyer GreenCycle has CPCB certified battery handling protocol and calibrated weight scales.',
      dos: t.cpcbBuyer || 'CPCB Certified Buyer',
      donts: t.informalBurning || 'Informal burning or dumping',
      audioText: getAudioText(3)
    }
  ];

  const currentTip = tips[currentSlide];

  const handleSpeak = () => {
    haptics.tapTick();
    setIsPlayingAudio(true);
    haptics.speak(currentTip.audioText, currentLang, () => setIsPlayingAudio(true), () => setIsPlayingAudio(false));
  };

  const handleNextSlide = () => {
    haptics.tapTick();
    if (currentSlide < tips.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else if (onProceed) {
      onProceed();
    } else if (onClose) {
      onClose();
    }
  };

  const handlePrevSlide = () => {
    haptics.tapTick();
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
              <span>{t.listenBtn || 'Listen'}</span>
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
            <span>{currentSlide === tips.length - 1 ? (t.gotItSafetyBtn || 'Got it') : (t.nextTipBtn || 'Next Tip')}</span>
            <ArrowRight size={18} color="#FFFFFF" strokeWidth={2.4} />
          </button>

          <button 
            className="safety-secondary-btn"
            onClick={onClose || onBack}
          >
            <span>{t.remindMeLaterBtn || 'Remind me later'}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
