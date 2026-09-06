import React, { useState } from 'react';
import { 
  ArrowLeft, Download, Share2, Check, CheckCircle2, 
  Store, ShieldCheck, Leaf, FileText, CheckCircle
} from 'lucide-react';

export default function TransactionReceiptView({
  t,
  sellFlowData,
  onDone,
  onBack
}) {
  const [downloading, setDownloading] = useState(false);
  const [shared, setShared] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const weight = sellFlowData?.weight || 2.5;
  const rate = sellFlowData?.ratePerKg || 125;
  const total = sellFlowData?.estimatedTotal || Math.round(weight * rate);
  const paymentMethod = sellFlowData?.paymentMethod === 'cash' ? 'Cash Settlement' : 'UPI (Google Pay)';
  const categoryName = sellFlowData?.categoryName || 'PCB / Circuit Board';
  const buyerName = sellFlowData?.buyer?.name || 'Rohini Recycling Centre';

  const handleDownload = () => {
    setDownloading(true);
    setTimeout(() => {
      setDownloading(false);
      setDownloadSuccess(true);
      setTimeout(() => setDownloadSuccess(false), 2500);
    }, 800);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `Kabadiwala Connect Receipt - ₹${total}`,
        text: `Sold ${weight}kg of ${categoryName} for ₹${total} via Kabadiwala Connect.`,
        url: window.location.href
      }).catch(() => {});
    } else {
      setShared(true);
      setTimeout(() => setShared(false), 2000);
    }
  };

  return (
    <div className="receipt-screen-wrapper page-fade-enter">
      {/* Top Header */}
      <div className="receipt-top-header">
        <button className="receipt-back-btn" onClick={onBack || onDone} aria-label="Go Back">
          <ArrowLeft size={22} color="#101A24" strokeWidth={2.2} />
        </button>
        <h1 className="receipt-screen-title">Receipt</h1>
        <div style={{ width: 36 }} />
      </div>

      {/* Scrollable Receipt Area */}
      <div className="receipt-scroll-container">
        {/* Perforated Receipt Paper Ticket */}
        <div className="receipt-paper-ticket">
          {/* Ticket Header Row */}
          <div className="receipt-brand-row">
            <div className="receipt-logo-lockup">
              <img 
                src="/assets/Kabadiwala_Connect_Transaction_Receipt_UI_Asset_Pack/02_app_assets/kc2_logo_lockup_transparent_reference.png" 
                alt="K2 Kabadiwala Connect" 
                className="receipt-k2-logo"
              />
              <div className="receipt-brand-text">
                <strong className="receipt-k2-title">K2</strong>
                <span className="receipt-k2-name">Kabadiwala Connect</span>
                <span className="receipt-k2-tagline">Recycle Today, Better Tomorrow</span>
              </div>
            </div>

            <div className="receipt-meta-box">
              <span className="receipt-type-label">Transaction Receipt</span>
              <span className="receipt-txn-num">#TXN7843291</span>
              <span className="receipt-txn-date">12 Mar 2025, 10:24 AM</span>
            </div>
          </div>

          <div className="receipt-ticket-divider" />

          {/* Paid To Section */}
          <div className="receipt-section">
            <span className="receipt-section-label">Paid To</span>
            <div className="receipt-buyer-card">
              <div className="buyer-store-icon">
                <Store size={20} color="#0B6B4A" strokeWidth={2.2} />
              </div>

              <div className="buyer-details-col">
                <div className="buyer-title-row">
                  <h3 className="buyer-store-name">{buyerName}</h3>
                  <div className="verified-check-mark">
                    <Check size={11} color="#FFFFFF" strokeWidth={3.5} />
                  </div>
                </div>
                <span className="buyer-loc-text">Kabadiwala • Rohini, Delhi</span>
                <span className="buyer-auth-code">Authorization ID: K2-DL-0891</span>
              </div>

              <div className="govt-auth-pill">
                <span className="govt-icon">🏛️</span>
                <span>Government Authorised</span>
              </div>
            </div>
          </div>

          <div className="receipt-ticket-divider" />

          {/* Item Details Section */}
          <div className="receipt-section">
            <span className="receipt-section-label">Item Details</span>
            <div className="receipt-item-row">
              <div className="receipt-item-thumb-box">
                <img 
                  src="/assets/Kabadiwala_Connect_Transaction_Receipt_UI_Asset_Pack/02_app_assets/pcb_photo_reference.png" 
                  alt={categoryName} 
                  className="receipt-item-img"
                />
              </div>

              <div className="receipt-item-info-col">
                <h4 className="receipt-item-heading">{categoryName}</h4>
                <p className="receipt-item-sub">Cables, chargers, circuit board etc.</p>
              </div>
            </div>

            {/* 3-Column Valuation Stats */}
            <div className="receipt-stats-grid">
              <div className="receipt-stat-col">
                <span className="stat-label">Total Weight</span>
                <span className="stat-value">
                  <span className="weight-bag-icon">⚖️</span> {weight} kg
                </span>
              </div>

              <div className="receipt-stat-col">
                <span className="stat-label">Rate (per kg)</span>
                <span className="stat-value">₹ {rate}</span>
              </div>

              <div className="receipt-stat-col total-col">
                <span className="stat-label">Total Amount</span>
                <span className="stat-value total-highlight">₹ {total}</span>
              </div>
            </div>
          </div>

          <div className="receipt-ticket-divider" />

          {/* Payment Details Section */}
          <div className="receipt-section">
            <span className="receipt-section-label">Payment Details</span>
            <div className="payment-specs-list">
              <div className="payment-spec-row">
                <span className="ps-label">Payment Method</span>
                <strong className="ps-val">{paymentMethod}</strong>
              </div>

              <div className="payment-spec-row">
                <span className="ps-label">Transaction ID</span>
                <strong className="ps-val">TXN7843291</strong>
              </div>

              <div className="payment-spec-row">
                <span className="ps-label">Payment Status</span>
                <div className="payment-received-tag">
                  <span className="received-dot" />
                  <span>Payment Received</span>
                </div>
              </div>
            </div>
          </div>

          {/* Thank You Green Impact Banner */}
          <div className="receipt-impact-banner">
            <div className="impact-leaf-circle">
              <Leaf size={18} color="#FFFFFF" strokeWidth={2.4} />
            </div>
            <div className="impact-banner-text">
              <h4 className="impact-title">Thank you for recycling!</h4>
              <p className="impact-sub">You're helping build a cleaner, greener India.</p>
            </div>
          </div>

          {/* Footer Motto */}
          <div className="receipt-footer-motto">
            <span>KEEP RECYCLING, KEEP MAKING A DIFFERENCE</span>
          </div>
        </div>

        {/* Action Buttons: Download & Share */}
        <div className="receipt-actions-row">
          <button 
            className="receipt-action-btn"
            onClick={handleDownload}
            disabled={downloading}
          >
            <Download size={18} color="#0B6B4A" strokeWidth={2.2} />
            <span>{downloadSuccess ? 'Downloaded!' : downloading ? 'Generating...' : 'Download Bill'}</span>
          </button>

          <button 
            className="receipt-action-btn"
            onClick={handleShare}
          >
            <Share2 size={18} color="#0B6B4A" strokeWidth={2.2} />
            <span>{shared ? 'Copied Link!' : 'Share Bill'}</span>
          </button>
        </div>

        {/* Primary Done Button */}
        <button 
          className="receipt-done-primary-btn"
          onClick={onDone}
        >
          <span>Done</span>
        </button>
      </div>
    </div>
  );
}
