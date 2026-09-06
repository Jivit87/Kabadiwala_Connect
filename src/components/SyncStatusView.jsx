import React, { useState } from 'react';
import { 
  ArrowLeft, RotateCw, CheckCircle2, Clock, ShieldCheck, 
  WifiOff, ChevronRight, Home, Calendar, Camera, Tag, User, X,
  Check
} from 'lucide-react';

export default function SyncStatusView({
  t,
  onBack,
  onNavigateTab
}) {
  const [isSyncing, setIsSyncing] = useState(false);
  const [syncComplete, setSyncComplete] = useState(false);
  const [selectedLotDetail, setSelectedLotDetail] = useState(null);
  const [queuedLots, setQueuedLots] = useState([
    {
      id: 'sync_1',
      lotNumber: 'Lot #A7F2K9',
      title: 'PCB (Circuit Board)',
      category: 'E-Waste',
      time: 'Today, 11:24 AM',
      weight: '2.5 kg',
      rate: '₹125/kg',
      amount: 312,
      synced: false,
      image: '/assets/Kabadiwala_Connect_Sync_Status_UI_Asset_Pack/app/crops/pcb_lot_thumbnail.png',
      buyer: 'GreenCycle Recycling'
    },
    {
      id: 'sync_2',
      lotNumber: 'Lot #B3D9L1',
      title: 'Cables & Wires',
      category: 'Metals',
      time: 'Today, 10:42 AM',
      weight: '4.0 kg',
      rate: '₹70/kg',
      amount: 280,
      synced: false,
      image: '/assets/Kabadiwala_Connect_Sync_Status_UI_Asset_Pack/app/crops/cables_lot_thumbnail.png',
      buyer: 'EcoScrap Solutions'
    },
    {
      id: 'sync_3',
      lotNumber: 'Lot #C6H4P0',
      title: 'Car Battery',
      category: 'Batteries',
      time: 'Yesterday, 5:16 PM',
      weight: '8.2 kg',
      rate: '₹62/kg',
      amount: 510,
      synced: false,
      image: '/assets/Kabadiwala_Connect_Sync_Status_UI_Asset_Pack/app/crops/battery_lot_thumbnail.png',
      buyer: 'Awaiting Buyer Match'
    }
  ]);

  const handleTriggerSync = () => {
    if (isSyncing) return;
    setIsSyncing(true);
    setSyncComplete(false);

    setTimeout(() => {
      setQueuedLots(prev => prev.map(item => ({ ...item, synced: true })));
      setIsSyncing(false);
      setSyncComplete(true);
    }, 2000);
  };

  const pendingCount = queuedLots.filter(l => !l.synced).length;

  return (
    <div className="sync-status-screen page-fade-enter">
      {/* Scrollable Container */}
      <div className="sync-scroll-content">
        {/* Top Back Navigation Row */}
        {onBack && (
          <div className="sync-top-nav">
            <button className="step-back-btn" onClick={onBack} aria-label="Go Back">
              <ArrowLeft size={22} color="#101A24" strokeWidth={2.2} />
            </button>
          </div>
        )}

        {/* Header Row */}
        <div className="sync-header-row">
          <div className="sync-title-block">
            <h1 className="sync-main-title">Sync Status</h1>
            <p className="sync-main-sub">Offline storage & automatic cloud sync</p>
          </div>

          <div className={`sync-status-indicator-badge ${syncComplete ? 'synced' : 'offline'}`}>
            {syncComplete ? (
              <CheckCircle2 size={16} color="#0B6B4A" strokeWidth={2.5} />
            ) : (
              <WifiOff size={16} color="#D97706" strokeWidth={2.5} />
            )}
            <span>{syncComplete ? 'Online • Synced' : `${pendingCount} Lots Waiting`}</span>
          </div>
        </div>

        {/* Offline Notice Banner Card */}
        <div className={`offline-notice-banner ${syncComplete ? 'success' : ''}`}>
          <div className="onb-header-row">
            <div className="onb-pill">
              <span className={`pulsing-dot ${syncComplete ? 'green' : 'amber'}`} />
              <strong>{syncComplete ? 'All Lots Synced' : `Offline • ${pendingCount} lots waiting to sync`}</strong>
            </div>
          </div>
          <p className="onb-description">
            {syncComplete 
              ? 'Great news! All your saved scrap lots have been safely synced to the cloud server.' 
              : "You're offline, but everything is saved. We'll sync automatically when you're back online."}
          </p>
        </div>

        {/* Queued Lots List Card */}
        <div className="sync-queue-card">
          <div className="queue-card-header">
            <h3 className="queue-header-title">
              {syncComplete ? 'Recently Synced Lots' : `Lots Waiting to Sync (${pendingCount})`}
            </h3>
          </div>

          <div className="queue-items-list">
            {queuedLots.map((lot) => (
              <div 
                key={lot.id} 
                className="queue-lot-row hover-lift"
                onClick={() => setSelectedLotDetail(lot)}
              >
                <div className="queue-thumb-wrap">
                  <img src={lot.image} alt={lot.title} className="queue-thumb-img" />
                </div>

                <div className="queue-info-col">
                  <h4 className="queue-item-title">{lot.title}</h4>
                  <span className="queue-meta-text">
                    {lot.weight} • {lot.time} • <strong className="lot-id-tag">{lot.lotNumber}</strong>
                  </span>
                </div>

                <div className="queue-right-col">
                  <span className="queue-amount-val">₹{lot.amount}</span>
                  {lot.synced ? (
                    <div className="queue-status-badge synced">
                      <Check size={11} color="#0B6B4A" strokeWidth={3} />
                      <span>Synced</span>
                    </div>
                  ) : (
                    <div className="queue-status-badge waiting">
                      <Clock size={11} color="#D97706" strokeWidth={2.5} />
                      <span>Waiting</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cloud Data Safety Card */}
        <div className="sync-safety-card">
          <div className="safety-card-left">
            <div className="safety-badge-title">
              <ShieldCheck size={16} color="#0B6B4A" strokeWidth={2.5} />
              <span>Your data is safe</span>
            </div>
            <p className="safety-desc">
              All photos, GPS tags, scale readings and buyer settlements are securely cached on this device with end-to-end cryptographic integrity.
            </p>
          </div>
          <div className="safety-card-right">
            <img 
              src="/assets/Kabadiwala_Connect_Sync_Status_UI_Asset_Pack/app/illustrations/sync_safety_illustration_reference.png" 
              alt="Safe sync lock illustration"
              className="sync-safety-illustration"
            />
          </div>
        </div>

        {/* Sync CTA Button */}
        <div className="sync-cta-wrap">
          <button 
            className={`step-primary-cta-btn ${isSyncing ? 'loading' : ''}`}
            onClick={handleTriggerSync}
            disabled={isSyncing}
          >
            <RotateCw size={18} className={isSyncing ? 'spin-anim' : ''} />
            <span>{isSyncing ? 'Syncing with Server...' : syncComplete ? 'Sync Again' : 'Try syncing again'}</span>
          </button>
        </div>
      </div>

      {/* Lot Detail Modal Sheet */}
      {selectedLotDetail && (
        <div className="price-modal-backdrop" onClick={() => setSelectedLotDetail(null)}>
          <div className="price-modal-sheet" onClick={(e) => e.stopPropagation()}>
            <div className="modal-sheet-header">
              <div className="sheet-item-info">
                <img src={selectedLotDetail.image} alt={selectedLotDetail.title} className="modal-thumb" />
                <div>
                  <h3>{selectedLotDetail.title}</h3>
                  <p>{selectedLotDetail.lotNumber} • {selectedLotDetail.time}</p>
                </div>
              </div>
              <button className="modal-close-btn" onClick={() => setSelectedLotDetail(null)}>
                <X size={18} color="#101A24" />
              </button>
            </div>

            <div className="history-receipt-box">
              <div className="receipt-row">
                <span>Category:</span>
                <strong>{selectedLotDetail.category}</strong>
              </div>
              <div className="receipt-row">
                <span>Cached Weight:</span>
                <strong>{selectedLotDetail.weight}</strong>
              </div>
              <div className="receipt-row">
                <span>Calculated Rate:</span>
                <strong>{selectedLotDetail.rate}</strong>
              </div>
              <div className="receipt-row">
                <span>Assigned Recycler:</span>
                <strong>{selectedLotDetail.buyer}</strong>
              </div>
              <div className="receipt-row highlight-row">
                <span>Pending Payout:</span>
                <strong className="receipt-payout-amount">₹{selectedLotDetail.amount}</strong>
              </div>
              <div className="receipt-status-row">
                <span>Sync Status:</span>
                <span style={{ fontWeight: 700, color: selectedLotDetail.synced ? '#0B6B4A' : '#D97706' }}>
                  {selectedLotDetail.synced ? '● Cloud Verified' : '🕒 Queued in Local Cache'}
                </span>
              </div>
            </div>

            <button 
              className="step-primary-cta-btn"
              onClick={() => setSelectedLotDetail(null)}
            >
              <span>Close</span>
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
          <span>History</span>
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
