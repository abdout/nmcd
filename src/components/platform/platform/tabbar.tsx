import React, { useState } from 'react';

const Tabbar = () => {
  const [activeTab, setActiveTab] = useState('سيرة');

  const tabs = [
    { value: 'سيرة', content: 'محتوى السيرة هنا' },
    { value: 'اهتمام', content: 'محتوى الاهتمام هنا' },
    { value: 'مشاركة', content: 'محتوى المشاركة هنا' },
    { value: 'اتصال', content: 'محتوى الاتصال هنا' },
  ];

  return (
    <div>
      <div className='border-b-[0.3px] mt-2 border-[#687684] h-[44px] px-2 py-[12px] text-[14px] font-medium'>
        <div className='w-[420px] flex justify-between px-6'>
          {tabs.map((tab) => (
            <span
              key={tab.value}
              className={`
                text-center cursor-pointer transition-colors duration-200 relative pb-[12px]
                ${activeTab === tab.value 
                  ? 'text-black' 
                  : 'text-[#687684] hover:text-black'
                }
              `}
              onClick={() => setActiveTab(tab.value)}
            >
              {tab.value}
              <span
                className={`absolute bottom-0 left-0 right-0 h-[4px] transition-all duration-200 ${
                  activeTab === tab.value ? 'bg-[#141619]' : 'invisible'
                }`}
              />
            </span>
          ))}
        </div>
      </div>
      <div className='px-44 py-20'>
        {tabs.find((tab) => tab.value === activeTab)?.content}
      </div>
    </div>
  );
};

export default Tabbar;
