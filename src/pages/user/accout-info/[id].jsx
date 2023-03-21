import React, { useState } from 'react'

import Header from '../../../components/common/Header'
import Navbar from '../../../components/common/NavBar'
import OnTop from '../../../components/common/OnTop'
import Footer from '../../../components/common/Footer'
import SideBar from '../../../components/user/SideBar'
import Content from '../../../components/user/Content'
import Follow from '../../../components/user/Follow'
import ChangePass from '../../../components/user/ChangePass'

import { 
    faAnglesRight,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function AccountInfor() {
    const [title, setTitle] = useState('Thông tin cá nhân')
    console.log(title)
    return (
        <>
            <Header />
            <Navbar />
            <div className="w-full h-auto flex justify-center items-center">
                <div className="w-[1030px] h-auto bg-[#f9f9f9]">
                    <div className="w-auto h-auto mb-4 mt-4 ml-4">
                        <a href="#" className="text-[14px] text-[#288ad6] hover:underline">Trang chủ</a>
                        <span className="text-[10px] text-[#cccccc] mx-1"><FontAwesomeIcon icon={faAnglesRight} /></span>
                        <a href="#" className="text-[14px] text-[#288ad6] hover:underline">Thông tin chung</a>
                    </div>
                    <div className="w-full h-auto flex justify-start items-start gap-7">
                        <SideBar 
                            setTitle={setTitle}
                            title={title}
                        />
                        {title === "Thông tin cá nhân" ? (<Content />) :('')}
                        {title === "Truyện theo dõi" ? (<Follow />) :('')}
                        {title === "Đổi mật khẩu" ? (<ChangePass />) :('')}
                    </div>
                </div>
            </div>
            <OnTop />
            <Footer />
        </>
    )
}
