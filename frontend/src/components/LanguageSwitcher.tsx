"use client";

import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';

export default function LanguageSwitcher() {
  const { i18n, t } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex gap-2 absolute top-4 right-4">
      <Button
        variant={i18n.language === 'en' ? 'default' : 'outline'}
        size="sm"
        onClick={() => changeLanguage('en')}
      >
        {t('language.english')}
      </Button>
      <Button
        variant={i18n.language === 'hi' ? 'default' : 'outline'}
        size="sm"
        onClick={() => changeLanguage('hi')}
      >
        {t('language.hindi')}
      </Button>
    </div>
  );
}
