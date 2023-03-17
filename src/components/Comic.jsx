/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'

import { 
    faAnglesRight,
    faPlus,
    faUser,
    faRss,
    faTags,
    faEye,
    faFileLines,
    faAngleRight,
    faList
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Comic() {

    const [expand, setExpand] = useState(true);

    const blur = "after:absolute after:w-full after:h-5 after:bottom-[-14px] after:left-0 after:blur-sm after:bg-white"

    return (
        <>
            <div className="w-auto h-auto mb-4">
                <a href="#" className="text-[14px] text-[#288ad6] hover:underline">Trang chủ</a>
                <span className="text-[10px] text-[#cccccc] mx-1"><FontAwesomeIcon icon={faAnglesRight} /></span>
                <a href="#" className="text-[14px] text-[#288ad6] hover:underline">Thể loại</a>
                <span className="text-[10px] text-[#cccccc] mx-1"><FontAwesomeIcon icon={faAnglesRight} /></span>
                <a href="#" className="text-[14px] text-[#288ad6] hover:underline">One Piece</a>
            </div>
            <h1 className="w-full h-auto text-[21px] text-[#333] text-center">ONE PIECE</h1>
            <span className="w-full h-auto text-[13px] text-[#919191] text-center italic mb-4">[Cập nhật lúc: 2023-03-16 18:08:55]</span>
            <div className="w-full h-auto flex flex-row justify-start items-start gap-9">
                <div className="basis-1/3 w-full h-auto">
                    <img 
                        src="/images/comic/one-piece.jpg" 
                        alt="one-piece" 
                        className="w-full h-auto object-contain"    
                    />
                </div>
                <div className="basis-2/3 w-full h-auto flex flex-col justify-start items-start gap-2">
                    <div className="w-full h-auto flex flex-row justify-start items-start gap-2 text-[16px] text-[#919191] font-medium">
                        <div className="basis-1/3 w-full h-auto text-left">
                            <span className="mr-1 text-[#777676]"><FontAwesomeIcon icon={faPlus} size="sm" /></span>
                            <span>Tên khác</span>
                        </div>
                        <span className="basis-2/3 w-full h-auto text-left">Vua Hải Tặc; Đảo Hải Tặc; OnePiece</span>
                    </div>
                    <div className="w-full h-auto flex flex-row justify-start items-start gap-2 text-[16px] text-[#919191] font-medium">
                        <div className="basis-1/3 w-full h-auto text-left">
                            <span className="mr-1 text-[#777676]"><FontAwesomeIcon icon={faUser} size="sm" /></span>
                            <span>Tác giả</span>
                        </div>
                        <span className="basis-2/3 w-full h-auto text-left">Eiichiro Oda</span>
                    </div>
                    <div className="w-full h-auto flex flex-row justify-start items-start gap-2 text-[16px] text-[#919191] font-medium">
                        <div className="basis-1/3 w-full h-auto text-left">
                            <span className="mr-1 text-[#777676]"><FontAwesomeIcon icon={faRss} size="sm" /></span>
                            <span>Tình trạng</span>
                        </div>
                        <span className="basis-2/3 w-full h-auto text-left">Đang Cập Nhật</span>
                    </div>
                    <div className="w-full h-auto flex flex-row justify-start items-start gap-2 text-[16px] text-[#919191] font-medium">
                        <div className="basis-1/3 w-full h-auto text-left">
                            <span className="mr-1 text-[#777676]"><FontAwesomeIcon icon={faTags} size="sm" /></span>
                            <span>Thể loại</span>
                        </div>
                        <span className="basis-2/3 w-full h-auto text-left">
                            <a href="#" className="text-[#2882d6] hover:text-purple-700 hover:underline">Action</a>
                            <span> - </span>
                            <a href="#" className="text-[#2882d6] hover:text-purple-700 hover:underline">Adventure</a>
                            <span> - </span>
                            <a href="#" className="text-[#2882d6] hover:text-purple-700 hover:underline">Comedy</a>
                            <span> - </span>
                            <a href="#" className="text-[#2882d6] hover:text-purple-700 hover:underline">Drama</a>
                            <span> - </span>
                            <a href="#" className="text-[#2882d6] hover:text-purple-700 hover:underline">Fantasy</a>
                            <span> - </span>
                            <a href="#" className="text-[#2882d6] hover:text-purple-700 hover:underline">Shounen</a>
                            <span> - </span>
                            <a href="#" className="text-[#2882d6] hover:text-purple-700 hover:underline">Supernatural</a>
                        </span>
                    </div>
                    <div className="w-full h-auto flex flex-row justify-start items-start gap-2 text-[16px] text-[#919191] font-medium">
                        <div className="basis-1/3 w-full h-auto text-left">
                            <span className="mr-1 text-[#777676]"><FontAwesomeIcon icon={faEye} size="sm" /></span>
                            <span>Lượt xem</span>
                        </div>
                        <span className="basis-2/3 w-full h-auto text-left">380.651.915</span>
                    </div>
                    <div className="w-full h-auto text-[14px] text-[#333] ">
                        <a href="#" className="text-[#2882d6] hover:text-purple-700 hover:underline mr-1">One Piece</a>
                        Xếp hạng: 4.5/5 - 68.488 Lượt đánh giá.
                    </div>
                    <div className="w-[168px] h-auto flex flex-row justify-between items-center gap-3">
                        <img 
                            src="/images/starrate/star-on.webp" 
                            alt="star-on"
                            className="basis-1/5 w-full h-auto object-contain"
                        />
                        <img 
                            src="/images/starrate/star-on.webp" 
                            alt="star-on"
                            className="basis-1/5 w-full h-auto object-contain"
                        />
                        <img 
                            src="/images/starrate/star-on.webp" 
                            alt="star-on"
                            className="basis-1/5 w-full h-auto object-contain"
                        />
                        <img 
                            src="/images/starrate/star-on.webp" 
                            alt="star-on"
                            className="basis-1/5 w-full h-auto object-contain"
                        />
                        <img 
                            src="/images/starrate/star-half.webp" 
                            alt="star-half"
                            className="basis-1/5 w-full h-auto object-contain"
                        />
                    </div>
                    <div className="w-full h-auto text-[15px] text-[#333]">
                        <span className="font-bold mr-1">171.529</span>
                        <span>Người Đã Theo Dõi</span>
                    </div>
                    <div className="w-full h-auto flex flex-row justify-start items-start gap-1">
                        <button className="basis-1/4 w-full h-auto bg-[#f0ad4f] border-[#eea236] border-[1px] text-white text-[14px] rounded py-[5px] hover:bg-[#eea236]">
                            Đọc từ đầu
                        </button>
                        <button className="basis-1/4 w-full h-auto bg-[#f0ad4f] border-[#eea236] border-[1px] text-white text-[14px] rounded py-[5px] hover:bg-[#eea236]">
                            Đọc mới nhất
                        </button>
                    </div>
                </div>
            </div>
            <div className="w-full h-auto mt-4">
                <h3 className="relative w-full h-auto text-[16px] text-[#2980b9] after:absolute after:w-full after:h-[1.5px] after:bg-[#2980b9] after:left-0 after:bottom-0 pb-[6px]">
                    <span className="mr-2 text-[#288ad6]"><FontAwesomeIcon icon={faFileLines} size="lg" /></span>
                    NỘI DUNG
                </h3>
                <p className={`relative w-full ${expand ? ('h-[60px]') : ('h-auto')}   text-[#333] text-[14px] text-clip overflow-hidden ${expand ? blur : ('')}`}>
                    One Piece là câu truyện kể về Luffy và các thuyền viên của mình. Khi còn nhỏ, Luffy ước mơ trở thành Vua Hải Tặc. Cuộc sống của cậu bé thay đổi khi cậu vô tình có được sức mạnh có thể co dãn như cao su, nhưng đổi lại, cậu không bao giờ có thể bơi được nữa. Giờ đây, Luffy cùng những người bạn hải tặc của mình ra khơi tìm kiếm kho báu One Piece, kho báu vĩ đại nhất trên thế giới. Trong One Piece, mỗi nhân vật trong đều mang một nét cá tính đặc sắc kết hợp cùng các tình huống kịch tính, lối dẫn truyện hấp dẫn chứa đầy các bước ngoặt bất ngờ và cũng vô cùng hài hước đã biến One Piece trở thành một trong những bộ truyện nổi tiếng nhất không thể bỏ qua. Hãy đọc One Piece để hòa mình vào một thế giới của những hải tặc rộng lớn, đầy màu sắc, sống động và thú vị, cùng đắm chìm với những nhân vật yêu tự do, trên hành trình đi tìm ước mơ của mình.
                </p>
                <div 
                    className={`w-auto h-auto mb-4 ${expand ? ('') : ('hidden')}`}
                    onClick={() => setExpand(false)}
                >
                    <a href="#" className="text-[14px] text-[#288ad6] hover:underline">Xem thêm</a>
                    <span className="text-[10px] text-[#288ad6] mx-1"><FontAwesomeIcon icon={faAngleRight} /></span>
                </div>
            </div>
            <div className="w-full h-auto mt-4">
                <h3 className="relative w-full h-auto text-[16px] text-[#2980b9] after:absolute after:w-full after:h-[1.5px] after:bg-[#2980b9] after:left-0 after:bottom-0 pb-[6px]">
                    <span className="mr-2 text-[#288ad6]"><FontAwesomeIcon icon={faList} size="lg" /></span>
                    DANH SÁCH CHƯƠNG
                </h3>
               
                <div className="w-full h-auto flex flex-row justify-between items-start mt-3 mb-4">
                    <span className="basis-1/2 text-left text-[17px] text-[#333]">Số chương</span>
                    <span className="basis-1/2 text-left text-[17px] text-[#333]"> Cập nhật</span>
                </div>
                <div className="w-full h-auto flex flex-col gap-3 px-2 border-[1px] border-black-rgba-border rounded py-2">
                    <div className="w-full h-auto flex flex-row justify-between items-start border-b-[1px] border-black-rgba-border border-dashed pb-2">
                        <a href="#" className="basis-1/2 text-left text-[14px] text-[#333] hover:text-[#288ad6]">Chương 100</a>
                        <span className="basis-1/2 text-left text-[13px] text-[#b8b8b8] italic">3 ngày trước</span>
                    </div>
                    <div className="w-full h-auto flex flex-row justify-between items-start border-b-[1px] border-black-rgba-border border-dashed pb-2">
                        <a href="#" className="basis-1/2 text-left text-[14px] text-[#333] hover:text-[#288ad6]">Chương 100</a>
                        <span className="basis-1/2 text-left text-[13px] text-[#b8b8b8] italic">3 ngày trước</span>
                    </div>
                    <div className="w-full h-auto flex flex-row justify-between items-start border-b-[1px] border-black-rgba-border border-dashed pb-2">
                        <a href="#" className="basis-1/2 text-left text-[14px] text-[#333] hover:text-[#288ad6]">Chương 100</a>
                        <span className="basis-1/2 text-left text-[13px] text-[#b8b8b8] italic">3 ngày trước</span>
                    </div>
                    <div className="w-full h-auto flex flex-row justify-between items-start border-b-[1px] border-black-rgba-border border-dashed pb-2">
                        <a href="#" className="basis-1/2 text-left text-[14px] text-[#333] hover:text-[#288ad6]">Chương 100</a>
                        <span className="basis-1/2 text-left text-[13px] text-[#b8b8b8] italic">3 ngày trước</span>
                    </div>
                    <div className="w-full h-auto flex flex-row justify-between items-start border-b-[1px] border-black-rgba-border border-dashed pb-2">
                        <a href="#" className="basis-1/2 text-left text-[14px] text-[#333] hover:text-[#288ad6]">Chương 100</a>
                        <span className="basis-1/2 text-left text-[13px] text-[#b8b8b8] italic">3 ngày trước</span>
                    </div>
                    <div className="w-full h-auto flex flex-row justify-between items-start border-b-[1px] border-black-rgba-border border-dashed pb-2">
                        <a href="#" className="basis-1/2 text-left text-[14px] text-[#333] hover:text-[#288ad6]">Chương 100</a>
                        <span className="basis-1/2 text-left text-[13px] text-[#b8b8b8] italic">3 ngày trước</span>
                    </div>
                    <div className="w-full h-auto flex flex-row justify-between items-start border-b-[1px] border-black-rgba-border border-dashed pb-2">
                        <a href="#" className="basis-1/2 text-left text-[14px] text-[#333] hover:text-[#288ad6]">Chương 100</a>
                        <span className="basis-1/2 text-left text-[13px] text-[#b8b8b8] italic">3 ngày trước</span>
                    </div>
                    <div className="w-full h-auto flex flex-row justify-between items-start">
                        <a href="#" className="basis-1/2 text-left text-[14px] text-[#333] hover:text-[#288ad6]">Chương 100</a>
                        <span className="basis-1/2 text-left text-[13px] text-[#b8b8b8] italic">3 ngày trước</span>
                    </div>
                    <div className="w-full h-auto p-1 shadow-lg">
                        <button className="group w-full h-auto flex justify-center items-center text-[14px] text-[#288AD6] bg-[#f9f9f9] border-[1px] border-black-rgba-border py-2 hover:text-purple-700 hover:underline">
                            <span className="font-extrabold mr-1"><FontAwesomeIcon icon={faPlus} size="sm" /></span>
                            <span>Xem thêm</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
  )
}
