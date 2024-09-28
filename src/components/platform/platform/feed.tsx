'use client';
import React from 'react';
import { Icon } from "@iconify/react";

// Define types for our activity items
type ActivityType = 'member' | 'project' | 'task';

interface ActivityItem {
  id: string;
  type: ActivityType;
  content: string;
  timestamp: string;
  user: {
    name: string;
    avatar: string;
  };
}

const ActivityIcon: React.FC<{ type: ActivityType }> = ({ type }) => {
  switch (type) {
    case 'member':
      return <Icon icon="mdi:account" className="text-blue-500" />;
    case 'project':
      return <Icon icon="mdi:folder" className="text-green-500" />;
    case 'task':
      return <Icon icon="mdi:checkbox-marked-circle" className="text-orange-500" />;
  }
};

const ActivityFeed: React.FC = () => {
  // Mock data - replace this with actual data fetching logic
  const activities: ActivityItem[] = [
    {
      id: '1',
      type: 'member',
      content: 'أحمد انضم إلى الفريق',
      timestamp: '2024-09-24T10:00:00Z',
      user: { name: 'أحمد', avatar: 'https://i.pravatar.cc/150?img=1' }
    },
    {
      id: '2',
      type: 'project',
      content: 'تم إنشاء مشروع جديد: تطوير المنصة',
      timestamp: '2024-09-23T15:30:00Z',
      user: { name: 'سارة', avatar: 'https://i.pravatar.cc/150?img=2' }
    },
    {
      id: '3',
      type: 'task',
      content: 'تم إكمال مهمة: تصميم واجهة المستخدم',
      timestamp: '2024-09-22T09:45:00Z',
      user: { name: 'محمد', avatar: 'https://i.pravatar.cc/150?img=3' }
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h2 className="text-xl font-semibold mb-4">سجل النشاطات</h2>
      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start space-x-4 rtl:space-x-reverse">
            <img src={activity.user.avatar} alt={activity.user.name} className="w-10 h-10 rounded-full" />
            <div className="flex-1">
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <ActivityIcon type={activity.type} />
                <span className="font-semibold">{activity.user.name}</span>
              </div>
              <p className="text-sm text-gray-600">{activity.content}</p>
              <span className="text-xs text-gray-400">{new Date(activity.timestamp).toLocaleString('ar-EG')}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;