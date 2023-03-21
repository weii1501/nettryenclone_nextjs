import React from 'react'

import { 
    faMagnifyingGlass,
    faCaretDown,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import DropdownTL from '../dropdown/DropdownTL'

export default function NavbarRes({ toggle }) {
    return (
        <div className={`${toggle ? ('hidden') : ('flex')} absolute top-11 left-0 w-full bg-black mt-[6px] z-30`}>
            <div className="w-full h-auto p-2 flex flex-col justify-start items-start gap-1">
                <div className="w-full h-8 bg-white flex justify-center items-center">
                    <input type="text" placeholder="Tìm truyện..." className="w-11/12 h-full mx-[8px] focus:border-none bg-transparent outline-0"/>
                    <span className="w-1/12 h-full cursor-pointer flex justify-center items-center">        
                        <FontAwesomeIcon icon={faMagnifyingGlass} size="sm"/>
                    </span>
                </div>
                <a href="#" className="text-[14px] text-white uppercase mt-3">Trang chủ</a>
                <a href="#" className="text-[14px] text-white uppercase mt-3">hot</a>
                <a href="#" className="text-[14px] text-white uppercase mt-3">lịch sử</a>
                <a href="#" className="text-[14px] text-white mt-3">
                    <DropdownTL />
                    <span className="mr-1 uppercase">Thể loại</span>
                    <span><FontAwesomeIcon icon={faCaretDown} size="sm" /></span>
                </a>
                <a href="#" className="text-[14px] text-white uppercase mt-3">Xếp hạng</a>
                <a href="#" className="text-[14px] text-white uppercase mt-3">Tìm truyên</a>
                <a href="#" className="text-[14px] text-white uppercase mt-3">Con gái</a>
                <a href="#" className="text-[14px] text-white uppercase mt-3">Con trai</a>
                <a href="#" className="text-[14px] text-white uppercase mt-3">Tải app</a>
                <a href="#" className="text-[14px] text-white uppercase mt-3">group</a>
                <a href="#" className="text-[14px] text-white mt-6 border-b-[0.5px] border-[#f7f7f8] w-full pb-1">Đăng nhập</a>
                <a href="#" className="text-[14px] text-white mt-3 border-b-[0.5px] border-[#f7f7f8] w-full pb-1">Đăng kí</a>
            </div>
        </div>
    )
}
