import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translations
import enTranslation from '../locales/en/translation.json';
import hiTranslation from '../locales/hi/translation.json';

// Initialize i18next
i18n
  // Detect user language
  .use(LanguageDetector)
  // Pass the i18n instance to react-i18next
  .use(initReactI18next)
  // Initialize i18next
  .init({
    // Default language
    fallbackLng: 'en',
    // Debug mode
    debug: process.env.NODE_ENV === 'development',
    // Resources with translations
    resources: {
      en: {
        translation: enTranslation,
      },
      hi: {
        translation: hiTranslation,
      },
    },
    // Interpolation configuration
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

export default i18n;
