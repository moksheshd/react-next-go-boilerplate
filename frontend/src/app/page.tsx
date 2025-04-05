"use client";

import Image from "next/image";
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent, 
  CardFooter 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background">
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
          <CardTitle className="text-2xl">Welcome to Next.js</CardTitle>
          <CardDescription>
            A modern web framework built with React 19
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          <p className="text-muted-foreground">
            This is a simple Next.js application with React 19 and TypeScript.
            The project is set up with all the specified package versions frozen at the major version level.
            This page uses shadcn components for the card and button.
          </p>
        </CardContent>
        
        <CardFooter>
          {/* Button using shadcn Button component */}
          <Button 
            className="w-full" 
            onClick={() => alert('Button clicked!')}
          >
            Get Started
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
