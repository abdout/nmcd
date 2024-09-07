import React from 'react'
import MobileRecent from './recent-mobile'
import DesktopRecent from './recent-desktop'

const Paper = () => {
  return (
    <div>
      {/* Mobile version */}
      <div className="block md:hidden">
        <MobileRecent />
      </div>

      {/* Desktop version */}
      <div className="hidden md:block">
        <DesktopRecent />
      </div>
    </div>
  )
}

export default Paper