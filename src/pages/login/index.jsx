import { Inter } from 'next/font/google'
import Header from '../../components/common/Header'
import NavBar from '../../components/common/NavBar'
import Advertise from '../../components/common/Advertise'
import Footer from '../../components/common/Footer'
import OnTop from '../../components/common/OnTop'
import Form from '../../components/form/Form'

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
