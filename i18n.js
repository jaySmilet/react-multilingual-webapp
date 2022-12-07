import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

const option = {
  order: ['navigator', 'htmlTag', 'path', 'subdomain'],
  checkWhitelist: true,
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    backend: {
      // Translation file path
      loadPath: '/locales/add/{{ns}}/{{lng}}.json',
    },
    fallbackLng: 'en',
    // disabled in production
    debug: true,
    whitelist: ['en', 'es', 'fr'],
    detection: option,
    // can have multiple namesapces, incase you want to divide a huge
    // translation into smaller pieces and load them on demand
    ns: ['common', 'home', 'profile'],
    defaultNS: 'home',
    interpolation: {
      escapeValue: false,
      formatSeparator: ',',
    },
  });

export default i18n;
