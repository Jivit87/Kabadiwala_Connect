import React, { useState } from 'react';
import { translations } from './utils/i18n';
import DeviceFrameWrapper from './components/DeviceFrameWrapper';
import SplashView from './components/SplashView';
import LanguageView from './components/LanguageView';
import AuthView from './components/AuthView';
import LocationView from './components/LocationView';
import NotificationView from './components/NotificationView';
import HomeView from './components/HomeView';
import Step1TakePhoto from './components/sell_flow/Step1TakePhoto';
import Step2Category from './components/sell_flow/Step2Category';
import Step3Weight from './components/sell_flow/Step3Weight';
import Step4EstimatedValue from './components/sell_flow/Step4EstimatedValue';
import Step5ChooseBuyer from './components/sell_flow/Step5ChooseBuyer';
import PickupConfirmationView from './components/sell_flow/PickupConfirmationView';
import PaymentView from './components/sell_flow/PaymentView';
import TodaysPricesView from './components/tabs/TodaysPricesView';
import MyEarningsView from './components/tabs/MyEarningsView';
import HistoryTab from './components/tabs/HistoryTab';
import SyncStatusView from './components/SyncStatusView';
import SafetyTipsView from './components/SafetyTipsView';
import Step1HazardousDetectedView from './components/sell_flow/Step1HazardousDetectedView';
import TransactionReceiptView from './components/sell_flow/TransactionReceiptView';
import ProfileTab from './components/tabs/ProfileTab';
import BookPickupView from './components/tabs/BookPickupView';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('splash');
  const [previousScreen, setPreviousScreen] = useState('splash');
  const [currentLang, setCurrentLang] = useState('en');
  const [user, setUser] = useState({ name: 'Rakesh', phone: '7015363695' });
  const [stats, setStats] = useState({
    totalEarned: 1240,
    lotsCompleted: 4,
    kgRecycled: 18.3
  });

  const [transactionsList, setTransactionsList] = useState([
    {
      id: 'tx_1',
      lotNumber: 'Lot #A7F2K9',
      title: 'PCB / Circuit Board',
      category: 'E-Waste',
      date: '3 Sep 2026',
      weight: '2.5 kg',
      weightNum: 2.5,
      rate: '₹125/kg',
      amount: 312,
      status: 'Completed',
      statusType: 'completed',
      statusCode: 'completed',
      image: '/assets/Kabadiwala_Connect_History_UI_Asset_Pack/app/crops/pcb_thumbnail.png',
      buyer: 'GreenCycle Recycling',
      settlementMode: 'UPI (Google Pay)',
      notes: 'Inspected Grade A circuit boards with full copper recovery trace.'
    },
    {
      id: 'tx_2',
      lotNumber: 'Lot #B3D9L1',
      title: 'Cables & Wires',
      category: 'Metals',
      date: '1 Sep 2026',
      weight: '4.0 kg',
      weightNum: 4.0,
      rate: '₹70/kg',
      amount: 280,
      status: 'Handed Over',
      statusType: 'active',
      statusCode: 'handed_over',
      image: '/assets/Kabadiwala_Connect_History_UI_Asset_Pack/app/crops/cables_thumbnail.png',
      buyer: 'EcoScrap Solutions',
      settlementMode: 'Cash Settlement',
      notes: 'Driver picked up from Rohini Sector 7. Awaiting final recycler depot weigh-in.'
    },
    {
      id: 'tx_3',
      lotNumber: 'Lot #C6H4P0',
      title: 'Car Battery',
      category: 'Batteries',
      date: '29 Aug 2026',
      weight: '8.2 kg',
      weightNum: 8.2,
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
      id: 'tx_4',
      lotNumber: 'Lot #E9V2M8',
      title: 'LCD Display',
      category: 'E-Waste',
      date: '24 Aug 2026',
      weight: '3.1 kg',
      weightNum: 3.1,
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
  ]);

  const [sellFlowData, setSellFlowData] = useState({
    photoUrl: '/assets/Kabadiwala_Connect_Step1_TakePhoto_UI_Asset_Pack/01_camera_illustration/scrap_photo_reference.jpg',
    categoryId: 'pcb',
    categoryName: 'PCB (Circuit Board)',
    weight: 2.5,
    estimatedTotal: 312,
    ratePerKg: 125,
    streetBonus: 18,
    buyer: {
      id: 'buyer_1',
      name: 'GreenCycle Recycling',
      rate: 128
    }
  });

  const t = translations[currentLang] || translations.en;

  const handleSplashNext = () => setCurrentScreen('language');
  const handleLanguageNext = () => {
    // If coming from profile, go back to profile; otherwise proceed to auth
    if (previousScreen === 'profile') {
      setCurrentScreen('profile');
    } else {
      setCurrentScreen('auth');
    }
  };
  const handleAuthAuthenticated = (userData) => {
    setUser(prev => ({ ...prev, ...userData }));
    setCurrentScreen('location');
  };
  const handleLocationNext = () => setCurrentScreen('notification');
  const handleNotificationNext = () => setCurrentScreen('home');

  const handleStep1PhotoNext = (photoData) => {
    setSellFlowData(prev => ({ ...prev, ...photoData }));
    if (photoData.isHazardous) {
      setCurrentScreen('step1_hazardous_battery_detected');
    } else {
      setCurrentScreen('step2_category');
    }
  };

  const handleStep2CategoryNext = (catData) => {
    setSellFlowData(prev => ({ ...prev, ...catData }));
    if (catData.categoryId === 'car_battery') {
      setCurrentScreen('safety_tips');
    } else {
      setCurrentScreen('step3_weight');
    }
  };

  const handleStep3WeightNext = (weightData) => {
    setSellFlowData(prev => ({ ...prev, ...weightData }));
    setCurrentScreen('step4_value');
  };

  const handleStep4ValueNext = (valueData) => {
    setSellFlowData(prev => ({ ...prev, ...valueData }));
    setCurrentScreen('step5_buyer');
  };

  const handleStep5BuyerNext = (buyerData) => {
    setSellFlowData(prev => ({ ...prev, ...buyerData }));
    setCurrentScreen('pickup_confirmation');
  };

  const handlePickupProceedToPayment = () => {
    setCurrentScreen('payment');
  };

  const handlePaymentConfirmed = (paymentData) => {
    setSellFlowData(prev => ({ ...prev, ...paymentData }));
    setCurrentScreen('receipt');
  };

  const handleTransactionDone = (completedSale) => {
    if (completedSale) {
      setTransactionsList(prev => [completedSale, ...prev]);
      setStats(prev => ({
        totalEarned: prev.totalEarned + (completedSale.amount || 0),
        lotsCompleted: prev.lotsCompleted + 1,
        kgRecycled: parseFloat((prev.kgRecycled + (completedSale.weightNum || 0)).toFixed(1))
      }));
    }
    setCurrentScreen('home');
  };

  return (
    <DeviceFrameWrapper
      currentScreen={currentScreen}
      setCurrentScreen={setCurrentScreen}
      currentLang={currentLang}
      setLanguage={setCurrentLang}
    >
      {currentScreen === 'splash' && (
        <SplashView t={t} onNext={handleSplashNext} />
      )}

      {currentScreen === 'language' && (
        <LanguageView 
          t={t} 
          currentLang={currentLang} 
          setLanguage={setCurrentLang} 
          onNext={handleLanguageNext} 
          onBack={() => setCurrentScreen(previousScreen === 'profile' ? 'profile' : 'splash')}
        />
      )}

      {currentScreen === 'auth' && (
        <AuthView 
          t={t} 
          onSkip={() => setCurrentScreen('location')}
          onAuthenticated={handleAuthAuthenticated} 
          onBack={() => setCurrentScreen('language')}
        />
      )}

      {currentScreen === 'location' && (
        <LocationView 
          t={t} 
          onNext={handleLocationNext} 
          onBack={() => setCurrentScreen('auth')}
        />
      )}

      {currentScreen === 'notification' && (
        <NotificationView 
          t={t} 
          onNext={handleNotificationNext} 
          onBack={() => setCurrentScreen('location')}
        />
      )}

      {currentScreen === 'home' && (
        <HomeView 
          t={t} 
          user={user}
          stats={stats}
          currentLang={currentLang}
          onNavigate={(screen) => setCurrentScreen(screen)}
        />
      )}

      {currentScreen === 'step1_photo' && (
        <Step1TakePhoto
          t={t}
          onNext={handleStep1PhotoNext}
          onBack={() => setCurrentScreen('home')}
        />
      )}

      {currentScreen === 'step1_hazardous_battery_detected' && (
        <Step1HazardousDetectedView
          t={t}
          onNext={(data) => {
            setSellFlowData(prev => ({ ...prev, ...data }));
            setCurrentScreen('step2_category');
          }}
          onBack={() => setCurrentScreen('step1_photo')}
        />
      )}

      {currentScreen === 'step2_category' && (
        <Step2Category
          t={t}
          photoUrl={sellFlowData.photoUrl}
          initialCategory={sellFlowData.categoryId}
          onNext={handleStep2CategoryNext}
          onBack={() => setCurrentScreen('step1_photo')}
          onRetake={() => setCurrentScreen('step1_photo')}
        />
      )}

      {currentScreen === 'step3_weight' && (
        <Step3Weight
          t={t}
          categoryData={sellFlowData}
          initialWeight={sellFlowData.weight}
          onNext={handleStep3WeightNext}
          onBack={() => setCurrentScreen('step2_category')}
          onChangeCategory={() => setCurrentScreen('step2_category')}
        />
      )}

      {currentScreen === 'step4_value' && (
        <Step4EstimatedValue
          t={t}
          currentLang={currentLang}
          sellFlowData={sellFlowData}
          onNext={handleStep4ValueNext}
          onBack={() => setCurrentScreen('step3_weight')}
        />
      )}

      {currentScreen === 'step5_buyer' && (
        <Step5ChooseBuyer
          t={t}
          sellFlowData={sellFlowData}
          onNext={handleStep5BuyerNext}
          onBack={() => setCurrentScreen('step4_value')}
        />
      )}

      {currentScreen === 'pickup_confirmation' && (
        <PickupConfirmationView
          t={t}
          sellFlowData={sellFlowData}
          onProceedToPayment={handlePickupProceedToPayment}
          onBack={() => setCurrentScreen('step5_buyer')}
          onCancel={() => setCurrentScreen('home')}
        />
      )}

      {currentScreen === 'payment' && (
        <PaymentView
          t={t}
          sellFlowData={sellFlowData}
          onNext={handlePaymentConfirmed}
          onBack={() => setCurrentScreen('pickup_confirmation')}
        />
      )}

      {currentScreen === 'receipt' && (
        <TransactionReceiptView
          t={t}
          sellFlowData={sellFlowData}
          onDone={handleTransactionDone}
          onBack={() => setCurrentScreen('payment')}
        />
      )}

      {currentScreen === 'book_pickup' && (
        <BookPickupView
          t={t}
          currentLocation="Rohini, Delhi"
          onNavigateTab={(tab) => {
            if (tab === 'home') setCurrentScreen('home');
            if (tab === 'step1_photo') setCurrentScreen('step1_photo');
            if (tab === 'todays_prices') setCurrentScreen('todays_prices');
            if (tab === 'history') setCurrentScreen('history');
            if (tab === 'my_earnings') setCurrentScreen('my_earnings');
            if (tab === 'profile') setCurrentScreen('profile');
          }}
          onBack={() => setCurrentScreen('home')}
        />
      )}

      {currentScreen === 'todays_prices' && (
        <TodaysPricesView
          t={t}
          currentLang={currentLang}
          currentLocation="Rohini, Delhi"
          onBack={() => setCurrentScreen('home')}
          onSelectCategory={(categoryId) => {
            setSellFlowData(prev => ({ ...prev, categoryId }));
            setCurrentScreen('step1_photo');
          }}
          onNavigateTab={(tab) => {
            if (tab === 'home') setCurrentScreen('home');
            if (tab === 'step1_photo') setCurrentScreen('step1_photo');
            if (tab === 'history' || tab === 'bookings' || tab === 'book_pickup') setCurrentScreen('book_pickup');
            if (tab === 'my_earnings') setCurrentScreen('my_earnings');
            if (tab === 'profile') setCurrentScreen('profile');
          }}
        />
      )}

      {currentScreen === 'my_earnings' && (
        <MyEarningsView
          t={t}
          currentLang={currentLang}
          transactionsList={transactionsList}
          onBack={() => setCurrentScreen('home')}
          onNavigateTab={(tab) => {
            if (tab === 'home') setCurrentScreen('home');
            if (tab === 'step1_photo') setCurrentScreen('step1_photo');
            if (tab === 'todays_prices') setCurrentScreen('todays_prices');
            if (tab === 'history' || tab === 'bookings' || tab === 'book_pickup') setCurrentScreen('book_pickup');
            if (tab === 'profile') setCurrentScreen('profile');
          }}
        />
      )}

      {currentScreen === 'history' && (
        <HistoryTab
          t={t}
          lots={transactionsList}
          onBack={() => setCurrentScreen('home')}
          onNavigateTab={(tab) => {
            if (tab === 'home') setCurrentScreen('home');
            if (tab === 'step1_photo') setCurrentScreen('step1_photo');
            if (tab === 'todays_prices') setCurrentScreen('todays_prices');
            if (tab === 'my_earnings') setCurrentScreen('my_earnings');
            if (tab === 'profile') setCurrentScreen('profile');
          }}
        />
      )}

      {currentScreen === 'sync_status' && (
        <SyncStatusView
          t={t}
          onBack={() => setCurrentScreen('home')}
          onNavigateTab={(tab) => {
            if (tab === 'home') setCurrentScreen('home');
            if (tab === 'step1_photo') setCurrentScreen('step1_photo');
            if (tab === 'todays_prices') setCurrentScreen('todays_prices');
            if (tab === 'history' || tab === 'bookings' || tab === 'book_pickup') setCurrentScreen('book_pickup');
            if (tab === 'my_earnings') setCurrentScreen('my_earnings');
            if (tab === 'profile') setCurrentScreen('profile');
          }}
        />
      )}

      {currentScreen === 'profile' && (
        <ProfileTab
          t={t}
          user={user}
          stats={stats}
          onUpdateUser={(updated) => setUser(prev => ({ ...prev, ...updated }))}
          onNavigateTab={(tab) => {
            if (tab === 'home') setCurrentScreen('home');
            if (tab === 'step1_photo') setCurrentScreen('step1_photo');
            if (tab === 'todays_prices') setCurrentScreen('todays_prices');
            if (tab === 'history' || tab === 'bookings' || tab === 'book_pickup') setCurrentScreen('book_pickup');
            if (tab === 'my_earnings') setCurrentScreen('my_earnings');
            if (tab === 'sync_status') setCurrentScreen('sync_status');
            if (tab === 'safety_tips') setCurrentScreen('safety_tips');
            if (tab === 'language') { setPreviousScreen('profile'); setCurrentScreen('language'); }
          }}
          onBack={() => setCurrentScreen('home')}
        />
      )}

      {currentScreen === 'safety_tips' && (
        <SafetyTipsView
          t={t}
          currentLang={currentLang}
          onClose={() => setCurrentScreen('step2_category')}
          onProceed={() => setCurrentScreen('step3_weight')}
          onBack={() => setCurrentScreen('step2_category')}
        />
      )}
    </DeviceFrameWrapper>
  );
}







