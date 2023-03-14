import React from 'react'
import { 
    faAnglesRight,
    faEye,
    faHeart,
    faComment,
    faList
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ListItem from './ListItem'
import Comments from './Comments'

export default function Category() {
    return (
        <>
            <div className="w-auto h-auto mb-4">
                <a href="#" className="text-[14px] text-[#288ad6] hover:underline">Trang chủ</a>
                <span className="text-[10px] text-[#cccccc] mx-1"><FontAwesomeIcon icon={faAnglesRight} /></span>
                <a href="#" className="text-[14px] text-[#288ad6] hover:underline">Thể loại</a>
            </div>
            <div className="w-full h-auto text-center">
                <span className="text-[25px]">Tìm truyện tranh Action</span>
            </div>
            <div className="w-full h-[42px] border-[1px] border-black-rgba-border flex justify-start items-center rounded mb-3">
                <span className="text-[14px] text-[#333] font-extralight pl-3">Tất cả thể loại truyện tranh</span>
            </div>
            <div className="w-full h-auto flex flex-row justify-between items-center mb-6">
                <div className="basis-1/3 flex justify-start items-center">
                    <span className="text-[14px]">Sắp xếp theo:</span>
                </div>
                <div className="basis-2/3 flex flex-col justify-between items-start gap-2">
                    <div className="w-full h-auto flex flex-row justify-start items-center gap-1 mb-4">
                        <a href="#" className="text-center text-[14px] text-white min-w-[90px] h-auto py-[4px] border-[1px] border-black-rgba-border rounded bg-[#0ab9f2]">Tất cả</a>
                        <a href="#" className="text-center text-[14px] text-[#555] min-w-[90px] h-auto py-[4px] border-[1px] border-black-rgba-border rounded">Hoàn thành</a>
                        <a href="#" className="text-center text-[14px] text-[#555] min-w-[90px] h-auto py-[4px] border-[1px] border-black-rgba-border rounded">Đang tiến hành</a>
                    </div>
                    <div className="w-full h-auto grid grid-cols-4 gap-1">
                        <a href="#" className="basis-1/4 w-full h-auto text-center text-[13px] text-white border-[1px] border-black-rgba-border rounded py-1 bg-[#f7941d]">Ngày cập nhật</a>
                        <a href="#" className="basis-1/4 w-full h-auto text-center text-[13px] text-[#555] border-[1px] border-black-rgba-border rounded py-1 bg-[#f4f4f4]">Truyện mới</a>
                        <a href="#" className="basis-1/4 w-full h-auto text-center text-[13px] text-[#555] border-[1px] border-black-rgba-border rounded py-1 bg-[#f4f4f4] flex justify-center items-center">
                            <FontAwesomeIcon icon={faEye} size="sm" />
                            <span className="ml-1">Top all</span>
                        </a>
                        <a href="#" className="basis-1/4 w-full h-auto text-center text-[13px] text-[#555] border-[1px] border-black-rgba-border rounded py-1 bg-[#f4f4f4] flex justify-center items-center">
                            <FontAwesomeIcon icon={faEye} size="sm" />
                            <span className="ml-1">Top tháng</span>
                        </a>
                        <a href="#" className="basis-1/4 w-full h-auto text-center text-[13px] text-[#555] border-[1px] border-black-rgba-border rounded py-1 bg-[#f4f4f4] flex justify-center items-center">
                            <FontAwesomeIcon icon={faEye} size="sm" />
                            <span className="ml-1">Top tuần </span>
                        </a>

                        <a href="#" className="basis-1/4 w-full h-auto text-center text-[13px] text-[#555] border-[1px] border-black-rgba-border rounded py-1 bg-[#f4f4f4] flex justify-center items-center">
                            <FontAwesomeIcon icon={faEye} size="sm" />
                            <span className="ml-1">Top ngày</span>
                        </a>
                        <a href="#" className="basis-1/4 w-full h-auto text-center text-[13px] text-[#555] border-[1px] border-black-rgba-border rounded py-1 bg-[#f4f4f4] flex justify-center items-center">
                            <FontAwesomeIcon icon={faHeart} size="sm" />
                            <span className="ml-1">Theo dõi</span>
                        </a>
                        <a href="#" className="basis-1/4 w-full h-auto text-center text-[13px] text-[#555] border-[1px] border-black-rgba-border rounded py-1 bg-[#f4f4f4] flex justify-center items-center">
                            <FontAwesomeIcon icon={faComment} size="sm" />
                            <span className="ml-1">Bình luận</span>
                        </a>
                        <a href="#" className="basis-1/4 w-full h-auto text-center text-[13px] text-[#555] border-[1px] border-black-rgba-border rounded py-1 bg-[#f4f4f4] flex justify-center items-center">
                            <FontAwesomeIcon icon={faList} size="sm" />
                            <span className="ml-1">Số chapter</span>
                        </a>
                        <a href="#" className="basis-1/4 w-full h-auto text-center text-[13px] text-[#555] border-[1px] border-black-rgba-border rounded py-1 bg-[#f4f4f4] flex justify-center items-center">
                            <FontAwesomeIcon icon={faList} size="sm" />
                            <span className="ml-1">Top follow</span>
                        </a>
                    </div>
                </div>
            </div>
            <ListItem title={false}/>
            <div>
                <span className="text-[16px] font-bold text-[#333]">Bình luận facebook</span>
            </div>
            <Comments avt={true}/>
        </>
    )
}
