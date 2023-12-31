import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
    return (
        <footer className='mt-[200px] py-[70px] before:top-0 container relative before:absolute before:left-1/2 before:-translate-x-1/2 before:content-[""] before:h-[3px] before:bg-[#00000015] before:w-[100vw]'>
            <div className='grid grid-cols-4 gap-[50px] w-full'>
                <div>
                    <Link href="/" >
                        <Image className='max-w-[50px] object-contain' src="/logo.png" width={ 100 } height={ 100 } alt='logo' />
                    </Link>
                    <p className='text-[#4a4a4a] mt-[25px] text-[26px]'>Savor the artistry where every dish is a culinary masterpiece</p>
                </div>
                <ul className='flex flex-col gap-[25px]'>
                    <li className='text-[26px] font-[600] mb-[5px]'>Links</li>
                    <li className='text-[#555555] text-[22px] font-[500]'><Link href="/">Home</Link></li>
                    <li className='text-[#555555] text-[22px] font-[500]'><Link href="/menu">Menu</Link></li>
                    <li className='text-[#555555] text-[22px] font-[500]'><Link href="/about-us">About Us</Link></li>
                    <li className='text-[#555555] text-[22px] font-[500]'><Link href="/services">Services</Link></li>
                </ul>
                <ul className='flex flex-col gap-[25px] max-w-[400px]'>
                    <li className='text-[26px] font-[600] mb-[5px]'>Contacts</li>
                    <li className='text-[#555555] text-[22px] font-[500] flex items-center gap-[15px]'>
                        <Image className='p-[5px] rounded-full border-[2px] border-[#39db4a]' src="/mail.png" width={50} height={50} alt='mail' />
                    example@email.com</li>
                    <li className='text-[#555555] text-[22px] font-[500] flex items-center gap-[15px]'>
                        <Image className='p-[5px] rounded-full border-[2px] border-[#39db4a]' src="/telephone.png" width={50} height={50} alt='telephone' />
                    +64 958 248 966</li>
                    <li className='text-[#555555] text-[22px] font-[500] flex items-center gap-[15px]'>
                        <Image className='p-[5px] rounded-full border-[2px] border-[#39db4a]' src="/location.png" width={50} height={50} alt='address' />
                    4517 Washington Ave. Manchester, Kentucky 39495</li>
                </ul>
                <ul className='flex flex-wrap gap-x-[15px] items-start max-h-[150px]'>
                    <li className='text-[26px] font-[600] mb-[5px] min-w-full'>Medias</li>
                    <li className='text-[#555555] text-[22px] font-[500]'><Link href="/">
                        <Image src="/facebook.png" width={50} height={50} alt='facebook' />
                    </Link></li>
                    <li className='text-[#555555] text-[22px] font-[500]'><Link href="/">
                        <Image src="/instagram.png" width={50} height={50} alt='instagram' />
                    </Link></li>
                    <li className='text-[#555555] text-[22px] font-[500]'><Link href="/">
                        <Image src="/youtube.png" width={50} height={50} alt='youtube' />
                    </Link></li>
                    <li className='text-[#555555] text-[22px] font-[500]'><Link href="/">
                        <Image src="/twitter.png" width={50} height={50} alt='twitter' />
                    </Link></li>
                </ul>
            </div>
            <p className='text-[#555555] text-[22px] font-[500] mt-[100px]'>Copyright c 2023 Dscode | All rights reserved</p>
        </footer>
    )
}
