import React from 'react'

export default function DropdownTL() {

    const tatCa = ['Action', 'Adult', 'Adventure', 'Anime', 'Chuyển sinh', 'Comedy', 'Comic', 'Cooking']
    const coDai = ['Doujinshi', 'Drama']
    const damMy = ['Ecchi', 'Fantasy', 'Gender Bender', 'Harem', 'Historycal', 'Horror', 'Josei', 'Live action', 'Manga']
    const manHua = ['Manhwa', 'Martial Arts', 'Mature', 'Mecha', 'Mystery']
    const ngonTinh = ['Oneshot', 'Psychological']
    const romance = ['School Life', 'Sci-fi', 'Seinen', 'Shoujo', 'Shounen', 'Shounen Ai', 'Slice of Life', 'Smut', 'Soft Yaoi', 'Soft Yuri', 'Sports', 'Supernatural', 'Thiếu Nhi', 'Trinh Thám', 'Truyện scan', 'Truyện màu', 'Webtoon']

    return (
        <>
            <div className="w-[550px] h-[450px] absolute hidden group-hover:flex bg-white z-10 top-[44px] left-0  flex-col flex-wrap px-[25px] p-1 gap-0 " >
                <div className="w-1/4 h-[34px] flex items-center justify-start">
                    <span className="text-sm font-bold text-red-600">Tất cả</span>
                </div>
                {tatCa.map((item, index) => (
                    <div className="w-1/4 h-[34px] flex items-center justify-start hover:text-purple-700" key={`tatCa ${index}`}>
                        <span className="text-sm ">{item}</span>
                    </div>
                ))}
                <div className="w-1/4 h-[34px] flex items-center justify-start">
                    <span className="text-sm font-bold text-red-600">Cổ đại</span>
                </div>
                {coDai.map((item, index) => (
                    <div className="w-1/4 h-[34px] flex items-center justify-start hover:text-purple-700" key={`coDai ${index}`}>
                        <span className="text-sm ">{item}</span>
                    </div>
                ))}
                <div className="w-1/4 h-[34px] flex items-center justify-start">
                    <span className="text-sm font-bold text-red-600">Đam mỹ</span>
                </div>
                {damMy.map((item, index) => (
                    <div className="w-1/4 h-[34px] flex items-center justify-start hover:text-purple-700" key={`damMy ${index}`}>
                        <span className="text-sm ">{item}</span>
                    </div>
                ))}
                <div className="w-1/4 h-[34px] flex items-center justify-start">
                    <span className="text-sm font-bold text-red-600">Manhua</span>
                </div>
                {manHua.map((item, index) => (
                    <div className="w-1/4 h-[34px] flex items-center justify-start hover:text-purple-700" key={`manHua ${index}`}>
                        <span className="text-sm ">{item}</span>
                    </div>
                ))}
                <div className="w-1/4 h-[34px] flex items-center justify-start">
                    <span className="text-sm font-bold text-red-600">Ngôn tình</span>
                </div>
                {ngonTinh.map((item, index) => (
                    <div className="w-1/4 h-[34px] flex items-center justify-start hover:text-purple-700" key={`ngonTinh ${index}`}>
                        <span className="text-sm ">{item}</span>
                    </div>
                ))}
                <div className="w-1/4 h-[34px] flex items-center justify-start">
                    <span className="text-sm font-bold text-red-600">Romance</span>
                </div>
                {romance.map((item, index) => (
                    <div className="w-1/4 h-[34px] flex items-center justify-start hover:text-purple-700" key={`romance ${index}`}>
                        <span className="text-sm ">{item}</span>
                    </div>
                ))}
                <div className="w-1/4 h-[34px] flex items-center justify-start">
                    <span className="text-sm font-bold text-red-600">Xuyên không</span>
                </div>
            </div>
        </>
    )
}
