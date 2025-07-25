
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ProblemStatement from '@/components/ProblemStatement';
import Features from '@/components/Features';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main>
        <HeroSection />
        <ProblemStatement />
        <Features />
        <Testimonials />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
