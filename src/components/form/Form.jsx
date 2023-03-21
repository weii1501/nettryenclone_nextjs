import React, { useState, useEffect } from 'react'

import { 
    faAnglesRight,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Login from './Login'
import Registry from './Registry'

export default function Form({ type }) {
  return (
    <>
        <div className="w-auto h-auto mb-4">
            <a href="#" className="text-[14px] text-[#288ad6] hover:underline">Trang chủ</a>
            <span className="text-[10px] text-[#cccccc] mx-1"><FontAwesomeIcon icon={faAnglesRight} /></span>
            <a href="#" className="text-[14px] text-[#288ad6] hover:underline">Đăng nhập</a>
        </div>
        <form className="w-full lg:h-[933px] sm:h-auto flex flex-col justify-start items-center">
            <div className="w-[500px] h-auto flex flex-col justify-start items-start">
                {type ? (<><Login /></>) : (<><Registry /></>)}
            </div>
        </form>
    </>
  )
}
