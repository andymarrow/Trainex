'use client';

import { I18nextProvider } from 'react-i18next';
import i18n from '@/i18n/client'; // Imports the actual i18next instance
import { useEffect, useState } from 'react';

// console.log('TranslationsProvider - Before useEffect. Imported i18n:', i18n); // Still good for initial check

export default function TranslationsProvider({ children, locale, namespaces }) {
  // console.log('TranslationsProvider - Render. Initial i18n:', i18n); // Still good for initial check

  const [isClientInitialized, setIsClientInitialized] = useState(false); // Initialize to false

  useEffect(() => {
     // console.log('TranslationsProvider - Inside useEffect. Current i18n:', i18n); // Good for debugging
     // console.log('TranslationsProvider - Inside useEffect. Type of i18n:', typeof i18n); // Good for debugging

    // Check if the instance is already initialized or valid
    // Now `i18n` *is* the instance, so these checks should pass if init finished
    if (typeof i18n.isInitialized === 'function' && i18n.isInitialized()) {
       // console.log('TranslationsProvider - i18n already initialized');
       setIsClientInitialized(true);
     } else if (typeof i18n.on === 'function') {
       // console.log('TranslationsProvider - i18n not fully initialized, attaching listener');
       i18n.on('initialized', () => {
         // console.log('TranslationsProvider - i18n initialized event fired');
         setIsClientInitialized(true);
       });
     } else {
       // This case is now less likely if i18n/client.js is correct
       console.error('TranslationsProvider - Imported i18n object is missing expected methods after useEffect:', i18n);
     }


    // Handle language change if the locale prop changes
     if (typeof i18n.changeLanguage === 'function' && i18n.language !== locale) {
         // console.log(`TranslationsProvider - Changing language to ${locale}`);
         i18n.changeLanguage(locale);
     }


    // Cleanup event listener
    return () => {
      if (typeof i18n.off === 'function') {
          i18n.off('initialized');
      }
    };
  // Dependency array - Keep these
  }, [locale, i18n, isClientInitialized]);


  if (!isClientInitialized) {
    // console.log('TranslationsProvider - Rendering null (not initialized)');
    return null; // Or a loading component
  }

  // console.log('TranslationsProvider - Rendering children (initialized)');
  return (
    <I18nextProvider i18n={i18n}>
      {children}
    </I18nextProvider>
  );
}