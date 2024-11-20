import React, { useState } from 'react';

interface Tab {
  id: string;
  label: string;
}

const tabs: Tab[] = [
  { id: 'overview', label: 'Overview' },
  { id: 'amenities', label: 'Amenities' },
  { id: 'policies', label: 'Policies' }
];

const NavigationTabs = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className="border-b border-gray-200 mb-8">
      <ul className="flex gap-8 pl-12">
        {tabs.map((tab) => (
          <li
            key={tab.id}
            className={`py-4 cursor-pointer relative ${
              activeTab === tab.id
                ? 'text-gray-900 font-bold after:content-[""] after:absolute after:bottom-[-1px] after:left-0 after:w-full after:h-0.5 after:bg-gray-900'
                : 'text-gray-600 hover:text-gray-900'
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavigationTabs;