import React, { useState, useRef } from 'react';
import { ArrowLeft, Zap, ZapOff, Image as ImageIcon, Camera, Lightbulb } from 'lucide-react';
import { haptics } from '../../utils/haptics';

export default function Step1TakePhoto({ t, onNext, onBack }) {
  const [flashMode, setFlashMode] = useState(false);
  const [isCapturing, setIsCapturing] = useState(false);
  const [capturedPhoto, setCapturedPhoto] = useState(null);
  const fileInputRef = useRef(null);

  const steps = [
    { num: 1, label: 'Photo', active: true },
    { num: 2, label: 'Category', active: false },
    { num: 3, label: 'Weight', active: false },
    { num: 4, label: 'Value', active: false },
    { num: 5, label: 'Buyer', active: false }
  ];

  const handleCapture = () => {
    haptics.cameraShutter();
    setIsCapturing(true);
    setTimeout(() => {
      setIsCapturing(false);
      const defaultPhoto = '/assets/Kabadiwala_Connect_Hazardous_Battery_Detected_UI_Asset_Pack/02_app_assets/camera_preview_reference.png';
      if (onNext) {
        onNext({
          photoUrl: capturedPhoto || defaultPhoto,
          flashUsed: flashMode
        });
      }
    }, 450);
  };

  const handleGalleryClick = () => {
    haptics.tapTick();
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setCapturedPhoto(event.target.result);
        if (onNext) {
          onNext({
            photoUrl: event.target.result,
            flashUsed: flashMode
          });
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="step1-photo-screen page-fade-enter">
      {/* Hidden file input for custom gallery uploads */}
      <input 
        type="file" 
        ref={fileInputRef} 
        onChange={handleFileChange} 
        accept="image/*" 
        style={{ display: 'none' }} 
      />

      {/* Top Header */}
      <div className="step-header">
        <button className="step-back-btn" onClick={onBack} aria-label="Go Back">
          <ArrowLeft size={22} color="#101A24" strokeWidth={2.2} />
        </button>
        <div className="step-header-text">
          <h1 className="step-title">Take a photo of your scrap</h1>
          <p className="step-subtitle">Make sure the item is clearly visible</p>
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

      {/* Camera Viewfinder */}
      <div className="camera-viewfinder-container">
        <div className={`camera-viewfinder ${isCapturing ? 'shutter-flash' : ''}`}>
          {/* Simulated Live Camera Feed */}
          <img 
            src={capturedPhoto || "/assets/Kabadiwala_Connect_Step1_TakePhoto_UI_Asset_Pack/01_camera_illustration/scrap_photo_reference.jpg"} 
            alt="Scrap Camera Feed" 
            className="camera-feed-img"
          />

          {/* Flash simulated light flare */}
          {flashMode && <div className="flash-active-indicator" title="Flash Enabled" />}

          {/* Viewfinder 4 White Corner Brackets */}
          <div className="corner-bracket top-left" />
          <div className="corner-bracket top-right" />
          <div className="corner-bracket bottom-left" />
          <div className="corner-bracket bottom-right" />

          {/* Frosted Glass Overlay Hint */}
          <div className="viewfinder-pill-overlay">
            <Camera size={16} color="#FFFFFF" strokeWidth={2.2} />
            <span>Position your scrap within the frame</span>
          </div>

          {/* Flash screen overlay during capture */}
          {isCapturing && <div className="shutter-flash-overlay" />}
        </div>
      </div>

      {/* Camera Controls Bar */}
      <div className="camera-controls-bar">
        {/* Flash Toggle */}
        <button 
          className="control-action-btn"
          onClick={() => setFlashMode(!flashMode)}
          aria-label="Toggle Flash"
        >
          <div className={`control-icon-circle ${flashMode ? 'active-flash' : ''}`}>
            {flashMode ? (
              <Zap size={22} color="#D89B2B" strokeWidth={2.2} />
            ) : (
              <ZapOff size={22} color="#101A24" strokeWidth={2.2} />
            )}
          </div>
          <span className="control-label-title">Flash</span>
          <span className="control-label-sub">{flashMode ? 'On' : 'Off'}</span>
        </button>

        {/* Central Shutter Button */}
        <button 
          className="shutter-btn-outer"
          onClick={handleCapture}
          aria-label="Capture Photo"
        >
          <div className="shutter-btn-inner" />
        </button>

        {/* Gallery / Photos */}
        <button 
          className="control-action-btn"
          onClick={handleGalleryClick}
          aria-label="Choose from Gallery"
        >
          <div className="control-icon-circle">
            <ImageIcon size={22} color="#101A24" strokeWidth={2.2} />
          </div>
          <span className="control-label-title">Gallery</span>
          <span className="control-label-sub">Choose from photos</span>
        </button>
      </div>

      {/* Tip Banner */}
      <div className="step1-tip-card">
        <div className="tip-icon-circle">
          <Lightbulb size={20} color="#FFFFFF" strokeWidth={2.2} />
        </div>
        <div className="tip-text-content">
          <h4 className="tip-heading">Take a clear photo</h4>
          <p className="tip-body">Good lighting and a clear view helps get a better price.</p>
        </div>
      </div>
    </div>
  );
}
