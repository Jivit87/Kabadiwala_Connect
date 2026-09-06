import React, { useState } from 'react';
import { ArrowLeft, Check, Minus, Plus, Bluetooth, ChevronRight, ArrowRight, RefreshCw, CheckCircle2 } from 'lucide-react';

export default function Step3Weight({ 
  t, 
  categoryData, 
  initialWeight = 2.5,
  onNext, 
  onBack, 
  onChangeCategory 
}) {
  const [weight, setWeight] = useState(initialWeight || 2.5);
  const [selectedQuick, setSelectedQuick] = useState(null);
  const [isScaleConnecting, setIsScaleConnecting] = useState(false);
  const [isScaleConnected, setIsScaleConnected] = useState(false);

  const categoryName = categoryData?.categoryName || 'PCB (Circuit Board)';
  const categoryImage = categoryData?.categoryImage || '/assets/Kabadiwala_Connect_Step3_Weight_UI_Asset_Pack/app/illustrations/pcb_selected_category_reference.png';

  const handleMinus = () => {
    setWeight(prev => Math.max(0.5, parseFloat((prev - 0.5).toFixed(1))));
    setSelectedQuick(null);
  };

  const handlePlus = () => {
    setWeight(prev => parseFloat((prev + 0.5).toFixed(1)));
    setSelectedQuick(null);
  };

  const handleQuickSelect = (val) => {
    setWeight(val);
    setSelectedQuick(val);
  };

  const handleConnectScale = () => {
    if (isScaleConnected) return;
    setIsScaleConnecting(true);
    setTimeout(() => {
      setIsScaleConnecting(false);
      setIsScaleConnected(true);
      setWeight(4.8);
      setSelectedQuick(null);
    }, 1200);
  };

  const handleContinue = () => {
    if (onNext) {
      onNext({
        weight: weight,
        scalePaired: isScaleConnected
      });
    }
  };

  const quickOptions = [
    {
      val: 5,
      label: '~ 5 kg',
      sub: 'Lightly filled',
      image: '/assets/Kabadiwala_Connect_Step3_Weight_UI_Asset_Pack/app/illustrations/quick_select_5kg_illustration_derived_transparent.png'
    },
    {
      val: 10,
      label: '~ 10 kg',
      sub: 'Half filled',
      image: '/assets/Kabadiwala_Connect_Step3_Weight_UI_Asset_Pack/app/illustrations/quick_select_10kg_illustration_derived_transparent.png'
    },
    {
      val: 15,
      label: '~ 15 kg',
      sub: 'Fully filled',
      image: '/assets/Kabadiwala_Connect_Step3_Weight_UI_Asset_Pack/app/illustrations/quick_select_15kg_illustration_derived_transparent.png'
    }
  ];

  return (
    <div className="step3-weight-screen page-fade-enter">
      {/* Top Header */}
      <div className="step-header">
        <button className="step-back-btn" onClick={onBack} aria-label="Go Back">
          <ArrowLeft size={22} color="#101A24" strokeWidth={2.2} />
        </button>
        <div className="step-header-text">
          <h1 className="step-title">Enter Weight</h1>
        </div>
      </div>

      {/* 5-Step Progress Stepper (Step 1 & 2 Done, Step 3 Active) */}
      <div className="stepper-container">
        <div className="stepper-line" />
        <div className="stepper-line-progress" style={{ width: '50%' }} />
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

          {/* Step 3: Weight (Active) */}
          <div className="stepper-item active">
            <div className="stepper-circle active">
              <span>3</span>
            </div>
            <span className="stepper-label active-text">Weight</span>
          </div>

          {/* Step 4: Value */}
          <div className="stepper-item">
            <div className="stepper-circle">
              <span>4</span>
            </div>
            <span className="stepper-label">Value</span>
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

      {/* Selected Category Preview Card */}
      <div className="selected-category-card">
        <div className="selected-category-thumb-wrapper">
          <img 
            src={categoryImage} 
            alt={categoryName} 
            className="selected-category-thumb-img"
          />
        </div>
        <div className="selected-category-info">
          <span className="selected-category-label">Selected Category</span>
          <h4 className="selected-category-title">{categoryName}</h4>
        </div>
        <button 
          className="change-category-btn"
          onClick={onChangeCategory || onBack}
          aria-label="Change Category"
        >
          Change
        </button>
      </div>

      {/* Section Header */}
      <div className="weight-section-header">
        <h2 className="weight-heading">How much does it weigh?</h2>
        <p className="weight-subheading">Enter the weight of your scrap</p>
      </div>

      {/* Weight Stepper Big Card */}
      <div className="weight-stepper-panel">
        <div className="weight-controls-row">
          <button 
            className="weight-adjust-btn minus"
            onClick={handleMinus}
            aria-label="Decrease weight"
          >
            <Minus size={22} color="#FFFFFF" strokeWidth={3} />
          </button>

          <div className="weight-value-container">
            <span className="weight-num">{weight.toFixed(1)}</span>
            <span className="weight-unit">kg</span>
          </div>

          <button 
            className="weight-adjust-btn plus"
            onClick={handlePlus}
            aria-label="Increase weight"
          >
            <Plus size={22} color="#FFFFFF" strokeWidth={3} />
          </button>
        </div>
        <span className="weight-step-hint">in 0.5 kg steps</span>
      </div>

      {/* OR Divider */}
      <div className="or-divider-container">
        <div className="or-line" />
        <span className="or-pill">OR</span>
        <div className="or-line" />
      </div>

      {/* Connect Scale Card */}
      <div 
        className={`connect-scale-card ${isScaleConnected ? 'scale-connected' : ''}`}
        onClick={handleConnectScale}
      >
        <div className="scale-icon-wrapper">
          {isScaleConnecting ? (
            <RefreshCw size={20} color="#0B6B4A" className="spin-slow" />
          ) : isScaleConnected ? (
            <CheckCircle2 size={20} color="#0B6B4A" />
          ) : (
            <Bluetooth size={20} color="#0B6B4A" strokeWidth={2.4} />
          )}
        </div>
        <div className="scale-info">
          <h4 className="scale-title">
            {isScaleConnecting ? 'Searching for scale...' : isScaleConnected ? 'Smart Scale Connected' : 'Connect Scale'}
          </h4>
          <p className="scale-subtitle">
            {isScaleConnecting ? 'Pairing via Bluetooth...' : isScaleConnected ? 'Live auto-synced: 4.8 kg' : 'Pair your Bluetooth weighing scale'}
          </p>
        </div>
        <ChevronRight size={18} color="#6E7782" />
      </div>

      {/* Quick Select Section */}
      <div className="quick-select-header">
        <h3 className="quick-select-title">Quick Select</h3>
        <span className="quick-select-hint">Choose an approximate weight</span>
      </div>

      <div className="quick-select-grid">
        {quickOptions.map((opt) => {
          const isSelected = selectedQuick === opt.val || weight === opt.val;
          return (
            <div 
              key={opt.val}
              className={`quick-select-card ${isSelected ? 'selected' : ''}`}
              onClick={() => handleQuickSelect(opt.val)}
            >
              <div className="quick-img-wrapper">
                <img 
                  src={opt.image} 
                  alt={opt.label} 
                  className="quick-sack-img"
                />
              </div>
              <span className="quick-label">{opt.label}</span>
              <span className="quick-sub">{opt.sub}</span>
            </div>
          );
        })}
      </div>

      {/* Sticky Bottom Action Button */}
      <div className="step-bottom-cta">
        <button 
          className="step-primary-cta-btn"
          onClick={handleContinue}
        >
          <span>Continue</span>
          <ArrowRight size={18} strokeWidth={2.5} />
        </button>
      </div>
    </div>
  );
}
