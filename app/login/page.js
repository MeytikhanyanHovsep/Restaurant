"use client"
import { useRouter } from 'next/navigation';
import React, { useRef } from 'react'
import mainBg from "@/public/main-bg.jpg"

export default function LogIn() {
    const router = useRouter()
    const name = useRef()
    const pass = useRef()
    const email = useRef()

    const handleSubmit = e => {
        e.preventDefault();
        router.push("/")
        localStorage.setItem("login", true)
    }

    return (
        <section className='w-[100%] bg-cover h-[100vh] grid place-items-center' style={ { backgroundImage: `url('${ mainBg.src }')` } }>
            <form style={ { backdropFilter: "blur(20px)" } } className='shadow-[0_0_10px_gray] rounded-[30px] bg-[#00000023] flex flex-col items-center gap-[10px] px-[70px] py-[40px]' onSubmit={ handleSubmit }>
                <h4 className='text-[30px] font-bold text-white'>Login</h4>
                <div className='flex flex-col gap-[7px]'>
                    <label className='text-white text-[14px]'>User name</label>
                    <input type='text' min={ 5 } required ref={ name } placeholder='user name' className='w-[250px] outline-none rounded-[20px] px-[15px] py-[10px] text-[14px]' />
                </div>
                <div className='flex flex-col gap-[7px]'>
                    <label className='text-white text-[14px]'>Password</label>
                    <input type='password' min={ 5 } required ref={ pass } placeholder='password' className='w-[250px] outline-none rounded-[20px] px-[15px] py-[10px] text-[14px]' />
                </div>
                <div className='flex flex-col gap-[7px]'>
                    <label className='text-white text-[14px]'>Email</label>
                    <input type="email" min={ 5 } required ref={ email } placeholder='email' className='w-[250px] outline-none rounded-[20px] px-[15px] py-[10px] text-[14px]' />
                </div>
                <button className='bg-[#39db4a] hover:bg-white text-white hover:text-[#39db4a] transition-colors w-full font-bold my-[20px] rounded-[20px] py-[10px] border-[3px] border-white'>Continue</button>
            </form>
        </section>
    )
}
