import React, { useState } from 'react';
import { ArrowLeft, Check, ArrowRight } from 'lucide-react';

export default function Step2Category({ 
  t, 
  photoUrl, 
  initialCategory = 'pcb',
  onNext, 
  onBack, 
  onRetake 
}) {
  const [selectedCategory, setSelectedCategory] = useState(initialCategory || 'pcb');

  const categories = [
    {
      id: 'crt_tv',
      title: t.itemCrtTv || 'CRT TV',
      sub: null,
      image: '/assets/Kabadiwala_Connect_Step2_Category_UI_Asset_Pack/01_category_illustrations/crt_tv_reference.jpg'
    },
    {
      id: 'lcd_display',
      title: t.itemLcd || 'LCD Display',
      sub: null,
      image: '/assets/Kabadiwala_Connect_Step2_Category_UI_Asset_Pack/01_category_illustrations/lcd_display_reference.jpg'
    },
    {
      id: 'pcb',
      title: t.itemPcb || 'PCB',
      sub: t.itemPcbSub ? `(${t.itemPcbSub})` : '(Circuit Board)',
      image: '/assets/Kabadiwala_Connect_Step2_Category_UI_Asset_Pack/01_category_illustrations/pcb_circuit_board_reference.jpg'
    },
    {
      id: 'cables_wires',
      title: t.itemCables || 'Cables & Wires',
      sub: null,
      image: '/assets/Kabadiwala_Connect_Step2_Category_UI_Asset_Pack/01_category_illustrations/cables_wires_reference.jpg'
    },
    {
      id: 'car_battery',
      title: t.itemBattery || 'Car Battery',
      sub: null,
      image: '/assets/Kabadiwala_Connect_Step2_Category_UI_Asset_Pack/01_category_illustrations/car_battery_reference.jpg'
    },
    {
      id: 'motor_magnet',
      title: t.itemMotor || 'Motor & Magnet',
      sub: null,
      image: '/assets/Kabadiwala_Connect_Step2_Category_UI_Asset_Pack/01_category_illustrations/motor_magnet_reference.jpg'
    },
    {
      id: 'mixed_plastic',
      title: t.itemPlastic || 'Mixed Plastic',
      sub: null,
      image: '/assets/Kabadiwala_Connect_Step2_Category_UI_Asset_Pack/01_category_illustrations/mixed_plastic_reference.jpg'
    },
    {
      id: 'other_items',
      title: t.itemOther || 'Other Items',
      sub: null,
      image: '/assets/Kabadiwala_Connect_Step2_Category_UI_Asset_Pack/01_category_illustrations/other_items_reference.jpg'
    }
  ];

  const handleContinue = () => {
    const selectedItem = categories.find(c => c.id === selectedCategory);
    if (onNext) {
      onNext({
        categoryId: selectedCategory,
        categoryName: selectedItem ? selectedItem.title : (t.itemPcb || 'PCB'),
        categorySub: selectedItem?.sub || '',
        categoryImage: selectedItem?.image
      });
    }
  };

  const displayThumbnail = photoUrl || '/assets/Kabadiwala_Connect_Step2_Category_UI_Asset_Pack/01_category_illustrations/captured_photo_thumbnail.jpg';

  return (
    <div className="step2-category-screen page-fade-enter">
      {/* Top Header */}
      <div className="step-header">
        <button className="step-back-btn" onClick={onBack} aria-label="Go Back">
          <ArrowLeft size={22} color="#101A24" strokeWidth={2.2} />
        </button>
        <div className="step-header-text">
          <h1 className="step-title">{t.selectCategoryTitle || 'Select Scrap Category'}</h1>
        </div>
      </div>

      {/* 5-Step Progress Stepper (Step 1 Complete, Step 2 Active) */}
      <div className="stepper-container">
        <div className="stepper-line" />
        <div className="stepper-line-progress" style={{ width: '25%' }} />
        <div className="stepper-steps">
          {/* Step 1: Photo (Done) */}
          <div className="stepper-item completed">
            <div className="stepper-circle completed">
              <Check size={14} color="#FFFFFF" strokeWidth={3} />
            </div>
            <span className="stepper-label active-text">{t.stepPhoto || 'Photo'}</span>
          </div>

          {/* Step 2: Category (Active) */}
          <div className="stepper-item active">
            <div className="stepper-circle active">
              <span>2</span>
            </div>
            <span className="stepper-label active-text">{t.stepCategory || 'Category'}</span>
          </div>

          {/* Step 3: Weight */}
          <div className="stepper-item">
            <div className="stepper-circle">
              <span>3</span>
            </div>
            <span className="stepper-label">{t.stepWeight || 'Weight'}</span>
          </div>

          {/* Step 4: Value */}
          <div className="stepper-item">
            <div className="stepper-circle">
              <span>4</span>
            </div>
            <span className="stepper-label">{t.stepValue || 'Value'}</span>
          </div>

          {/* Step 5: Buyer */}
          <div className="stepper-item">
            <div className="stepper-circle">
              <span>5</span>
            </div>
            <span className="stepper-label">{t.stepBuyer || 'Buyer'}</span>
          </div>
        </div>
      </div>

      {/* Captured Photo Preview Card */}
      <div className="captured-photo-card">
        <img 
          src={displayThumbnail} 
          alt="Captured scrap preview" 
          className="captured-thumbnail-img"
        />
        <div className="captured-info">
          <h4 className="captured-title">{t.capturedPhotoTitle || 'Captured Photo'}</h4>
          <p className="captured-subtitle">{t.capturedPhotoSub || 'Tap to retake or change'}</p>
        </div>
        <button 
          className="change-photo-btn"
          onClick={onRetake || onBack}
          aria-label="Change Photo"
        >
          {t.changeBtn || 'Change'}
        </button>
      </div>

      {/* Section Title */}
      <div className="category-section-header">
        <h2 className="category-heading">{t.whatTypeOfScrap || 'What type of scrap is this?'}</h2>
        <p className="category-subheading">{t.chooseClosestCategory || 'Choose the closest category.'}</p>
      </div>

      {/* 8-Card Category Grid */}
      <div className="category-grid">
        {categories.map((cat) => {
          const isSelected = selectedCategory === cat.id;
          return (
            <div
              key={cat.id}
              className={`category-card ${isSelected ? 'selected' : ''}`}
              onClick={() => setSelectedCategory(cat.id)}
            >
              {isSelected && (
                <div className="category-check-badge">
                  <Check size={12} color="#FFFFFF" strokeWidth={3} />
                </div>
              )}
              <div className="category-img-wrapper">
                <img 
                  src={cat.image} 
                  alt={cat.title} 
                  className="category-img"
                />
              </div>
              <div className="category-name-block">
                <span className="category-name">{cat.title}</span>
                {cat.sub && <span className="category-subname">{cat.sub}</span>}
              </div>
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
          <span>{t.nextBtn || 'Next'}</span>
          <ArrowRight size={18} strokeWidth={2.5} />
        </button>
      </div>
    </div>
  );
}
