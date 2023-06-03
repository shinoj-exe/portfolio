import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Head from 'next/head'
import LeftSide from '@/components/LeftSide'
import RightSide from '@/components/RightSide'
import { motion } from 'framer-motion'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Head>
      <title>Shinoj Muralee</title>
    </Head>
    <main className="w-full h-screen font-bodyFont bg-bodyColor text-textLight overflow-x-hidden overflow-y-scroll">
      {/* New portfolio */}
      <Navbar/>
      <div className="w-full h-[88vh] xl:flex items-center gap-20 justify-between">
        <motion.div initial={{ opacity:0}}  animate={{ opacity : 1 }} transition={{ delay : 1.5}} className='hidden xl:inline-flex w-32 h-full fixed left-0 bottom-0'><LeftSide/></motion.div>
        <div className="h-[88vh] mx-auto p-4">Midddle</div>
        <motion.div initial={{ opacity:0}}  animate={{ opacity : 1 }} transition={{ delay : 1.5}} className='hidden xl:inline-flex w-32 h-full fixed right-0 bottom-0'><RightSide/></motion.div>
      </div>
    </main>
    </>
  )
}
