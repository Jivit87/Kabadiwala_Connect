import React, { useState } from 'react';
import { 
  ArrowLeft, Volume2, ChevronDown, ChevronRight, 
  ArrowUpRight, FileText, Home, Calendar, Camera, Tag, User, X, CheckCircle2
} from 'lucide-react';

export default function MyEarningsView({ 
  t, 
  onBack, 
  onNavigateTab 
}) {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [selectedTimeframe, setSelectedTimeframe] = useState('This Week');
  const [selectedBar, setSelectedBar] = useState(5); // Saturday active by default
  const [selectedTxDetail, setSelectedTxDetail] = useState(null);

  const weeklyData = [
    { day: 'Mon', amount: 120, height: 28 },
    { day: 'Tue', amount: 160, height: 38 },
    { day: 'Wed', amount: 240, height: 58 },
    { day: 'Thu', amount: 310, height: 75 },
    { day: 'Fri', amount: 200, height: 48 },
    { day: 'Sat', amount: 420, height: 95, isMax: true },
    { day: 'Sun', amount: 140, height: 32 }
  ];

  const transactions = [
    {
      id: 'tx_1',
      title: 'PCB',
      date: '12 Aug 2026',
      amount: 312,
      status: 'Received',
      image: '/assets/Kabadiwala_Connect_My_Earnings_UI_Asset_Pack/02_app_assets/pcb_thumbnail_reference.png',
      buyer: 'GreenCycle Recycling',
      weight: '2.5 kg'
    },
    {
      id: 'tx_2',
      title: 'Cables & Wires',
      date: '10 Aug 2026',
      amount: 180,
      status: 'Received',
      image: '/assets/Kabadiwala_Connect_My_Earnings_UI_Asset_Pack/02_app_assets/cables_wires_thumbnail_reference.png',
      buyer: 'EcoScrap Solutions',
      weight: '2.5 kg'
    },
    {
      id: 'tx_3',
      title: 'Car Battery',
      date: '08 Aug 2026',
      amount: 220,
      status: 'Pending',
      image: '/assets/Kabadiwala_Connect_My_Earnings_UI_Asset_Pack/02_app_assets/car_battery_thumbnail_reference.png',
      buyer: 'ReNew E-Waste',
      weight: '3.5 kg'
    },
    {
      id: 'tx_4',
      title: 'CRT TV',
      date: '05 Aug 2026',
      amount: 85,
      status: 'Received',
      image: '/assets/Kabadiwala_Connect_My_Earnings_UI_Asset_Pack/02_app_assets/crt_tv_thumbnail_reference.png',
      buyer: 'GreenCycle Recycling',
      weight: '4.7 kg'
    },
    {
      id: 'tx_5',
      title: 'LCD Display',
      date: '02 Aug 2026',
      amount: 160,
      status: 'Received',
      image: '/assets/Kabadiwala_Connect_My_Earnings_UI_Asset_Pack/02_app_assets/lcd_display_thumbnail_reference.png',
      buyer: 'EcoScrap Solutions',
      weight: '3.8 kg'
    }
  ];

  const handleSpeakEarnings = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsPlayingAudio(true);
      const text = `Your total earnings this week are 1240 rupees, which is 18 percent higher than last week. Highest earning day was Saturday with 420 rupees.`;
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
    <div className="my-earnings-screen page-fade-enter">
      {/* Scrollable Content Container */}
      <div className="earnings-scroll-content">
        {/* Top Back Navigation Row */}
        {onBack && (
          <div className="earnings-top-nav">
            <button className="step-back-btn" onClick={onBack} aria-label="Go Back">
              <ArrowLeft size={22} color="#101A24" strokeWidth={2.2} />
            </button>
          </div>
        )}

        {/* Title & Audio Button Header Row */}
        <div className="earnings-header-row">
          <div className="earnings-title-block">
            <h1 className="earnings-main-title">My Earnings</h1>
            <p className="earnings-main-sub">Track what you’ve earned from your scrap</p>
          </div>

          <button 
            className={`earnings-audio-btn ${isPlayingAudio ? 'playing' : ''}`}
            onClick={handleSpeakEarnings}
            aria-label="Listen to earnings summary"
          >
            <Volume2 size={22} color="#0B6B4A" strokeWidth={2.4} />
          </button>
        </div>

        {/* Weekly Earnings Hero Card */}
        <div className="earnings-hero-card">
          <div className="earnings-hero-top-row">
            <div className="earnings-hero-left">
              <div className="timeframe-selector">
                <span>{selectedTimeframe}</span>
                <ChevronDown size={14} color="#0B6B4A" />
              </div>

              <div className="earnings-hero-amount">
                <span className="hero-rupee">₹</span>
                <span className="hero-num">1,240</span>
              </div>

              <div className="earnings-growth-tag">
                <ArrowUpRight size={14} color="#0B6B4A" strokeWidth={2.5} />
                <span><strong>+18%</strong> compared to last week</span>
              </div>
            </div>

            <div className="earnings-hero-right">
              <img 
                src="/assets/Kabadiwala_Connect_My_Earnings_UI_Asset_Pack/02_app_assets/earnings_growth_plant_transparent_reference.png" 
                alt="Green impact sprout" 
                className="earnings-plant-img"
              />
            </div>
          </div>

          {/* 7-Day Interactive Bar Chart */}
          <div className="earnings-chart-container">
            <div className="earnings-chart-bars">
              {weeklyData.map((item, idx) => {
                const isSelected = selectedBar === idx;
                return (
                  <div 
                    key={item.day} 
                    className="earnings-bar-col"
                    onClick={() => setSelectedBar(idx)}
                  >
                    {isSelected && (
                      <div className="bar-tooltip-pill">
                        ₹{item.amount}
                      </div>
                    )}
                    <div 
                      className={`earnings-bar ${item.isMax ? 'max-bar' : ''} ${isSelected ? 'active-bar' : ''}`}
                      style={{ height: `${item.height}%` }}
                    />
                    <span className={`bar-day-label ${isSelected ? 'active-day' : ''}`}>{item.day}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Recent Transactions Section Header */}
        <div className="recent-tx-header">
          <h2 className="recent-tx-title">Recent Transactions</h2>
          <button className="view-all-tx-link">
            <span>View all</span>
            <ChevronRight size={14} color="#0B6B4A" />
          </button>
        </div>

        {/* 5-Item Transactions List Card */}
        <div className="transactions-list-card">
          {transactions.map((tx) => (
            <div 
              key={tx.id} 
              className="tx-item-row"
              onClick={() => setSelectedTxDetail(tx)}
            >
              <div className="tx-thumb-wrap">
                <img src={tx.image} alt={tx.title} className="tx-thumb-img" />
              </div>

              <div className="tx-info-col">
                <h3 className="tx-item-title">{tx.title}</h3>
                <span className="tx-item-date">{tx.date}</span>
              </div>

              <div className="tx-amount-col">
                <span className="tx-amount-val">+₹{tx.amount}</span>
                <span className={`tx-status-badge ${tx.status.toLowerCase()}`}>
                  {tx.status}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* "View all transactions" Action Banner */}
        <div className="view-all-transactions-banner">
          <div className="vat-left">
            <FileText size={18} color="#0B6B4A" />
            <span className="vat-text">View all transactions</span>
          </div>
          <ChevronRight size={18} color="#6E7782" />
        </div>
      </div>

      {/* Transaction Detail Receipt Modal */}
      {selectedTxDetail && (
        <div className="price-modal-backdrop" onClick={() => setSelectedTxDetail(null)}>
          <div className="price-modal-sheet" onClick={(e) => e.stopPropagation()}>
            <div className="modal-sheet-header">
              <div className="sheet-item-info">
                <img src={selectedTxDetail.image} alt={selectedTxDetail.title} className="modal-thumb" />
                <div>
                  <h3>{selectedTxDetail.title} Settlement</h3>
                  <p>{selectedTxDetail.date} • {selectedTxDetail.buyer}</p>
                </div>
              </div>
              <button className="modal-close-btn" onClick={() => setSelectedTxDetail(null)}>
                <X size={18} color="#101A24" />
              </button>
            </div>

            <div className="sparkline-container" style={{ textAlign: 'left', padding: '14px 16px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span style={{ fontSize: '13px', color: '#6E7782' }}>Weight Collected:</span>
                <strong style={{ color: '#101A24' }}>{selectedTxDetail.weight}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span style={{ fontSize: '13px', color: '#6E7782' }}>Settled Payout:</span>
                <strong style={{ color: '#0B6B4A', fontSize: '16px' }}>₹{selectedTxDetail.amount}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '13px', color: '#6E7782' }}>Status:</span>
                <span className={`tx-status-badge ${selectedTxDetail.status.toLowerCase()}`}>
                  {selectedTxDetail.status}
                </span>
              </div>
            </div>

            <button 
              className="step-primary-cta-btn"
              onClick={() => setSelectedTxDetail(null)}
            >
              <span>Done</span>
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

        {/* Center Floating Camera FAB */}
        <button 
          className="nav-fab-camera camera-glow-btn" 
          onClick={() => onNavigateTab ? onNavigateTab('step1_photo') : onBack && onBack()}
          aria-label="Camera Scan"
        >
          <Camera size={26} color="#FFFFFF" />
          <span className="fab-label">Camera</span>
        </button>

        <button 
          className="nav-tab"
          onClick={() => onNavigateTab ? onNavigateTab('todays_prices') : onBack && onBack()}
        >
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
