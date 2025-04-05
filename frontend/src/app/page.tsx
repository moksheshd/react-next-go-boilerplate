"use client";

import Image from "next/image";
import { useTranslation } from 'react-i18next';
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent, 
  CardFooter 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function Home() {
  const { t } = useTranslation();
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background relative">
      <LanguageSwitcher />
      {/* Next.js Logo */}
      <div className="mb-8">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
      </div>
      
      {/* Card using shadcn Card component */}
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl">{t('welcome.title')}</CardTitle>
          <CardDescription>
            {t('welcome.description')}
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          <p className="text-muted-foreground">
            {t('content.description')}
          </p>
        </CardContent>
        
        <CardFooter>
          {/* Button using shadcn Button component */}
          <Button 
            className="w-full" 
            onClick={() => alert('Button clicked!')}
          >
            {t('button.getStarted')}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
