import React, { useState } from 'react';
import { ArrowLeft, Check, Volume2, ChevronDown, ChevronUp, ArrowUp, ArrowRight } from 'lucide-react';
import { haptics } from '../../utils/haptics';

export default function Step4EstimatedValue({ 
  t, 
  sellFlowData, 
  onNext, 
  onBack 
}) {
  const [breakdownOpen, setBreakdownOpen] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const weight = sellFlowData?.weight || 2.5;
  const categoryName = sellFlowData?.categoryName || 'PCB / Circuit Board';
  const ratePerKg = 125;
  const estimatedTotal = Math.round(weight * ratePerKg);
  const streetBonus = 18;

  const handleSpeakValue = () => {
    haptics.tapTick();
    setIsPlayingAudio(true);
    const text = `Estimated value is ₹${estimatedTotal}, based on ${weight} kg of ${categoryName}. You are getting ₹${streetBonus} above regular street rate.`;
    haptics.speak(text, 'en', () => setIsPlayingAudio(true), () => setIsPlayingAudio(false));
  };

  const handleContinue = () => {
    haptics.tapTick();
    if (onNext) {
      onNext({
        estimatedTotal,
        ratePerKg,
        streetBonus
      });
    }
  };

  return (
    <div className="step4-value-screen page-fade-enter">
      {/* Top Header */}
      <div className="step-header">
        <button className="step-back-btn" onClick={onBack} aria-label="Go Back">
          <ArrowLeft size={22} color="#101A24" strokeWidth={2.2} />
        </button>
        <div className="step-header-text">
          <h1 className="step-title">Estimated Value</h1>
        </div>
      </div>

      {/* 5-Step Progress Stepper (Step 1, 2 & 3 Done, Step 4 Active) */}
      <div className="stepper-container">
        <div className="stepper-line" />
        <div className="stepper-line-progress" style={{ width: '75%' }} />
        <div className="stepper-steps">
          {/* Step 1: Photo (Done) */}
          <div className="stepper-item completed">
            <div className="stepper-circle completed">
              <Check size={14} color="#FFFFFF" strokeWidth={3} />
            </div>
            <span className="stepper-label active-text">Photo</span>
          </div>

          {/* Step 2: Category (Done) */}
          <div className="stepper-item completed">
            <div className="stepper-circle completed">
              <Check size={14} color="#FFFFFF" strokeWidth={3} />
            </div>
            <span className="stepper-label active-text">Category</span>
          </div>

          {/* Step 3: Weight (Done) */}
          <div className="stepper-item completed">
            <div className="stepper-circle completed">
              <Check size={14} color="#FFFFFF" strokeWidth={3} />
            </div>
            <span className="stepper-label active-text">Weight</span>
          </div>

          {/* Step 4: Value (Active) */}
          <div className="stepper-item active">
            <div className="stepper-circle active">
              <span>4</span>
            </div>
            <span className="stepper-label active-text">Value</span>
          </div>

          {/* Step 5: Buyer */}
          <div className="stepper-item">
            <div className="stepper-circle">
              <span>5</span>
            </div>
            <span className="stepper-label">Buyer</span>
          </div>
        </div>
      </div>

      {/* Main Estimated Value Card */}
      <div className="value-hero-card">
        {/* Category Chip Top-Left */}
        <div className="value-category-chip">
          <div className="value-category-icon-box">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.2">
              <rect x="2" y="2" width="20" height="20" rx="4" />
              <path d="M6 6h4v4H6z" fill="#FFFFFF" />
              <path d="M14 6h4v4h-4z" fill="#FFFFFF" />
              <path d="M6 14h4v4H6z" fill="#FFFFFF" />
              <path d="M10 8h4M8 10v4M16 10v4M10 16h4" />
            </svg>
          </div>
          <span className="value-category-name">{categoryName}</span>
        </div>

        {/* Small uppercase label */}
        <span className="value-caption-label">YOUR ESTIMATED VALUE</span>

        {/* Big Rupee Number with Sparkles Accent */}
        <div className="value-price-wrapper">
          {/* Left Sparkle lines */}
          <div className="sparkle-cluster left">
            <span className="sparkle-line sp-1" />
            <span className="sparkle-line sp-2" />
            <span className="sparkle-line sp-3" />
          </div>

          <div className="value-amount-display">
            <span className="rupee-symbol">₹</span>
            <span className="rupee-number">{estimatedTotal}</span>
          </div>

          {/* Right Sparkle lines */}
          <div className="sparkle-cluster right">
            <span className="sparkle-line sp-1" />
            <span className="sparkle-line sp-2" />
            <span className="sparkle-line sp-3" />
          </div>
        </div>

        {/* Basis text */}
        <span className="value-basis-text">
          Based on {weight} kg of PCB
        </span>

        {/* Listen to Value Button */}
        <button 
          className={`listen-value-btn ${isPlayingAudio ? 'playing' : ''}`}
          onClick={handleSpeakValue}
          aria-label="Listen to estimated value voice announcement"
        >
          <Volume2 size={18} color="#0B6B4A" strokeWidth={2.4} className={isPlayingAudio ? 'pulse-audio' : ''} />
          <span>{isPlayingAudio ? 'Playing audio...' : 'Listen to value'}</span>
        </button>
      </div>

      {/* Expandable Breakdown Card */}
      <div 
        className="value-breakdown-card"
        onClick={() => setBreakdownOpen(!breakdownOpen)}
      >
        <div className="breakdown-header-row">
          <div>
            <h3 className="breakdown-title">View breakdown</h3>
            <p className="breakdown-formula">{weight} kg × ₹{ratePerKg}/kg = ₹{estimatedTotal}</p>
          </div>
          <button className="breakdown-toggle-btn" aria-label="Toggle breakdown">
            {breakdownOpen ? (
              <ChevronUp size={20} color="#101A24" />
            ) : (
              <ChevronDown size={20} color="#101A24" />
            )}
          </button>
        </div>

        {breakdownOpen && (
          <div className="breakdown-details-drawer">
            <div className="drawer-item">
              <span className="item-name">Base Market Rate</span>
              <span className="item-val">₹110 / kg</span>
            </div>
            <div className="drawer-item">
              <span className="item-name">High Grade E-Waste Bonus</span>
              <span className="item-val bonus">+₹15 / kg</span>
            </div>
            <div className="drawer-item total">
              <span className="item-name">Effective Verified Rate</span>
              <span className="item-val">₹125 / kg</span>
            </div>
          </div>
        )}
      </div>

      {/* Above Street Rate Banner */}
      <div className="above-street-rate-banner">
        <div className="above-rate-arrow-circle">
          <ArrowUp size={20} color="#0B6B4A" strokeWidth={3} />
        </div>
        <div className="above-rate-text-block">
          <h4 className="above-rate-title">₹{streetBonus} above street rate</h4>
          <p className="above-rate-subtitle">You're getting a better price!</p>
        </div>
      </div>

      {/* Sticky Bottom Action Button */}
      <div className="step-bottom-cta value-cta-wrap">
        <button 
          className="step-primary-cta-btn"
          onClick={handleContinue}
        >
          <span>Find a Buyer</span>
          <ArrowRight size={18} strokeWidth={2.5} />
        </button>
        <p className="bottom-buyer-help-text">Compare offers from verified buyers near you.</p>
      </div>
    </div>
  );
}
