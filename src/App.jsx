import React, { useState } from 'react';
import { translations } from './utils/i18n';
import DeviceFrameWrapper from './components/DeviceFrameWrapper';
import SplashView from './components/SplashView';
import LanguageView from './components/LanguageView';
import AuthView from './components/AuthView';
import MainPortalView from './components/MainPortalView';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('splash');
  const [currentLang, setCurrentLang] = useState('en');
  const [user, setUser] = useState({ phone: '9876543210' });

  const t = translations[currentLang] || translations.en;

  const handleSplashNext = () => setCurrentScreen('language');
  const handleLanguageNext = () => setCurrentScreen('auth');
  const handleAuthAuthenticated = (userData) => {
    setUser(userData);
    setCurrentScreen('portal');
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
          onBack={() => setCurrentScreen('splash')}
        />
      )}

      {currentScreen === 'auth' && (
        <AuthView 
          t={t} 
          onSkip={() => setCurrentScreen('portal')}
          onAuthenticated={handleAuthAuthenticated} 
          onBack={() => setCurrentScreen('language')}
        />
      )}

      {currentScreen === 'portal' && (
        <MainPortalView 
          t={t} 
          user={user} 
          currentLang={currentLang} 
          setLanguage={setCurrentLang} 
          onBack={() => setCurrentScreen('auth')}
        />
      )}
    </DeviceFrameWrapper>
  );
}
