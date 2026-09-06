import React, { useState } from 'react';
import { ArrowLeft, Check, Share2, ArrowRight, Banknote, QrCode } from 'lucide-react';
import { haptics } from '../../utils/haptics';

export default function PaymentView({ 
  t, 
  sellFlowData, 
  onNext, 
  onBack 
}) {
  const [paymentMode, setPaymentMode] = useState('upi'); // 'upi' | 'cash'
  const [isSharing, setIsSharing] = useState(false);
  const [isEditingAmount, setIsEditingAmount] = useState(false);
  const [customAmount, setCustomAmount] = useState(sellFlowData?.totalPayout || sellFlowData?.estimatedTotal || 312);

  const amount = customAmount;
  const buyerName = sellFlowData?.buyer?.name || 'GreenCycle Recycling';

  const handleShare = () => {
    haptics.tapTick();
    if (navigator.share) {
      navigator.share({
        title: 'Kabadiwala Connect Payment Request',
        text: `Payment request for ₹${amount} from ${buyerName} for scrap lot.`,
        url: window.location.href
      }).catch(() => {});
    } else {
      setIsSharing(true);
      setTimeout(() => setIsSharing(false), 1800);
    }
  };

  const handleConfirm = () => {
    haptics.successChime();
    if (onNext) {
      onNext({
        paymentMode,
        amountPaid: amount,
        buyerName,
        paidAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      });
    }
  };

  return (
    <div className="payment-screen page-fade-enter">
      {/* Top Header */}
      <div className="step-header">
        <button className="step-back-btn" onClick={onBack} aria-label="Go Back">
          <ArrowLeft size={22} color="#101A24" strokeWidth={2.2} />
        </button>
        <div className="step-header-text">
          <h1 className="step-title">{t.paymentTitle || 'Payment'}</h1>
        </div>
      </div>

      {/* Amount To Receive Hero Card */}
      <div className="payment-hero-card">
        <span className="payment-hero-caption">{t.amountToReceive || 'Amount to receive'}</span>
        <div className="payment-hero-amount">
          <span className="payment-rupee">₹</span>
          <span className="payment-number">{amount}</span>
        </div>
        <span className="payment-hero-sub">{t.fullPaymentSub || 'Full payment'}</span>
      </div>

      {/* Payment Method Selector */}
      <div className="payment-methods-section">
        <h2 className="payment-methods-heading">{t.howReceivedPayment || 'How did you receive the payment?'}</h2>

        <div className="payment-methods-grid">
          {/* Cash Card */}
          <div 
            className={`payment-method-card ${paymentMode === 'cash' ? 'selected' : ''}`}
            onClick={() => setPaymentMode('cash')}
          >
            <div className="method-badge-top-right">
              {paymentMode === 'cash' ? (
                <div className="method-check-circle">
                  <Check size={12} color="#FFFFFF" strokeWidth={3} />
                </div>
              ) : (
                <div className="method-unselected-circle" />
              )}
            </div>

            <div className="method-artwork-wrap">
              <img 
                src="/assets/Kabadiwala_Connect_Payment_UI_Asset_Pack/02_payment_icons/cash_money_illustration.jpg" 
                alt="Cash Payment" 
                className="method-artwork-img"
              />
            </div>
            <span className="method-title">{t.cashMethod || 'Cash'}</span>
          </div>

          {/* UPI Card */}
          <div 
            className={`payment-method-card ${paymentMode === 'upi' ? 'selected' : ''}`}
            onClick={() => setPaymentMode('upi')}
          >
            <div className="method-badge-top-right">
              {paymentMode === 'upi' ? (
                <div className="method-check-circle">
                  <Check size={12} color="#FFFFFF" strokeWidth={3} />
                </div>
              ) : (
                <div className="method-unselected-circle" />
              )}
            </div>

            <div className="method-artwork-wrap">
              <img 
                src="/assets/Kabadiwala_Connect_Payment_UI_Asset_Pack/02_payment_icons/upi_qr_illustration.jpg" 
                alt="UPI Payment" 
                className="method-artwork-img"
              />
            </div>
            <span className="method-title">{t.upiMethod || 'UPI'}</span>
          </div>
        </div>
      </div>

      {/* Dynamic Payment Details Area */}
      {paymentMode === 'upi' ? (
        <div className="upi-qr-card">
          <h3 className="upi-qr-title">{t.scanToPay || 'Scan to pay'}</h3>
          <p className="upi-qr-sub">{t.useAnyUpi || 'Use any UPI app'}</p>

          <div className="qr-image-container">
            <img 
              src="/assets/Kabadiwala_Connect_Payment_UPI_UI_Asset_Pack/02_qr_assets/qr_reference.jpg" 
              alt="UPI QR Code" 
              className="upi-qr-code-img"
            />
          </div>

          <div className="qr-payee-info">
            <span className="qr-amount-text">₹{amount}</span>
            <span className="qr-buyer-name">{buyerName}</span>
          </div>

          <button 
            className="share-payment-btn"
            onClick={handleShare}
            aria-label="Share payment request"
          >
            <Share2 size={16} color="#0B6B4A" strokeWidth={2.2} />
            <span>{isSharing ? (t.linkCopiedToast || 'Link Copied!') : (t.sharePaymentRequest || 'Share payment request')}</span>
          </button>
        </div>
      ) : (
        <div className="cash-received-banner">
          <div className="cash-check-icon-circle">
            <Check size={20} color="#FFFFFF" strokeWidth={3} />
          </div>
          <div className="cash-banner-text">
            <h4 className="cash-banner-title">{t.cashReceivedTitle || 'Cash received'}</h4>
            <p className="cash-banner-sub">{t.markAfterCash || 'Mark this after receiving the cash.'}</p>
          </div>
        </div>
      )}

      {/* Payment Amount & Edit Row */}
      <div className="payment-amount-row">
        <span className="amount-row-label">{t.paymentAmountLabel || 'Payment amount'}</span>
        <div className="amount-row-right">
          {isEditingAmount ? (
            <input 
              type="number" 
              className="amount-edit-input" 
              value={customAmount} 
              onChange={(e) => setCustomAmount(Number(e.target.value) || 0)}
              onBlur={() => setIsEditingAmount(false)}
              autoFocus
            />
          ) : (
            <>
              <span className="amount-row-val">₹{amount}</span>
              <button 
                className="amount-edit-btn"
                onClick={() => setIsEditingAmount(true)}
              >
                {t.editBtn || 'Edit'}
              </button>
            </>
          )}
        </div>
      </div>

      {/* Sticky Bottom Action Button */}
      <div className="step-bottom-cta payment-cta-wrap">
        <button 
          className="step-primary-cta-btn"
          onClick={handleConfirm}
        >
          <span>{t.confirmPaymentBtn || 'Confirm Payment'}</span>
          <ArrowRight size={18} strokeWidth={2.5} />
        </button>
        <p className="payment-warning-text">{t.confirmWarning || 'Confirm only after receiving the payment.'}</p>
      </div>
    </div>
  );
}
