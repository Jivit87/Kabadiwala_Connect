import React, { useState } from 'react';
import { 
  ArrowLeft, Volume2, MapPin, ChevronDown, Clock, 
  ChevronRight, ArrowUpRight, ArrowDownRight, Minus, 
  Info, Home, Calendar, Camera, Tag, User, X
} from 'lucide-react';

export default function TodaysPricesView({ 
  t, 
  currentLocation = 'Rohini, Delhi', 
  onBack, 
  onSelectCategory,
  onNavigateTab
}) {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [selectedItemDetail, setSelectedItemDetail] = useState(null);

  const priceItems = [
    {
      id: 'pcb',
      title: 'PCB',
      sub: 'Circuit Board',
      price: 128,
      trend: 'up',
      change: '12%',
      image: '/assets/Kabadiwala_Connect_Todays_Prices_UI_Asset_Pack/02_app_assets/pcb_thumbnail_reference.png',
      history: [110, 114, 118, 120, 122, 125, 128]
    },
    {
      id: 'cables_wires',
      title: 'Cables & Wires',
      sub: null,
      price: 72,
      trend: 'down',
      change: '8%',
      image: '/assets/Kabadiwala_Connect_Todays_Prices_UI_Asset_Pack/02_app_assets/cables_wires_thumbnail_reference.png',
      history: [80, 78, 79, 76, 75, 74, 72]
    },
    {
      id: 'car_battery',
      title: 'Car Battery',
      sub: null,
      price: 62,
      trend: 'up',
      change: '5%',
      image: '/assets/Kabadiwala_Connect_Todays_Prices_UI_Asset_Pack/02_app_assets/car_battery_thumbnail_reference.png',
      history: [58, 59, 59, 60, 61, 61, 62]
    },
    {
      id: 'crt_tv',
      title: 'CRT TV',
      sub: null,
      price: 18,
      trend: 'down',
      change: '6%',
      image: '/assets/Kabadiwala_Connect_Todays_Prices_UI_Asset_Pack/02_app_assets/crt_tv_thumbnail_reference.png',
      history: [22, 21, 20, 20, 19, 19, 18]
    },
    {
      id: 'lcd_display',
      title: 'LCD Display',
      sub: null,
      price: 42,
      trend: 'stable',
      change: 'Stable',
      image: '/assets/Kabadiwala_Connect_Todays_Prices_UI_Asset_Pack/02_app_assets/lcd_display_thumbnail_reference.png',
      history: [42, 42, 41, 42, 43, 42, 42]
    },
    {
      id: 'motor_magnet',
      title: 'Motor & Magnet',
      sub: null,
      price: 95,
      trend: 'up',
      change: '9%',
      image: '/assets/Kabadiwala_Connect_Todays_Prices_UI_Asset_Pack/02_app_assets/motor_magnet_thumbnail_reference.png',
      history: [86, 88, 89, 90, 92, 93, 95]
    }
  ];

  const handleSpeakPrices = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsPlayingAudio(true);
      const text = `Today's scrap rates in ${currentLocation}: PCB is 128 rupees per kilogram, Cables and wires are 72 rupees, Car Battery is 62 rupees, LCD Display is 42 rupees, and Motor magnet is 95 rupees per kilogram.`;
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.95;
      utterance.onend = () => setIsPlayingAudio(false);
      utterance.onerror = () => setIsPlayingAudio(false);
      window.speechSynthesis.speak(utterance);
    } else {
      setIsPlayingAudio(true);
      setTimeout(() => setIsPlayingAudio(false), 2000);
    }
  };

  return (
    <div className="todays-prices-screen page-fade-enter">
      {/* Scrollable Content Container */}
      <div className="prices-scroll-content">
        {/* Top Back Navigation Arrow */}
        {onBack && (
          <div className="prices-top-nav">
            <button className="step-back-btn" onClick={onBack} aria-label="Go Back">
              <ArrowLeft size={22} color="#101A24" strokeWidth={2.2} />
            </button>
          </div>
        )}

        {/* Title & Audio Button Header Row */}
        <div className="prices-header-row">
          <div className="prices-title-block">
            <h1 className="prices-main-title">Today’s Prices</h1>
            <p className="prices-main-sub">Current scrap rates near you</p>
          </div>

          <button 
            className={`prices-audio-btn ${isPlayingAudio ? 'playing' : ''}`}
            onClick={handleSpeakPrices}
            aria-label="Listen to prices aloud"
          >
            <Volume2 size={22} color="#0F52BA" strokeWidth={2.4} />
          </button>
        </div>

        {/* Location Selector Pill */}
        <div className="prices-location-pill">
          <MapPin size={15} color="#0B6B4A" />
          <span className="prices-location-name">{currentLocation}</span>
          <ChevronDown size={14} color="#101A24" />
        </div>

        {/* Updated Today Context Line */}
        <div className="prices-updated-meta">
          <Clock size={14} color="#6E7782" />
          <span>Updated today • Based on recent local transactions</span>
        </div>

        {/* 6-Row Main Price List Card */}
        <div className="prices-list-card">
          {priceItems.map((item) => (
            <div 
              key={item.id} 
              className="price-list-row"
              onClick={() => setSelectedItemDetail(item)}
            >
              <div className="price-item-thumb-wrap">
                <img src={item.image} alt={item.title} className="price-item-thumb-img" />
              </div>

              <div className="price-item-name-col">
                <h3 className="price-item-title">{item.title}</h3>
                {item.sub && <span className="price-item-sub">{item.sub}</span>}
              </div>

              <div className="price-item-rate-col">
                <span className="price-item-value">₹{item.price}/kg</span>
                
                <div className={`price-trend-tag ${item.trend}`}>
                  {item.trend === 'up' && <ArrowUpRight size={13} color="#0B6B4A" strokeWidth={2.5} />}
                  {item.trend === 'down' && <ArrowDownRight size={13} color="#C94C4C" strokeWidth={2.5} />}
                  {item.trend === 'stable' && <Minus size={13} color="#6E7782" strokeWidth={2.5} />}
                  <span>{item.change}</span>
                </div>
              </div>

              <ChevronRight size={18} color="#CBD5E1" className="price-row-arrow" />
            </div>
          ))}
        </div>

        {/* Info Disclaimer Banner */}
        <div className="prices-info-banner">
          <Info size={18} color="#0B6B4A" className="info-banner-icon" />
          <div className="info-banner-text">
            <h4 className="info-banner-title">Based on the last 42 local transactions</h4>
            <p className="info-banner-desc">Prices may vary by condition, quantity and buyer.</p>
          </div>
        </div>
      </div>

      {/* Item 7-Day Trend Detail Modal */}
      {selectedItemDetail && (
        <div className="price-modal-backdrop" onClick={() => setSelectedItemDetail(null)}>
          <div className="price-modal-sheet" onClick={(e) => e.stopPropagation()}>
            <div className="modal-sheet-header">
              <div className="sheet-item-info">
                <img src={selectedItemDetail.image} alt={selectedItemDetail.title} className="modal-thumb" />
                <div>
                  <h3>{selectedItemDetail.title}</h3>
                  <p>7-Day Market Trend • Current: ₹{selectedItemDetail.price}/kg</p>
                </div>
              </div>
              <button className="modal-close-btn" onClick={() => setSelectedItemDetail(null)}>
                <X size={18} color="#101A24" />
              </button>
            </div>

            {/* Sparkline Visual */}
            <div className="sparkline-container">
              <div className="sparkline-bars">
                {selectedItemDetail.history.map((val, i) => (
                  <div key={i} className="sparkline-col">
                    <div 
                      className="sparkline-bar" 
                      style={{ height: `${(val / 135) * 100}%` }}
                    />
                    <span className="sparkline-day">D{i + 1}</span>
                    <span className="sparkline-val">₹{val}</span>
                  </div>
                ))}
              </div>
            </div>

            <button 
              className="step-primary-cta-btn"
              onClick={() => {
                const item = selectedItemDetail;
                setSelectedItemDetail(null);
                if (onSelectCategory) onSelectCategory(item.id);
              }}
            >
              <span>Sell {selectedItemDetail.title} Now →</span>
            </button>
          </div>
        </div>
      )}

      {/* Fixed 5-Tab Navigation Bar */}
      <div className="home-nav-bar">
        <button 
          className="nav-tab"
          onClick={() => onNavigateTab ? onNavigateTab('home') : onBack && onBack()}
        >
          <Home size={22} className="tab-icon" />
          <span>Home</span>
        </button>

        <button 
          className="nav-tab"
          onClick={() => onNavigateTab ? onNavigateTab('history') : onBack && onBack()}
        >
          <Calendar size={22} className="tab-icon" />
          <span>Bookings</span>
        </button>

        {/* Center Floating Camera FAB with Pulse Ring */}
        <button 
          className="nav-fab-camera camera-glow-btn" 
          onClick={() => onNavigateTab ? onNavigateTab('step1_photo') : onBack && onBack()}
          aria-label="Camera Scan"
        >
          <Camera size={26} color="#FFFFFF" />
          <span className="fab-label">Camera</span>
        </button>

        <button className="nav-tab active">
          <Tag size={22} className="tab-icon" />
          <span>Rates</span>
        </button>

        <button 
          className="nav-tab"
          onClick={() => onNavigateTab ? onNavigateTab('profile') : onBack && onBack()}
        >
          <User size={22} className="tab-icon" />
          <span>Profile</span>
        </button>
      </div>
    </div>
  );
}
