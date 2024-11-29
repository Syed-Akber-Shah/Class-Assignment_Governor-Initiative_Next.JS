import React from 'react'
import { FaFacebookF,FaYoutube,FaTwitter,FaInstagram,FaTiktok } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import Link from 'next/link';


const Footer = () => {
  return (
    <div>
       <footer className="bg-gray-100 py-8 px-10 text-gray-800 flex justify-around">
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-3'>
            <div>
                <h3 className='text-xl font-bold'>Core Courses</h3>
                <ul className='space-y-2 text-lg'>
                    <Link href="#"><li className='py-1'>Programming Fundamentals</li></Link>
                    <Link href="#"><li className='py-1'>Web2 Using NextJS</li></Link>
                    <Link href="#"><li className='py-1'>Earn as You Learn</li></Link>
                </ul>
            </div>
            <div>
            <h3 className='text-xl font-bold'>Advanced Courses</h3>
            <ul className='space-y-2 text-lg'>
                <Link href="#"><li className='py-1'>Web 3 and Metaverse</li></Link>
                <Link href="#"><li className='py-1'>Cloud-Native Computing</li></Link>
                <Link href="#"><li className='py-1'>Artificial Intelligence (AI) and Deep Learning</li></Link>
                <Link href="#"><li className='py-1'>Ambient Computing and IoT</li></Link>
                <Link href="#"><li className='py-1'>Genomics and Bioinformatics</li></Link>
                <Link href="#"><li className='py-1'>Network Programmability and Automation</li></Link>
            </ul>
            </div>
            <div>
            <h3 className='text-xl font-bold'>Social Links</h3>
           <div className='flex space-x-4 mb-4 py-1'>
<Link href="https://web.facebook.com/TeamKTessori?_rdc=1&_rdr" target='_blank'><FaFacebookF className='text-white bg-blue-700 w-6 h-6 rounded-full px-1 py-1'/></Link>
<Link href="https://www.youtube.com/@KamranTessorikk" target='_blank'><FaYoutube className='text-white bg-red-700 w-6 h-6 rounded-full px-1 py-1' /></Link>
<Link href="#"><FaTwitter className='text-white bg-blue-500 w-6 h-6 rounded-full px-1 py-1' /></Link>
<Link href="https://www.instagram.com/KamranTessoriPk/" target='_blank'><FaInstagram className='instagram text-white w-6 h-6 rounded-full px-1 py-1' /></Link>
<Link href="https://www.tiktok.com/@KamranTessoriPk" target='_blank'><FaTiktok className='text-white bg-black w-6 h-6 rounded-full px-1 py-1' /></Link>
           </div>
          <Link href='mailto:education@governorsindh.com' target='_blank' className='text-blue-800 underline flex items-center'>
            <MdOutlineMail className='size-6'/>education@governorsindh.com </Link>
            </div>
        </div>
       </footer>
    </div>
  )
}

export default Footer



