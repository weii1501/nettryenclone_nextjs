import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '../../components/Header'
import NavBar from '../../components/NavBar'
import Advertise from '../../components/Advertise'
import Rate from '../../components/Rate'
import Comments from '../../components/Comments'
import Footer from '../../components/Footer'
import OnTop from '../../components/OnTop'
import Category from '../../components/Category'
import CategoryList from '../../components/CategoryList'


const inter = Inter({ subsets: ['latin'] })

export default function CategoryPage() {
  return (
    <>
        <Header />
        <NavBar />
        <div className="w-full h-auto flex flex-col justify-center items-center ">
            <div className="w-[1030px] h-auto p-[15px] bg-[#f9f9f9] pb-[50px]">
                <Advertise />
                <div className="w-full h-auto flex flex-row gap-2 justify-start items-start mt-[40px]">
                    <div className="basis-2/3 flex flex-col justify-between w-full h-auto">
                        <Category />
                    </div>
                    <div className="basis-1/3 flex flex-col justify-between w-full h-auto gap-4 ml-9">
                        <CategoryList />
                    </div>
                </div>
            </div>
        </div>
        <Footer />
        <OnTop />
    </>
  )
}
