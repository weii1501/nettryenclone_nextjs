/* eslint-disable @next/next/no-img-element */
import React from 'react'

export default function Footer() {
    return (
        <footer className="w-full h-auto flex justify-center items-center bg-[#222222]">
            <div className="w-[1030px] h-full flex lg:flex-row flex-col gap-2 lg:justify-between lg:items-center">
                <div className="basis-1/3 flex flex-col justify-between items-start py-4 lg:ml-4 ml-2">
                    <img 
                        src="/images/footerimg/logo-nettruyen.webp" 
                        alt="logo-nettruyen" 
                        className="w-auto h-auto mb-6 object-contain cursor-pointer"
                    />
                    <img 
                        src="/images/footerimg/lienhe.webp" 
                        alt="lienhe" 
                        className="w-[219px] h-[80px] object-contain mb-4 cursor-pointer"
                    />
                    <span className="text-white text-[13px]">Copyright © 2023 NetTruyen</span>
                </div>
                <div className="w-full h-[1px] bg-white mx-1 lg:hidden"></div>
                <div className="basis-2/3 flex flex-col justify-between items-start py-4 mr-4 mx-1">
                    <span className="w-full h-auto text-[18px] text-white py-[5px]">Từ Khóa</span>
                    <div className="w-full h-auto text-white flex flex-row flex-wrap justify-start items-start py-[5px] pr-5 gap-2">
                        <span className="text-[13px] p-[5px] border-white border-[1px] rounded cursor-pointer">Truyện tranh</span>
                        <span className="text-[13px] p-[5px] border-white border-[1px] rounded cursor-pointer">Truyen tranh online</span>
                        <span className="text-[13px] p-[5px] border-white border-[1px] rounded cursor-pointer">Đọc truyện tranh</span>
                        <span className="text-[13px] p-[5px] border-white border-[1px] rounded cursor-pointer">Truyện tranh hot</span>
                        <span className="text-[13px] p-[5px] border-white border-[1px] rounded cursor-pointer">Truyện tranh hay</span>
                        <span className="text-[13px] p-[5px] border-white border-[1px] rounded cursor-pointer">Truyện ngôn tình</span>
                        <span className="text-[13px] p-[5px] border-white border-[1px] rounded cursor-pointer">truyenqq</span>
                        <span className="text-[13px] p-[5px] border-white border-[1px] rounded cursor-pointer">mi2manga</span>
                        <span className="text-[13px] p-[5px] border-white border-[1px] rounded cursor-pointer">doctruyen3q</span>
                        <span className="text-[13px] p-[5px] border-white border-[1px] rounded cursor-pointer">cmanga</span>
                        <span className="text-[13px] p-[5px] border-white border-[1px] rounded cursor-pointer">vlogtruyen</span>
                        <span className="text-[13px] p-[5px] border-white border-[1px] rounded cursor-pointer">blogtruyen</span>
                        <span className="text-[13px] p-[5px] border-white border-[1px] rounded cursor-pointer">saytruyen</span>
                        <span className="text-[13px] p-[5px] border-white border-[1px] rounded cursor-pointer">dichtruyen</span>
                        <span className="text-[13px] p-[5px] border-white border-[1px] rounded cursor-pointer">truyentranhaudio</span>
                        <span className="text-[13px] p-[5px] border-white border-[1px] rounded cursor-pointer">hamtruyen</span>
                        <span className="text-[13px] p-[5px] border-white border-[1px] rounded cursor-pointer">truyensieuhay</span>
                        <span className="text-[13px] p-[5px] border-white border-[1px] rounded cursor-pointer">vcomi</span>
                        <span className="text-[13px] p-[5px] border-white border-[1px] rounded cursor-pointer">nettruyen</span>
                        <span className="text-[13px] p-[5px] border-white border-[1px] rounded cursor-pointer">nettruyenco</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}
