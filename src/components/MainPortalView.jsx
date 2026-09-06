import React, { useState } from 'react';
import { 
  Camera, MapPin, ShieldCheck, Banknote, RefreshCw, CheckCircle2, 
  ArrowRight, PhoneCall, History, TrendingUp, Sparkles, AlertTriangle, ArrowLeft
} from 'lucide-react';

export default function MainPortalView({ t, user, currentLang, setLanguage, onBack }) {
  const [activeTab, setActiveTab] = useState('scan'); // 'scan' | 'recyclers' | 'receipt' | 'ledger'
  const [isScanning, setIsScanning] = useState(false);
  const [scanComplete, setScanComplete] = useState(false);
  const [lotDetails, setLotDetails] = useState({
    category: "High-Grade E-Waste (PCB & Batteries)",
    weightKg: 14.5,
    estimatedPricePerKg: 320,
    totalValuation: 4640,
    confidence: "94.8%"
  });

  const [handoverConfirmed, setHandoverConfirmed] = useState(false);

  const recyclers = [
    {
      id: 1,
      name: "EcoMet Recycling Pvt Ltd",
      cpcbReg: "CPCB/EW-REG/2024/0981",
      distance: "2.4 km away",
      rating: 4.9,
      buyingPriceKg: "₹340 / kg",
      badge: "Highest Quote",
      address: "Industrial Area Phase II, Site B"
    },
    {
      id: 2,
      name: "GreenTech Urban Metals",
      cpcbReg: "CPCB/EW-REG/2023/0412",
      distance: "4.8 km away",
      rating: 4.7,
      buyingPriceKg: "₹325 / kg",
      badge: "Instant Cash Pick-up",
      address: "MIDC Sector 4"
    },
    {
      id: 3,
      name: "JNARDDC Verified Processors",
      cpcbReg: "GOV/MINES/CRITICAL-MIN/88",
      distance: "6.1 km away",
      rating: 5.0,
      buyingPriceKg: "₹355 / kg",
      badge: "Critical Mineral Partner",
      address: "CleanTech E-Park"
    }
  ];

  const handleSimulateScan = () => {
    setIsScanning(true);
    setScanComplete(false);
    setTimeout(() => {
      setIsScanning(false);
      setScanComplete(true);
    }, 1800);
  };

  return (
    <div className="main-portal page-fade-enter">
      {/* Header Profile Bar */}
      <div className="portal-header">
        <div className="portal-profile">
          {onBack && (
            <button className="back-arrow-btn portal-back-btn" onClick={onBack} aria-label="Go Back">
              <ArrowLeft size={18} color="#1C522D" />
            </button>
          )}
          <div className="avatar-circle">
            <img 
              src="/assets/Kabadiwala_Connect_UI_Asset_Pack(1)/brand/kc_logo_mark.png" 
              alt="Logo Mark"
            />
          </div>
          <div>
            <div className="portal-greeting">{t.greeting}</div>
            <div className="portal-user-meta">📱 +91 {user?.phone || '9876543210'} • Level-1 Aggregator</div>
          </div>
        </div>

        <button 
          className="lang-switcher-btn"
          onClick={() => {
            const nextLang = currentLang === 'en' ? 'hi' : currentLang === 'hi' ? 'mr' : 'en';
            setLanguage(nextLang);
          }}
        >
          🌐 {currentLang.toUpperCase()}
        </button>
      </div>

      {/* Main Feature Tabs */}
      <div className="portal-tab-bar">
        <button 
          className={`tab-item ${activeTab === 'scan' ? 'active' : ''}`}
          onClick={() => setActiveTab('scan')}
        >
          <Camera size={18} />
          <span>{t.scanLot}</span>
        </button>
        <button 
          className={`tab-item ${activeTab === 'recyclers' ? 'active' : ''}`}
          onClick={() => setActiveTab('recyclers')}
        >
          <MapPin size={18} />
          <span>{t.findRecyclers}</span>
        </button>
        <button 
          className={`tab-item ${activeTab === 'ledger' ? 'active' : ''}`}
          onClick={() => setActiveTab('ledger')}
        >
          <TrendingUp size={18} />
          <span>{t.earningsLedger}</span>
        </button>
      </div>

      {/* TAB CONTENT: AI LOT VALUATION ENGINE */}
      {activeTab === 'scan' && (
        <div className="tab-pane">
          <div className="card-box ai-scan-card">
            <div className="card-badge">
              <Sparkles size={14} />
              <span>AI Price Discovery Engine</span>
            </div>

            <h2 className="card-title">{t.lotValuation}</h2>
            <p className="card-subtitle">{t.uploadPhoto}</p>

            {/* Viewport Simulation Area */}
            <div className="scanner-viewfinder" onClick={handleSimulateScan}>
              {isScanning ? (
                <div className="scanning-state">
                  <RefreshCw size={36} className="spin-icon" color="#538A46" />
                  <p>{t.detectingItems}</p>
                </div>
              ) : scanComplete ? (
                <div className="scanned-preview">
                  <img 
                    src="/assets/Kabadiwala_Connect_UI_Asset_Pack(1)/web/hero_illustration_wide.png" 
                    alt="E-waste Lot" 
                    className="scanned-img"
                  />
                  <div className="scan-success-badge">
                    <CheckCircle2 size={16} color="#1C522D" />
                    <span>AI Detection Verified</span>
                  </div>
                </div>
              ) : (
                <div className="scan-placeholder">
                  <div className="camera-circle">
                    <Camera size={32} color="#1C522D" />
                  </div>
                  <p>Tap to Simulate Camera Scan of Scrap Lot</p>
                  <span className="sub-hint">Instant Fair Price Guarantee</span>
                </div>
              )}
            </div>

            {scanComplete && (
              <div className="valuation-results page-fade-enter">
                <div className="result-row highlight-box">
                  <div className="res-label">{t.materialDetected}</div>
                  <div className="res-confidence">{t.confidence}</div>
                </div>

                <div className="valuation-grid">
                  <div className="val-box">
                    <div className="val-title">{t.weight}</div>
                    <div className="val-number">{lotDetails.weightKg} kg</div>
                  </div>
                  <div className="val-box">
                    <div className="val-title">Rate / kg</div>
                    <div className="val-number">₹{lotDetails.estimatedPricePerKg}</div>
                  </div>
                </div>

                <div className="total-valuation-banner">
                  <div>
                    <div className="tot-label">{t.estimatedVal}</div>
                    <div className="tot-amount">₹{lotDetails.totalValuation.toLocaleString('en-IN')}</div>
                  </div>
                  <button 
                    className="primary-button find-buyers-btn"
                    onClick={() => setActiveTab('recyclers')}
                  >
                    <span>{t.findRecyclers}</span>
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* TAB CONTENT: NEARBY AUTHORIZED RECYCLERS */}
      {activeTab === 'recyclers' && (
        <div className="tab-pane">
          <div className="pane-header">
            <h2 className="pane-title">{t.nearbyRecyclers}</h2>
            <span className="cp-count">3 CPCB Certified Active</span>
          </div>

          <div className="recyclers-list">
            {recyclers.map((rec) => (
              <div key={rec.id} className="recycler-card">
                <div className="rec-top-row">
                  <div className="rec-name-group">
                    <div className="rec-name">{rec.name}</div>
                    <div className="rec-cpcb">
                      <ShieldCheck size={14} color="#538A46" />
                      <span>{rec.cpcbReg}</span>
                    </div>
                  </div>
                  <span className="rec-badge">{rec.badge}</span>
                </div>

                <div className="rec-mid-row">
                  <div className="rec-meta">
                    <MapPin size={14} color="#5F6361" />
                    <span>{rec.distance} • {rec.address}</span>
                  </div>
                  <div className="rec-quote">{rec.buyingPriceKg}</div>
                </div>

                <div className="rec-action-row">
                  <button 
                    className="secondary-button call-btn"
                    onClick={() => alert(`Initiating direct voice connection with ${rec.name}`)}
                  >
                    <PhoneCall size={16} />
                    <span>Call Recycler</span>
                  </button>
                  <button 
                    className="primary-button confirm-pickup-btn"
                    onClick={() => {
                      setHandoverConfirmed(true);
                      setActiveTab('receipt');
                    }}
                  >
                    <span>Initiate Handover</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB CONTENT: DIGITAL HANDOVER RECEIPT */}
      {activeTab === 'receipt' && (
        <div className="tab-pane">
          <div className="card-box handover-card page-fade-enter">
            <div className="receipt-status-header">
              <CheckCircle2 size={44} color="#538A46" />
              <h2>{t.handoverSuccess}</h2>
              <span className="txn-id">Handover Lot ID: #KC-2026-9812</span>
            </div>

            <div className="receipt-details-list">
              <div className="r-item">
                <span>Material Lot</span>
                <strong>PCB Circuit Boards & Batteries (14.5 kg)</strong>
              </div>
              <div className="r-item">
                <span>Authorized Recycler</span>
                <strong>EcoMet Recycling Pvt Ltd</strong>
              </div>
              <div className="r-item">
                <span>GPS Location Tag</span>
                <strong>MIDC Sector 4, Mumbai (Lat 19.076, Lon 72.877)</strong>
              </div>
              <div className="r-item">
                <span>Verified Payout Amount</span>
                <strong className="payout-sum">₹4,640 (Instant UPI Credit)</strong>
              </div>
            </div>

            <div className="compliance-stamp">
              <ShieldCheck size={20} color="#1C522D" />
              <span>CPCB Form-2 E-Waste Digital Compliance Chain Recorded</span>
            </div>

            <button 
              className="primary-button"
              onClick={() => setActiveTab('ledger')}
            >
              <span>View Earnings Ledger</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      )}

      {/* TAB CONTENT: EARNINGS LEDGER */}
      {activeTab === 'ledger' && (
        <div className="tab-pane page-fade-enter">
          <div className="earnings-summary-card">
            <div className="es-label">{t.todayEarnings}</div>
            <div className="es-amount">₹4,640</div>

            <div className="es-stats-grid">
              <div className="stat-pill">
                <span>This Month</span>
                <strong>₹28,450</strong>
              </div>
              <div className="stat-pill">
                <span>Total Recycled</span>
                <strong>142.5 kg</strong>
              </div>
            </div>
          </div>

          <h3 className="section-subtitle">{t.recentTransactions}</h3>

          <div className="txn-history-list">
            <div className="txn-card">
              <div className="txn-left">
                <div className="txn-icon-circle">
                  <Banknote size={20} color="#1C522D" />
                </div>
                <div>
                  <div className="txn-title">EcoMet Recycling</div>
                  <div className="txn-sub">Lot #KC-9812 • Today, 2:15 PM</div>
                </div>
              </div>
              <div className="txn-right">
                <div className="txn-plus">+₹4,640</div>
                <span className="txn-status">Verified UPI</span>
              </div>
            </div>

            <div className="txn-card">
              <div className="txn-left">
                <div className="txn-icon-circle">
                  <Banknote size={20} color="#1C522D" />
                </div>
                <div>
                  <div className="txn-title">JNARDDC Metals</div>
                  <div className="txn-sub">Lot #KC-9740 • Yesterday</div>
                </div>
              </div>
              <div className="txn-right">
                <div className="txn-plus">+₹7,200</div>
                <span className="txn-status">Cash Ledger</span>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .main-portal {
          display: flex;
          flex-direction: column;
          padding: 14px 16px 24px 16px;
          min-height: 100%;
          background-color: var(--surface-warm);
        }

        .portal-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 12px;
          border-bottom: 1px solid var(--border-soft);
          margin-bottom: 14px;
        }

        .portal-profile {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .avatar-circle {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #E1E5CE;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 4px;
        }

        .avatar-circle img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .portal-greeting {
          font-size: 15px;
          font-weight: 700;
          color: var(--brand-deep-green);
        }

        .portal-user-meta {
          font-size: 11px;
          color: var(--text-secondary);
        }

        .lang-switcher-btn {
          background: var(--white);
          border: 1px solid var(--border-soft);
          border-radius: var(--radius-pill);
          padding: 4px 10px;
          font-size: 11px;
          font-weight: 700;
          color: var(--brand-deep-green);
          cursor: pointer;
        }

        /* Tab Navigation */
        .portal-tab-bar {
          display: flex;
          background: var(--white);
          border-radius: 14px;
          padding: 4px;
          border: 1px solid var(--border-soft);
          margin-bottom: 16px;
          gap: 4px;
        }

        .tab-item {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          padding: 8px 4px;
          border: none;
          background: transparent;
          border-radius: 10px;
          font-size: 11px;
          font-weight: 600;
          color: var(--text-secondary);
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .tab-item.active {
          background-color: var(--brand-deep-green);
          color: var(--white);
        }

        .tab-pane {
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        /* Cards & Panes */
        .card-box {
          background: var(--white);
          border-radius: var(--radius-card);
          padding: 16px;
          border: 1px solid var(--border-soft);
          box-shadow: var(--elevation-card);
        }

        .card-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: var(--surface-green-tint);
          color: var(--brand-deep-green);
          padding: 4px 10px;
          border-radius: var(--radius-pill);
          font-size: 11px;
          font-weight: 700;
          margin-bottom: 10px;
        }

        .card-title {
          font-size: 20px;
          font-weight: 800;
          color: var(--brand-dark-text);
          margin-bottom: 4px;
        }

        .card-subtitle {
          font-size: 13px;
          color: var(--text-secondary);
          margin-bottom: 16px;
        }

        .scanner-viewfinder {
          width: 100%;
          height: 180px;
          background: #F4F7F2;
          border: 2px dashed var(--brand-green);
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          overflow: hidden;
          position: relative;
          margin-bottom: 16px;
        }

        .scan-placeholder {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 10px;
        }

        .camera-circle {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background: #E1E5CE;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 8px;
        }

        .scan-placeholder p {
          font-size: 13px;
          font-weight: 700;
          color: var(--brand-deep-green);
        }

        .sub-hint {
          font-size: 11px;
          color: var(--text-secondary);
          margin-top: 2px;
        }

        .scanning-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          font-size: 12px;
          font-weight: 600;
          color: var(--brand-deep-green);
        }

        .spin-icon {
          animation: spin 1.2s linear infinite;
        }

        @keyframes spin {
          100% { transform: rotate(360deg); }
        }

        .scanned-preview {
          width: 100%;
          height: 100%;
          position: relative;
        }

        .scanned-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .scan-success-badge {
          position: absolute;
          bottom: 10px;
          left: 10px;
          background: rgba(255, 255, 255, 0.92);
          backdrop-filter: blur(4px);
          padding: 6px 12px;
          border-radius: var(--radius-pill);
          font-size: 12px;
          font-weight: 700;
          color: var(--brand-deep-green);
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .result-row {
          padding: 10px 12px;
          background: var(--surface-green-light);
          border-radius: 10px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
        }

        .res-label {
          font-size: 12px;
          font-weight: 700;
          color: var(--brand-dark-text);
        }

        .res-confidence {
          font-size: 11px;
          font-weight: 700;
          color: var(--brand-green);
        }

        .valuation-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
          margin-bottom: 14px;
        }

        .val-box {
          background: #F9FBF8;
          border: 1px solid var(--border-soft);
          border-radius: 10px;
          padding: 10px;
        }

        .val-title {
          font-size: 11px;
          color: var(--text-secondary);
        }

        .val-number {
          font-size: 16px;
          font-weight: 800;
          color: var(--brand-deep-green);
          margin-top: 2px;
        }

        .total-valuation-banner {
          background: var(--brand-deep-green);
          color: white;
          border-radius: 14px;
          padding: 14px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .tot-label {
          font-size: 11px;
          opacity: 0.85;
        }

        .tot-amount {
          font-size: 22px;
          font-weight: 800;
        }

        .find-buyers-btn {
          width: auto;
          height: 40px;
          padding: 0 14px;
          font-size: 13px;
          background-color: var(--brand-green);
        }

        /* Recyclers View */
        .pane-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
        }

        .pane-title {
          font-size: 16px;
          font-weight: 800;
          color: var(--brand-dark-text);
        }

        .cp-count {
          font-size: 11px;
          font-weight: 700;
          color: var(--brand-green);
        }

        .recyclers-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .recycler-card {
          background: white;
          border: 1px solid var(--border-soft);
          border-radius: var(--radius-card);
          padding: 14px;
        }

        .rec-top-row {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 8px;
        }

        .rec-name {
          font-size: 15px;
          font-weight: 700;
          color: var(--brand-dark-text);
        }

        .rec-cpcb {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 10px;
          color: var(--brand-green);
          font-weight: 600;
          margin-top: 2px;
        }

        .rec-badge {
          background: var(--surface-green-tint);
          color: var(--brand-deep-green);
          font-size: 10px;
          font-weight: 700;
          padding: 3px 8px;
          border-radius: var(--radius-pill);
        }

        .rec-mid-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
          font-size: 12px;
        }

        .rec-meta {
          display: flex;
          align-items: center;
          gap: 4px;
          color: var(--text-secondary);

          font-size: 11px;
        }

        .rec-quote {
          font-size: 15px;
          font-weight: 800;
          color: var(--brand-deep-green);
        }

        .rec-action-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
        }

        .call-btn, .confirm-pickup-btn {
          height: 40px;
          font-size: 12px;
        }

        /* Handover Card */
        .handover-card {
          text-align: center;
          padding: 24px 16px;
        }

        .receipt-status-header h2 {
          font-size: 18px;
          font-weight: 800;
          color: var(--brand-deep-green);
          margin-top: 8px;
        }

        .txn-id {
          font-size: 11px;
          color: var(--text-secondary);
          display: block;
          margin-bottom: 16px;
        }

        .receipt-details-list {
          text-align: left;
          background: #F9FAF8;
          border-radius: 12px;
          padding: 12px;
          margin-bottom: 16px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .r-item {
          display: flex;
          flex-direction: column;
          font-size: 12px;
        }

        .r-item span {
          color: var(--text-secondary);
          font-size: 10px;
        }

        .payout-sum {
          color: var(--brand-green);
          font-size: 14px;
        }

        .compliance-stamp {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 10px;
          color: var(--brand-deep-green);
          font-weight: 700;
          background: var(--surface-green-tint);
          padding: 8px 12px;
          border-radius: 8px;
          margin-bottom: 16px;
        }

        /* Ledger View */
        .earnings-summary-card {
          background: linear-gradient(135deg, var(--brand-deep-green) 0%, #2A6E3F 100%);
          color: white;
          border-radius: var(--radius-card);
          padding: 20px;
          margin-bottom: 16px;
        }

        .es-label {
          font-size: 12px;
          opacity: 0.85;
        }

        .es-amount {
          font-size: 32px;
          font-weight: 800;
          margin-bottom: 16px;
        }

        .es-stats-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }

        .stat-pill {
          background: rgba(255, 255, 255, 0.12);
          border-radius: 10px;
          padding: 8px 12px;
          display: flex;
          flex-direction: column;
        }

        .stat-pill span {
          font-size: 10px;
          opacity: 0.8;
        }

        .stat-pill strong {
          font-size: 14px;
          font-weight: 700;
        }

        .section-subtitle {
          font-size: 15px;
          font-weight: 700;
          color: var(--brand-dark-text);
          margin-bottom: 10px;
        }

        .txn-history-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .txn-card {
          background: white;
          border-radius: 12px;
          padding: 12px;
          border: 1px solid var(--border-soft);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .txn-left {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .txn-icon-circle {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: var(--surface-green-tint);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .txn-title {
          font-size: 13px;
          font-weight: 700;
          color: var(--text-primary);
        }

        .txn-sub {
          font-size: 10px;
          color: var(--text-secondary);
        }

        .txn-plus {
          font-size: 14px;
          font-weight: 800;
          color: var(--brand-green);
          text-align: right;
        }

        .txn-status {
          font-size: 9px;
          font-weight: 700;
          color: var(--brand-deep-green);
          display: block;
          text-align: right;
        }
      `}</style>
    </div>
  );
}
