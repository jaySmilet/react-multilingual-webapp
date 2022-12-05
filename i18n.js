import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    backend: {
      // Translation file path
      loadPath: '/assets/i18n/{{ns}}/{{lng}}.json',
    },
    fallbackLng: 'en',
    // disabled in production
    debug: false,
    // can have multiple namesapces, incase you want to divide a huge
    // translation into smaller pieces and load them on demand
    ns: ['common', 'home', 'profile'],
    interpolation: {
      escapeValue: false,
      formatSeparator: ',',
    },
  });

export default i18n;
