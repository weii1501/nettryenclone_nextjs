/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { 
    faSort,
    faSquareFacebook
} from '@fortawesome/free-solid-svg-icons'
import CommentItem from '../components/CommentsItem'
import { AiFillFacebook } from 'react-icons/ai';

export default function Comments({ avt }) {
    const [cmt, setCmt] = useState('')
    const [focus, setFocus] = useState(false)

    return (
        <div className="w-full h-full flex flex-col items-start justify-center ">
            <div className="w-full h-[80px] flex flex-row justify-between items-center">
                <p className="w-auto h-auto text-[14px] font-extrabold ml-3">263 comments</p>
                <div className="flex flex-row justify-between items-center">
                    <span className="text-[14px] text-[#4b4f56] mr-1">Sort by </span>
                    <div className="flex flex-row m-3 border-[1px] border-black-rgba-border px-2 py-1">
                        <span className="text-[12px] cursor-pointer">Newest</span>
                        <span className="text-[12px] ml-1"><FontAwesomeIcon icon={faSort} size="xs" /></span>
                    </div>
                </div>
            </div>
            <span className='w-full h-[1px] bg-black-rgba-border mb-[28px]'></span>
            <div className="w-full h-auto divide-y-[1px] divide-[#e4e4e4] grid grid-cols-1">
                <div className="w-full h-auto flex gap-2">
                    {avt ? (
                        <img 
                            src="/images/avt/avt1.jpeg" 
                            alt="avt1" 
                            className="w-10 h-10 object-contain mt-1"
                        />
                    ) : ('')}
                    
                    <div className="w-full h-auto flex flex-col divide-y divide-[#e4e4e4] border-[1px] border-[#e4e4e4] mb-4 ">
                        <div className="basis-2/3 w-full h-full bg-white flex justify-center items-center ">
                            <input 
                                type="text" 
                                placeholder="Add a comment..." 
                                className="w-[90%] h-[90%] outline-0 py-6" 
                                onChange={(e) => {setCmt(e.target.value)}}
                                onFocus={() => (setFocus(true))}
                            />
                        </div>
                        <div className={`basis-1/3 w-full h-full flex justify-end items-center rounded-sm ${focus ? ('') : ('hidden')} py-2 `}>
                            <span className={`text-[14px] px-[8px] font-bold py-[1px] ${cmt === "" ? ('bg-[#9abee1]') : ('bg-[#4167b3]')} text-white mr-2 rounded transition duration-200`}>Post</span>
                        </div>
                    </div>
                </div>
                <CommentItem />
                <CommentItem />
                <CommentItem />
                <CommentItem />
            </div>
            {/* Button */}
            <button className="w-full h-auto bg-[#3578e5] text-center py-[12px] rounded cursor-pointer hover:bg-[#ebedf0] transition duration-300">
                <span className="text-white font-bold text-[14px] ">Load 10 more comments</span>
            </button>
            <span className='w-full h-[1px] bg-black-rgba-border mb-[10px] mt-[10px]'></span>
            <a href='#' className="text-[#3b569b] text-[11px] flex flex-row justify-start items-center">
                <span className="mr-2"><AiFillFacebook /></span>
                <span className="hover:underline">Facebook Comments Plugin</span>
            </a>

        </div>
    )
}
