// i18n/client.js
'use client'

import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import i18nConfig from '../i18nConfig';

// Export the instance itself. It will become initialized after the async init completes.
const i18nInstance = i18next; // Keep a reference to the instance

i18nInstance
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(Backend)
  .init({
    fallbackLng: i18nConfig.defaultLocale,
    supportedLngs: i18nConfig.locales,
    debug: process.env.NODE_ENV === 'development',
    detection: {
      order: ['cookie', 'navigator'],
      caches: ['cookie'],
    },
    backend: {
        loadPath: '/locales/{{lng}}/{{ns}}.json'
    },
    react: {
      useSuspense: false
    }
  })
  // Optional: Add .catch() for error handling during client init
  .catch(error => {
      console.error("Error initializing client i18next:", error);
  });

export default i18nInstance; // Export the actual i18next instance