import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { 
    faCircleInfo
} from '@fortawesome/free-solid-svg-icons'

export default function Advertise() {
    return (
        <div className="w-full h-[44px] border-[1px] border-[#3f80ff] flex flex-row mb-[40px]">
            <div className="w-[44px] h-full bg-[#3f80ff] flex justify-center items-center">
                <FontAwesomeIcon icon={faCircleInfo} size="sm" color="white" />
            </div>
            <div className="w-full h-full flex flex-row items-center justify-start px-[16px]">
            <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#dc1414] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#dc1414]"></span>
            </span>
            <p className="text-xs font-thin">Tính năng  <a href={`/login`} className="text-[#3f80ff] cursor-pointer hover:underline hover:text-purple-700">Đăng Nhập</a> đã được sửa lỗi, vui lòng <a href={`/login`} className="text-[#3f80ff] cursor-pointer hover:underline hover:text-purple-700">Đăng Nhập</a> để trải nghiệm tính năng.</p>
            </div>
        </div>
    )
}
