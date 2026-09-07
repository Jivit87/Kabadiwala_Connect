import React, { useState, useRef } from 'react';
import { ArrowLeft, Zap, ZapOff, Image as ImageIcon, Camera, Lightbulb, Check, Sparkles } from 'lucide-react';
import { haptics } from '../../utils/haptics';

export default function Step1TakePhoto({ t = {}, onNext, onBack }) {
  const [flashMode, setFlashMode] = useState(false);
  const [isCapturing, setIsCapturing] = useState(false);
  const [capturedPhoto, setCapturedPhoto] = useState('/assets/Kabadiwala_Connect_Step1_TakePhoto_UI_Asset_Pack/01_camera_illustration/scrap_photo_reference.jpg');
  const [selectedSample, setSelectedSample] = useState('pcb');
  const fileInputRef = useRef(null);

  const steps = [
    { num: 1, label: t.stepPhoto || 'Photo', active: true },
    { num: 2, label: t.stepCategory || 'Category', active: false },
    { num: 3, label: t.stepWeight || 'Weight', active: false },
    { num: 4, label: t.stepValue || 'Value', active: false },
    { num: 5, label: t.stepBuyer || 'Buyer', active: false }
  ];

  const sampleScrapList = [
    {
      id: 'pcb',
      name: t.itemPcb || 'PCB Board',
      isBattery: false,
      categoryName: 'PCB (Circuit Board)',
      image: '/assets/Kabadiwala_Connect_Step1_TakePhoto_UI_Asset_Pack/01_camera_illustration/scrap_photo_reference.jpg'
    },
    {
      id: 'battery',
      name: t.itemBattery || 'Car Battery',
      isBattery: true,
      categoryName: 'Car Battery',
      image: '/assets/Kabadiwala_Connect_Hazardous_Battery_Detected_UI_Asset_Pack/02_app_assets/camera_preview_reference.png'
    },
    {
      id: 'cables',
      name: t.itemCables || 'Copper Cables',
      isBattery: false,
      categoryName: 'Cables & Wires',
      image: '/assets/Kabadiwala_Connect_Todays_Prices_UI_Asset_Pack/02_app_assets/cables_wires_thumbnail_reference.png'
    },
    {
      id: 'lcd',
      name: t.itemLcd || 'LCD Display',
      isBattery: false,
      categoryName: 'LCD Display',
      image: '/assets/Kabadiwala_Connect_Todays_Prices_UI_Asset_Pack/02_app_assets/lcd_display_thumbnail_reference.png'
    }
  ];

  const handleSelectSample = (sample) => {
    haptics.tapTick();
    setSelectedSample(sample.id);
    setCapturedPhoto(sample.image);
  };

  const handleCapture = () => {
    haptics.cameraShutter();
    setIsCapturing(true);
    setTimeout(() => {
      setIsCapturing(false);
      const isBattery = selectedSample === 'battery';
      if (onNext) {
        onNext({
          photoUrl: capturedPhoto,
          flashUsed: flashMode,
          isHazardous: isBattery,
          categoryId: isBattery ? 'car_battery' : selectedSample,
          categoryName: isBattery ? 'Car Battery' : selectedSample === 'cables' ? 'Cables & Wires' : selectedSample === 'lcd' ? 'LCD Display' : 'PCB (Circuit Board)'
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
        setSelectedSample('custom');
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

      {/* Camera Viewfinder */}
      <div className="camera-viewfinder-container">
        <div className={`camera-viewfinder ${isCapturing ? 'shutter-flash' : ''}`}>
          {/* Simulated Live Camera Feed */}
          <img 
            src={capturedPhoto} 
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
            <span>{t.positionScrapHint || 'Position your scrap within the frame'}</span>
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
          <span className="control-label-title">{t.flashLabel || 'Flash'}</span>
          <span className="control-label-sub">{flashMode ? (t.flashOn || 'On') : (t.flashOff || 'Off')}</span>
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
          <span className="control-label-title">{t.galleryLabel || 'Gallery'}</span>
          <span className="control-label-sub">{t.gallerySub || 'Choose from photos'}</span>
        </button>
      </div>

      {/* Quick Sample Selector Carousel */}
      <div className="sample-picker-section">
        <span className="sample-picker-title">{t.chooseSamplePhoto || 'Or choose a sample scrap item:'}</span>
        <div className="sample-tiles-row">
          {sampleScrapList.map((item) => {
            const isSelected = selectedSample === item.id;
            return (
              <button
                key={item.id}
                className={`sample-tile-btn ${isSelected ? 'selected' : ''}`}
                onClick={() => handleSelectSample(item)}
              >
                <img src={item.image} alt={item.name} className="sample-thumb" />
                <span className="sample-name">{item.name}</span>
                {isSelected && (
                  <div className="sample-checked-dot">
                    <Check size={10} color="#FFFFFF" strokeWidth={3.5} />
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Tip Banner */}
      <div className="step1-tip-card">
        <div className="tip-icon-circle">
          <Lightbulb size={20} color="#FFFFFF" strokeWidth={2.2} />
        </div>
        <div className="tip-text-content">
          <h4 className="tip-heading">{t.tipClearPhotoTitle || 'Take a clear photo'}</h4>
          <p className="tip-body">{t.tipClearPhotoDesc || 'Good lighting and a clear view help our AI determine exact value.'}</p>
        </div>
      </div>

      <style>{`
        .sample-picker-section {
          margin: 10px 16px 4px 16px;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .sample-picker-title {
          font-size: 11px;
          font-weight: 700;
          color: #6B7280;
          text-transform: uppercase;
          letter-spacing: 0.3px;
        }

        .sample-tiles-row {
          display: flex;
          gap: 8px;
          overflow-x: auto;
          padding-bottom: 4px;
          scrollbar-width: none;
        }

        .sample-tiles-row::-webkit-scrollbar {
          display: none;
        }

        .sample-tile-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          background: #FFFFFF;
          border: 1.5px solid #E2E8DC;
          border-radius: 12px;
          padding: 4px 8px;
          cursor: pointer;
          white-space: nowrap;
          flex-shrink: 0;
          position: relative;
          transition: all 0.15s ease;
        }

        .sample-tile-btn:hover {
          border-color: #0B6B4A;
        }

        .sample-tile-btn.selected {
          border-color: #0B6B4A;
          background: #EEF6ED;
        }

        .sample-thumb {
          width: 24px;
          height: 24px;
          border-radius: 6px;
          object-fit: cover;
        }

        .sample-name {
          font-size: 12px;
          font-weight: 600;
          color: #101A24;
        }

        .sample-checked-dot {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: #0B6B4A;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-left: 2px;
        }
      `}</style>
    </div>
  );
}
