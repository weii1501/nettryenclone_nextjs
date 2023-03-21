/* eslint-disable @next/next/no-img-element */
import React from 'react'

export default function CommentsItem() {
  return (
    <div className="w-full h-auto flex items-start justify-start py-5">
        <div className="basis-1/8 w-auto h-full">
            <img 
                src="/images/avt/avt1.jpeg" 
                alt="avt" 
                className="w-10 h-10 rounded object-cover mt-2"
            />
        </div>
        <div className="basis-7/8 flex flex-col items-start justify-start ml-4 text-[12px] leading-5">
            <a href="#" className="text-[14px] font-bold text-[#4167b3] cursor-pointer hover:underline">Akira Tct</a>
            <p className="text-[14px]">ae đọc tạm trên nhattruyen đi</p>
            <div>
                <a href="#" className="text-[#4167b3] hover:underline">Like</a> · <a href="#" className="text-[#4167b3] hover:underline"> Reply </a> · <span className="text-[#90949c] hover:underline">4h</span>
            </div>
        </div>
    </div>
  )
}
