import React, { useState, useEffect } from 'react';
import { 
  Bell, MapPin, ChevronRight, Home, Calendar, Camera, 
  Tag, User, ChevronDown, ArrowRight, X, Zap, CheckCircle2,
  TrendingUp, RefreshCw, ShieldCheck, Sparkles, PhoneCall,
  Search, SlidersHorizontal, Award, ChevronLeft, Volume2
} from 'lucide-react';

export default function HomeView({ t, user, currentLang }) {
  const [activeTab, setActiveTab] = useState('home'); // 'home' | 'bookings' | 'rates' | 'profile'
  const [selectedLocation, setSelectedLocation] = useState('Rohini, Delhi');
  const [showLocationPicker, setShowLocationPicker] = useState(false);
  const [activeModal, setActiveModal] = useState(null); // 'pickup' | 'earnings' | 'history' | 'trends' | 'notifications'
  const [cameraActive, setCameraActive] = useState(false);
  const [cameraScanning, setCameraScanning] = useState(true);
  const [scanResult, setScanResult] = useState(null);
  
  // Hero Carousel State
  const [currentSlide, setCurrentSlide] = useState(0);

  // Live price ticker
  const [tickerIndex, setTickerIndex] = useState(0);

  const heroSlides = [
    {
      id: 0,
      title: "Hassle-free\nScrap Collection",
      subtitle: "Schedule your\npickup in seconds.",
      btnText: "Request Pickup",
      image: "/assets/home/truck_hero.png",
      tag: "Verified Fleet"
    },
    {
      id: 1,
      title: "Instant AI\nRate Discovery",
      subtitle: "Scan circuit boards &\nget fair market cash.",
      btnText: "Scan Now",
      image: "/assets/home/icon_ewaste.png",
      tag: "AI Powered"
    },
    {
      id: 2,
      title: "Highest Payout\nGuaranteed",
      subtitle: "CPCB authorized partners\nwith zero middlemen.",
      btnText: "View Rates",
      image: "/assets/home/icon_sell_scrap.png",
      tag: "Best Rates"
    }
  ];

  const marketTickers = [
    "🔥 Copper Wire surged to ₹420/kg in Delhi NCR",
    "📈 PCB Motherboard Grade A buying at ₹340/kg",
    "⚡ Lithium-Ion Battery scrap steady at ₹185/kg",
    "✨ 14.5 kg e-waste recycled by Suresh today"
  ];

  const rateList = [
    { name: "Motherboards (Grade A)", category: "E-Waste", rate: "₹340 / kg", trend: "+4.5%", icon: "💻" },
    { name: "Copper Wiring (Clean)", category: "Metals", rate: "₹420 / kg", trend: "+2.1%", icon: "🔌" },
    { name: "Lithium-Ion Batteries", category: "Batteries", rate: "₹185 / kg", trend: "+1.2%", icon: "🔋" },
    { name: "Telecom & Server PCBs", category: "High Value", rate: "₹520 / kg", trend: "+6.8%", icon: "📡" },
    { name: "Mixed Mobile Scrap", category: "E-Waste", rate: "₹290 / kg", trend: "+0.5%", icon: "📱" },
    { name: "Aluminium Heatsinks", category: "Metals", rate: "₹145 / kg", trend: "-1.0%", icon: "⚙️" }
  ];

  const bookingsList = [
    {
      id: "BK-8821",
      partner: "EcoMet Recycling India",
      status: "Driver Arriving in 12 mins",
      material: "PCB & Electronic Scrap (14.5 kg)",
      estPayout: "₹4,640",
      time: "Today, 4:30 PM",
      active: true
    },
    {
      id: "BK-8790",
      partner: "GreenTech Urban Processors",
      status: "Completed & Paid via UPI",
      material: "Copper Cable & Adapters (8.2 kg)",
      estPayout: "₹2,870",
      time: "Yesterday, 2:15 PM",
      active: false
    }
  ];

  const locations = [
    'Rohini, Delhi',
    'Andheri West, Mumbai',
    'Koramangala, Bengaluru',
    'Kothrud, Pune',
    'Connaught Place, Delhi'
  ];

  // Auto carousel slide rotation
  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % heroSlides.length);
    }, 4500);
    return () => clearInterval(slideTimer);
  }, [heroSlides.length]);

  // Live ticker rotation
  useEffect(() => {
    const tickerTimer = setInterval(() => {
      setTickerIndex(prev => (prev + 1) % marketTickers.length);
    }, 4000);
    return () => clearInterval(tickerTimer);
  }, [marketTickers.length]);

  // Camera scan simulation trigger
  const handleOpenScanner = () => {
    setCameraActive(true);
    setCameraScanning(true);
    setScanResult(null);
    setTimeout(() => {
      setCameraScanning(false);
      setScanResult({
        detected: "Printed Circuit Board (Grade A) + Copper Core",
        confidence: "96.4%",
        weight: "12.8 kg",
        rate: "₹340 / kg",
        payout: "₹4,352"
      });
    }, 2200);
  };

  return (
    <div className="home-screen page-fade-enter">
      {/* Scrollable Main Area (Entire screen content scrolls smoothly together) */}
      <div className="home-scroll-container">
        {/* Live Market Marquee Bar */}
        <div className="live-ticker-bar">
          <span className="live-badge">LIVE</span>
          <div className="ticker-text page-fade-enter" key={tickerIndex}>
            {marketTickers[tickerIndex]}
          </div>
        </div>

        {/* Top Banner Header (Deep Forest Green) */}
        <div className="home-header">
          <div className="header-top-row">
            <div className="brand-header-group">
              <div className="logo-badge">
                <img 
                  src="/assets/home/logo_kc.png" 
                  alt="KC Mark" 
                />
              </div>
              <div className="brand-text-group">
                <div className="brand-title">
                  <strong className="bold-white">Kabadiwala</strong>
                  <span className="light-green"> Connect</span>
                </div>
                <div className="brand-tagline">Cleaner today, greener tomorrow</div>
              </div>
            </div>

            <button 
              className="notif-btn ring-animation" 
              onClick={() => setActiveModal('notifications')} 
              aria-label="Notifications"
            >
              <Bell size={19} color="#FFFFFF" />
              <span className="notif-dot pulse-dot" />
            </button>
          </div>

          {/* Greeting & Location Selector */}
          <div className="greeting-row">
            <div className="user-greeting">
              <h1>Hi, {user?.name || 'Rakesh'}!</h1>
              <p>Ready to make a difference today?</p>
            </div>

            <div 
              className="location-pill interactive-chip" 
              onClick={() => setShowLocationPicker(!showLocationPicker)}
            >
              <MapPin size={13} color="#FFFFFF" />
              <span>{selectedLocation}</span>
              <ChevronDown size={13} color="#FFFFFF" />
            </div>
          </div>

          {/* Location Dropdown Overlay */}
          {showLocationPicker && (
            <div className="location-dropdown slide-down-enter">
              {locations.map((loc) => (
                <div 
                  key={loc}
                  className={`loc-item ${selectedLocation === loc ? 'active' : ''}`}
                  onClick={() => {
                    setSelectedLocation(loc);
                    setShowLocationPicker(false);
                  }}
                >
                  <MapPin size={14} />
                  <span>{loc}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* VIEW: MAIN HOME TAB */}
        {activeTab === 'home' && (
          <div className="home-body tab-content-fade">
            {/* Animated Hero Pickup Card Carousel */}
            <div className="carousel-wrapper">
              <div className="hero-pickup-card animated-card">
                <span className="card-top-tag">{heroSlides[currentSlide].tag}</span>
                <div className="hero-card-left">
                  <h2 className="slide-title">{heroSlides[currentSlide].title}</h2>
                  <p className="slide-sub">{heroSlides[currentSlide].subtitle}</p>
                  <button 
                    className="request-pickup-btn elastic-button"
                    onClick={() => {
                      if (currentSlide === 1) handleOpenScanner();
                      else if (currentSlide === 2) setActiveTab('rates');
                      else setActiveModal('pickup');
                    }}
                  >
                    <span>{heroSlides[currentSlide].btnText}</span>
                    <ArrowRight size={16} color="#1C522D" strokeWidth={2.5} />
                  </button>
                </div>
                <div className="hero-card-right">
                  <img 
                    src={heroSlides[currentSlide].image} 
                    alt="Feature Graphic"
                    className="truck-illustration float-animation" 
                    key={currentSlide}
                  />
                </div>
              </div>

              {/* Interactive Carousel Pagination Dots */}
              <div className="carousel-dots">
                {heroSlides.map((s, idx) => (
                  <span 
                    key={s.id} 
                    className={`dot ${currentSlide === idx ? 'active' : ''}`}
                    onClick={() => setCurrentSlide(idx)}
                  />
                ))}
              </div>
            </div>

            {/* 2x2 Action Hub Grid with Spring Hover / Touch Effects */}
            <div className="hub-grid">
              {/* Card 1: Sell Scrap */}
              <div 
                className="grid-card card-mint hover-lift" 
                onClick={() => setActiveModal('pickup')}
              >
                <div className="card-header-icon">
                  <img 
                    src="/assets/home/icon_sell_scrap.png" 
                    alt="Sell Scrap" 
                    className="hub-icon-img"
                  />
                </div>
                <div className="card-info">
                  <h3>Sell Scrap</h3>
                  <p>Get the best price</p>
                </div>
                <div className="arrow-badge">
                  <ChevronRight size={15} color="#1C522D" />
                </div>
              </div>

              {/* Card 2: E-Waste Collection */}
              <div 
                className="grid-card card-warm hover-lift" 
                onClick={() => handleOpenScanner()}
              >
                <div className="card-header-icon">
                  <img 
                    src="/assets/home/icon_ewaste.png" 
                    alt="E-Waste Collection" 
                    className="hub-icon-img"
                  />
                </div>
                <div className="card-info">
                  <h3>E-Waste<br />Collection</h3>
                  <p>Pickup at your doorstep</p>
                </div>
                <div className="arrow-badge">
                  <ChevronRight size={15} color="#1C522D" />
                </div>
              </div>

              {/* Card 3: My Earnings */}
              <div 
                className="grid-card card-warm hover-lift" 
                onClick={() => setActiveModal('earnings')}
              >
                <div className="card-header-icon">
                  <img 
                    src="/assets/home/icon_earnings.png" 
                    alt="My Earnings" 
                    className="hub-icon-img"
                  />
                </div>
                <div className="card-info">
                  <h3>My Earnings</h3>
                  <p>Track your income</p>
                </div>
                <div className="arrow-badge">
                  <ChevronRight size={15} color="#1C522D" />
                </div>
              </div>

              {/* Card 4: View History */}
              <div 
                className="grid-card card-mint hover-lift" 
                onClick={() => setActiveModal('history')}
              >
                <div className="card-header-icon">
                  <img 
                    src="/assets/home/icon_history.png" 
                    alt="View History" 
                    className="hub-icon-img"
                  />
                </div>
                <div className="card-info">
                  <h3>View History</h3>
                  <p>Track your activity</p>
                </div>
                <div className="arrow-badge">
                  <ChevronRight size={15} color="#1C522D" />
                </div>
              </div>
            </div>

            {/* Full-Width Market Trends Card */}
            <div 
              className="market-trends-card hover-lift" 
              onClick={() => setActiveTab('rates')}
            >
              <div className="mt-left">
                <div className="mt-icon-wrapper pulse-soft">
                  <img 
                    src="/assets/home/icon_trends.png" 
                    alt="Market Trends" 
                    className="trends-icon-img"
                  />
                </div>
                <div className="mt-text">
                  <h3>Market Trends</h3>
                  <p>See what's in demand today</p>
                </div>
              </div>
              <div className="arrow-badge">
                <ChevronRight size={15} color="#1C522D" />
              </div>
            </div>
          </div>
        )}

        {/* VIEW: BOOKINGS TAB */}
        {activeTab === 'bookings' && (
          <div className="home-body tab-content-fade">
            <div className="section-title-row">
              <h2>Active Bookings</h2>
              <span className="count-pill">2 Total</span>
            </div>

            <div className="bookings-list">
              {bookingsList.map((bk) => (
                <div key={bk.id} className={`booking-card ${bk.active ? 'active-bk' : ''}`}>
                  <div className="bk-header">
                    <div>
                      <span className="bk-id">{bk.id}</span>
                      <h3 className="bk-partner">{bk.partner}</h3>
                    </div>
                    <span className={`bk-status-tag ${bk.active ? 'tag-live' : 'tag-done'}`}>
                      {bk.active ? '● Driver En Route' : '✓ Completed'}
                    </span>
                  </div>

                  <div className="bk-body">
                    <div className="bk-mat">📦 {bk.material}</div>
                    <div className="bk-time">🕒 {bk.time}</div>
                  </div>

                  <div className="bk-footer">
                    <div className="bk-payout">
                      <span>Estimated Payout:</span>
                      <strong>{bk.estPayout}</strong>
                    </div>
                    {bk.active && (
                      <button className="call-driver-btn" onClick={() => alert('Calling driver...')}>
                        <PhoneCall size={14} />
                        <span>Call Driver</span>
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* VIEW: RATES DIRECTORY TAB */}
        {activeTab === 'rates' && (
          <div className="home-body tab-content-fade">
            <div className="rates-header-box">
              <h2>Live Scrap Rates</h2>
              <p>Verified real-time CPCB market quotes for {selectedLocation}</p>
            </div>

            <div className="rates-table-list">
              {rateList.map((item, index) => (
                <div key={index} className="rate-table-row hover-lift">
                  <div className="rate-left">
                    <span className="rate-emoji">{item.icon}</span>
                    <div>
                      <h4>{item.name}</h4>
                      <span className="rate-cat-tag">{item.category}</span>
                    </div>
                  </div>
                  <div className="rate-right">
                    <div className="rate-val">{item.rate}</div>
                    <span className={`rate-trend ${item.trend.startsWith('+') ? 'up' : 'down'}`}>
                      {item.trend}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* VIEW: PROFILE TAB */}
        {activeTab === 'profile' && (
          <div className="home-body tab-content-fade">
            <div className="profile-card">
              <div className="profile-top">
                <div className="prof-avatar">
                  <span>RK</span>
                </div>
                <div className="prof-info">
                  <h3>{user?.name || 'Rakesh Kumar'}</h3>
                  <p>📱 +91 {user?.phone || '9876543210'}</p>
                  <span className="cpcb-verified-badge">
                    <ShieldCheck size={13} color="#1C522D" />
                    <span>CPCB Level-1 Collector</span>
                  </span>
                </div>
              </div>

              <div className="profile-stats-grid">
                <div className="p-stat">
                  <span>Total Recycled</span>
                  <strong>148.5 kg</strong>
                </div>
                <div className="p-stat">
                  <span>Lifetime Earnings</span>
                  <strong>₹42,850</strong>
                </div>
              </div>
            </div>

            <div className="profile-actions-list">
              <div className="p-action-row" onClick={() => setActiveModal('earnings')}>
                <span>💰 Payment Ledger & Bank Accounts</span>
                <ChevronRight size={16} color="#8C938E" />
              </div>
              <div className="p-action-row" onClick={() => setActiveModal('history')}>
                <span>📄 Handover Certificates (Form-2)</span>
                <ChevronRight size={16} color="#8C938E" />
              </div>
              <div className="p-action-row" onClick={() => setShowLocationPicker(true)}>
                <span>📍 Preferred Service Zone</span>
                <ChevronRight size={16} color="#8C938E" />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* FLOATING LIVE CAMERA AI SCANNER VIEW */}
      {cameraActive && (
        <div className="camera-overlay page-fade-enter">
          <div className="camera-header">
            <div className="cam-title-group">
              <Sparkles size={18} color="#FFC837" />
              <span>AI Material Valuation Scan</span>
            </div>
            <button className="close-cam-btn" onClick={() => setCameraActive(false)}>
              <X size={20} color="#FFFFFF" />
            </button>
          </div>

          <div className="cam-viewfinder">
            {/* Viewfinder Bounding Box */}
            <div className="scanner-target-box">
              <div className="corner top-left" />
              <div className="corner top-right" />
              <div className="corner bottom-left" />
              <div className="corner bottom-right" />

              {cameraScanning && <div className="cam-laser-line" />}

              <img 
                src="/assets/home/truck_hero.png" 
                alt="Scanning E-Waste" 
                className="cam-feed-preview"
              />

              {scanResult && (
                <div className="detection-bounding-box page-fade-enter">
                  <span className="det-tag">PCB Grade A • 96.4% Match</span>
                </div>
              )}
            </div>

            {cameraScanning ? (
              <div className="cam-status-pill">
                <RefreshCw size={14} className="spin-fast" />
                <span>Analyzing precious metal composition...</span>
              </div>
            ) : scanResult && (
              <div className="scan-summary-drawer slide-up-enter">
                <div className="drawer-handle" />
                <div className="drawer-header">
                  <CheckCircle2 size={24} color="#538A46" />
                  <div>
                    <h3>AI Valuation Confirmed</h3>
                    <p>{scanResult.detected}</p>
                  </div>
                </div>

                <div className="drawer-stats">
                  <div className="d-box">
                    <span>Estimated Weight</span>
                    <strong>{scanResult.weight}</strong>
                  </div>
                  <div className="d-box">
                    <span>Market Rate</span>
                    <strong>{scanResult.rate}</strong>
                  </div>
                </div>

                <div className="d-total-banner">
                  <div>
                    <span>Total Payout Guarantee</span>
                    <h2>{scanResult.payout}</h2>
                  </div>
                  <button 
                    className="confirm-deal-btn"
                    onClick={() => {
                      setCameraActive(false);
                      setActiveModal('pickup');
                    }}
                  >
                    Schedule Pickup
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* INTERACTIVE MODAL DRAWERS */}
      {activeModal && (
        <div className="modal-backdrop" onClick={() => setActiveModal(null)}>
          <div className="modal-card slide-up-enter" onClick={(e) => e.stopPropagation()}>
            <div className="drawer-handle" />
            <div className="modal-header">
              <h3>
                {activeModal === 'pickup' && 'Schedule Scrap Pickup'}
                {activeModal === 'earnings' && 'My Earnings Ledger'}
                {activeModal === 'history' && 'Pickup & Transaction History'}
                {activeModal === 'trends' && 'Today\'s Market Rates'}
                {activeModal === 'notifications' && 'Notifications'}
              </h3>
              <button className="close-modal-btn" onClick={() => setActiveModal(null)}>
                <X size={18} color="#1C522D" />
              </button>
            </div>

            <div className="modal-body">
              {activeModal === 'pickup' && (
                <div className="pickup-form-demo">
                  <p className="modal-sub">Select e-waste category & schedule doorstep pickup in <strong>{selectedLocation}</strong>:</p>
                  <div className="cat-pills">
                    <span className="cat-pill active">Computer PCBs</span>
                    <span className="cat-pill">Mobile Phones</span>
                    <span className="cat-pill">Batteries</span>
                    <span className="cat-pill">Copper Cable</span>
                  </div>
                  <div className="rate-estimate-box">
                    <span>Estimated Instant Payout:</span>
                    <strong>₹320 / kg (Direct UPI / Cash)</strong>
                  </div>
                  <button 
                    className="primary-button" 
                    onClick={() => {
                      alert(`Doorstep pickup scheduled successfully for ${selectedLocation}!`);
                      setActiveModal(null);
                    }}
                  >
                    Confirm Doorstep Pickup
                  </button>
                </div>
              )}

              {activeModal === 'earnings' && (
                <div className="earnings-demo">
                  <div className="total-earnings-box">
                    <span>Total Earnings This Month</span>
                    <h2>₹18,450</h2>
                    <span className="sub-stat">100% Verified CPCB Handover Credits</span>
                  </div>
                  <div className="history-item">
                    <div>
                      <strong>PCB Scrap Lot #982</strong>
                      <div className="h-date">Today • Rohini Hub</div>
                    </div>
                    <span className="h-amt">+₹4,640</span>
                  </div>
                  <div className="history-item">
                    <div>
                      <strong>Copper Scrap Lot #971</strong>
                      <div className="h-date">2 days ago • UPI Credit</div>
                    </div>
                    <span className="h-amt">+₹3,810</span>
                  </div>
                </div>
              )}

              {activeModal === 'history' && (
                <div className="history-demo">
                  <div className="history-item">
                    <div>
                      <strong>EcoMet Recycling Pvt Ltd</strong>
                      <div className="h-date">Lot #KC-8842 • 14.5 kg</div>
                    </div>
                    <span className="h-amt">✓ Handed Over</span>
                  </div>
                  <div className="history-item">
                    <div>
                      <strong>JNARDDC Verified Facility</strong>
                      <div className="h-date">Lot #KC-8710 • 22.0 kg</div>
                    </div>
                    <span className="h-amt">✓ Handed Over</span>
                  </div>
                </div>
              )}

              {activeModal === 'notifications' && (
                <div className="notif-demo">
                  <div className="notif-card">
                    <Zap size={20} color="#538A46" />
                    <div>
                      <strong>Driver On The Way!</strong>
                      <p>EcoMet Pickup partner is 1.2 km away from your location.</p>
                      <span className="notif-time">Just now</span>
                    </div>
                  </div>
                  <div className="notif-card">
                    <Sparkles size={20} color="#FFC837" />
                    <div>
                      <strong>Rate Increase Alert</strong>
                      <p>Copper wiring rate jumped +₹15/kg today.</p>
                      <span className="notif-time">2h ago</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Fixed 5-Tab Navigation Bar */}
      <div className="home-nav-bar">
        <button 
          className={`nav-tab ${activeTab === 'home' ? 'active' : ''}`}
          onClick={() => setActiveTab('home')}
        >
          <Home size={22} className="tab-icon" />
          <span>Home</span>
        </button>

        <button 
          className={`nav-tab ${activeTab === 'bookings' ? 'active' : ''}`}
          onClick={() => setActiveTab('bookings')}
        >
          <Calendar size={22} className="tab-icon" />
          <span>Bookings</span>
        </button>

        {/* Center Floating Camera FAB with Pulse Ring */}
        <button 
          className="nav-fab-camera camera-glow-btn" 
          onClick={handleOpenScanner}
          aria-label="Camera Scan"
        >
          <Camera size={26} color="#FFFFFF" />
          <span className="fab-label">Camera</span>
        </button>

        <button 
          className={`nav-tab ${activeTab === 'rates' ? 'active' : ''}`}
          onClick={() => setActiveTab('rates')}
        >
          <Tag size={22} className="tab-icon" />
          <span>Rates</span>
        </button>

        <button 
          className={`nav-tab ${activeTab === 'profile' ? 'active' : ''}`}
          onClick={() => setActiveTab('profile')}
        >
          <User size={22} className="tab-icon" />
          <span>Profile</span>
        </button>
      </div>

      <style>{`
        .home-screen {
          display: flex;
          flex-direction: column;
          height: 100%;
          width: 100%;
          background-color: #F8FAF6;
          position: relative;
          overflow: hidden;
        }

        /* Single Unified Smooth Scroll Container */
        .home-scroll-container {
          flex: 1;
          width: 100%;
          height: 100%;
          overflow-y: auto;
          overflow-x: hidden;
          -webkit-overflow-scrolling: touch;
          overscroll-behavior-y: contain;
          scrollbar-width: none;
          -ms-overflow-style: none;
          display: flex;
          flex-direction: column;
        }

        .home-scroll-container::-webkit-scrollbar {
          display: none;
        }

        /* Live Market Marquee */
        .live-ticker-bar {
          background: #0E2916;
          color: white;
          padding: 6px 16px;
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 11px;
          font-weight: 600;
          z-index: 15;
          flex-shrink: 0;
        }

        .live-badge {
          background: #E84D4D;
          color: white;
          font-size: 9px;
          font-weight: 800;
          padding: 2px 6px;
          border-radius: 4px;
          letter-spacing: 0.5px;
        }

        .ticker-text {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          color: #CAE0B8;
        }

        /* Top Deep Green Header */
        .home-header {
          background: linear-gradient(180deg, #164624 0%, #1C522D 100%);
          color: white;
          padding: 12px 20px 22px 20px;
          border-bottom-left-radius: 26px;
          border-bottom-right-radius: 26px;
          position: relative;
          z-index: 10;
          box-shadow: 0 4px 20px rgba(22, 70, 36, 0.18);
          flex-shrink: 0;
        }

        .header-top-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 14px;
        }

        .brand-header-group {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .logo-badge {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          transition: transform 0.2s ease;
        }

        .logo-badge:hover {
          transform: rotate(10deg) scale(1.05);
        }

        .logo-badge img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .brand-title {
          font-size: 16px;
          line-height: 1.1;
        }

        .bold-white {
          font-weight: 800;
          color: #FFFFFF;
        }

        .light-green {
          font-weight: 500;
          color: #CAE0B8;
        }

        .brand-tagline {
          font-size: 10px;
          color: #CAE0B8;
          opacity: 0.9;
          margin-top: 1px;
        }

        .notif-btn {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.12);
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          position: relative;
          transition: transform 0.15s ease;
        }

        .notif-btn:active {
          transform: scale(0.9);
        }

        .pulse-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: #FFC837;
          position: absolute;
          top: 8px;
          right: 8px;
          box-shadow: 0 0 8px #FFC837;
          animation: pulse 1.6s infinite;
        }

        @keyframes pulse {
          0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(255, 200, 55, 0.7); }
          70% { transform: scale(1.15); box-shadow: 0 0 0 6px rgba(255, 200, 55, 0); }
          100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(255, 200, 55, 0); }
        }

        .greeting-row {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
        }

        .user-greeting h1 {
          font-size: 22px;
          font-weight: 800;
          color: #FFFFFF;
          margin-bottom: 2px;
        }

        .user-greeting p {
          font-size: 12px;
          color: #CAE0B8;
          opacity: 0.9;
        }

        .location-pill {
          display: flex;
          align-items: center;
          gap: 6px;
          background: rgba(255, 255, 255, 0.16);
          backdrop-filter: blur(8px);
          padding: 6px 12px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
          color: #FFFFFF;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .location-pill:hover {
          background: rgba(255, 255, 255, 0.25);
        }

        .location-dropdown {
          position: absolute;
          top: 100%;
          right: 20px;
          background: white;
          border-radius: 14px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.25);
          width: 210px;
          overflow: hidden;
          z-index: 60;
          margin-top: 8px;
        }

        .loc-item {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 11px 14px;
          font-size: 13px;
          color: #1B1B1B;
          cursor: pointer;
          transition: background 0.15s ease;
        }

        .loc-item:hover, .loc-item.active {
          background: #F0F6EC;
          color: #1C522D;
          font-weight: 700;
        }

        /* Scrollable Body Content */
        .home-body {
          flex: 1;
          padding: 16px 16px 110px 16px;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        /* Hero Carousel Card */
        .carousel-wrapper {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .hero-pickup-card {
          background: #EBF4E8;
          border-radius: 22px;
          padding: 18px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: relative;
          box-shadow: 0 4px 14px rgba(28, 82, 45, 0.06);
          border: 1px solid #D6E4CF;
          overflow: hidden;
        }

        .card-top-tag {
          position: absolute;
          top: 12px;
          left: 18px;
          font-size: 10px;
          font-weight: 800;
          color: #1C522D;
          background: #DCEBD6;
          padding: 2px 8px;
          border-radius: 10px;
          letter-spacing: 0.3px;
        }

        .slide-title {
          font-size: 18px;
          font-weight: 800;
          color: #1C522D;
          line-height: 1.25;
          margin-top: 18px;
          margin-bottom: 4px;
          white-space: pre-line;
        }

        .slide-sub {
          font-size: 12px;
          color: #5F6361;
          margin-bottom: 14px;
          line-height: 1.3;
          white-space: pre-line;
        }

        .request-pickup-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: #F5B82E;
          color: #1C522D;
          font-weight: 800;
          font-size: 13px;
          padding: 10px 16px;
          border-radius: 18px;
          border: none;
          cursor: pointer;
          box-shadow: 0 4px 10px rgba(245, 184, 46, 0.35);
          transition: transform 0.15s ease;
        }

        .request-pickup-btn:active {
          transform: scale(0.95);
        }

        .hero-card-right {
          width: 135px;
          display: flex;
          justify-content: flex-end;
          align-items: center;
        }

        .truck-illustration {
          width: 100%;
          height: auto;
          max-height: 110px;
          object-fit: contain;
        }

        .float-animation {
          animation: float 3s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-4px); }
        }

        /* Carousel Dots */
        .carousel-dots {
          display: flex;
          justify-content: center;
          gap: 6px;
        }

        .dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #D5DDD0;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .dot.active {
          width: 18px;
          border-radius: 10px;
          background: #1C522D;
        }

        /* 2x2 Hub Grid */
        .hub-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }

        .grid-card {
          border-radius: 20px;
          padding: 14px 16px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-height: 148px;
          position: relative;
          cursor: pointer;
          transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
          border: 1px solid rgba(0,0,0,0.04);
        }

        .hover-lift:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 18px rgba(28, 82, 45, 0.1);
        }

        .hover-lift:active {
          transform: scale(0.96);
        }

        .card-mint {
          background: #E8F4E6;
        }

        .card-warm {
          background: #FAF4EB;
        }

        .card-header-icon {
          height: 52px;
          display: flex;
          align-items: flex-start;
          margin-bottom: 8px;
        }

        .hub-icon-img {
          height: 50px;
          max-width: 100%;
          object-fit: contain;
          transition: transform 0.2s ease;
        }

        .grid-card:hover .hub-icon-img {
          transform: scale(1.06);
        }

        .card-info h3 {
          font-size: 15px;
          font-weight: 800;
          color: #1B1B1B;
          line-height: 1.2;
          margin-bottom: 3px;
        }

        .card-info p {
          font-size: 11px;
          color: #5F6361;
        }

        .arrow-badge {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: rgba(28, 82, 45, 0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          position: absolute;
          right: 14px;
          bottom: 14px;
          transition: transform 0.2s ease;
        }

        .grid-card:hover .arrow-badge, .market-trends-card:hover .arrow-badge {
          transform: translateX(2px);
          background: #1C522D;
          color: white;
        }

        .grid-card:hover .arrow-badge svg, .market-trends-card:hover .arrow-badge svg {
          stroke: white;
        }

        /* Market Trends Row Card */
        .market-trends-card {
          background: #E8F3EB;
          border-radius: 20px;
          padding: 14px 16px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          cursor: pointer;
          border: 1px solid #D2E4D8;
          position: relative;
          transition: all 0.2s ease;
        }

        .mt-left {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .mt-icon-wrapper {
          width: 38px;
          height: 38px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .trends-icon-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .mt-text h3 {
          font-size: 15px;
          font-weight: 800;
          color: #1B1B1B;
        }

        .mt-text p {
          font-size: 11px;
          color: #5F6361;
        }

        /* Bookings View */
        .section-title-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 4px;
        }

        .section-title-row h2 {
          font-size: 18px;
          font-weight: 800;
          color: #1C522D;
        }

        .count-pill {
          font-size: 11px;
          font-weight: 700;
          color: #538A46;
          background: #EAF3E7;
          padding: 3px 8px;
          border-radius: 12px;
        }

        .bookings-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .booking-card {
          background: white;
          border: 1px solid #E2E8DE;
          border-radius: 18px;
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .booking-card.active-bk {
          border: 1.5px solid #538A46;
          box-shadow: 0 4px 16px rgba(83, 138, 70, 0.12);
        }

        .bk-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
        }

        .bk-id {
          font-size: 10px;
          font-weight: 800;
          color: #5F6361;
        }

        .bk-partner {
          font-size: 15px;
          font-weight: 800;
          color: #1B1B1B;
        }

        .bk-status-tag {
          font-size: 10px;
          font-weight: 800;
          padding: 3px 8px;
          border-radius: 10px;
        }

        .tag-live {
          background: #E2F5E0;
          color: #16701E;
        }

        .tag-done {
          background: #F0F2EF;
          color: #5F6361;
        }

        .bk-mat {
          font-size: 12px;
          font-weight: 600;
          color: #1B1B1B;
        }

        .bk-time {
          font-size: 11px;
          color: #5F6361;
        }

        .bk-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 8px;
          border-top: 1px solid #F0F4EC;
        }

        .bk-payout span {
          font-size: 10px;
          color: #5F6361;
          display: block;
        }

        .bk-payout strong {
          font-size: 15px;
          color: #1C522D;
        }

        .call-driver-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          background: #1C522D;
          color: white;
          border: none;
          padding: 6px 12px;
          border-radius: 12px;
          font-size: 11px;
          font-weight: 700;
          cursor: pointer;
        }

        /* Rates View */
        .rates-header-box {
          background: #1C522D;
          color: white;
          padding: 16px;
          border-radius: 18px;
          margin-bottom: 6px;
        }

        .rates-header-box h2 {
          font-size: 18px;
          font-weight: 800;
        }

        .rates-header-box p {
          font-size: 11px;
          color: #CAE0B8;
          margin-top: 2px;
        }

        .rates-table-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .rate-table-row {
          background: white;
          border: 1px solid #E4EAE0;
          border-radius: 14px;
          padding: 12px 16px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .rate-left {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .rate-emoji {
          font-size: 22px;
        }

        .rate-left h4 {
          font-size: 13px;
          font-weight: 700;
          color: #1B1B1B;
        }

        .rate-cat-tag {
          font-size: 10px;
          color: #5F6361;
          background: #F0F4EC;
          padding: 2px 6px;
          border-radius: 6px;
        }

        .rate-right {
          text-align: right;
        }

        .rate-val {
          font-size: 14px;
          font-weight: 800;
          color: #1C522D;
        }

        .rate-trend {
          font-size: 10px;
          font-weight: 700;
        }

        .rate-trend.up {
          color: #16701E;
        }

        .rate-trend.down {
          color: #C94C4C;
        }

        /* Profile View */
        .profile-card {
          background: white;
          border-radius: 20px;
          padding: 18px;
          border: 1px solid #E2E8DE;
          box-shadow: 0 4px 14px rgba(0,0,0,0.04);
        }

        .profile-top {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 16px;
        }

        .prof-avatar {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background: #1C522D;
          color: white;
          font-size: 18px;
          font-weight: 800;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .prof-info h3 {
          font-size: 16px;
          font-weight: 800;
          color: #1B1B1B;
        }

        .prof-info p {
          font-size: 11px;
          color: #5F6361;
        }

        .cpcb-verified-badge {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          background: #E8F4E6;
          color: #1C522D;
          font-size: 10px;
          font-weight: 700;
          padding: 2px 8px;
          border-radius: 10px;
          margin-top: 4px;
        }

        .profile-stats-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
          padding-top: 12px;
          border-top: 1px solid #F0F4EC;
        }

        .p-stat {
          background: #F8FAF6;
          padding: 10px;
          border-radius: 12px;
          display: flex;
          flex-direction: column;
        }

        .p-stat span {
          font-size: 10px;
          color: #5F6361;
        }

        .p-stat strong {
          font-size: 15px;
          color: #1C522D;
        }

        .profile-actions-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-top: 12px;
        }

        .p-action-row {
          background: white;
          padding: 14px 16px;
          border-radius: 14px;
          border: 1px solid #E4EAE0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 13px;
          font-weight: 600;
          color: #1B1B1B;
          cursor: pointer;
          transition: background 0.15s ease;
        }

        .p-action-row:hover {
          background: #F0F6EC;
        }

        /* Camera Scanner Fullscreen Overlay */
        .camera-overlay {
          position: absolute;
          inset: 0;
          background: #000000;
          z-index: 100;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .camera-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 18px 20px;
          color: white;
          background: linear-gradient(180deg, rgba(0,0,0,0.8) 0%, transparent 100%);
          z-index: 110;
        }

        .cam-title-group {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          font-weight: 700;
          color: white;
        }

        .close-cam-btn {
          background: rgba(255, 255, 255, 0.2);
          border: none;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        .cam-viewfinder {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          position: relative;
          padding: 20px;
        }

        .scanner-target-box {
          width: 260px;
          height: 260px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .corner {
          position: absolute;
          width: 24px;
          height: 24px;
          border-color: #538A46;
          border-style: solid;
        }

        .top-left { top: 0; left: 0; border-width: 3px 0 0 3px; border-top-left-radius: 12px; }
        .top-right { top: 0; right: 0; border-width: 3px 3px 0 0; border-top-right-radius: 12px; }
        .bottom-left { bottom: 0; left: 0; border-width: 0 0 3px 3px; border-bottom-left-radius: 12px; }
        .bottom-right { bottom: 0; right: 0; border-width: 0 3px 3px 0; border-bottom-right-radius: 12px; }

        .cam-laser-line {
          position: absolute;
          left: 0;
          right: 0;
          height: 3px;
          background: #538A46;
          box-shadow: 0 0 16px #538A46, 0 0 30px #538A46;
          animation: laserScan 2s infinite ease-in-out;
          z-index: 10;
        }

        @keyframes laserScan {
          0% { top: 10%; }
          50% { top: 85%; }
          100% { top: 10%; }
        }

        .cam-feed-preview {
          width: 80%;
          height: 80%;
          object-fit: contain;
          opacity: 0.85;
        }

        .detection-bounding-box {
          position: absolute;
          inset: 20px;
          border: 2px solid #538A46;
          border-radius: 12px;
          background: rgba(83, 138, 70, 0.15);
          display: flex;
          align-items: flex-start;
          padding: 6px;
        }

        .det-tag {
          background: #1C522D;
          color: white;
          font-size: 10px;
          font-weight: 800;
          padding: 3px 8px;
          border-radius: 6px;
        }

        .cam-status-pill {
          display: flex;
          align-items: center;
          gap: 8px;
          background: rgba(28, 82, 45, 0.85);
          color: white;
          font-size: 12px;
          font-weight: 600;
          padding: 8px 16px;
          border-radius: 20px;
          margin-top: 24px;
        }

        .spin-fast {
          animation: spin 1s linear infinite;
        }

        /* Scan Summary Bottom Drawer */
        .scan-summary-drawer {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: white;
          border-top-left-radius: 26px;
          border-top-right-radius: 26px;
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .drawer-handle {
          width: 40px;
          height: 4px;
          background: #D8DFD5;
          border-radius: 10px;
          margin: -8px auto 6px auto;
        }

        .drawer-header {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .drawer-header h3 {
          font-size: 16px;
          font-weight: 800;
          color: #1C522D;
        }

        .drawer-header p {
          font-size: 12px;
          color: #5F6361;
        }

        .drawer-stats {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }

        .d-box {
          background: #F4F8F1;
          padding: 10px;
          border-radius: 12px;
          display: flex;
          flex-direction: column;
        }

        .d-box span {
          font-size: 10px;
          color: #5F6361;
        }

        .d-box strong {
          font-size: 14px;
          color: #1C522D;
        }

        .d-total-banner {
          background: #1C522D;
          color: white;
          border-radius: 16px;
          padding: 14px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .d-total-banner span {
          font-size: 11px;
          opacity: 0.85;
          display: block;
        }

        .d-total-banner h2 {
          font-size: 22px;
          font-weight: 800;
        }

        .confirm-deal-btn {
          background: #F5B82E;
          color: #1C522D;
          border: none;
          font-size: 12px;
          font-weight: 800;
          padding: 8px 14px;
          border-radius: 12px;
          cursor: pointer;
        }

        /* Bottom Fixed 5-Tab Bar */
        .home-nav-bar {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 76px;
          background: rgba(255, 255, 255, 0.96);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-top: 1px solid rgba(0, 0, 0, 0.06);
          display: flex;
          align-items: center;
          justify-content: space-around;
          padding: 0 10px 10px 10px;
          z-index: 50;
          box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.06);
        }

        .nav-tab {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          background: transparent;
          border: none;
          color: #8C938E;
          font-size: 11px;
          font-weight: 600;
          cursor: pointer;
          flex: 1;
          transition: color 0.15s ease, transform 0.15s ease;
        }

        .nav-tab:active {
          transform: scale(0.92);
        }

        .nav-tab.active {
          color: #1C522D;
          font-weight: 800;
        }

        .nav-tab.active .tab-icon {
          transform: translateY(-2px);
          transition: transform 0.2s ease;
        }

        .nav-fab-camera {
          width: 58px;
          height: 58px;
          border-radius: 50%;
          background: #1C522D;
          border: 4px solid #FFFFFF;
          box-shadow: 0 6px 16px rgba(28, 82, 45, 0.35);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          margin-top: -24px;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .nav-fab-camera:active {
          transform: scale(0.92);
        }

        .camera-glow-btn:hover {
          box-shadow: 0 8px 24px rgba(28, 82, 45, 0.5);
        }

        .fab-label {
          font-size: 9px;
          color: white;
          font-weight: 700;
          margin-top: 1px;
        }

        /* Modal Dialogs */
        .modal-backdrop {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.55);
          backdrop-filter: blur(5px);
          z-index: 90;
          display: flex;
          align-items: flex-end;
        }

        .modal-card {
          width: 100%;
          background: white;
          border-top-left-radius: 26px;
          border-top-right-radius: 26px;
          padding: 20px;
          max-height: 80%;
          overflow-y: auto;
        }

        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 14px;
        }

        .modal-header h3 {
          font-size: 17px;
          font-weight: 800;
          color: #1C522D;
        }

        .close-modal-btn {
          background: #EBF2E8;
          border: none;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        .modal-sub {
          font-size: 13px;
          color: #5F6361;
          margin-bottom: 14px;
        }

        .cat-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 16px;
        }

        .cat-pill {
          padding: 7px 14px;
          border-radius: 20px;
          background: #F0F4EC;
          font-size: 12px;
          font-weight: 600;
          color: #1B1B1B;
          cursor: pointer;
          transition: all 0.15s ease;
        }

        .cat-pill:hover, .cat-pill.active {
          background: #1C522D;
          color: white;
        }

        .rate-estimate-box {
          background: #FAF5EB;
          border: 1px solid #EAE0CE;
          padding: 12px;
          border-radius: 12px;
          display: flex;
          justify-content: space-between;
          font-size: 13px;
          margin-bottom: 16px;
        }

        .total-earnings-box {
          background: linear-gradient(135deg, #1C522D 0%, #2A6E3F 100%);
          color: white;
          padding: 18px;
          border-radius: 16px;
          text-align: center;
          margin-bottom: 16px;
        }

        .total-earnings-box h2 {
          font-size: 32px;
          font-weight: 800;
          margin-top: 4px;
        }

        .sub-stat {
          font-size: 11px;
          opacity: 0.85;
          margin-top: 4px;
          display: block;
        }

        .history-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px;
          background: #F8FAF6;
          border-radius: 12px;
          margin-bottom: 8px;
        }

        .h-date {
          font-size: 11px;
          color: #5F6361;
        }

        .h-amt {
          font-weight: 800;
          color: #538A46;
        }

        .notif-card {
          display: flex;
          gap: 12px;
          align-items: flex-start;
          background: #EFF6EC;
          padding: 14px;
          border-radius: 14px;
          margin-bottom: 10px;
        }

        .notif-card p {
          font-size: 12px;
          color: #5F6361;
          margin-top: 2px;
        }

        .notif-time {
          font-size: 10px;
          color: #8C938E;
          margin-top: 4px;
          display: block;
        }

        /* Fluid Entrance Animations */
        .tab-content-fade {
          animation: tabFade 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes tabFade {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .slide-up-enter {
          animation: slideUp 0.28s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .slide-down-enter {
          animation: slideDown 0.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
