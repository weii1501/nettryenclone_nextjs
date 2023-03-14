/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { 
    faMagnifyingGlass,
    faLightbulb,
    faComment
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function Header() {
  return (
    <>
        <header className="w-full h-[50px] bg-[url('/images/bg_header.jpeg')] bg-top flex mx-auto justify-center items-center sticky">
            <div className="w-[1030px] h-[32px] flex flex-row items-center gap-2 justify-between px-4">
                <div className="w-[150px] h-full my-2 object object-cover cursor-pointer">
                    <img
                        src="/images/logo.png"
                        alt="logo"
                    />
                </div>
                <div className="w-[430px] h-full bg-white">
                    <input type="text" placeholder="Tìm truyện..." className="w-11/12 h-full mx-[8px] focus:border-none bg-transparent outline-0"/>
                    <div className="w-1/12 h-full inline cursor-pointer">        
                        <FontAwesomeIcon icon={faMagnifyingGlass} size="sm"/>
                    </div>
                </div>
                <div className="w-[64px] h-full flex flex-row items-center justify-between ">
                        <FontAwesomeIcon icon={faLightbulb} size="xl" color="yellow" className="cursor-pointer"/>
                        <FontAwesomeIcon icon={faComment} size="xl" color="white"  className="cursor-pointer" />
                </div>
                <div className="w-[145px] h-full text-center flex justify-between items-center text-white text-base">
                    <a className="hover:underline cursor-pointer">Đăng kí</a> / <a className="hover:underline cursor-pointer">Đăng nhập</a>
                </div>
            </div>
        </header>
    </>
  )
}
