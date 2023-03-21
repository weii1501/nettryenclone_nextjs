import React, { useState, useEffect, useRef, useCallback } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faAngleRight,
    faChevronRight,
    faChevronLeft
} from '@fortawesome/free-solid-svg-icons'
import SlideItem from './SlideItem'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

export default function Slide() {
    const [swiperRef, setSwiperRef] = useState(null);
    
    const sliderRef = useRef(null);

    const [width, setWidth] = useState(0); // default width, detect on server.
    
    const handleResize = () => setWidth(window.innerWidth);
    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [handleResize]);

    

    const handlePrev = useCallback(() => {
      if (!sliderRef.current) return;
      sliderRef.current.swiper.slidePrev();
    }, []);
  
    const handleNext = useCallback(() => {
      if (!sliderRef.current) return;
      sliderRef.current.swiper.slideNext();
    }, []);

    return (
        <>
            <div className="flex flex-row justify-start items-center text-[#3f80ff] gap-1 mb-3">
                <p className="text-[22px]">Truyện đề cử</p>
                <FontAwesomeIcon icon={faAngleRight} size="lg"/>
            </div>
            <div className="w-full h-[220px] flex flex-row justify-start items-center gap-2 relative">
                <Swiper
                    ref={sliderRef}
                    onSwiper={setSwiperRef}
                    // slidesPerView={width < 760 ? 2 : 5}
                    slidesPerView={5}

                    centeredSlides={false}
                    spaceBetween={10}
                    pagination={{
                        prevEl: '.prev',
                        nextEl: '.next',
                        clickable: true,
                    }}
                    className="w-full h-full flex flex-row justify-start items-center gap-2"
                >
                    <SwiperSlide><SlideItem /></SwiperSlide>
                    <SwiperSlide><SlideItem /></SwiperSlide>
                    <SwiperSlide><SlideItem /></SwiperSlide>
                    <SwiperSlide><SlideItem /></SwiperSlide>
                    <SwiperSlide><SlideItem /></SwiperSlide>
                    <SwiperSlide><SlideItem /></SwiperSlide>
                    <SwiperSlide><SlideItem /></SwiperSlide>
                    <SwiperSlide><SlideItem /></SwiperSlide>
                    <SwiperSlide><SlideItem /></SwiperSlide>
                    <SwiperSlide><SlideItem /></SwiperSlide>
                    <SwiperSlide><SlideItem /></SwiperSlide>
                    <SwiperSlide><SlideItem /></SwiperSlide>
                    <SwiperSlide><SlideItem /></SwiperSlide>
                    <SwiperSlide><SlideItem /></SwiperSlide>
                    <SwiperSlide><SlideItem /></SwiperSlide>
                    <SwiperSlide><SlideItem /></SwiperSlide>
                </Swiper>
                <button className="group absolute w-[50px] h-[50px] flex justify-center items-center bg-white-rgba hover:bg-white-rgba-hover top-50 left-5 z-10 rounded-[4px]" onClick={handlePrev}>
                    <div className="font-extrabold text-black-rgba group-hover:text-black-rgba-hover">
                        <FontAwesomeIcon icon={faChevronLeft} size="xl"/>
                    </div>
                </button>
                <button className="group absolute w-[50px] h-[50px] flex justify-center items-center bg-white-rgba hover:bg-white-rgba-hover top-50 right-5 z-10 rounded-[4px]" onClick={handleNext}>
                    <div className="font-extrabold text-black-rgba group-hover:text-black-rgba-hover">
                        <FontAwesomeIcon icon={faChevronRight} size="xl"/>
                    </div>
                </button>
            </div>

        </>
    )
}

