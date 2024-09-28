import React from 'react'
import { Icon } from "@iconify/react";

const ProfileBrief = () => {
    return (
        <div>
            <p className='text-[22px] font-black px-8'>نورين</p>
            <p className='text-[16px] font-regular text-[#687684] -mt-1 px-8'>norain@</p>
            <p className='text-[16px] font-regular text-[#141619] mt-[9px] w-[25rem] px-8'>
                مهندس برمجيات أنظمة مدمجة - صانع محتوي; الطابعة ثلاثة الابعاد; مؤسس زول هاكس
            </p>
            <p className='flex gap-[5px] text-[14px] items-center mt-[8px] px-8'>
                <Icon icon="ph:link-light" height="15" className="text-gray-500" />
                <span className="text-[#0077B5]">zoolhacks</span> 
            </p>
        </div>
    )
}

export default ProfileBrief