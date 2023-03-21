import { Inter } from 'next/font/google'
import Header from '../../components/common/Header'
import NavBar from '../../components/common/NavBar'
import Advertise from '../../components/common/Advertise'
import Comments from '../../components/comments/Comments'
import Footer from '../../components/common/Footer'
import OnTop from '../../components/common/OnTop'
import Reading from '../../components/reading/Reading'


const inter = Inter({ subsets: ['latin'] })

export default function Read() {
  return (
    <>
        <Header />
        <NavBar />
        <div className="w-full h-auto flex flex-col justify-center items-center bg-black">
            <div className="w-[1030px] h-auto p-[15px] bg-[#f9f9f9]">
                <Advertise />
            </div>
        </div>
        <div className="w-full h-auto flex flex-col justify-center items-center bg-black">
            <Reading />
        </div>
        <Footer />
        <OnTop />
    </>
  )
}
