import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, Phone, MessageCircle, MapPin, Clock, 
  ShieldCheck, CheckCircle2, Truck, Star, Copy, Check, 
  ArrowRight, Sparkles, Package, AlertCircle, Navigation
} from 'lucide-react';
import { haptics } from '../../utils/haptics';

export default function PickupConfirmationView({
  t = {},
  sellFlowData = {},
  onProceedToPayment,
  onBack,
  onCancel
}) {
  const [copiedPin, setCopiedPin] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);
  const [liveMinutes, setLiveMinutes] = useState(14);
  const [activeStep, setActiveStep] = useState(2); // 0: Booked, 1: Assigned, 2: En Route, 3: Arrived

  const buyer = sellFlowData?.buyer || {
    id: 'buyer_1',
    name: 'GreenCycle Recycling',
    rate: 128,
    rating: 4.8,
    reviews: 142,
    phone: '+91 98765 43210',
    distance: '1.4 km',
    collectorName: 'Rakesh Sharma'
  };

  const weight = sellFlowData?.weight || 2.5;
  const ratePerKg = sellFlowData?.ratePerKg || buyer?.rate || 125;
  const estimatedTotal = sellFlowData?.estimatedTotal || Math.round(weight * ratePerKg);
  const categoryName = sellFlowData?.categoryName || 'PCB (Circuit Board)';
  const securityPin = sellFlowData?.securityPin || '4829';

  useEffect(() => {
    // Subtle countdown timer simulation for live arrival feel
    const interval = setInterval(() => {
      setLiveMinutes(prev => (prev > 1 ? prev - 1 : 1));
    }, 45000);
    return () => clearInterval(interval);
  }, []);

  const showToast = (msg) => {
    setToastMessage(msg);
    haptics.tapTick();
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  const handleCall = () => {
    haptics.tapTick();
    showToast(t.callingToast || `Calling ${buyer.collectorName || buyer.name} (+91 98765 43210)...`);
  };

  const handleChat = () => {
    haptics.tapTick();
    showToast(t.chatSentToast || 'WhatsApp message opened with live pickup coordinates!');
  };

  const handleCopyPin = () => {
    haptics.tapTick();
    setCopiedPin(true);
    if (navigator.clipboard) {
      navigator.clipboard.writeText(securityPin).catch(() => {});
    }
    setTimeout(() => setCopiedPin(false), 2000);
  };

  const handleProceed = () => {
    haptics.successChime();
    if (onProceedToPayment) {
      onProceedToPayment();
    }
  };

  return (
    <div className="pickup-confirm-screen page-fade-enter">
      {/* Top Header */}
      <div className="pickup-top-header">
        <button className="pickup-back-btn" onClick={onBack} aria-label="Go Back">
          <ArrowLeft size={22} color="#101A24" strokeWidth={2.2} />
        </button>
        <div className="pickup-header-center">
          <h1 className="pickup-screen-title">{t.pickupConfirmedTitle || 'Pickup Scheduled'}</h1>
          <span className="pickup-sub-badge">
            <span className="live-pulse-dot" />
            {t.driverEnRouteStatus || 'Driver on the way'}
          </span>
        </div>
        <div style={{ width: 36 }} />
      </div>

      {/* Floating Action Toast Notice */}
      {toastMessage && (
        <div className="pickup-toast-banner">
          <Sparkles size={16} color="#4ADE80" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Scrollable Main Area */}
      <div className="pickup-scroll-container">
        {/* Live ETA Tracker Hero Card */}
        <div className="eta-hero-card">
          <div className="eta-top-row">
            <div className="eta-left-col">
              <span className="eta-caption">ESTIMATED ARRIVAL</span>
              <div className="eta-time-row">
                <Clock size={20} color="#0B6B4A" />
                <h2 className="eta-digits">{liveMinutes} mins</h2>
              </div>
            </div>
            <div className="eta-vehicle-badge">
              <Truck size={22} color="#0B6B4A" />
              <span className="eta-dist-text">1.4 km away</span>
            </div>
          </div>

          {/* 4-Step Live Tracking Progress Track */}
          <div className="tracking-timeline">
            <div className="timeline-track">
              <div 
                className="timeline-progress-bar" 
                style={{ width: activeStep === 0 ? '12%' : activeStep === 1 ? '40%' : activeStep === 2 ? '72%' : '100%' }} 
              />
            </div>

            <div className="timeline-nodes">
              <div className="timeline-node active">
                <div className="node-circle done">
                  <Check size={10} color="#FFFFFF" strokeWidth={3} />
                </div>
                <span className="node-label">{t.orderPlacedStep || 'Booked'}</span>
              </div>

              <div className="timeline-node active">
                <div className="node-circle done">
                  <Check size={10} color="#FFFFFF" strokeWidth={3} />
                </div>
                <span className="node-label">{t.driverAssignedStep || 'Assigned'}</span>
              </div>

              <div className="timeline-node current">
                <div className="node-circle pulse">
                  <Truck size={12} color="#FFFFFF" />
                </div>
                <span className="node-label highlight">{t.enRouteStep || 'En Route'}</span>
              </div>

              <div className="timeline-node">
                <div className="node-circle upcoming">
                  <span>4</span>
                </div>
                <span className="node-label">{t.arrivedStep || 'Arrived'}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Assigned Collector / Buyer Profile Card */}
        <div className="collector-profile-card">
          <div className="collector-header-row">
            <div className="collector-avatar-wrap">
              <div className="collector-avatar-initials">
                {buyer.name ? buyer.name.charAt(0) : 'G'}
              </div>
              <div className="verified-mini-badge">
                <Check size={10} color="#FFFFFF" strokeWidth={3.5} />
              </div>
            </div>

            <div className="collector-info-col">
              <div className="collector-name-row">
                <h3 className="collector-name">{buyer.collectorName || 'Rakesh Sharma'}</h3>
                <div className="rating-pill">
                  <Star size={12} fill="#F59E0B" color="#F59E0B" />
                  <span>{buyer.rating || 4.8}</span>
                </div>
              </div>
              <span className="collector-org-text">{buyer.name || 'GreenCycle Recycling'}</span>
              <div className="cpcb-tag">
                <ShieldCheck size={13} color="#0B6B4A" />
                <span>CPCB Authorized Fleet</span>
              </div>
            </div>
          </div>

          <div className="collector-actions-row">
            <button className="collector-action-btn call-btn" onClick={handleCall}>
              <Phone size={16} color="#0B6B4A" />
              <span>{t.callCollectorBtn || 'Call Collector'}</span>
            </button>
            <button className="collector-action-btn chat-btn" onClick={handleChat}>
              <MessageCircle size={16} color="#0B6B4A" />
              <span>{t.chatWhatsAppBtn || 'WhatsApp Chat'}</span>
            </button>
          </div>
        </div>

        {/* Handover Security PIN Card */}
        <div className="security-pin-card">
          <div className="pin-left-info">
            <span className="pin-card-tag">{t.securityPinTitle || 'Handover Security PIN'}</span>
            <p className="pin-helper-desc">
              {t.securityPinDesc || 'Share this 4-digit code with the driver upon arrival to verify handover.'}
            </p>
          </div>

          <div className="pin-display-box" onClick={handleCopyPin} title="Tap to copy PIN">
            <div className="pin-digits-group">
              {securityPin.split('').map((digit, idx) => (
                <span key={idx} className="pin-digit-box">{digit}</span>
              ))}
            </div>
            <button className="pin-copy-btn" aria-label="Copy PIN">
              {copiedPin ? <Check size={14} color="#0B6B4A" /> : <Copy size={14} color="#6B7280" />}
            </button>
          </div>
        </div>

        {/* Pickup Location & Slot Summary */}
        <div className="pickup-details-card">
          <div className="detail-item-row">
            <div className="detail-icon-circle">
              <MapPin size={16} color="#0B6B4A" />
            </div>
            <div className="detail-text-col">
              <span className="detail-label">{t.pickupAddressLabel || 'Pickup Address'}</span>
              <p className="detail-val">Flat 402, Block C, Sector 14, Rohini, Delhi - 110085</p>
            </div>
          </div>

          <div className="card-inner-divider" />

          <div className="detail-item-row">
            <div className="detail-icon-circle">
              <Clock size={16} color="#0B6B4A" />
            </div>
            <div className="detail-text-col">
              <span className="detail-label">{t.scheduledSlotLabel || 'Scheduled Slot'}</span>
              <p className="detail-val">{t.todayLabel || 'Today'}, 4:00 PM - 5:00 PM</p>
            </div>
          </div>
        </div>

        {/* Scrap Lot Summary Accordion/Card */}
        <div className="lot-summary-card">
          <div className="lot-summary-header">
            <div className="lot-icon-badge">
              <Package size={16} color="#0B6B4A" />
            </div>
            <h4 className="lot-card-title">{t.scrapSummaryTitle || 'Scrap Lot Details'}</h4>
          </div>

          <div className="lot-specs-grid">
            <div className="lot-spec-item">
              <span className="lot-spec-lbl">{t.stepCategory || 'Category'}</span>
              <strong className="lot-spec-val">{categoryName}</strong>
            </div>

            <div className="lot-spec-item">
              <span className="lot-spec-lbl">{t.totalWeightStat || 'Weight'}</span>
              <strong className="lot-spec-val">{weight} kg</strong>
            </div>

            <div className="lot-spec-item">
              <span className="lot-spec-lbl">{t.ratePerKgStat || 'Agreed Rate'}</span>
              <strong className="lot-spec-val">₹ {ratePerKg}/kg</strong>
            </div>

            <div className="lot-spec-item highlight">
              <span className="lot-spec-lbl">{t.expectedPayoutLabel || 'Expected Payout:'}</span>
              <strong className="lot-spec-val total-green">₹ {estimatedTotal}</strong>
            </div>
          </div>
        </div>

        {/* Primary Action Button */}
        <div className="pickup-actions-footer">
          <button 
            className="pickup-primary-confirm-btn"
            onClick={handleProceed}
          >
            <span>{t.proceedToPaymentBtn || 'Scrap Inspected • Settle Payment →'}</span>
          </button>

          {onCancel && (
            <button 
              className="pickup-cancel-btn"
              onClick={onCancel}
            >
              <span>{t.cancelBookingBtn || 'Cancel Pickup'}</span>
            </button>
          )}
        </div>
      </div>

      <style>{`
        .pickup-confirm-screen {
          display: flex;
          flex-direction: column;
          height: 100%;
          background-color: var(--surface-warm, #F4F6F0);
          position: relative;
          overflow: hidden;
        }

        .pickup-top-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 16px;
          background: #FFFFFF;
          border-bottom: 1px solid var(--border-soft, #E5E9E2);
          z-index: 10;
        }

        .pickup-back-btn {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          border: none;
          background: #F1F4EB;
          cursor: pointer;
        }

        .pickup-header-center {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .pickup-screen-title {
          font-size: 17px;
          font-weight: 700;
          color: #101A24;
          margin: 0;
        }

        .pickup-sub-badge {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 11px;
          font-weight: 600;
          color: #0B6B4A;
          margin-top: 2px;
        }

        .live-pulse-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #10B981;
          box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.25);
          animation: pulseGreen 1.6s infinite ease-in-out;
        }

        @keyframes pulseGreen {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.3); opacity: 0.6; }
        }

        .pickup-toast-banner {
          position: absolute;
          top: 64px;
          left: 16px;
          right: 16px;
          background: #1C522D;
          color: #FFFFFF;
          font-size: 12px;
          font-weight: 600;
          padding: 10px 16px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          gap: 10px;
          box-shadow: 0 8px 20px rgba(28, 82, 45, 0.35);
          z-index: 50;
          animation: slideDownToast 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @keyframes slideDownToast {
          from { transform: translateY(-16px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        .pickup-scroll-container {
          flex: 1;
          overflow-y: auto;
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 14px;
          -webkit-overflow-scrolling: touch;
        }

        /* ETA Card */
        .eta-hero-card {
          background: #FFFFFF;
          border-radius: 18px;
          padding: 16px;
          border: 1.5px solid #E2E8DC;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
        }

        .eta-top-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
        }

        .eta-caption {
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.5px;
          color: #6B7280;
        }

        .eta-time-row {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-top: 4px;
        }

        .eta-digits {
          font-size: 22px;
          font-weight: 800;
          color: #101A24;
          margin: 0;
        }

        .eta-vehicle-badge {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          background: #EEF6ED;
          padding: 6px 12px;
          border-radius: 12px;
          border: 1px solid #D5E7D2;
        }

        .eta-dist-text {
          font-size: 11px;
          font-weight: 700;
          color: #0B6B4A;
          margin-top: 2px;
        }

        /* Tracking Timeline */
        .tracking-timeline {
          position: relative;
          padding: 8px 4px 0 4px;
        }

        .timeline-track {
          position: absolute;
          top: 19px;
          left: 20px;
          right: 20px;
          height: 3px;
          background: #E5E9E2;
          z-index: 1;
        }

        .timeline-progress-bar {
          height: 100%;
          background: #0B6B4A;
          border-radius: 2px;
          transition: width 0.4s ease;
        }

        .timeline-nodes {
          position: relative;
          display: flex;
          justify-content: space-between;
          z-index: 2;
        }

        .timeline-node {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
        }

        .node-circle {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 10px;
          font-weight: 700;
        }

        .node-circle.done {
          background: #0B6B4A;
          color: white;
        }

        .node-circle.pulse {
          background: #10B981;
          box-shadow: 0 0 0 4px rgba(16, 185, 129, 0.25);
        }

        .node-circle.upcoming {
          background: #FFFFFF;
          border: 2px solid #D1D5DB;
          color: #9CA3AF;
        }

        .node-label {
          font-size: 10px;
          font-weight: 600;
          color: #6B7280;
        }

        .node-label.highlight {
          color: #0B6B4A;
          font-weight: 700;
        }

        /* Collector Card */
        .collector-profile-card {
          background: #FFFFFF;
          border-radius: 18px;
          padding: 16px;
          border: 1.5px solid #E2E8DC;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
        }

        .collector-header-row {
          display: flex;
          gap: 14px;
          align-items: center;
          margin-bottom: 14px;
        }

        .collector-avatar-wrap {
          position: relative;
        }

        .collector-avatar-initials {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: linear-gradient(135deg, #1C522D, #0B6B4A);
          color: white;
          font-size: 20px;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .verified-mini-badge {
          position: absolute;
          bottom: -2px;
          right: -2px;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: #10B981;
          border: 2px solid white;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .collector-info-col {
          flex: 1;
        }

        .collector-name-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .collector-name {
          font-size: 16px;
          font-weight: 700;
          color: #101A24;
          margin: 0;
        }

        .rating-pill {
          display: flex;
          align-items: center;
          gap: 3px;
          background: #FFFBEB;
          padding: 2px 6px;
          border-radius: 6px;
          font-size: 11px;
          font-weight: 700;
          color: #B45309;
        }

        .collector-org-text {
          font-size: 12px;
          color: #4B5563;
          margin-top: 2px;
          display: block;
        }

        .cpcb-tag {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-size: 11px;
          font-weight: 600;
          color: #0B6B4A;
          margin-top: 4px;
        }

        .collector-actions-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
          padding-top: 12px;
          border-top: 1px solid #F1F4EB;
        }

        .collector-action-btn {
          height: 40px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          font-size: 13px;
          font-weight: 700;
          border: 1.5px solid #D1E5CD;
          background: #F7FAF6;
          color: #0B6B4A;
          cursor: pointer;
          transition: all 0.15s ease;
        }

        .collector-action-btn:hover {
          background: #EEF6ED;
          border-color: #0B6B4A;
        }

        /* Security PIN Card */
        .security-pin-card {
          background: linear-gradient(135deg, #1C522D, #0B6B4A);
          color: white;
          border-radius: 18px;
          padding: 16px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          box-shadow: 0 4px 14px rgba(28, 82, 45, 0.25);
        }

        .pin-left-info {
          flex: 1;
          padding-right: 12px;
        }

        .pin-card-tag {
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.4px;
          color: #CAE0B8;
          text-transform: uppercase;
        }

        .pin-helper-desc {
          font-size: 11px;
          color: #E2E8DC;
          margin: 4px 0 0 0;
          line-height: 1.4;
        }

        .pin-display-box {
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 14px;
          padding: 8px 12px;
          display: flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
        }

        .pin-digits-group {
          display: flex;
          gap: 4px;
        }

        .pin-digit-box {
          width: 22px;
          height: 28px;
          background: #FFFFFF;
          color: #0B6B4A;
          font-size: 16px;
          font-weight: 800;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .pin-copy-btn {
          background: transparent;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          padding: 2px;
        }

        /* Details Card */
        .pickup-details-card {
          background: #FFFFFF;
          border-radius: 18px;
          padding: 16px;
          border: 1.5px solid #E2E8DC;
        }

        .detail-item-row {
          display: flex;
          gap: 12px;
          align-items: flex-start;
        }

        .detail-icon-circle {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: #EEF6ED;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .detail-text-col {
          flex: 1;
        }

        .detail-label {
          font-size: 11px;
          font-weight: 600;
          color: #6B7280;
        }

        .detail-val {
          font-size: 13px;
          font-weight: 600;
          color: #101A24;
          margin: 2px 0 0 0;
          line-height: 1.4;
        }

        .card-inner-divider {
          height: 1px;
          background: #F1F4EB;
          margin: 12px 0;
        }

        /* Lot Summary Card */
        .lot-summary-card {
          background: #FFFFFF;
          border-radius: 18px;
          padding: 16px;
          border: 1.5px solid #E2E8DC;
        }

        .lot-summary-header {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 12px;
        }

        .lot-icon-badge {
          width: 28px;
          height: 28px;
          border-radius: 8px;
          background: #EEF6ED;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .lot-card-title {
          font-size: 14px;
          font-weight: 700;
          color: #101A24;
          margin: 0;
        }

        .lot-specs-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
          background: #F9FBF7;
          border-radius: 12px;
          padding: 12px;
          border: 1px solid #E8ECE2;
        }

        .lot-spec-item {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .lot-spec-lbl {
          font-size: 10px;
          font-weight: 600;
          color: #6B7280;
        }

        .lot-spec-val {
          font-size: 13px;
          font-weight: 700;
          color: #101A24;
        }

        .lot-spec-item.highlight .total-green {
          font-size: 15px;
          color: #0B6B4A;
        }

        /* Footer CTA */
        .pickup-actions-footer {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-top: 4px;
          padding-bottom: 24px;
        }

        .pickup-primary-confirm-btn {
          width: 100%;
          height: 54px;
          border-radius: 18px;
          background: #0B6B4A;
          color: white;
          font-size: 15px;
          font-weight: 700;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          box-shadow: 0 4px 16px rgba(11, 107, 74, 0.35);
          cursor: pointer;
          transition: transform 0.15s ease, background 0.15s ease;
        }

        .pickup-primary-confirm-btn:hover {
          background: #09573B;
          transform: translateY(-1px);
        }

        .pickup-primary-confirm-btn:active {
          transform: translateY(0);
        }

        .pickup-cancel-btn {
          width: 100%;
          background: transparent;
          border: none;
          color: #EF4444;
          font-size: 13px;
          font-weight: 600;
          padding: 8px;
          cursor: pointer;
          text-align: center;
        }
      `}</style>
    </div>
  );
}
