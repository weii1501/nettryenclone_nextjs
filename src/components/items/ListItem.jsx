import React, { useState, useRef, useCallback } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from '@/styles/Home.module.css'
import { 
    faAngleRight,
    faFilter
} from '@fortawesome/free-solid-svg-icons'
import SlideItem from '../slides/SlideItem'

import Item from './Item'

export default function ListItem({ title }) {
  return (
    <div className="basis-2/3 w-full">
        <div className="w-full h-auto flex justify-between items-center">
            {title ? (
                <>
                    <div className="flex flex-row justify-start items-center text-[#3f80ff] gap-1 mb-3">
                        <p className="text-[22px]">Truyện mới cập nhật</p>
                        <FontAwesomeIcon icon={faAngleRight} size="lg"/>
                    </div>
                    <div className="group w-[34px] h-[34px] border-[2px] border-[#ff9600] rounded-full flex justify-center items-center cursor-pointer">
                        <div className="text-[#ff9600] group-hover:text-purple-700">
                            <FontAwesomeIcon icon={faFilter} size="sm" />
                        </div>
                    </div>
                </>
            ) : ('')}
        </div>
        <div className="w-ful h-auto grid lg:grid-cols-4 grid-cols-2 gap-2">
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
        </div>
        <div className="w-ful h-auto flex justify-center items-center my-[50px] ">
            <div className="h-[36px] w-[514px] flex flex-row items-center justify-start gap-1 text-[15px] flex-wrap">
                <span className="cursor-pointer basis-1/12 h-full border-[1px] border-black-rgba-border flex justify-center items-center text-[#999999]">{`<`}</span>
                <span className="cursor-pointer basis-1/12 h-full border-[1px] border-black-rgba-border flex justify-center items-center text-[#ffff] bg-[#337ab7]">1</span>
                <span className="cursor-pointer basis-1/12 h-full border-[1px] border-black-rgba-border flex justify-center items-center text-[#999999]">2</span>
                <span className="cursor-pointer basis-1/12 h-full border-[1px] border-black-rgba-border flex justify-center items-center text-[#999999]">3</span>
                <span className="cursor-pointer basis-1/12 h-full border-[1px] border-black-rgba-border flex justify-center items-center text-[#999999]">4</span>
                <span className="cursor-pointer basis-1/12 h-full border-[1px] border-black-rgba-border flex justify-center items-center text-[#999999]">5</span>
                <span className="cursor-pointer basis-1/12 h-full border-[1px] border-black-rgba-border flex justify-center items-center text-[#999999]">6</span>
                <span className="cursor-pointer basis-1/12 h-full border-[1px] border-black-rgba-border flex justify-center items-center text-[#999999]">7</span>
                <span className="cursor-pointer basis-1/12 h-full border-[1px] border-black-rgba-border flex justify-center items-center text-[#999999]">...</span>
                <span className="cursor-pointer basis-1/12 h-full border-[1px] border-black-rgba-border flex justify-center items-center text-[#999999]">499</span>
                <span className="cursor-pointer basis-1/12 h-full border-[1px] border-black-rgba-border flex justify-center items-center text-[#999999]">500</span>
                <span className="cursor-pointer basis-1/12 h-full border-[1px] border-black-rgba-border flex justify-center items-center text-[#999999]">{`>`}</span>
            </div>
        </div>
    </div>
  )
}
