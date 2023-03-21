/* eslint-disable @next/next/no-img-element */
import React from 'react'

import { LazyLoadImage } from 'react-lazy-load-image-component';


export default function ReadItem() {
    return (
        <div className="w-full h-auto flex justify-center items-center">
            {/* <img 
                src="/images/reading/page1.png"
                alt="page1"
                className="w-full h-auto object-cover"
            /> */}
            <LazyLoadImage
                alt={`page1`}
                src={`/images/reading/page1.png`} // use normal <img> attributes as props
                className="w-full h-auto object-cover"
            />
        </div>
    )
}
