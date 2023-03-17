import React from 'react'

import { FaFacebookF } from 'react-icons/fa'
import { BsGoogle } from 'react-icons/bs'

export default function Login() {
  return (
    <>
        <h1 className="w-auto h-auto relative text-[22px] font-extrabold text-[#333333] pb-2 mb-3 after:absolute after:w-full after:h-1 after:bg-[#ee2c74] after:left-0 after:bottom-0">
            ĐĂNG NHẬP
        </h1>
        <label htmlFor="" className="font-extralight text-[14px] text-[#333333]">Email</label>
        <input 
            type="email" 
            placeholder="Your email" 
            required
            className="w-full h-[36px] outline-0 border-black-rgba-border border-[1px] rounded px-3 mt-2 mb-4"
        />
        <label htmlFor="" className="font-extralight text-[14px] text-[#333333]">Mật khẩu</label>
        <input 
            type="password" 
            placeholder="Your password" 
            required
            className="w-full h-[36px] outline-0 border-black-rgba-border border-[1px] rounded px-3 mt-2 mb-4"
        />
        <a href="#" className="w-full h-auto text-right text-[13px] text-[#288ad6] hover:text-purple-700 hover:underline mb-2">Đăng kí mới</a>
        <button className="w-full h-auto bg-[#fdd834] text-[14px] text-[#333333] mt-1 py-3 rounded">
            Đăng nhập
        </button>
        <button className="w-full h-auto bg-[#3a5998] text-[14px] mt-3 py-3 rounded text-white flex flex-row justify-start items-center">
            <span className="basis-1 pl-3 text-xl"><FaFacebookF /></span>
            <span className="w-full text-center">Đăng nhập bằng Facebook</span>
        </button>
        <button className="w-full h-auto bg-[#dd4b39] text-[14px] mt-3 py-3 rounded text-white flex flex-row justify-start items-center">
            <span className="basis-1 pl-3 text-xl"><BsGoogle /></span>
            <span className="w-full text-center">Đăng nhập bằng Google</span>
        </button>
    </>
  )
}
