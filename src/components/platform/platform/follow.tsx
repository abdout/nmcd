import React from 'react';

const ProfileFollow = () => {
    return (
        <div className='flex gap-6 px-8 -mt-4 '>
            <p className='flex items-center gap-1 text-[#687684] text-[14px]  '>
                <strong className='font-semibold text-[14px] text-[#141619]'>217</strong>
                <span>متابعة</span>
            </p>
            <p className='flex items-center gap-1 text-[#687684] text-[14px] '>
                <strong className='font-semibold text-[14px] text-[#141619]'>118</strong>
                <span>متابع</span>
            </p>
        </div>
    );
}

export default ProfileFollow;
