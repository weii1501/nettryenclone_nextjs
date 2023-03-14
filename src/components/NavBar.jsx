import React from 'react'
import DropdownTl from '../components/DropdownTL'
import DropdownXH from '../components/DropdownXH'

import { 
    faHouseChimney,
    faCaretDown, 
    faSort
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function NavBar() {

    return (
        <>
            <nav className="w-full h-[44px] bg-[#e4e4e4] flex justify-center top-0 sticky z-30">
                <div className="w-[1030px] h-full flex flex-row justify-start items-center px-4">
                    <a className="min-w-[48px] h-full text-sm hover:bg-white hover:text-purple-700 flex justify-center items-center px-[12px]" href="#">
                        <FontAwesomeIcon icon={faHouseChimney} size="lg"/> 
                    </a>
                    <a className="min-w-[48px] h-full text-sm hover:bg-white hover:text-purple-700 flex justify-center items-center px-[12px] font-thin" href="#"><span className="uppercase">Hot</span></a>
                    <a className="min-w-[48px] h-full text-sm hover:bg-white hover:text-purple-700 flex justify-center items-center px-[12px] font-thin" href="#"><span className="uppercase">theo dõi</span></a>
                    <a className="min-w-[48px] h-full text-sm hover:bg-white hover:text-purple-700 flex justify-center items-center px-[12px] font-thin" href="#"><span className="uppercase">lịch sử</span></a>
                    <a className="group min-w-[48px] h-full text-sm hover:bg-white flex justify-center items-center px-[12px] font-thin relative" href="#">
                        <DropdownTl />
                        <span className="uppercase mr-1 group-hover:text-purple-700" >
                            thể loại
                        </span>
                        <FontAwesomeIcon icon={faCaretDown} size="sm" className="group-hover:text-purple-700"/>
                    </a>
                    <a className="group min-w-[48px] h-full text-sm hover:bg-white flex justify-center items-center px-[12px] font-thin relative" href="#">
                        <DropdownXH />
                        <span className="uppercase mr-1 relative group-hover:text-purple-700" >
                            xếp hạng
                        </span>
                        <FontAwesomeIcon icon={faSort} size="sm" />
                    </a>
                    <a className="min-w-[48px] h-full text-sm hover:bg-white hover:text-purple-700 flex justify-center items-center px-[12px] font-thin" href="#"><span className="uppercase">tìm truyện</span></a>
                    <a className="min-w-[48px] h-full text-sm hover:bg-white hover:text-purple-700 flex justify-center items-center px-[12px] font-thin" href="#"><span className="uppercase">con gái</span></a>
                    <a className="min-w-[48px] h-full text-sm hover:bg-white hover:text-purple-700 flex justify-center items-center px-[12px] font-thin" href="#"><span className="uppercase">con trai</span></a>
                    <a className="min-w-[48px] h-full text-sm hover:bg-white hover:text-purple-700 flex justify-center items-center px-[12px] font-thin" href="#"><span className="uppercase">tải app</span></a>
                    <a className="min-w-[48px] h-full text-sm hover:bg-white hover:text-purple-700 flex justify-center items-center px-[12px] font-thin" href="#"><span className="uppercase">group</span></a>
                </div>
            </nav>
        </>
    )
}
