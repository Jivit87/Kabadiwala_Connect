import React from 'react';
import { 
  AlertTriangle, X, Flame, Hand, Recycle, Shield, Check, ArrowRight 
} from 'lucide-react';

export default function HazardousBatteryModal({
  onClose,
  onGotIt
}) {
  return (
    <div className="hazard-modal-backdrop" onClick={onClose}>
      <div className="hazard-bottom-sheet page-slide-up" onClick={(e) => e.stopPropagation()}>
        {/* Handle */}
        <div className="sheet-drag-handle" />

        {/* Close Button */}
        <button className="hazard-close-btn" onClick={onClose} aria-label="Close hazard alert">
          <X size={18} color="#101A24" strokeWidth={2.4} />
        </button>

        {/* Header with Hazard Icon & Title */}
        <div className="hazard-header-block">
          <div className="hazard-icon-circle">
            <AlertTriangle size={28} color="#EA580C" strokeWidth={2.4} />
          </div>
          
          <h2 className="hazard-title">Hazardous item detected</h2>
          <p className="hazard-sub">
            A battery has been detected in your image. Please follow the safety guidelines below.
          </p>
        </div>

        {/* Detected Item Card */}
        <div className="detected-item-card">
          <div className="detected-item-thumb-wrap">
            <img 
              src="/assets/Kabadiwala_Connect_Hazardous_Battery_Detected_UI_Asset_Pack/02_app_assets/battery_thumbnail_reference.png" 
              alt="Detected Lithium-ion Battery" 
              className="detected-item-img"
            />
          </div>
          <div className="detected-item-info">
            <span className="detected-item-tag">Detected item</span>
            <h3 className="detected-item-name">Lithium-ion Battery</h3>
            <p className="detected-item-desc">Common in laptops, phones and other electronics.</p>
          </div>
        </div>

        {/* Safety Guidelines Card */}
        <div className="safety-guidelines-box">
          <div className="guidelines-card-header">
            <div className="shield-icon-circle">
              <Shield size={14} color="#EA580C" strokeWidth={2.5} />
            </div>
            <h4 className="guidelines-heading">Safety guidelines</h4>
          </div>

          <div className="guidelines-list">
            {/* Rule 1 */}
            <div className="guideline-row">
              <div className="guideline-icon-wrap flame">
                <Flame size={16} color="#EA580C" strokeWidth={2.4} />
              </div>
              <div className="guideline-text">
                <strong>Keep away from heat and fire</strong>
                <p>Do not expose batteries to high temperatures.</p>
              </div>
            </div>

            {/* Rule 2 */}
            <div className="guideline-row">
              <div className="guideline-icon-wrap hand">
                <Hand size={16} color="#D97706" strokeWidth={2.4} />
              </div>
              <div className="guideline-text">
                <strong>Handle with care</strong>
                <p>Avoid handling damaged or leaking batteries directly.</p>
              </div>
            </div>

            {/* Rule 3 */}
            <div className="guideline-row">
              <div className="guideline-icon-wrap recycle">
                <Recycle size={16} color="#0B6B4A" strokeWidth={2.4} />
              </div>
              <div className="guideline-text">
                <strong>Dispose safely</strong>
                <p>Keep in a dry place and hand over to a verified collector or recycler.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Got It Primary CTA */}
        <button 
          className="hazard-primary-cta"
          onClick={onGotIt || onClose}
        >
          <span>Got it</span>
        </button>
      </div>
    </div>
  );
}
