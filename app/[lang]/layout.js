// app/[lang]/layout.js
import { dir } from 'i18next'; // dir function might be needed for RTL support on <html> tag
import i18nConfig from '@/i18nConfig'; // Adjust path if needed
import initTranslations from '@/i18n'; // Adjust path if needed
import TranslationsProvider from '@/components/TranslationsProvider'; // We'll create this component

// List supported locales for static rendering (optional but good practice)
export function generateStaticParams() {
    return i18nConfig.locales.map(locale => ({ lang: locale }));
}

// List namespaces needed by this layout and potentially nested routes by default
const i18nNamespaces = ['common'];

export default async function LocaleLayout({ children, params: { lang } }) {
    // Initialize translations for server components within this layout
    const { i18n, t } = await initTranslations({ // initTranslations now returns i18n instance and t, but not resources explicitly
        locale: lang,
        namespaces: i18nNamespaces,
    });

    return (
        // The root html and body are in the outer app/layout.js
        // We wrap the children with TranslationsProvider to make i18n context available to client components
        <TranslationsProvider
             locale={lang}
             namespaces={i18nNamespaces}
             // We are NOT passing the 'resources' prop from here anymore
             // resources={resources}
        >
            {/* Your page content will be rendered here */}
            {children}
        </TranslationsProvider>
    );
}