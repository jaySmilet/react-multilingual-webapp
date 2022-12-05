import * as React from 'react';
import { useTranslation } from 'react-i18next';

const Profile = () => {
  const { t } = useTranslation(['profile']);
  return (
    <div>
      <h3>{t('profile')}</h3>
    </div>
  );
};

export default Profile;
