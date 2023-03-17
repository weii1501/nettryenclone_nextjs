import { Inter } from 'next/font/google'
import Header from '../../components/Header'
import NavBar from '../../components/NavBar'
import Advertise from '../../components/Advertise'
import Footer from '../../components/Footer'
import OnTop from '../../components/OnTop'
import Form from '../../components/Form'

const inter = Inter({ subsets: ['latin'] })

export default function Login() {
  return (
    <>
      <Header />
      <NavBar />
      <div className="w-full h-auto flex flex-col justify-center items-center ">
        <div className="w-[1030px] h-fit p-[15px] bg-[#f9f9f9]">
            <Advertise />
            <Form type={true}/>
        </div>
      </div>
      <Footer />
      <OnTop />
    </>
  )
}
