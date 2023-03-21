import React, { useState, useEffect } from 'react'

import dynamic from 'next/dynamic'

const Header = dynamic(() => import('../components/common/Header'))
const NavBar = dynamic(() => import('../components/common/NavBar'))
const Advertise = dynamic(() => import('../components/common/Advertise'))
const Slide = dynamic(() => import('../components/slides/Slide'))
const ListItem = dynamic(() => import('../components/items/ListItem'))
const Rate = dynamic(() => import('../components/rate/Rate'))
const Comments = dynamic(() => import('../components/comments/Comments'))
const Footer = dynamic(() => import('../components/common/Footer'))
const OnTop = dynamic(() => import('../components/common/OnTop'))

import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
// import Header from '../components/common/Header'
// import NavBar from '../components/common/NavBar'
// import Advertise from '../components/common/Advertise'
// import Slide from '../components/slides/Slide'
// import ListItem from '../components/items/ListItem'
// import Rate from '../components/rate/Rate'
// import Comments from '../components/comments/Comments'
// import Footer from '../components/common/Footer'
// import OnTop from '../components/common/OnTop'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {loading ? (
        <div role="status">
            <svg aria-hidden="true" className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
            </svg>
            <span className="sr-only">Loading...</span>
        </div>
      ) : (
        <div>
          <Header />
          <NavBar toggle={false}/>
          <div className="lg:w-full h-auto flex flex-col justify-center items-center ">
            <div className="lg:w-[1030px] h-auto p-[15px] bg-[#f9f9f9] w-full">
              <Advertise />
              <Slide />
              <div className="w-full h-auto flex lg:flex-row flex-col gap-2 justify-start items-start mt-[40px]">
                <ListItem title={true}/>
                <div className="lg:basis-1/3 flex flex-col justify-between w-full h-auto gap-4 lg:ml-9">
                  <Rate />
                  <Comments avt={false} navCmt={false}/>
                </div>
              </div>
            </div>
          </div>
          <Footer />
          <OnTop />
        </div>
      )}
    </>
  )
}
