'use client';
import React from 'react';
import { Icon } from "@iconify/react";

interface WelcomeProps {
  onDismiss: () => void;
}

const Welcome: React.FC<WelcomeProps> = ({ onDismiss }) => {
  return (
    <div className='pt-14 relative'>
      <button 
        onClick={onDismiss}
        className="absolute top-0 right-0 p-2 text-gray-500 hover:text-gray-700"
      >
        <Icon icon="mdi:close" height="24" />
      </button>
      
      <h1>مرحبا بيك</h1>
      <p className='text-[16px] md:text-xl font-light'>في منصة الحركة الوطنية للبناء والتنمية</p>
      
      <p className='w-full md:w-4/5 pt-8'>لن يصيب المجد كف واحد - إيماناً بسحر العمل الجماعي، نسعى من خلال هذه المنصة إلى أتمتة أعمال الحركة  وامتلاك ادوات تنسيق وتعاون افضل. ساهم في خلق تجربة جديدة من الكفاءة والتنظيم.</p>
      
      <div className='flex flex-col md:flex-row justify-between items-center mt-8'>
        <div>
          <p className='mb-4'>استكشف الروابط أدناه للدليل المستخدم ومركز المساعدة:</p>
          <div className='flex gap-8 items-center'>
            <Icon icon={"ph:book-fill"} height="70" className="opacity-70 hover:opacity-100 transition-opacity duration-200" />
            <Icon icon={"ant-design:customer-service-filled"} height="70" className="opacity-70 hover:opacity-100 transition-opacity duration-200" />
          </div>
        </div>
        
        <button 
          onClick={onDismiss}
          className="mt-8 md:mt-0 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200"
        >
          ابدأ الجولة السريعة
        </button>
      </div>
    </div>
  );
};

export default Welcome;