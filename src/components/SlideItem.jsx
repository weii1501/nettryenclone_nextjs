import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { 
    faClock
} from '@fortawesome/free-solid-svg-icons'

export default function SlideItem() {
  return (
    <div className="basis-1/5 h-full cursor-pointer">
        <div className="w-full h-full bg-[url('/images/SlideItem/ToanChucPhapSu.jpeg')] bg-cover flex flex-col justify-end items-center">
            <div className="w-full  bg-black-rgba text-white flex flex-col justify-center items-center p-1 relative">
                <a href="" className="text-[15px] mb-1">Toàn Chức Pháp Sư</a>

                <div className="flex flex-row justify-between items-center w-full px-2">
                    <p className="text-[12px]">Chương 1006</p>
                    <div className="text-[11px] flex flex-row justify-start items-center">
                        <FontAwesomeIcon icon={faClock} size="xs"/>
                        <p className="italic ml-1">1 ngày trước</p>
                    </div>
                </div>

                <button className="absolute">

                </button>
            </div>
        </div>
    </div>
  )
}
