import React, { useState } from 'react';
import { 
  User, MapPin, Globe, RefreshCw, ShieldAlert, 
  Settings, HelpCircle, ChevronRight, Edit2, Check,
  Leaf, Home, Calendar, Camera, TrendingUp, X, Phone,
  Bell, Volume2, ShieldCheck, CheckCircle2
} from 'lucide-react';

export default function ProfileTab({
  t,
  user = { name: 'Rakesh', phone: '7015363695' },
  onUpdateUser,
  onNavigateTab,
  onBack
}) {
  const [activeModal, setActiveModal] = useState(null); // 'edit_profile', 'address', 'settings', 'help', null
  const [editName, setEditName] = useState(user.name || 'Rakesh');
  const [editPhone, setEditPhone] = useState(user.phone || '7015363695');
  const [savedToast, setSavedToast] = useState(null);

  const [address, setAddress] = useState({
    line1: 'Shop #14, Sector 7 Scrap Market',
    area: 'Rohini, Delhi',
    pincode: '110085'
  });

  const [settings, setSettings] = useState({
    notifications: true,
    audioGuidance: true,
    autoSyncWifi: true,
    smsAlerts: true
  });

  const handleSaveProfile = (e) => {
    e?.preventDefault();
    if (onUpdateUser) {
      onUpdateUser({ name: editName, phone: editPhone });
    }
    setActiveModal(null);
    showToast(t.profileSaved || 'Profile details updated!');
  };

  const handleSaveAddress = (e) => {
    e?.preventDefault();
    setActiveModal(null);
    showToast(t.addressSaved || 'Pickup address saved successfully!');
  };

  const showToast = (msg) => {
    setSavedToast(msg);
    setTimeout(() => setSavedToast(null), 2500);
  };

  const menuItems = [
    {
      id: 'profile_details',
      icon: User,
      title: t.profileDetails || 'Profile Details',
      subtitle: t.profileDetailsDesc || 'View and update your personal details',
      action: () => setActiveModal('edit_profile')
    },
    {
      id: 'address',
      icon: MapPin,
      title: t.address || 'Address',
      subtitle: t.addressDesc || 'Manage your delivery and pickup address',
      action: () => setActiveModal('address')
    },
    {
      id: 'language',
      icon: Globe,
      title: t.language || 'Language',
      subtitle: t.languageDesc || 'Choose your preferred language',
      action: () => onNavigateTab ? onNavigateTab('language') : null
    },
    {
      id: 'sync_details',
      icon: RefreshCw,
      title: t.syncDetails || 'Sync Details',
      subtitle: t.syncDetailsDesc || 'Sync your data across devices',
      action: () => onNavigateTab ? onNavigateTab('sync_status') : null
    },
    {
      id: 'safety_hazards',
      icon: ShieldAlert,
      title: t.safetyHazards || 'Safety & Hazards',
      subtitle: t.safetyHazardsDesc || 'Learn about safety guidelines for e-waste',
      action: () => onNavigateTab ? onNavigateTab('safety_tips') : null
    },
    {
      id: 'app_settings',
      icon: Settings,
      title: t.appSettings || 'App Settings',
      subtitle: t.appSettingsDesc || 'Notifications, sound effects and privacy',
      action: () => setActiveModal('settings')
    },
    {
      id: 'help_support',
      icon: HelpCircle,
      title: t.helpSupport || 'Help & Support',
      subtitle: t.helpSupportDesc || 'Get help or contact our 24/7 team',
      action: () => setActiveModal('help')
    }
  ];

  return (
    <div className="profile-screen-wrapper page-fade-enter">
      {/* Scrollable Content */}
      <div className="profile-scroll-container">
        {/* User Identity Header Card */}
        <div className="profile-header-card">
          <div className="profile-avatar-circle">
            <span className="profile-avatar-letter">{user.name ? user.name.charAt(0).toUpperCase() : 'R'}</span>
          </div>

          <div className="profile-info-col">
            <div className="profile-name-row">
              <h2 className="profile-user-name">{user.name || 'Rakesh'}</h2>
              <button 
                className="profile-edit-btn"
                onClick={() => setActiveModal('edit_profile')}
                aria-label="Edit Profile"
              >
                <Edit2 size={13} color="#0B6B4A" strokeWidth={2.4} />
                <span>Edit</span>
              </button>
            </div>

            <span className="profile-user-phone">+91 {user.phone || '7015363695'}</span>

            <div className="profile-verified-badge">
              <div className="verified-dot-inner">
                <Check size={9} color="#FFFFFF" strokeWidth={3.5} />
              </div>
              <span>Verified Member</span>
            </div>
          </div>
        </div>

        {/* Recycling Motivation Banner */}
        <div className="profile-motivation-banner">
          <div className="motivation-leaf-icon-circle">
            <Leaf size={18} color="#0B6B4A" strokeWidth={2.4} />
          </div>
          <div className="motivation-text-wrap">
            <h4 className="motivation-title">Keep recycling, keep making a difference!</h4>
            <p className="motivation-sub">Small actions lead to a cleaner, greener tomorrow.</p>
          </div>
        </div>

        {/* Settings Navigation List */}
        <div className="profile-menu-card">
          {menuItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={item.id}
                className="profile-menu-row"
                onClick={item.action}
                role="button"
                tabIndex={0}
              >
                <div className="menu-icon-circle">
                  <IconComponent size={19} color="#0B6B4A" strokeWidth={2.2} />
                </div>

                <div className="menu-text-col">
                  <h4 className="menu-item-title">{item.title}</h4>
                  <p className="menu-item-sub">{item.subtitle}</p>
                </div>

                <ChevronRight size={18} color="#9CA3AF" strokeWidth={2.2} className="menu-chevron" />
              </div>
            );
          })}
        </div>

        <div className="profile-app-version-footer">
          <span>Kabadiwala Connect v1.4.2 • CPCB Certified Partner</span>
        </div>
      </div>

      {/* Floating Feedback Toast */}
      {savedToast && (
        <div className="profile-toast-banner">
          <CheckCircle2 size={16} color="#FFFFFF" />
          <span>{savedToast}</span>
        </div>
      )}

      {/* Edit Profile Modal Sheet */}
      {activeModal === 'edit_profile' && (
        <div className="profile-modal-backdrop" onClick={() => setActiveModal(null)}>
          <div className="profile-modal-sheet" onClick={(e) => e.stopPropagation()}>
            <div className="modal-sheet-header">
              <h3>{t.editProfile || 'Edit Profile'}</h3>
              <button className="modal-close-btn" onClick={() => setActiveModal(null)}>
                <X size={18} color="#6B7280" />
              </button>
            </div>

            <form onSubmit={handleSaveProfile} className="profile-form">
              <div className="form-group">
                <label>{t.name || 'Full Name'}</label>
                <input 
                  type="text" 
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                  placeholder={t.name || 'Enter your name'}
                  className="profile-input"
                  required
                />
              </div>

              <div className="form-group">
                <label>{t.phone || 'Mobile Number'}</label>
                <input 
                  type="tel" 
                  value={editPhone}
                  onChange={(e) => setEditPhone(e.target.value)}
                  placeholder="10-digit mobile number"
                  className="profile-input"
                  maxLength={10}
                  required
                />
              </div>

              <button type="submit" className="profile-save-btn">
                {t.save || 'Save Changes'}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Address Management Modal Sheet */}
      {activeModal === 'address' && (
        <div className="profile-modal-backdrop" onClick={() => setActiveModal(null)}>
          <div className="profile-modal-sheet" onClick={(e) => e.stopPropagation()}>
            <div className="modal-sheet-header">
              <h3>{t.address || 'Manage Pickup Address'}</h3>
              <button className="modal-close-btn" onClick={() => setActiveModal(null)}>
                <X size={18} color="#6B7280" />
              </button>
            </div>

            <form onSubmit={handleSaveAddress} className="profile-form">
              <div className="form-group">
                <label>{t.addressLine1 || 'Shop / House & Street'}</label>
                <input 
                  type="text" 
                  value={address.line1}
                  onChange={(e) => setAddress({ ...address, line1: e.target.value })}
                  placeholder="Street / Shop details"
                  className="profile-input"
                  required
                />
              </div>

              <div className="form-group">
                <label>{t.area || 'Area / Locality & City'}</label>
                <input 
                  type="text" 
                  value={address.area}
                  onChange={(e) => setAddress({ ...address, area: e.target.value })}
                  placeholder="e.g. Rohini, Delhi"
                  className="profile-input"
                  required
                />
              </div>

              <div className="form-group">
                <label>{t.pincode || 'Pincode'}</label>
                <input 
                  type="text" 
                  value={address.pincode}
                  onChange={(e) => setAddress({ ...address, pincode: e.target.value })}
                  placeholder="6-digit pincode"
                  className="profile-input"
                  maxLength={6}
                  required
                />
              </div>

              <button type="submit" className="profile-save-btn">
                {t.save || 'Save Address'}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* App Settings Modal Sheet */}
      {activeModal === 'settings' && (
        <div className="profile-modal-backdrop" onClick={() => setActiveModal(null)}>
          <div className="profile-modal-sheet" onClick={(e) => e.stopPropagation()}>
            <div className="modal-sheet-header">
              <h3>{t.appSettings || 'App Settings'}</h3>
              <button className="modal-close-btn" onClick={() => setActiveModal(null)}>
                <X size={18} color="#6B7280" />
              </button>
            </div>

            <div className="settings-toggles-list">
              <div className="setting-toggle-row">
                <div className="st-info">
                  <strong>{t.notifications || 'Push Notifications'}</strong>
                  <span>Get real-time pickup & rate alerts</span>
                </div>
                <input 
                  type="checkbox" 
                  checked={settings.notifications} 
                  onChange={(e) => setSettings({ ...settings, notifications: e.target.checked })}
                  className="toggle-switch-checkbox"
                />
              </div>

              <div className="setting-toggle-row">
                <div className="st-info">
                  <strong>{t.audioGuidance || 'Audio Voice Guidance'}</strong>
                  <span>Read aloud scrap valuations and safety tips</span>
                </div>
                <input 
                  type="checkbox" 
                  checked={settings.audioGuidance} 
                  onChange={(e) => setSettings({ ...settings, audioGuidance: e.target.checked })}
                  className="toggle-switch-checkbox"
                />
              </div>

              <div className="setting-toggle-row">
                <div className="st-info">
                  <strong>{t.autoSync || 'Auto-Sync on Wi-Fi'}</strong>
                  <span>Sync offline lots automatically</span>
                </div>
                <input 
                  type="checkbox" 
                  checked={settings.autoSyncWifi} 
                  onChange={(e) => setSettings({ ...settings, autoSyncWifi: e.target.checked })}
                  className="toggle-switch-checkbox"
                />
              </div>

              <div className="setting-toggle-row">
                <div className="st-info">
                  <strong>{t.smsAlerts || 'SMS Transaction Receipts'}</strong>
                  <span>Receive bill receipts via SMS link</span>
                </div>
                <input 
                  type="checkbox" 
                  checked={settings.smsAlerts} 
                  onChange={(e) => setSettings({ ...settings, smsAlerts: e.target.checked })}
                  className="toggle-switch-checkbox"
                />
              </div>
            </div>

            <button 
              type="button" 
              className="profile-save-btn"
              onClick={() => {
                setActiveModal(null);
                showToast('Settings saved');
              }}
            >
              Done
            </button>
          </div>
        </div>
      )}

      {/* Help & Support Modal */}
      {activeModal === 'help' && (
        <div className="profile-modal-backdrop" onClick={() => setActiveModal(null)}>
          <div className="profile-modal-sheet" onClick={(e) => e.stopPropagation()}>
            <div className="modal-sheet-header">
              <h3>Help & Support</h3>
              <button className="modal-close-btn" onClick={() => setActiveModal(null)}>
                <X size={18} color="#6B7280" />
              </button>
            </div>

            <div className="help-support-content">
              <div className="support-contact-card">
                <Phone size={20} color="#0B6B4A" />
                <div>
                  <strong>Toll-Free Helpline</strong>
                  <p>1800-267-9000 (9 AM - 8 PM)</p>
                </div>
              </div>

              <div className="support-contact-card">
                <ShieldCheck size={20} color="#0B6B4A" />
                <div>
                  <strong>Recycler Grievance Redressal</strong>
                  <p>support@kabadiwalaconnect.org</p>
                </div>
              </div>

              <p className="help-subtext">
                Our team is committed to ensuring fair prices and safe disposal of e-waste across India.
              </p>
            </div>

            <button 
              type="button" 
              className="profile-save-btn"
              onClick={() => setActiveModal(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Fixed 5-Tab Navigation Bar */}
      <div className="home-nav-bar">
        <button className="nav-tab" onClick={() => onNavigateTab ? onNavigateTab('home') : null}>
          <Home size={22} className="tab-icon" />
          <span>Home</span>
        </button>

        <button className="nav-tab" onClick={() => onNavigateTab ? onNavigateTab('history') : null}>
          <Calendar size={22} className="tab-icon" />
          <span>Bookings</span>
        </button>

        <button className="nav-fab-camera camera-glow-btn" onClick={() => onNavigateTab ? onNavigateTab('step1_photo') : null}>
          <Camera size={26} color="white" />
          <span className="fab-label">Scan</span>
        </button>

        <button className="nav-tab" onClick={() => onNavigateTab ? onNavigateTab('todays_prices') : null}>
          <TrendingUp size={22} className="tab-icon" />
          <span>Rates</span>
        </button>

        <button className="nav-tab active">
          <User size={22} className="tab-icon" />
          <span>Profile</span>
        </button>
      </div>
    </div>
  );
}
