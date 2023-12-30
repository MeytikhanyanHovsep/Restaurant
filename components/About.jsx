import Image from 'next/image'
import React from 'react'
import Title from './Title'
import Button from './Button'

export default function About() {
    return (
        <section className='flex container justify-between items-center mt-[230px]'>
            <div className='before:content-[""] max-w-max relative before:z-[-1] before:rounded-t-[40%] before:rounded-b-3xl before:absolute before:bottom-[-1px] before:bg-[#39db4a] before:w-[400px] before:h-[350px] before:left-1/2 before:-translate-x-1/2'>
                <Image src="/cartoon.png" style={{transform:"rotateY(180deg)"}} alt='cartoon' width={ 600 } height={ 600 } />
            </div>
            <div className='flex flex-col items-start max-w-[600px]'>
                <Title title="about us">What Our Customers Say About Us</Title>
                <p className='text-[#4a4a4a] mb-[40px] mt-[-40px] text-[26px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <Button url="/services">Our Services</Button>
            </div>
        </section>
    )
}
