import MainSidebar from '@/components/clone/left'
import Sidebar from '@/components/clone/sidebar'
import Profile from '@/components/platform/platform/profile'
import React from 'react'

const Pro = () => {
  return (
    <div className='flex flex-row items-top justify-between -mx-10'>
      <Sidebar />
      <Profile />
      <MainSidebar />
    </div>
  )
}

export default Pro