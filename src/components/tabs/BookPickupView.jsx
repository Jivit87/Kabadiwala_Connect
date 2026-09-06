import React, { useState } from 'react';
import { 
  Home, Calendar, Camera, TrendingUp, User, 
  MapPin, ChevronDown, Check, Star, Clock, 
  Truck, CheckCircle2, X, Phone, ShieldCheck
} from 'lucide-react';

export default function BookPickupView({
  t,
  currentLocation = 'Rohini, Delhi',
  onNavigateTab,
  onBack
}) {
  const [selectedDateIndex, setSelectedDateIndex] = useState(0);
  const [selectedLocation, setSelectedLocation] = useState(currentLocation);
  const [showLocationModal, setShowLocationModal] = useState(false);
  const [bookingModalPartner, setBookingModalPartner] = useState(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('4:00 PM - 6:00 PM');
  const [selectedMaterials, setSelectedMaterials] = useState(['E-waste', 'Electronics']);
  const [bookingToast, setBookingToast] = useState(null);

  const dates = [
    { label: t.todayLabel || 'Today', date: '07 Sep', isAvailable: true },
    { label: t.tomorrowLabel || 'Tomorrow', date: '08 Sep', isAvailable: true },
    { label: 'Wed', date: '09 Sep', isAvailable: true },
    { label: 'Thu', date: '10 Sep', isAvailable: true },
    { label: 'Fri', date: '11 Sep', isAvailable: true }
  ];

  const locationsList = [
    'Rohini, Delhi',
    'Andheri West, Mumbai',
    'Koramangala, Bengaluru',
    'Kothrud, Pune',
    'Connaught Place, Delhi'
  ];

  const kabadiwalas = [
    {
      id: 'k1',
      name: 'Rakesh Kumar',
      initials: 'R',
      rating: 4.8,
      reviews: 124,
      distance: '1.8 km',
      status: 'Available Today',
      statusType: 'available', // available | limited | booked
      verified: true,
      materials: ['E-waste', 'Electronics', 'Cables', 'Plastic'],
      phone: '+91 98765 43210'
    },
    {
      id: 'k2',
      name: 'Suresh Kumar',
      initials: 'SK',
      rating: 4.6,
      reviews: 98,
      distance: '2.4 km',
      status: 'Few slots left',
      statusType: 'limited',
      verified: true,
      materials: ['Paper', 'Plastic', 'Metal', 'Electronic'],
      phone: '+91 98111 22334'
    },
    {
      id: 'k3',
      name: 'Amit Sharma',
      initials: 'AM',
      rating: 4.4,
      reviews: 76,
      distance: '3.2 km',
      status: 'Fully booked',
      statusType: 'booked',
      verified: false,
      materials: ['Metal', 'Plastic', 'Paper'],
      phone: '+91 98222 33445'
    }
  ];

  const timeSlots = [
    '10:00 AM - 12:00 PM',
    '12:00 PM - 2:00 PM',
    '2:00 PM - 4:00 PM',
    '4:00 PM - 6:00 PM'
  ];

  const allAvailableMaterials = ['E-waste', 'Electronics', 'Cables', 'Plastic', 'Paper', 'Metal', 'Batteries'];

  const toggleMaterial = (mat) => {
    if (selectedMaterials.includes(mat)) {
      if (selectedMaterials.length > 1) {
        setSelectedMaterials(selectedMaterials.filter(m => m !== mat));
      }
    } else {
      setSelectedMaterials([...selectedMaterials, mat]);
    }
  };

  const handleConfirmBooking = (e) => {
    e.preventDefault();
    const partner = bookingModalPartner;
    setBookingModalPartner(null);
    setBookingToast(`Pickup booked with ${partner.name} for ${dates[selectedDateIndex].label} (${selectedTimeSlot})!`);
    setTimeout(() => setBookingToast(null), 3500);
  };

  return (
    <div className="book-pickup-screen page-fade-enter">
      {/* Top Bar */}
      <div className="book-pickup-top-bar">
        <h1 className="book-pickup-title">{t.bookingsTitle || 'Book a Pickup'}</h1>
        <button 
          className="location-pill-btn"
          onClick={() => setShowLocationModal(true)}
          aria-label="Select Location"
        >
          <MapPin size={13} color="#0B6B4A" />
          <span>{selectedLocation}</span>
          <ChevronDown size={13} color="#0B6B4A" />
        </button>
      </div>

      {/* Main Scroll Content */}
      <div className="book-pickup-scroll-container">
        {/* Next Scheduled Pickup Banner */}
        <div className="next-pickup-banner">
          <div className="next-pickup-icon-circle">
            <Truck size={20} color="#0B6B4A" strokeWidth={2.4} />
          </div>
          <div className="next-pickup-info">
            <span className="np-label">{t.nextScheduledPickup || 'Next Scheduled Pickup'}</span>
            <strong className="np-name">Rakesh Kumar • Today, 4:00 PM</strong>
          </div>
          <div className="np-live-tag">
            <span>● {t.confirmedStatus || 'Confirmed'}</span>
          </div>
        </div>

        {/* Date Selector Row */}
        <div className="date-selector-section">
          <span className="section-sublabel">{t.selectPickupDate || 'Select Pickup Date'}</span>
          <div className="date-chips-row">
            {dates.map((d, index) => {
              const isSelected = index === selectedDateIndex;
              return (
                <button
                  key={index}
                  className={`date-chip ${isSelected ? 'active' : ''}`}
                  onClick={() => setSelectedDateIndex(index)}
                >
                  <span className="date-chip-label">{d.label}</span>
                  <strong className="date-chip-day">{d.date}</strong>
                </button>
              );
            })}
          </div>
        </div>

        {/* Available Kabadiwalas Section */}
        <div className="kabadiwalas-section">
          <div className="section-header-row">
            <h2 className="section-heading">{t.availableKabadiwalas || 'Available Kabadiwalas'}</h2>
            <span className="partners-count-badge">3 {t.nearbyBadge || 'nearby'}</span>
          </div>

          <div className="kabadiwalas-list">
            {kabadiwalas.map((k) => {
              const isBooked = k.statusType === 'booked';
              return (
                <div key={k.id} className="kabadiwala-card">
                  {/* Top Row: Avatar + Info */}
                  <div className="kabadiwala-card-top">
                    <div className="k-avatar-circle">
                      <span>{k.initials}</span>
                    </div>

                    <div className="k-info-col">
                      <div className="k-name-row">
                        <h3 className="k-name">{k.name}</h3>
                        {k.verified && (
                          <div className="k-verified-pill" title="Verified Recycler">
                            <Check size={10} color="#FFFFFF" strokeWidth={3.5} />
                            <span>{t.verifiedBadge || 'Verified'}</span>
                          </div>
                        )}
                      </div>

                      <div className="k-meta-row">
                        <div className="k-rating-pill">
                          <Star size={11} color="#F59E0B" fill="#F59E0B" />
                          <span>{k.rating}</span>
                          <span className="k-reviews-count">({k.reviews})</span>
                        </div>
                        <span className="k-dot-separator">•</span>
                        <span className="k-distance-text">{k.distance}</span>
                      </div>
                    </div>

                    <div className={`k-status-badge ${k.statusType}`}>
                      <span className="status-dot" />
                      <span>{k.status}</span>
                    </div>
                  </div>

                  {/* Middle Row: Accepted Material Tags */}
                  <div className="k-materials-wrap">
                    <span className="materials-label">{t.buysLabel || 'Buys:'}</span>
                    <div className="material-tags-row">
                      {k.materials.map((mat, i) => (
                        <span key={i} className="k-mat-chip">
                          {mat}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Action Row */}
                  <div className="k-card-action-row">
                    <button 
                      className={`k-book-btn ${isBooked ? 'disabled' : ''}`}
                      disabled={isBooked}
                      onClick={() => setBookingModalPartner(k)}
                    >
                      {isBooked ? (t.fullyBooked || 'Fully Booked') : (t.bookPickupBtn || 'Book Pickup →')}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Booking Confirmation Modal Sheet */}
      {bookingModalPartner && (
        <div className="profile-modal-backdrop" onClick={() => setBookingModalPartner(null)}>
          <div className="profile-modal-sheet" onClick={(e) => e.stopPropagation()}>
            <div className="modal-sheet-header">
              <div className="sheet-item-info">
                <div className="k-avatar-circle" style={{ width: 42, height: 42, fontSize: 16 }}>
                  <span>{bookingModalPartner.initials}</span>
                </div>
                <div>
                  <h3 style={{ margin: 0, fontSize: 16, fontWeight: 800, color: '#101A24' }}>
                    Book {bookingModalPartner.name}
                  </h3>
                  <p style={{ margin: '2px 0 0', fontSize: 12, color: '#6E7782' }}>
                    {dates[selectedDateIndex].label} ({dates[selectedDateIndex].date}) • {selectedLocation}
                  </p>
                </div>
              </div>
              <button className="modal-close-btn" onClick={() => setBookingModalPartner(null)}>
                <X size={18} color="#6B7280" />
              </button>
            </div>

            <form onSubmit={handleConfirmBooking} className="profile-form" style={{ marginTop: 12 }}>
              <div className="form-group">
                <label>{t.selectTimeSlot || 'Select Time Slot'}</label>
                <div className="time-slots-grid">
                  {timeSlots.map((slot, idx) => (
                    <button
                      key={idx}
                      type="button"
                      className={`time-slot-chip ${selectedTimeSlot === slot ? 'active' : ''}`}
                      onClick={() => setSelectedTimeSlot(slot)}
                    >
                      <Clock size={12} />
                      <span>{slot}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="form-group">
                <label>{t.scrapMaterialsForPickup || 'Scrap Materials for Pickup'}</label>
                <div className="material-selection-grid">
                  {allAvailableMaterials.map((mat, idx) => {
                    const isSelected = selectedMaterials.includes(mat);
                    return (
                      <button
                        key={idx}
                        type="button"
                        className={`mat-select-chip ${isSelected ? 'selected' : ''}`}
                        onClick={() => toggleMaterial(mat)}
                      >
                        {isSelected && <Check size={11} strokeWidth={3} />}
                        <span>{mat}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="form-group">
                <label>{t.pickupLocation || 'Pickup Location'}</label>
                <div className="pickup-loc-preview">
                  <MapPin size={15} color="#0B6B4A" />
                  <span>{selectedLocation} ({t.defaultSavedAddress || 'Default Saved Address'})</span>
                </div>
              </div>

              <button type="submit" className="profile-save-btn" style={{ marginTop: 10 }}>
                {t.confirmDoorstepPickup || 'Confirm Doorstep Pickup'}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Location Selector Modal Sheet */}
      {showLocationModal && (
        <div className="profile-modal-backdrop" onClick={() => setShowLocationModal(false)}>
          <div className="profile-modal-sheet" onClick={(e) => e.stopPropagation()}>
            <div className="modal-sheet-header">
              <h3>{t.selectServiceZone || 'Select Service Zone'}</h3>
              <button className="modal-close-btn" onClick={() => setShowLocationModal(false)}>
                <X size={18} color="#6B7280" />
              </button>
            </div>

            <div className="locations-list-group">
              {locationsList.map((loc, i) => (
                <div 
                  key={i} 
                  className={`loc-choice-row ${selectedLocation === loc ? 'active' : ''}`}
                  onClick={() => {
                    setSelectedLocation(loc);
                    setShowLocationModal(false);
                  }}
                >
                  <MapPin size={16} color={selectedLocation === loc ? '#0B6B4A' : '#6E7782'} />
                  <span>{loc}</span>
                  {selectedLocation === loc && <Check size={16} color="#0B6B4A" />}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Floating Success Toast */}
      {bookingToast && (
        <div className="profile-toast-banner">
          <CheckCircle2 size={16} color="#FFFFFF" />
          <span>{bookingToast}</span>
        </div>
      )}

      {/* Fixed 5-Tab Bottom Navigation Bar */}
      <div className="home-nav-bar">
        <button 
          className="nav-tab"
          onClick={() => onNavigateTab ? onNavigateTab('home') : onBack && onBack()}
        >
          <Home size={22} className="tab-icon" />
          <span>{t.tabHome || 'Home'}</span>
        </button>

        <button className="nav-tab active">
          <Calendar size={22} className="tab-icon" />
          <span>{t.tabBookings || 'Bookings'}</span>
        </button>

        {/* Center Floating Camera FAB with Pulse Ring */}
        <button 
          className="nav-fab-camera camera-glow-btn" 
          onClick={() => onNavigateTab ? onNavigateTab('step1_photo') : onBack && onBack()}
          aria-label="Camera Scan"
        >
          <Camera size={26} color="#FFFFFF" />
          <span className="fab-label">{t.tabCamera || 'Camera'}</span>
        </button>

        <button 
          className="nav-tab"
          onClick={() => onNavigateTab ? onNavigateTab('todays_prices') : onBack && onBack()}
        >
          <TrendingUp size={22} className="tab-icon" />
          <span>{t.tabRates || 'Rates'}</span>
        </button>

        <button 
          className="nav-tab"
          onClick={() => onNavigateTab ? onNavigateTab('profile') : onBack && onBack()}
        >
          <User size={22} className="tab-icon" />
          <span>{t.tabProfile || 'Profile'}</span>
        </button>
      </div>
    </div>
  );
}
