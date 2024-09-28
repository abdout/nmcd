'use client';
import React, { useState } from 'react';
import ActivityFeed from './feed';
import { Icon } from "@iconify/react";

const Dashboard: React.FC = () => {
  const [post, setPost] = useState('');

  const handlePostChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPost(e.target.value);
  };

  const handlePostSubmit = () => {
    console.log('New post:', post);
    setPost('');
  };

  return (
    <div className="flex flex-col lg:flex-row justify-center mt-8 space-x-0 lg:space-x-8 rtl:space-x-reverse">
      {/* Left Sidebar */}
      <div className="hidden lg:block lg:w-1/4">
        <div className="space-y-6">
          {/* User Profile Section */}
          <div className="bg-white p-6 rounded-lg shadow">
            <img 
              src="https://i.pravatar.cc/100" 
              alt="User Avatar" 
              className="rounded-full w-20 mb-4 mx-auto" 
            />
            <h2 className="text-center text-xl font-semibold">اسم المستخدم</h2>
            <p className="text-center text-gray-500">@username</p>
            <button className="mt-4 w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              تعديل الملف الشخصي
            </button>
          </div>
          
          {/* Navigation */}
          <div className="bg-white p-6 rounded-lg shadow">
            <nav className="space-y-4">
              <a href="#" className="flex items-center text-gray-700 hover:text-blue-600">
                <Icon icon="mdi:home" className="w-6 h-6" />
                <span className="ml-4">الصفحة الرئيسية</span>
              </a>
              <a href="#" className="flex items-center text-gray-700 hover:text-blue-600">
                <Icon icon="mdi:bell" className="w-6 h-6" />
                <span className="ml-4">الإشعارات</span>
              </a>
              <a href="#" className="flex items-center text-gray-700 hover:text-blue-600">
                <Icon icon="mdi:message" className="w-6 h-6" />
                <span className="ml-4">الرسائل</span>
              </a>
            </nav>
          </div>
        </div>
      </div>

      {/* Main Feed Section */}
      <div className="w-full lg:w-2/4 space-y-6">
        {/* New Post Input */}
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex space-x-3 rtl:space-x-reverse">
            <img 
              src="https://i.pravatar.cc/50" 
              alt="User Avatar" 
              className="rounded-full w-12 h-12" 
            />
            <textarea
              className="w-full p-3 border rounded-lg"
              placeholder="بماذا تفكر؟"
              rows={2}
              value={post}
              onChange={handlePostChange}
            ></textarea>
          </div>
          <button
            className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            onClick={handlePostSubmit}
          >
            تغريد
          </button>
        </div>

        {/* Feed */}
        <div className="space-y-4">
          {[1, 2, 3].map((_, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-start space-x-3 rtl:space-x-reverse mb-4">
                <img 
                  src={`https://i.pravatar.cc/50?img=${index + 1}`} 
                  alt="User Avatar" 
                  className="rounded-full w-12 h-12" 
                />
                <div>
                  <h4 className="font-semibold">اسم المستخدم</h4>
                  <p className="text-sm text-gray-500">@username - منذ ساعتين</p>
                  <p>هذا مثال لمنشور يشبه التغريدة. يمكن أن يحتوي على نص أو صور أو روابط.</p>
                  <div className="mt-4 flex space-x-4 rtl:space-x-reverse text-gray-500">
                    <button className="flex items-center space-x-1 rtl:space-x-reverse hover:text-blue-600">
                      <Icon icon="mdi:thumb-up" />
                      <span>إعجاب</span>
                    </button>
                    <button className="flex items-center space-x-1 rtl:space-x-reverse hover:text-blue-600">
                      <Icon icon="mdi:comment" />
                      <span>تعليق</span>
                    </button>
                    <button className="flex items-center space-x-1 rtl:space-x-reverse hover:text-blue-600">
                      <Icon icon="mdi:repeat" />
                      <span>إعادة تغريد</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Sidebar (Trends or Recommendations) */}
      <div className="hidden lg:block lg:w-1/4">
        <div className="space-y-6">
          {/* Trending */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">المواضيع الرائجة</h2>
            <ul className="space-y-2">
              <li className="text-gray-700 hover:text-blue-600">#ترند_1</li>
              <li className="text-gray-700 hover:text-blue-600">#ترند_2</li>
              <li className="text-gray-700 hover:text-blue-600">#ترند_3</li>
              <li className="text-gray-700 hover:text-blue-600">#ترند_4</li>
            </ul>
          </div>
          
          {/* Suggestions */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">من تتابع</h2>
            <ul className="space-y-4">
              {[1, 2, 3].map((_, index) => (
                <li key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 rtl:space-x-reverse">
                    <img 
                      src={`https://i.pravatar.cc/40?img=${index + 5}`} 
                      alt="Suggested User Avatar" 
                      className="rounded-full w-10 h-10" 
                    />
                    <div>
                      <p className="font-semibold">اسم المستخدم</p>
                      <p className="text-sm text-gray-500">@username</p>
                    </div>
                  </div>
                  <button className="px-4 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                    متابعة
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
