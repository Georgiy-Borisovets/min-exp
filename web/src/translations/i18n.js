import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import APP_CONFIG from 'constants/appConfig';
import resources from './resources';

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: APP_CONFIG.DEFAULT_LANGUAGE,
  });

export default i18n;
