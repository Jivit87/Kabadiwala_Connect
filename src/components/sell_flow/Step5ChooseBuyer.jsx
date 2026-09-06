import React, { useState } from 'react';
import { ArrowLeft, Check, MapPin, ShieldCheck, Star, ArrowRight } from 'lucide-react';

export default function Step5ChooseBuyer({ 
  t, 
  sellFlowData, 
  onNext, 
  onBack 
}) {
  const [selectedBuyerId, setSelectedBuyerId] = useState('buyer_1');

  const categoryName = sellFlowData?.categoryName || 'PCB (Circuit Board)';
  const weight = sellFlowData?.weight || 2.5;

  const buyers = [
    {
      id: 'buyer_1',
      name: 'GreenCycle Recycling',
      rate: 128,
      isBestMatch: true,
      distance: '2.1 km away',
      verified: 'CPCB Verified',
      rating: 4.8
    },
    {
      id: 'buyer_2',
      name: 'EcoScrap Solutions',
      rate: 124,
      isBestMatch: false,
      distance: '3.4 km away',
      verified: 'CPCB Verified',
      rating: 4.6
    },
    {
      id: 'buyer_3',
      name: 'ReNew E-Waste',
      rate: 121,
      isBestMatch: false,
      distance: '5.2 km away',
      verified: 'CPCB Verified',
      rating: 4.7
    }
  ];

  const selectedBuyer = buyers.find(b => b.id === selectedBuyerId) || buyers[0];

  const handleSelectAndSell = () => {
    if (onNext) {
      onNext({
        buyer: selectedBuyer,
        totalPayout: Math.round(weight * selectedBuyer.rate)
      });
    }
  };

  return (
    <div className="step5-buyer-screen page-fade-enter">
      {/* Top Header */}
      <div className="step-header">
        <button className="step-back-btn" onClick={onBack} aria-label="Go Back">
          <ArrowLeft size={22} color="#101A24" strokeWidth={2.2} />
        </button>
        <div className="step-header-text">
          <h1 className="step-title">Choose a Buyer</h1>
        </div>
      </div>

      {/* 5-Step Progress Stepper (All 5 Steps Complete/Active) */}
      <div className="stepper-container">
        <div className="stepper-line" />
        <div className="stepper-line-progress" style={{ width: '100%' }} />
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

          {/* Step 4: Value (Done) */}
          <div className="stepper-item completed">
            <div className="stepper-circle completed">
              <Check size={14} color="#FFFFFF" strokeWidth={3} />
            </div>
            <span className="stepper-label active-text">Value</span>
          </div>

          {/* Step 5: Buyer (Active) */}
          <div className="stepper-item active">
            <div className="stepper-circle active">
              <span>5</span>
            </div>
            <span className="stepper-label active-text">Buyer</span>
          </div>
        </div>
      </div>

      {/* Intro Heading */}
      <div className="buyer-intro-header">
        <h2 className="buyer-intro-title">Best buyers for you</h2>
        <p className="buyer-intro-sub">Compared by price, distance and reliability.</p>
      </div>

      {/* Lot Summary Pill */}
      <div className="lot-summary-pill">
        <div className="lot-pcb-icon">
          <img 
            src="/assets/Kabadiwala_Connect_Step5_Choose_Buyer_UI_Asset_Pack/app/crops/lot_material_pcb_thumbnail.png" 
            alt="PCB scrap" 
            className="lot-icon-img"
          />
        </div>
        <span className="lot-summary-text">{categoryName} • {weight} kg</span>
      </div>

      {/* Buyer Cards List */}
      <div className="buyers-list">
        {buyers.map((buyer) => {
          const isSelected = selectedBuyerId === buyer.id;
          return (
            <div
              key={buyer.id}
              className={`buyer-card ${isSelected ? 'selected' : ''}`}
              onClick={() => setSelectedBuyerId(buyer.id)}
            >
              {/* Best Match Gold Pill */}
              {buyer.isBestMatch && (
                <div className="best-match-badge">
                  <Star size={12} fill="#101A24" color="#101A24" />
                  <span>BEST MATCH</span>
                </div>
              )}

              {/* Main Card Header: Name + Price + Radio */}
              <div className="buyer-card-top-row">
                <div className="buyer-name-col">
                  <h3 className="buyer-company-name">{buyer.name}</h3>
                </div>

                <div className="buyer-price-radio-wrap">
                  <div className="buyer-rate-box">
                    <span className="buyer-rate-price">₹{buyer.rate}/kg</span>
                    {buyer.isBestMatch && <span className="buyer-rate-best-label">Best price</span>}
                  </div>

                  <div className={`buyer-radio-circle ${isSelected ? 'checked' : ''}`}>
                    {isSelected && <div className="buyer-radio-inner-dot" />}
                  </div>
                </div>
              </div>

              {/* Meta Row: Distance | Verified | Rating */}
              <div className="buyer-meta-row">
                <div className="meta-item">
                  <MapPin size={13} color="#6E7782" />
                  <span>{buyer.distance}</span>
                </div>

                <span className="meta-divider">|</span>

                <div className="meta-item">
                  <ShieldCheck size={13} color="#0B6B4A" strokeWidth={2.4} />
                  <span className="verified-text">{buyer.verified}</span>
                </div>

                <span className="meta-divider">|</span>

                <div className="meta-item">
                  <Star size={13} fill="#F5B82E" color="#F5B82E" />
                  <span className="rating-score">{buyer.rating}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Verified Recyclers Trust Banner */}
      <div className="verified-recyclers-trust-banner">
        <ShieldCheck size={16} color="#0B6B4A" strokeWidth={2.4} />
        <span>All listed buyers are verified recyclers.</span>
      </div>

      {/* Sticky Bottom Action Button */}
      <div className="step-bottom-cta buyer-cta-wrap">
        <div className="selected-buyer-indicator">
          <span>Selected: </span>
          <strong>{selectedBuyer.name}</strong>
        </div>

        <button 
          className="step-primary-cta-btn"
          onClick={handleSelectAndSell}
        >
          <span>Select & Sell</span>
          <ArrowRight size={18} strokeWidth={2.5} />
        </button>
      </div>
    </div>
  );
}
