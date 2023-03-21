/* eslint-disable @next/next/no-img-element */
import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faXmark
} from '@fortawesome/free-solid-svg-icons'

export default function Follow() {
    return (
        <div className="basis-3/4 w-full h-auto flex flex-col justify-start items-start">
            {/* Truyen theo doi */}
            <h1 className="uppercase text-[22px] text-[#333] font-bold border-b-[3px] border-[#e92c72] pb-1 mb-7">TRUYỆN ĐANG THEO DÕI</h1>
            <span className="w-[99%] h-auto text-[14px] text-[#3c763d] text-left bg-[#dff0d8] border-[1px] border-[#d6e9c6] p-[15px] rounded-lg mb-8">Truyện mới đọc gần đây sẽ hiển thị ở đầu danh sách.</span>
            {/* List */}
            <div className="w-[99%] h-auto flex flex-col mb-8 border-[1px]">
                {/* tb head */}
                <div className="w-full h-auto flex flex-col border-t-[2px] border-[#e92c72]">
                    <div className="w-full h-auto flex flex-row justify-start items-start bg-black ">
                        <span className="basis-[20%] w-full">aa</span>
                        <span className="basis-3/8 w-full h-auto text-[14px] text-white font-extrabold py-2 pr-2 pl-10">TÊN TRUYỆN</span>
                        <span className="basis-1/2 w-full h-auto text-[14px] text-white font-extrabold p-2">XEM GẦN NHẤT</span>
                        <span className="basis-1/2 w-full h-auto text-[14px] text-white font-extrabold p-2">CHAP MỚI NHẤT</span>
                    </div>
                    {/* tr */}
                    <div className="w-full h-auto flex flex-row justify-start items-start bg-white mt-2 border-b-[1px] border-black-rgba-border pb-2">
                        <span className="basis-[20%] w-full ml-1">
                            <img 
                                src="/images/comic/one-piece.jpg" 
                                alt="one-piece.jpg" 
                                className="w-[50px] h-[50px] object-cover"
                            />
                        </span>
                        <div className="basis-3/8 w-full h-full flex flex-col justify-between items-start gap-2 pr-2 pl-9">
                            <a href="#" className="text-[14px] text-[#288ad6] font-bold hover:text-[#ae4ad9]">Siêu Thần Chế Tạp Sư</a>
                            <a href="#" className="text-[13px] text-red-600 flex justify-center items-center">
                                <span className="font-extrabold mr-1"><FontAwesomeIcon icon={faXmark} size="sm"/></span>
                                <span>Bỏ theo dõi</span>
                            </a>
                        </div>
                        <span className="basis-1/2 w-full h-full text-[12px] text-[#999] p-2 italic">21/03/2023</span>
                        <a href="#" className="basis-1/2 w-full h-auto text-[12px] text-[#999] p-2 hover:text-[#03f]">Chương 118</a>
                    </div>
                    {/* tr */}
                    <div className="w-full h-auto flex flex-row justify-start items-start bg-white mt-2 border-black-rgba-border pb-2">
                        <span className="basis-[20%] w-full ml-1">
                            <img 
                                src="/images/comic/one-piece.jpg" 
                                alt="one-piece.jpg" 
                                className="w-[50px] h-[50px] object-cover"
                            />
                        </span>
                        <div className="basis-3/8 w-full h-full flex flex-col justify-between items-start gap-2 pr-2 pl-9">
                            <a href="#" className="text-[14px] text-[#288ad6] font-bold hover:text-[#ae4ad9]">Siêu Thần Chế Tạp Sư</a>
                            <a href="#" className="text-[13px] text-red-600 flex justify-center items-center">
                                <span className="font-extrabold mr-1"><FontAwesomeIcon icon={faXmark} size="sm"/></span>
                                <span>Bỏ theo dõi</span>
                            </a>
                        </div>
                        <span className="basis-1/2 w-full h-full text-[12px] text-[#999] p-2 italic">21/03/2023</span>
                        <a href="#" className="basis-1/2 w-full h-auto text-[12px] text-[#999] p-2 hover:text-[#03f]">Chương 118</a>
                    </div>
                    {/* tr */}
                    {/* end truyen theo doi */}
                </div>
            </div>
        </div>
    )
}
