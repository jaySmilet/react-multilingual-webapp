import * as React from 'react';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation(['home']);
  return (
    <div>
      <h3>{t('home')}</h3>
    </div>
  );
};

export default Home;
