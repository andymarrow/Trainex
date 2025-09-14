// i18n/index.js
import { createInstance } from 'i18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import { initReactI18next } from 'react-i18next/initReactI18next';
import i18nConfig from '../i18nConfig'; // Adjust path if needed

export default async function initTranslations({ locale, namespaces, i18nInstance }) {
  i18nInstance = i18nInstance || createInstance();

  await i18nInstance
    .use(initReactI18next)
    // --- CHANGE THIS LINE ---
    // The path is relative from i18n/index.js to public/locales
    // From i18n/ -> go up one (../) -> go into public/ -> go into locales/
    .use(resourcesToBackend((language, namespace) => import(`../public/locales/${language}/${namespace}.json`))) // Loads translation files from public/locales
    // ------------------------
    .init({
      lng: locale,
      ns: namespaces,
      defaultNS: namespaces[0],
      // debug: process.env.NODE_ENV === 'development', // Optional
    });

  return {
    i18n: i18nInstance,
    t: i18nInstance.t,
  };
}