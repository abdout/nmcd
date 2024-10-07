'use client';
import React, { useState, useEffect } from 'react';
import Welcome from '@/components/platform/platform/welcome';
import Dashboard from '@/components/platform/platform/dashboard';
import TwitterPost from '@/components/platform/platform/post';
import Feed from '@/components/atom/feed';


const Home = () => {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    // Check if the user has seen the welcome screen before
    const hasSeenWelcome = localStorage.getItem('hasSeenWelcome');
    if (hasSeenWelcome) {
      setShowWelcome(false);
    }
  }, []);

  const dismissWelcome = () => {
    setShowWelcome(false);
    localStorage.setItem('hasSeenWelcome', 'true');
  };

  return (
    <div className="container mx-auto px-4">
      {showWelcome ? (
        <Welcome onDismiss={dismissWelcome} />
      ) : (
        <Feed />
      )}
    </div>
  );
};

export default Home;