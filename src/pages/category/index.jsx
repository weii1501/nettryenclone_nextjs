import { Inter } from 'next/font/google'
import Header from '../../components/common/Header'
import NavBar from '../../components/common/NavBar'
import Advertise from '../../components/common/Advertise'
import Footer from '../../components/common/Footer'
import OnTop from '../../components/common/OnTop'
import Category from '../../components/category/Category'
import CategoryList from '../../components/category/CategoryList'


const inter = Inter({ subsets: ['latin'] })

export default function CategoryPage() {
  return (
    <>
        <Header />
        <NavBar />
        <div className="w-full h-auto flex flex-col justify-center items-center ">
            <div className="lg:w-[1030px] w-full h-auto p-[15px] bg-[#f9f9f9] pb-[50px]">
                <Advertise />
                <div className="w-full h-auto flex lg:flex-row flex-col gap-2 justify-start items-start mt-[40px]">
                    <div className="lg:basis-2/3 flex flex-col justify-between w-full h-auto">
                        <Category />
                    </div>
                    <div className="lg:basis-1/3 flex flex-col justify-between w-full h-auto gap-4 lg:ml-9">
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
