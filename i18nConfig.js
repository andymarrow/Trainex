// i18nConfig.js
const i18nConfig = {
    locales: ['en', 'fr', 'or','am'], // Add your supported locales here
    defaultLocale: 'en',
    // Optional: prefix for locales (e.g., '/en/about', '/fr/about')
    // Set to 'never' to not prefix the default locale
    // Set to 'always' to prefix all locales
    // Set to 'as-needed' to prefix all locales except the default
    localePrefix: 'as-needed' // Recommended for SEO and clarity
}

export default i18nConfig;