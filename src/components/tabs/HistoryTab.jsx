import React, { useState } from 'react';
import { 
  ArrowLeft, SlidersHorizontal, ChevronRight, Home, Calendar, 
  Camera, Tag, User, X, CheckCircle2, Clock, AlertCircle, TrendingUp,
  PackageCheck, HelpCircle, Download, Search
} from 'lucide-react';

export default function HistoryTab({
  t = {},
  lots = null,
  onBack,
  onNavigateTab
}) {
  const [activeSegment, setActiveSegment] = useState('all'); // 'all' | 'active' | 'completed'
  const [selectedLotDetail, setSelectedLotDetail] = useState(null);
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const defaultLots = [
    {
      id: 'lot_1',
      lotNumber: 'Lot #A7F2K9',
      title: 'PCB / Circuit Board',
      category: 'E-Waste',
      date: '3 Sep 2026',
      weight: '2.5 kg',
      rate: '₹125/kg',
      amount: 312,
      status: 'Completed',
      statusType: 'completed',
      statusCode: 'completed',
      image: '/assets/Kabadiwala_Connect_History_UI_Asset_Pack/app/crops/pcb_thumbnail.png',
      buyer: 'GreenCycle Recycling',
      settlementMode: 'UPI QR Transfer',
      notes: 'Inspected Grade A circuit boards with full copper recovery trace.'
    },
    {
      id: 'lot_2',
      lotNumber: 'Lot #B3D9L1',
      title: 'Cables & Wires',
      category: 'Metals',
      date: '1 Sep 2026',
      weight: '4.0 kg',
      rate: '₹70/kg',
      amount: 280,
      status: 'Handed Over',
      statusType: 'active',
      statusCode: 'handed_over',
      image: '/assets/Kabadiwala_Connect_History_UI_Asset_Pack/app/crops/cables_thumbnail.png',
      buyer: 'EcoScrap Solutions',
      settlementMode: 'Cash on Delivery',
      notes: 'Driver picked up from Rohini Sector 7. Awaiting final recycler depot weigh-in.'
    },
    {
      id: 'lot_3',
      lotNumber: 'Lot #C6H4P0',
      title: 'Car Battery',
      category: 'Batteries',
      date: '29 Aug 2026',
      weight: '8.2 kg',
      rate: '₹62/kg',
      amount: 510,
      status: 'Listed',
      statusType: 'active',
      statusCode: 'listed',
      image: '/assets/Kabadiwala_Connect_History_UI_Asset_Pack/app/crops/battery_thumbnail.png',
      buyer: 'Awaiting Buyer Match',
      settlementMode: 'Direct Settlement',
      notes: 'Listed on buyer exchange with verified dry-cell certificate.'
    },
    {
      id: 'lot_4',
      lotNumber: 'Lot #E9V2M8',
      title: 'LCD Display',
      category: 'E-Waste',
      date: '24 Aug 2026',
      weight: '3.1 kg',
      rate: '₹61/kg',
      amount: 190,
      status: 'Disputed',
      statusType: 'disputed',
      statusCode: 'disputed',
      image: '/assets/Kabadiwala_Connect_History_UI_Asset_Pack/app/crops/lcd_thumbnail.png',
      buyer: 'TechRecycle Delhi',
      settlementMode: 'Review Pending',
      notes: 'Minor tare weight variation recorded at hub scale (-0.4 kg). Dispute under review.'
    }
  ];

  const allLots = lots || defaultLots;

  const filteredLots = allLots.filter((lot) => {
    if (activeSegment === 'active' && lot.statusType !== 'active') return false;
    if (activeSegment === 'completed' && lot.statusType !== 'completed') return false;
    if (categoryFilter !== 'All' && lot.category !== categoryFilter) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      const matchTitle = lot.title.toLowerCase().includes(q);
      const matchLotNum = lot.lotNumber.toLowerCase().includes(q);
      const matchBuyer = lot.buyer.toLowerCase().includes(q);
      if (!matchTitle && !matchLotNum && !matchBuyer) return false;
    }
    return true;
  });

  const getStatusIcon = (statusCode) => {
    switch (statusCode) {
      case 'completed':
        return <CheckCircle2 size={12} color="#0B6B4A" strokeWidth={2.5} />;
      case 'handed_over':
        return <Clock size={12} color="#D97706" strokeWidth={2.5} />;
      case 'listed':
        return <PackageCheck size={12} color="#0B6B4A" strokeWidth={2.5} />;
      case 'disputed':
        return <AlertCircle size={12} color="#DC2626" strokeWidth={2.5} />;
      default:
        return <Clock size={12} color="#6E7782" strokeWidth={2.5} />;
    }
  };

  return (
    <div className="history-screen page-fade-enter">
      {/* Scrollable Container */}
      <div className="history-scroll-content">
        {/* Top Back Nav (if applicable) */}
        {onBack && (
          <div className="history-top-nav">
            <button className="step-back-btn" onClick={onBack} aria-label="Go Back">
              <ArrowLeft size={22} color="#101A24" strokeWidth={2.2} />
            </button>
          </div>
        )}

        {/* Header Row */}
        <div className="history-header-row">
          <div className="history-title-block">
            <h1 className="history-main-title">{t.historyTitle || 'History'}</h1>
            <p className="history-main-sub">Track all your scrap collection lots</p>
          </div>

          <button 
            className="history-filter-btn"
            onClick={() => setShowFilterModal(true)}
            aria-label="Filter transactions"
          >
            <SlidersHorizontal size={20} color="#101A24" strokeWidth={2.2} />
          </button>
        </div>

        {/* Instant Search Bar */}
        <div className="prices-search-box" style={{ margin: '0 0 12px 0' }}>
          <Search size={16} color="#6B7280" />
          <input 
            type="text"
            className="prices-search-input"
            placeholder={t.searchHistoryPlaceholder || 'Search by lot # or buyer...'}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button className="search-clear-btn" onClick={() => setSearchQuery('')}>
              <X size={14} color="#6B7280" />
            </button>
          )}
        </div>

        {/* Segmented Filter Pills */}
        <div className="history-segments-bar">
          <button 
            className={`history-segment-pill ${activeSegment === 'all' ? 'active' : ''}`}
            onClick={() => setActiveSegment('all')}
          >
            <span>{t.historyAll || 'All'}</span>
            <span className="segment-count">{allLots.length}</span>
          </button>

          <button 
            className={`history-segment-pill ${activeSegment === 'active' ? 'active' : ''}`}
            onClick={() => setActiveSegment('active')}
          >
            <span>{t.historyActive || 'Active'}</span>
            <span className="segment-count">
              {allLots.filter(l => l.statusType === 'active').length}
            </span>
          </button>

          <button 
            className={`history-segment-pill ${activeSegment === 'completed' ? 'active' : ''}`}
            onClick={() => setActiveSegment('completed')}
          >
            <span>{t.historyCompleted || 'Completed'}</span>
            <span className="segment-count">
              {allLots.filter(l => l.statusType === 'completed').length}
            </span>
          </button>
        </div>

        {/* Scrap Lot Cards List */}
        <div className="history-lots-list">
          {filteredLots.length === 0 ? (
            <div className="history-empty-state">
              <p>No transactions found for this filter.</p>
            </div>
          ) : (
            filteredLots.map((lot) => (
              <div 
                key={lot.id} 
                className="history-lot-card hover-lift"
                onClick={() => setSelectedLotDetail(lot)}
              >
                <div className="lot-card-left">
                  <div className="lot-thumb-wrap">
                    <img src={lot.image} alt={lot.title} className="lot-thumb-img" />
                  </div>

                  <div className="lot-info-col">
                    <h3 className="lot-item-title">{lot.title}</h3>
                    <span className="lot-meta-text">
                      {lot.weight} • {lot.date} • <strong className="lot-id-tag">{lot.lotNumber}</strong>
                    </span>
                  </div>
                </div>

                <div className="lot-card-right">
                  <span className="lot-amount-val">₹{lot.amount}</span>
                  <div className={`lot-status-pill ${lot.statusCode}`}>
                    {getStatusIcon(lot.statusCode)}
                    <span>{lot.status}</span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* View Earnings Summary Banner */}
        <div 
          className="earnings-summary-banner hover-lift"
          onClick={() => onNavigateTab ? onNavigateTab('my_earnings') : null}
        >
          <div className="es-banner-left">
            <div className="es-banner-icon-wrap">
              <TrendingUp size={22} color="#0B6B4A" strokeWidth={2.4} />
            </div>
            <div className="es-banner-text-col">
              <h4 className="es-banner-title">View Earnings Summary</h4>
              <p className="es-banner-sub">See total earnings and analytics from all your lots</p>
            </div>
          </div>
          <ChevronRight size={20} color="#0B6B4A" />
        </div>
      </div>

      {/* Lot Detail Modal Sheet */}
      {selectedLotDetail && (
        <div className="price-modal-backdrop" onClick={() => setSelectedLotDetail(null)}>
          <div className="price-modal-sheet history-detail-sheet" onClick={(e) => e.stopPropagation()}>
            <div className="modal-sheet-header">
              <div className="sheet-item-info">
                <img src={selectedLotDetail.image} alt={selectedLotDetail.title} className="modal-thumb" />
                <div>
                  <h3>{selectedLotDetail.title}</h3>
                  <p>{selectedLotDetail.lotNumber} • {selectedLotDetail.date}</p>
                </div>
              </div>
              <button className="modal-close-btn" onClick={() => setSelectedLotDetail(null)}>
                <X size={18} color="#101A24" />
              </button>
            </div>

            {/* Receipt Summary Box */}
            <div className="history-receipt-box">
              <div className="receipt-row">
                <span>{t.scrapCategories || 'Category'}:</span>
                <strong>{selectedLotDetail.category}</strong>
              </div>
              <div className="receipt-row">
                <span>{t.weight || 'Weight Collected'}:</span>
                <strong>{selectedLotDetail.weight}</strong>
              </div>
              <div className="receipt-row">
                <span>{t.rate || 'Unit Rate'}:</span>
                <strong>{selectedLotDetail.rate}</strong>
              </div>
              <div className="receipt-row">
                <span>{t.buyer || 'Assigned Recycler'}:</span>
                <strong>{selectedLotDetail.buyer}</strong>
              </div>
              <div className="receipt-row">
                <span>{t.paymentMode || 'Payment Mode'}:</span>
                <strong>{selectedLotDetail.settlementMode}</strong>
              </div>
              <div className="receipt-row highlight-row">
                <span>{t.totalAmount || 'Total Payout'}:</span>
                <strong className="receipt-payout-amount">₹{selectedLotDetail.amount}</strong>
              </div>
              <div className="receipt-status-row">
                <span>{t.status || 'Current Status'}:</span>
                <div className={`lot-status-pill ${selectedLotDetail.statusCode}`}>
                  {getStatusIcon(selectedLotDetail.statusCode)}
                  <span>{selectedLotDetail.status}</span>
                </div>
              </div>
            </div>

            {/* Lot Notes */}
            <div className="lot-notes-box">
              <p className="lot-notes-text">
                <strong>Lot Note:</strong> {selectedLotDetail.notes}
              </p>
            </div>

            {/* Modal CTA Buttons */}
            <div className="history-modal-cta-row">
              <button 
                className="step-primary-cta-btn"
                onClick={() => setSelectedLotDetail(null)}
              >
                <span>Close Details</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Filter Options Modal Sheet */}
      {showFilterModal && (
        <div className="price-modal-backdrop" onClick={() => setShowFilterModal(false)}>
          <div className="price-modal-sheet" onClick={(e) => e.stopPropagation()}>
            <div className="modal-sheet-header">
              <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 800 }}>Filter History</h3>
              <button className="modal-close-btn" onClick={() => setShowFilterModal(false)}>
                <X size={18} color="#101A24" />
              </button>
            </div>

            <div style={{ padding: '8px 0 16px' }}>
              <span style={{ fontSize: '13px', fontWeight: 700, color: '#101A24', display: 'block', marginBottom: '10px' }}>
                Material Category:
              </span>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {['All', 'E-Waste', 'Metals', 'Batteries'].map((cat) => (
                  <button
                    key={cat}
                    className={`history-filter-chip ${categoryFilter === cat ? 'active' : ''}`}
                    onClick={() => setCategoryFilter(cat)}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <button 
              className="step-primary-cta-btn"
              onClick={() => setShowFilterModal(false)}
            >
              <span>Apply Filters</span>
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
          className="nav-tab active"
          onClick={() => null}
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
