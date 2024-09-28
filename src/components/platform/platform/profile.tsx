'use client';
import React from 'react'
import ProfileHeader from './header'
import ProfileAvater from './avater'
import { Icon } from "@iconify/react";
import ProfileBrief from './brief';
import EditButton from './edit-button';
import ProfileFollow from './follow';
import Tabbar from './tabbar';
import Sidebar from './sidebar';


const Profile = () => {
    return (
        <div className="w-[550px] h-full border-x-[0.09px] mx-8 ">
            <ProfileHeader />
            <ProfileAvater />
            <ProfileBrief />
            <div className='relative bottom-[11.3rem] right-[25rem]'>
                <EditButton />
            </div>
            <ProfileFollow />
            <Tabbar />
            {/* <Sidebar /> */}
        </div>
    )
}

export default Profile