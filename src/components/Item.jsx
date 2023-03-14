import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { 
    faEye,
    faComment,
    faHeart
} from '@fortawesome/free-solid-svg-icons'

export default function Item() {
    return (
        <div className="basis-1/4 w-auto h-[338px] flex flex-col justify-start items-center gap-2 rounded-[4px] ">
            <div className="w-full h-[197px] border-[1px] border-black-rgba-border rounded-[2px]">
                <div className="w-full h-full bg-[url('/images/SlideItem/tro-thanh-tai-phiet-nho-game.jpg')] bg-cover my-[2px] flex flex-col justify-end items-center">
                    <div className="w-full h-[25px] bg-black-rgba text-white text-[12px] flex flex-row justify-start items-center p-1 relative  ">
                        <FontAwesomeIcon icon={faEye} size="sm" />
                        <p className="px-1">530K</p>
                        <FontAwesomeIcon icon={faComment} size="sm" />
                        <p className="px-1">71</p>
                        <FontAwesomeIcon icon={faHeart} size="sm" />
                        <p className="px-1">2,206</p>
                    </div>
                </div>
            </div>
            <p className="w-full h-auto text-[17px]">
                Trở Thành Tài Phiệt Nhờ Game 
            </p>
            <div className="flex flex-row justify-between items-center w-full ">
                <p className="text-[13px]">Chương 16</p>
                <div className="text-[11px] flex flex-row justify-start items-center">
                    <p className="italic ml-1 text-black-rgba">1 ngày trước</p>
                </div>
            </div>
            <div className="flex flex-row justify-between items-center w-full ">
                <p className="text-[13px]">Chương 15.5</p>
                <div className="text-[11px] flex flex-row justify-start items-center">
                    <p className="italic ml-1 text-black-rgba">14 ngày trước</p>
                </div>
            </div>
            <div className="flex flex-row justify-between items-center w-full ">
                <p className="text-[13px]">Chương 15</p>
                <div className="text-[11px] flex flex-row justify-start items-center">
                    <p className="italic ml-1 text-black-rgba">23 ngày trước</p>
                </div>
            </div>
        </div>
    )
}
