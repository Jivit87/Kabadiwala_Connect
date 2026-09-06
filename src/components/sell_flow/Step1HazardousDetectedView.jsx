import React, { useState } from 'react';
import { ArrowLeft, Zap, Image as ImageIcon, Camera, AlertTriangle } from 'lucide-react';
import HazardousBatteryModal from './HazardousBatteryModal';

export default function Step1HazardousDetectedView({
  t,
  onNext,
  onBack
}) {
  const [showModal, setShowModal] = useState(true);

  const steps = [
    { num: 1, label: t.stepPhoto || 'Photo', active: true },
    { num: 2, label: t.stepCategory || 'Category', active: false },
    { num: 3, label: t.stepWeight || 'Weight', active: false },
    { num: 4, label: t.stepValue || 'Value', active: false },
    { num: 5, label: t.stepBuyer || 'Buyer', active: false }
  ];

  const handleGotIt = () => {
    setShowModal(false);
    if (onNext) {
      onNext({
        photoUrl: '/assets/Kabadiwala_Connect_Hazardous_Battery_Detected_UI_Asset_Pack/02_app_assets/camera_preview_reference.png',
        hazardDetected: true,
        detectedType: 'Lithium-ion Battery',
        categoryId: 'car_battery',
        categoryName: t.itemBattery || 'Car Battery'
      });
    }
  };

  return (
    <div className="step1-photo-screen page-fade-enter">
      {/* Top Header */}
      <div className="step-header">
        <button className="step-back-btn" onClick={onBack} aria-label="Go Back">
          <ArrowLeft size={22} color="#101A24" strokeWidth={2.2} />
        </button>
        <div className="step-header-text">
          <h1 className="step-title">{t.takePhotoTitle || 'Take a photo of your scrap'}</h1>
          <p className="step-subtitle">{t.takePhotoSub || 'Make sure the item is clearly visible'}</p>
        </div>
      </div>

      {/* 5-Step Progress Stepper */}
      <div className="stepper-container">
        <div className="stepper-line" />
        <div className="stepper-steps">
          {steps.map((step) => (
            <div key={step.num} className={`stepper-item ${step.active ? 'active' : ''}`}>
              <div className="stepper-circle">
                <span>{step.num}</span>
              </div>
              <span className="stepper-label">{step.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Camera Viewfinder with AI Battery Bounding Box */}
      <div className="camera-viewfinder-container">
        <div className="camera-viewfinder">
          <img 
            src="/assets/Kabadiwala_Connect_Hazardous_Battery_Detected_UI_Asset_Pack/02_app_assets/camera_preview_reference.png" 
            alt="Scrap Camera Feed with Battery" 
            className="camera-feed-img"
          />

          {/* Viewfinder 4 White Corner Brackets */}
          <div className="corner-bracket top-left" />
          <div className="corner-bracket top-right" />
          <div className="corner-bracket bottom-left" />
          <div className="corner-bracket bottom-right" />

          {/* AI Battery Detection Bounding Box Overlay */}
          <div className="ai-detected-bounding-box">
            <div className="ai-battery-detected-badge">
              <span className="battery-icon-dot">🔋</span>
              <span>{t.batteryDetectedBanner || 'Battery detected'}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Camera Controls Bar */}
      <div className="camera-controls-bar">
        <button className="control-action-btn" aria-label="Flash">
          <div className="control-icon-circle">
            <Zap size={22} color="#101A24" strokeWidth={2.2} />
          </div>
          <span className="control-label-title">{t.flashLabel || 'Flash'}</span>
          <span className="control-label-sub">{t.flashOff || 'Off'}</span>
        </button>

        <button 
          className="shutter-btn-outer"
          onClick={() => setShowModal(true)}
          aria-label="Capture Photo"
        >
          <div className="shutter-btn-inner" />
        </button>

        <button className="control-action-btn" aria-label="Gallery">
          <div className="control-icon-circle">
            <ImageIcon size={22} color="#101A24" strokeWidth={2.2} />
          </div>
          <span className="control-label-title">{t.galleryLabel || 'Gallery'}</span>
          <span className="control-label-sub">{t.gallerySub || 'Choose from photos'}</span>
        </button>
      </div>

      {/* Hazardous Battery Bottom Sheet Modal */}
      {showModal && (
        <HazardousBatteryModal
          t={t}
          onClose={() => setShowModal(false)}
          onGotIt={handleGotIt}
        />
      )}
    </div>
  );
}
