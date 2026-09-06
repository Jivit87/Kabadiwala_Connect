import React, { useState } from 'react';
import { translations } from './utils/i18n';
import DeviceFrameWrapper from './components/DeviceFrameWrapper';
import SplashView from './components/SplashView';
import LanguageView from './components/LanguageView';
import AuthView from './components/AuthView';
import LocationView from './components/LocationView';
import NotificationView from './components/NotificationView';
import HomeView from './components/HomeView';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('splash');
  const [currentLang, setCurrentLang] = useState('en');
  const [user, setUser] = useState({ name: 'Rakesh', phone: '9876543210' });

  const t = translations[currentLang] || translations.en;

  const handleSplashNext = () => setCurrentScreen('language');
  const handleLanguageNext = () => setCurrentScreen('auth');
  const handleAuthAuthenticated = (userData) => {
    setUser(prev => ({ ...prev, ...userData }));
    setCurrentScreen('location');
  };
  const handleLocationNext = () => setCurrentScreen('notification');
  const handleNotificationNext = () => setCurrentScreen('home');

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
          onBack={() => setCurrentScreen('splash')}
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
          currentLang={currentLang}
        />
      )}
    </DeviceFrameWrapper>
  );
}
