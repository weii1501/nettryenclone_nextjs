import React, { useState } from 'react'

import Link from 'next/link'

import { 
    faChevronDown,
    faChevronUp,
    faCircleInfo,
    faBook,
    faLock,
    faRightFromBracket
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function SideBar({title, setTitle }) {
    const [toggle, setToggle] = useState(true)
    const active = "relative w-full h-full px-[26px] bg-[#e6e6e6] border-[#ee2c74] border-l-[4px] py-[9px] text-[#333] before:absolute before:top-0 before:left-0 before:w-0 hover:before:w-full before:transition-all before:h-[39px] before:bg-white before:opacity-10 cursor-pointer font-semibold"
    const nonActive = "relative w-full h-full px-[30px] py-[9px] text-[#333] before:absolute before:top-0 before:left-0 before:w-0 hover:before:w-full before:transition-all before:h-[39px] before:bg-white before:opacity-50 cursor-pointer"


    return (
        <div className="basis-1/4 w-full h-auto flex flex-col justify-start items-start ml-4 mb-[100px]">
            <div className="w-full h-auto bg-[#222222] flex justify-between items-center">
                <div className="w-auto h-auto flex flex-col justify-start items-start py-7 pl-4">
                    <span className="text-[14px] text-[#c3c3c3]">Tài khoản của</span>
                    <span className="text-[14px] text-white uppercase font-bold">Võ đắc lực</span>
                </div>
                <div onClick={() => setToggle(!toggle)}>
                    {toggle ? (
                        <><span className="text-white mr-2"><FontAwesomeIcon icon={faChevronDown} size="sm" /></span></>
                    ) : (
                        <span className="text-white mr-2"><FontAwesomeIcon icon={faChevronUp} size="sm" /></span>
                    )}
                </div>
            </div>
            {toggle ? (
                <div className="w-full h-auto flex flex-col justify-start items-start text-[14px] mt-4 bg-[#f2f2f2]">
                    <button 
                        className={title === "Thông tin cá nhân" ? active : nonActive}
                        onClick={() => {
                            setTitle("Thông tin cá nhân")
                            console.log(title)
                        }}
                    >
                        <div className=" w-auto h-auto flex justify-start items-center">
                            <span><FontAwesomeIcon icon={faCircleInfo} size="sm" /></span>
                            <span className="ml-1">Thông tin cá nhân</span>
                        </div>
                    </button>
                    <button 
                        className={title === "Truyện theo dõi" ? active : nonActive}
                        onClick={() => {
                            setTitle("Truyện theo dõi")
                            console.log(title)
                        }}
                    >
                        <div className="w-auto h-auto flex justify-start items-center ">
                            <span><FontAwesomeIcon icon={faBook} size="sm" /></span>
                            <span className="ml-1">Truyện theo dõi</span>
                        </div>
                    </button>
                    <button 
                        className={title === "Đổi mật khẩu" ? active : nonActive}
                        onClick={() => {
                            setTitle("Đổi mật khẩu")
                            console.log(title)
                        }}
                    >
                        <div className="w-auto h-auto flex justify-start items-center ">
                            <span><FontAwesomeIcon icon={faLock} size="sm" /></span>
                            <span className="ml-1">Đổi mật khẩu</span>
                        </div>
                    </button>
                    <Link href="/" className="relative w-full h-full px-[30px] py-[9px] text-[#333] before:absolute before:top-0 before:left-0 before:w-0 hover:before:w-full before:transition-all before:h-[39px] before:bg-white before:opacity-50 cursor-pointer">
                        <div className="w-auto h-auto flex justify-start items-center ">
                            <span><FontAwesomeIcon icon={faRightFromBracket} size="sm" /></span>
                            <span className="ml-1">Thoát</span>
                        </div>
                    </Link>
                </div>
            ) : ('')}
        </div>
    )
}
