'use client';
import React, { useState } from 'react';
import Navigation from './components/Navigation';

export default function Home() {
  const [activeTab, setActiveTab] = useState('main');

  const getTabTitle = (tab: string) => {
    switch (tab) {
      case 'main':
        return 'Main';
      case 'market':
        return 'Market';
      case 'auctions':
        return 'Auctions';
      case 'gifts':
        return 'My Gifts';
      case 'activity':
        return 'Activity';
      default:
        return '';
    }
  };

  return (
    <main className="min-h-screen bg-black text-white pb-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center min-h-screen">
          <h1 className="text-2xl font-bold mb-4">{getTabTitle(activeTab)}</h1>
          <p className="text-gray-400">Soon..</p>
        </div>
      </div>
      <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
    </main>
  );
} 