/* eslint-disable @next/next/no-img-element */
import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { 
    faEye
} from '@fortawesome/free-solid-svg-icons'

export default function RateItem() {
    return (
        <div className="w-full h-[71px] flex flex-row justify-start items-center gap-1 cursor-pointer">
            <div className="w-[40px] h-[45px] flex justify-center items-center">
                <span className="text-[20px] text-[#3498db] text-center">01</span>
            </div>
            <div className="w-[55px] h-[45px]flex justify-center items-center my-2">
                <img 
                    src="/images/SlideItem/handyman-saitou-in-another-world.jpg" 
                    alt="handyman-saitou-in-another-world" 
                    className="w-full h-[45px] object-cover "
                />
            </div>
            <div className="w-[200px] h-full flex flex-col justify-between items-start px-2 py-[12px]">
                <p className="text-[15px] truncate w-[200px] hover:text-[#03f] cursor-pointer">Anh Hùng ? Ta Không Làm Lâu Rồi</p>
                <div className="flex justify-between items-center flex-row w-full">
                    <p className="text-[12px] hover:text-[#03f] cursor-pointer">Chương 72</p>
                    <div className="text-[12px] flex flex-row justify-start items-center text-black-rgba">
                        <FontAwesomeIcon icon={faEye} size="sm" />
                        <p className="text-[10px] italic ml-1">588K</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
