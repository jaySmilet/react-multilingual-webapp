import * as React from 'react';
import { useTranslation } from 'react-i18next';
import './style.css';

export default function App() {
  const { t, i18n } = useTranslation();
  return (
    <div>
      <h1>{t('intro.label')}</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
