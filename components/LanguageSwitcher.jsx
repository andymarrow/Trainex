'use client';

import { useRouter, usePathname } from 'next/navigation'; // Next.js 13+ navigation hooks
import { useTranslation } from '@/i18n/client'; // Your custom hook
import i18nConfig from '@/i18nConfig'; // Adjust path

export default function LanguageSwitcher() {
  const { i18n } = useTranslation(); // Get the i18n instance
  const router = useRouter();
  const currentPathname = usePathname(); // e.g., /en/about

  const handleChange = (newLocale) => {
    // set cookie and reload, or use router.push
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "; expires=" + date.toUTCString();
    document.cookie = `i18next=${newLocale}${expires}; path=/`;

    // Redirect to the new locale path
    // e.g. /en/about -> /fr/about
    const currentLocale = i18n.language; // Current detected locale
    const newPathname = currentPathname.replace(`/${currentLocale}`, `/${newLocale}`);

    // If using localePrefix: 'as-needed' and switching TO the default locale
    if (newLocale === i18nConfig.defaultLocale && i18nConfig.localePrefix === 'as-needed') {
        // Remove the locale segment for the default locale
         router.push(currentPathname.replace(`/${currentLocale}`, '')); // e.g., /en/about -> /about
    } else if (currentLocale === i18nConfig.defaultLocale && i18nConfig.localePrefix === 'as-needed') {
         // If currently on default locale (no prefix) and switching AWAY from it
         router.push(`/${newLocale}${currentPathname}`); // e.g., /about -> /fr/about
    }
    else {
         // Switching between two prefixed locales (e.g., /en/about -> /fr/about)
         router.push(newPathname);
    }
  };

  // Ensure i18n.languages is an array and the first element is the current language
  const currentLang = i18n.languages?.[0] || i18nConfig.defaultLocale;

  return (
    <div>
      <select onChange={(e) => handleChange(e.target.value)} value={currentLang}>
        {i18nConfig.locales.map((locale) => (
          <option key={locale} value={locale}>
            {locale.toUpperCase()} {/* Or display full name like 'English', 'Français' */}
          </option>
        ))}
      </select>
    </div>
  );
}