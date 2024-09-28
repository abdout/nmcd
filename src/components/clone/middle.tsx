import React from 'react'
import { Divider, Header, Tweet, TweetInput } from './comp'
import TweetTwo from './tweet-two'

const Middle = () => {
  return (
    <div className="w-[550px] h-full border-x-[0.09px] mx-6 ">
      <TweetTwo />
      <hr className="border-t-[0.09px] border-gray-200 my-4" />
      {/* <Divider /> */}
      <Tweet
        avatarSrc='/friend/نورين.jpg'
        name="محمد نورين"
        username="mohamednorin"
        time="23 س"
        content="لا تدرس اكثر من الكمية التي تحتاجها"
        imageUrl="/friend/نصيحة.png"
      />
      <hr className="border-t-[0.1px] border-gray-200 my-4" />
      <Tweet
        avatarSrc="/friend/المقداد.png"
        
        name="المقداد الهجان"
        username="almghadadalhajan"
        time="14 س"
        content="في تمام الساعة 12 وخمس دقائق سيعتلي المقداد الهجان خطيب مسجد المنشية 25 المنبر"
        // imageUrl="/gallery/3.png"
      />
    </div>
  )
}

export default Middle