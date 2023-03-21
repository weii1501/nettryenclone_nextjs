import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { 
    faEye,
    faSignal,
    faThumbsUp,
    faArrowsRotate,
    faCloudArrowUp
} from '@fortawesome/free-solid-svg-icons'

export default function DropdownXH() {
    return (
        <>
            <div className="w-[300px] h-[150px] absolute bg-white top-[44px] left-0 group-hover:flex hidden flex-col flex-wrap gap-0">
                <div className="border-[0.5px] border-[#eeee] border-solid w-1/2 h-1/4 flex flex-row items-center px-[16px] py-[8px] text-sm hover:text-purple-700">
                    <FontAwesomeIcon icon={faEye} />
                    <span className="text-center leading-none ml-1">Top all</span>
                </div>
                <div className="border-[0.5px] border-[#eeee] border-solid w-1/2 h-1/4 flex flex-row items-center px-[16px] py-[8px] text-sm hover:text-purple-700">
                    <FontAwesomeIcon icon={faEye} />
                    <span className="text-center leading-none ml-1">Top tháng</span>
                </div>
                <div className="border-[0.5px] border-[#eeee] border-solid w-1/2 h-1/4 flex flex-row items-center px-[16px] py-[8px] text-sm hover:text-purple-700">
                    <FontAwesomeIcon icon={faEye} />
                    <span className="text-center leading-none ml-1">Top tuần</span>
                </div>
                <div className="border-[0.5px] border-[#eeee] border-solid w-1/2 h-1/4 flex flex-row items-center px-[16px] py-[8px] text-sm hover:text-purple-700">
                    <FontAwesomeIcon icon={faEye} />
                    <span className="text-center leading-none ml-1">Top ngày</span>
                </div>
                <div className="border-[0.5px] border-[#eeee] border-solid w-1/2 h-1/4 flex flex-row items-center px-[16px] py-[8px] text-sm text-red-600 font-bold">
                    <FontAwesomeIcon icon={faSignal} />
                    <span className="text-center leading-none ml-1">Truyện full</span>
                </div>
                <div className="border-[0.5px] border-[#eeee] border-solid w-1/2 h-1/4 flex flex-row items-center px-[16px] py-[8px] text-sm hover:text-purple-700">
                    <FontAwesomeIcon icon={faThumbsUp} />
                    <span className="text-center leading-none ml-1">Yêu thích</span>
                </div>
                <div className="border-[0.5px] border-[#eeee] border-solid w-1/2 h-1/4 flex flex-row items-center px-[16px] py-[8px] text-sm hover:text-purple-700">
                    <FontAwesomeIcon icon={faArrowsRotate} />
                    <span className="text-center leading-none ml-1">Mới cập nhật</span>
                </div>
                <div className="border-[0.5px] border-[#eeee] border-solid w-1/2 h-1/4 flex flex-row items-center px-[16px] py-[8px] text-sm hover:text-purple-700">
                    <FontAwesomeIcon icon={faCloudArrowUp} />
                    <span className="text-center leading-none ml-1">Truyện mới</span>
                </div>
            </div>
        </>
    )
}
