import React from 'react'
import RateItem from '../components/RateItem'

export default function Rate() {
    return (
        <div className="w-full h-auto border-[1px] border-[#c9c9c9] divide-y divide-[#e4e4e4]">
            <div className="w-full h-[42px] flex flex-row justify-start items-center divide-x divide-[#e4e4e4]">
                <div className="cursor-pointer basis-1/3 relative w-full h-full bg-white flex justify-center items-center after:absolute after:w-full after:h-[2px] after:bg-[#72179a] after:top-0 after:left-0">
                    <p className="text-[15px] font-thin">Top Tháng</p>
                </div>
                <div className="cursor-pointer basis-1/3 relative w-full h-full bg-[#e4e4e4] flex justify-center items-center hover:after:absolute hover:after:w-full hover:after:h-[2px] hover:after:bg-[#72179a] hover:after:top-0 hover:after:left-0">
                    <p className="text-[15px] font-thin">Top Tuần</p>
                </div>
                <div className="cursor-pointer basis-1/3 relative w-full h-full bg-[#e4e4e4] flex justify-center items-center hover:after:absolute hover:after:w-full hover:after:h-[2px] hover:after:bg-[#72179a] hover:after:top-0 hover:after:left-0">
                    <p className="text-[15px] font-thin">Top Ngày</p>
                </div>
            </div>
            <RateItem />
            <RateItem />
            <RateItem />
            <RateItem />
            <RateItem />
            <RateItem />
            <RateItem />
        </div>
    )
}
