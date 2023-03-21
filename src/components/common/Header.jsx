/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import { 
    faMagnifyingGlass,
    faLightbulb,
    faComment,
    faBars,
    faXmark,
    faCaretDown,
    faUser,
    faBook,
    faRightFromBracket
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

import NavbarRes from './NavbarRes'


export default function Header() {
    const [toggle, setToggle] = useState(true)
    const user = {
        name: 'Vo Dac Luc',
        img: '/images/user/vodacluc.jpg'
    }

    return (
        <>
            <header className="relative w-auto h-[50px] bg-[url('/images/bg_header.jpeg')] bg-top lg:flex lg:mx-auto lg:justify-center lg:items-center lg:sticky z-30">
                <div className="lg:w-[1030px] lg:h-[32px] h-[48px] flex flex-row items-center gap-2 justify-between px-4 w-full">
                    <a className="w-[150px] h-full my-2 object object-cover cursor-pointer flex justify-center items-center" href={'/'}>
                        <img
                            src="/images/logo.png"
                            alt="logo"
                        />
                    </a>
                    <div className="w-[430px] h-full bg-white hidden lg:inline">
                        <input type="text" placeholder="Tìm truyện..." className="w-11/12 h-full mx-[8px] focus:border-none bg-transparent outline-0"/>
                        <div className="w-1/12 h-full inline cursor-pointer">        
                            <FontAwesomeIcon icon={faMagnifyingGlass} size="sm"/>
                        </div>
                    </div>
                    <div className="w-[64px] h-full lg:flex flex-row items-center justify-between hidden">
                            <FontAwesomeIcon icon={faLightbulb} size="xl" color="yellow" className="cursor-pointer"/>
                            <FontAwesomeIcon icon={faComment} size="xl" color="white"  className="cursor-pointer" />
                    </div>
                    <div className="w-[145px] h-full text-center lg:flex justify-between items-center text-white text-base hidden">
                        {user ? (<>
                            <div className="group w-full h-full flex flex-row justify-center items-center gap-1 relative">
                                <div className="w-full h-auto flex flex-row justify-center items-center gap-1">
                                    <img 
                                        src={user.img} 
                                        alt="atv" 
                                        className="w-[30px] h-[30px] object-contain rounded-full ring-2 ring-gray-300 dark:ring-gray-500 mr-2"
                                    />
                                    <span className="text-[14px]">{user.name}</span>
                                    <button><FontAwesomeIcon icon={faCaretDown} size="sm" /></button>
                                </div>
                                <div className="absolute w-[160px] h-[90px] left-12 top-8 bg-white rounded group-hover:flex flex-col items-start justify-start gap-1 px-4 py-1 hidden before:">
                                    <a href="/user/accout-info/12" className="text-[14px] text-[#333] flex justify-center items-center hover:text-purple-700">
                                        <span className="mr-2"><FontAwesomeIcon icon={faUser} size="sm" /></span>
                                        <span>Trang cá nhân</span>
                                    </a>
                                    <a href="#" className="text-[14px] text-[#333] flex justify-center items-center hover:text-purple-700">
                                        <span className="mr-2"><FontAwesomeIcon icon={faBook} size="sm" /></span>
                                        <span>Truyện theo dõi</span>
                                    </a>
                                    <a href="#" className="text-[14px] text-[#333] flex justify-center items-center hover:text-purple-700">
                                        <span className="mr-2"><FontAwesomeIcon icon={faRightFromBracket} size="sm" /></span>
                                        <span>Thoát</span>
                                    </a>
                                </div>
                            </div>
                        </>) : (<>
                            <Link className="hover:underline cursor-pointer" href="/registry/">Đăng kí</Link> / <Link className="hover:underline cursor-pointer" href="/login/">Đăng nhập</Link>
                        </>)}
                    </div>
                    <button className="w-[40px] h-[40px] bg-[#a68f25] rounded flex justify-center items-center lg:hidden" onClick={() =>setToggle(!toggle)}>
                        <span className="text-[20px] text-white "><FontAwesomeIcon icon={toggle ? faBars : faXmark} size="lg" /></span>
                    </button>
                </div>
                <NavbarRes toggle={toggle}/>
            </header>
        </>
  )
}
