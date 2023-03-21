import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

import ReadItem from './ReadItem'

import { 
    faAnglesRight,
    faCircleInfo,
    faHouseChimney,
    faList,
    faRotateLeft,
    faChevronLeft,
    faChevronRight
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Reading() {

    const router = useRouter()
    const { id } = router.query
    const [active, setActive] = useState('Server 1')
    const nonActiveBg = 'bg-[#337ab7] hover:bg-[#296090] border-[#337ab7]'
    const activeBg = 'bg-[#5cb85c] hover:bg-[#5cb85c] border-[#5cb85c]'

    return (
        <div className="w-[1030px] h-auto bg-[#f9f9f9] flex flex-col justify-center items-center rounded-b-md">
            <div className="w-full h-auto mb-4 ml-6">
                <a href="#" className="text-[14px] text-[#288ad6] hover:underline">Trang chủ</a>
                <span className="text-[10px] text-[#cccccc] mx-1"><FontAwesomeIcon icon={faAnglesRight} /></span>
                <a href="#" className="text-[14px] text-[#288ad6] hover:underline">Thể loại</a>
                <span className="text-[10px] text-[#cccccc] mx-1"><FontAwesomeIcon icon={faAnglesRight} /></span>
                <a href="#" className="text-[14px] text-[#288ad6] hover:underline">Chuyển Sinh Vào Gia Tộc Suy Vong </a>
                <span className="text-[10px] text-[#cccccc] mx-1"><FontAwesomeIcon icon={faAnglesRight} /></span>
                <a href="#" className="text-[14px] text-[#288ad6] hover:underline">Chương {id} </a>
            </div>
            <div className="w-full h-auto ml-6">
                <Link href="#" className="text-[20px] text-[#288ad6] hover:underline">Chuyển Sinh Vào Gia Tộc Suy Vong </Link>
                <span className="text-[20px] text-[#333]"> - Chương 1 </span>
                <span className="text-[14px] text-[#333] italic">{`[Cập nhật lúc: 2022-11-22 09:01:35]`}</span>
            </div>
            <div className="w-full h-auto bg-[#f7f7f8] flex flex-col justify-center items-start mt-2 ">
                <div className="w-full h-auto text-center flex flex-row justify-center items-center">
                    <span className="relative flex h-2 w-2 mr-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#dc1414] opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#dc1414]"></span>
                    </span>
                    <p className="text-[14px] text-[#333] ml-[1px]">Nếu không xem được truyện vui lòng đổi <Link href="#" className="text-[14px] text-[#288ad6] hover:underline hover:text-purple-700">{`"SERVER ẢNH"`}</Link> bên dưới</p>
                </div>
                <div className="w-full h-auto flex flex-row justify-center items-center gap-2 mt-2">
                    <button 
                        href="#" 
                        className={`text-center text-white text-[14px] px-4 py-2 border-[1px] rounded ${active === 'Server 1' ? activeBg : nonActiveBg}`}
                        onClick={() => setActive('Server 1')}
                    >
                        Server 1
                    </button>
                    <button 
                        href="#" 
                        className={`text-center text-white text-[14px] px-4 py-2 border-[1px] rounded ${active === 'Server 2' ? activeBg : nonActiveBg}`}
                        onClick={() => setActive('Server 2')}
                    >
                        Server 2
                    </button>
                    <button 
                        href="#" 
                        className={`text-center text-white text-[14px] px-4 py-2 border-[1px] rounded ${active === 'Server VIP' ? activeBg : nonActiveBg}`}
                        onClick={() => setActive('Server VIP')}
                    >
                        Server VIP
                    </button>
                </div>
                <div className="w-full h-auto flex flex-row justify-center items-center gap-2 mt-2">
                    <button 
                        href="#" 
                        className={`text-center text-white text-[14px] px-4 py-2 border-[1px] rounded bg-[#f0ad4e] border-[#eea236] hover:bg-[#ec971f] hover:border-[#d58512]`}
                        onClick={() => setActive('Server 1')}
                    >
                        Báo lỗi
                    </button>
                </div>
                <div className="w-full h-auto text-center text-[14px] bg-[#daedf7] text-[#31708F] py-4 italic border-[1px] border-[#bce8f1] rounded mt-3">
                    <span className="mr-1"><FontAwesomeIcon icon={faCircleInfo} size="sm" /></span>
                    <span>{`Sử dụng mũi tên trái (←) hoặc phải (→) để chuyển chapter`}</span>
                </div>
                <div className="w-full h-auto flex flex-row justify-center items-center gap-3 text-[#d9544f] mt-4">
                    <button className="hover:text-[#ac2925]"><FontAwesomeIcon icon={faHouseChimney} size="lg"/></button>
                    <button className="hover:text-[#ac2925]"><FontAwesomeIcon icon={faList} size="xl"/></button>
                    <button className="hover:text-[#ac2925]"><FontAwesomeIcon icon={faRotateLeft} size="xl"/></button>
                    <div className='w-auto h-auto flex flex-row justify-center items-center gap-2'>
                        <button className="px-[9px] py-1 bg-[#d9544f] rounded-l hover:bg-[#ac2925]">
                            <span className="text-white"><FontAwesomeIcon icon={faChevronLeft} size="lg" /></span>
                        </button>
                        <select className="text-[#333] text-[14px] h-9 border-[1px] border-black-rgba-border rounded w-[250px]">
                            <option value="Chương 1">Chương 1</option>
                            <option value="Chương 1">Chương 1</option>
                            <option value="Chương 1">Chương 1</option>
                            <option value="Chương 2">Chương 2</option>
                            <option value="Chương 1">Chương 1</option>
                            <option value="Chương 1">Chương 1</option>
                        </select>
                        <button className="px-[9px] py-1 bg-[#d9544f] rounded-r hover:bg-[#ac2925]">
                            <span className="text-white"><FontAwesomeIcon icon={faChevronRight} size="lg" /></span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="w-full h-auto flex justify-center items-center mt-4 bg-black">
                <div className="w-[760px] h-auto flex flex-col justify-center items-center">
                    <ReadItem />
                </div>
            </div>
        </div>
    )
}
