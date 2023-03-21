/* eslint-disable @next/next/no-img-element */
import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faXmark
} from '@fortawesome/free-solid-svg-icons'

export default function Content() {
    return (
        <div className="basis-3/4 w-full h-auto flex flex-col justify-start items-start">
            {/* Thong tin chung */}
            <h1 className="uppercase text-[22px] text-[#333] font-bold border-b-[3px] border-[#e92c72] pb-1">THÔNG TIN CHUNG</h1>
            <div className="w-full h-auto flex flex-row justify-start items-start gap-9 mt-6">
                {/* Thong tin tai khoan */}
                <div className='basis-1/2 w-full h-auto flex flex-col justify-start items-start'>
                    <h2 className="text-[18px] text-[#333] border-l-[3px] border-[#e92c72] pl-[10px] mb-5"> Thông tin tài khoản</h2>
                    <div className="w-full h-auto py-4 px-6 border-[1px] border-black-rgba-border rounded">
                        <div className="w-full h-auto flex flex-row justify-start items-start mb-2">
                            <span className="basis-1/3 w-full h-auto text-left text-[14px] text-black">Họ và tên</span>
                            <span className="basis-2/3 w-full h-auto text-left text-[14px] text-[#333]">Võ Đắc Lực</span>
                        </div>
                        <div className="w-full h-auto flex flex-row justify-start items-start mb-2">
                            <span className="basis-1/3 w-full h-auto text-left text-[14px] text-black">Email</span>
                            <span className="basis-2/3 w-full h-auto text-left text-[14px] text-[#333]">kakacacchau@gmail.com</span>
                        </div>
                        <div className="w-full h-auto flex flex-row justify-start items-start mb-2">
                            <span className="basis-1/3 w-full h-auto text-left text-[14px] text-black">Tài khoản</span>
                            <span className="basis-2/3 w-full h-auto text-left text-[14px] text-[#333]">GOOGLE</span>
                        </div>
                        <div className="w-full h-auto flex flex-row justify-start items-start mb-2">
                            <span className="basis-1/3 w-full h-auto text-left text-[14px] text-black"></span>
                            <a href="#" className="basis-2/3 w-full h-auto text-left text-[14px] text-[#288ad6] hover:text-[#ae4ad9] hover:underline">Đổi mật khẩu</a>
                        </div>
                    </div>
                </div>
                {/* Avt */}
                <form className="basis-1/2 w-full h-auto flex flex-col justify-start items-start mr-3">
                    <h2 className="text-[18px] text-[#333] border-l-[3px] border-[#e92c72] pl-[10px] mb-5">Avatar</h2>
                    <div className="w-full h-auto py-4 px-6 border-[1px] border-black-rgba-border rounded">
                        <button className="text-white text-[14px] px-[12px] py-[6px] inline bg-[#d9534f] border-[1px] border-[#d43f3a] rounded-[4px]">
                            Chọn ảnh
                        </button>
                        <span className="ml-4 text-[14px] text-[#333]">{`jpg,jpeg,gif,png <2MB`}</span>
                        <span className="text-[14px] text-red-600 inline-block ml-1">Avatar tục tĩu sẽ bị khóa vĩnh viễn</span>
                    </div>
                </form>
            </div>
            {/* Truyen theo doi */}
            <h2 className="text-[18px] text-[#333] border-l-[3px] border-[#e92c72] pl-[10px] mb-5 mt-8">Truyện theo dõi</h2>
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
                </div>
            </div>
        </div>
    )
}
