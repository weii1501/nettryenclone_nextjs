import React from 'react'

import Form from '../form/Form'

export default function ChangePass() {
    return (
        <div className="basis-3/4 w-full h-auto flex flex-col justify-start items-start mb-10">
            <h1 className="uppercase text-[22px] text-[#333] font-bold border-b-[3px] border-[#e92c72] pb-1 mb-7">Đổi mật khẩu</h1>

            <form className="w-[70%] h-auto flex flex-col justify-start items-start">
                    <span className="text-[14px] text-[#333] mb-2">Mật khẩu mới</span>
                    <input 
                        type="text" 
                        className="w-full h-[32px] bg-white border-[1px] border-black-rgba-border rounded mb-4 shadow"
                    />
                    <span className="text-[14px] text-[#333] mb-2">Xác nhận mật khẩu mới</span>
                    <input 
                        type="text" 
                        className="w-full h-[32px] bg-white border-[1px] border-black-rgba-border rounded mb-4 shadow"
                    />
                    <button className="bg-[#337ab7] border-[1px] border-[#2e6da4] text-white text-[14px] py-[6px] px-[12px] rounded">
                        Đổi mật khẩu
                    </button>
            </form>
        </div>
    )
}
