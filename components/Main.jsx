import React from 'react'
import Button from './Button'
import Link from 'next/link'
import Image from 'next/image'

export default function Main() {
    return (
        <section className='flex container justify-between items-center'>
            <div className='flex flex-col gap-[50px] max-w-[600px]'>
                <h4 className='text-[62px] font-[800] leading-[85px]'>Dive into Delights Of Delectable <span className='text-[#39db4a]'>Food</span></h4>
                <p className='text-[#4a4a4a] text-[26px]'>Where Each Plate Weaves a Story of Culinary Mastery and Passionate Craftsmanship</p>
                <div className='mt-[20px] flex min-w-max items-center gap-[35px]'>
                    <Button url="/menu">Order Now</Button>
                    <Link href="/" className='flex text-[22px] text-[#4d4d4d] gap-[10px] justify-center items-center'>
                        Watch Video
                        <div className='grid bg-white place-items-center pl-[5px] rounded-full shadow-[6px_27px_34px_#00000026] w-[80px] h-[80px]'>
                            <Image src="/triangle.png" className='w-[30px] object-contain' alt='' width={ 80 } height={ 80 } />
                        </div>
                    </Link>
                </div>
            </div>
            <div className='before:content-[""] relative before:z-[-1] before:rounded-full before:absolute before:top-1/2 before:bg-[#39db4a] before:w-[450px] before:h-[450px] before:left-1/2 before:-translate-y-1/2 before:-translate-x-1/2'>
                <Image src="/cook.png" style={{transform:"rotateY(180deg)"}} alt='' width={ 700 } height={ 700 } />
            </div>
        </section>
    )
}
