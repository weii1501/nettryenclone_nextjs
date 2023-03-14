import React, { useState, useEffect } from 'react'

import { 
    faAnglesRight,
    faAngleRight
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function HistoryList() {
    const [toggle, setToggle] = useState(true)
    const underline = {
        active:'relative text-[16px] text-[#288ad6] font-extrabold px-3 pb-3 after:absolute after:w-full after:h-[3px] after:bg-[#d0b32e] after:bottom-0 after:right-0 hover:text-purple-700',
        non:'relative text-[16px] text-[#288ad6] font-normal px-3 pb-3 hover:text-purple-700',
    }

    return (
        <>
            <div className="w-auto h-auto mb-4">
                <a href="#" className="text-[14px] text-[#288ad6] hover:underline">Trang chủ</a>
                <span className="text-[10px] text-[#cccccc] mx-1"><FontAwesomeIcon icon={faAnglesRight} /></span>
                <a href="#" className="text-[14px] text-[#288ad6] hover:underline">Lịch sử</a>
            </div>
            <div className="w-auto h-auto flex flex-col">
                <div className="w-auto h-auto mb-5">
                    <span className="text-[20px] text-[#288ad6] mr-1">Lịch sử đọc truyện</span>
                    <span className="text-[#288ad6]"><FontAwesomeIcon icon={faAngleRight} /></span>
                </div>
                <div className="w-full h-auto flex justify-center items-center border-b-[1px] mb-2">
                    <span className={`${toggle ? underline.active : underline.non} cursor-pointer`} onClick={() => setToggle(true)}>Từ thiết bị</span>       
                    <div className={`${!toggle ? underline.active : underline.non} flex justify-start items-center cursor-pointer`} onClick={() => setToggle(false)}>
                        <span>Theo tài khoản </span>
                        <span className="relative flex h-2 w-2 ml-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#dc1414] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#dc1414]"></span>
                        </span>
                    </div>
                </div>
                <div className="w-full min-h-[500px]">
                    <span className="text-sm">Bạn chưa có đọc truyện nào</span>
                </div>
            </div>
        </>
    )
}
