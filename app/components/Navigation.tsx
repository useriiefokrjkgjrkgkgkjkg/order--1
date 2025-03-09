'use client';
import React from 'react';
import { HomeIcon, ShoppingBagIcon, CurrencyDollarIcon, GiftIcon, ChartBarIcon } from '@heroicons/react/24/outline';

interface NavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: 'main', name: 'Main', icon: HomeIcon },
    { id: 'market', name: 'Market', icon: ShoppingBagIcon },
    { id: 'auctions', name: 'Auctions', icon: CurrencyDollarIcon },
    { id: 'gifts', name: 'My Gifts', icon: GiftIcon },
    { id: 'activity', name: 'Activity', icon: ChartBarIcon },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
      <div className="flex justify-around items-center h-16 max-w-screen-xl mx-auto">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`flex items-center justify-center w-full h-full ${
                isActive ? 'text-blue-500' : 'text-black'
              }`}
            >
              <Icon className="w-7 h-7" />
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default Navigation; 