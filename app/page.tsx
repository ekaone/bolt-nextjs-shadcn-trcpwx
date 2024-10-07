"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import dynamic from "next/dynamic";
import Link from "next/link";

const ReactConfetti = dynamic(() => import("react-confetti"), {
  ssr: false,
});

export default function Home() {
  const [showConfetti, setShowConfetti] = useState(false);

  const handleGetStarted = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 5000); // Stop confetti after 5 seconds
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-background to-secondary overflow-hidden">
      {showConfetti && (
        <ReactConfetti
          width={typeof window !== "undefined" ? window.innerWidth : 300}
          height={typeof window !== "undefined" ? window.innerHeight : 200}
          recycle={false}
          numberOfPieces={500}
        />
      )}
      <main className="text-center px-4 sm:px-6 lg:px-8 z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-primary mb-4">
          Welcome to{" "}
          <Link 
            href="https://bolt.new/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-sky-500 hover:text-sky-600 hover:underline transition-colors duration-300"
          >
            Bolt new
          </Link>
        </h1>
        <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Discover amazing features and boost your productivity with our cutting-edge solutions.
        </p>
        <Button size="lg" className="font-semibold" onClick={handleGetStarted}>
          Get Started
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </main>
    </div>
  );
}