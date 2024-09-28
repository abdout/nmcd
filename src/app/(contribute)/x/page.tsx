'use client';

import React from 'react'
import { Divider, Header, Tweet, TweetInput } from '@/components/clone/comp'
import Sidebar from '@/components/clone/sidebar'
import MainSidebar from '@/components/clone/left';
import Middle from '@/components/clone/middle';

const X = () => {
  return (
    <div className='flex flex-row items-top justify-center -mx-10'>
      <Sidebar />
      <Middle />
      <MainSidebar />
    </div>


  )
}

export default X