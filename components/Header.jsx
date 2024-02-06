"use client"
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useRef, useState } from 'react'
import Button from './Button'
import { Poppins } from 'next/font/google'
import { motion } from "framer-motion"
import { useRouter } from 'next/navigation'
import { useSelector } from 'react-redux'

const poppins = Poppins({ subsets: ['latin'], weight: "500" })

export default function Header() {
    const menu = ["Home", "Menu", "About Us", "Services"];
    const path = usePathname();
    const [searchToggle, setSearchToggle] = useState(false)
    const router = useRouter();
    const searchRef = useRef()
    const cartLength = useSelector(state => state.cart.cart.length)

    const handleSearch = (e) => {
        let x = searchRef.current.value
        e.preventDefault()
        router.push("/search?value=" + x.trim().match(/[a-z]+/g).join(" "))
        searchRef.current.value = ""
        setSearchToggle(false)
    }

    return (
        <header className='w-full'>
            <nav className='container gap-[50px] lg:gap-[30px] py-[35px] flex justify-between items-center'>
                <Link href="/" >
                    <Image className='max-w-[55px] object-contain' src="/logo.png" width={ 100 } height={ 100 } alt='logo' />
                </Link>
                <div className='w-full relative'>
                    <motion.ul initial={ { opacity: 1, zIndex: 100 } } transition={ { type: "spring", duration: 0.5 } } animate={ { ...(searchToggle ? { opacity: 0, zIndex: -1 } : { opacity: 1, zIndex: 100 }) } } className='flex overflow-hidden max-w-max md:hidden lg:gap-[30px] gap-[60px] mx-auto items-center'>
                        { menu.map((e, i) => <li key={ i }>
                            <Link href={ "/" + (i == 0 ? "" : e.toLowerCase().replaceAll(" ", "-")) } className={ poppins.className + `lg:text-[16px] text-[20px] font-[500]${ path.includes(e.toLowerCase().replaceAll(" ", "-")) || (path == "/" && e == "Home") ? " text-[#39db4a]" : "" }` }>{ e }</Link>
                        </li>) }
                    </motion.ul>
                    <motion.form initial={ { opacity: 0, zIndex: -1 } } transition={ { type: "spring", duration: 0.5 } } animate={ { ...(searchToggle ? { opacity: 1, zIndex: 100, width: "100%" } : { opacity: 0, zIndex: -1, width: "50%" }) } } className='overflow-hidden bg-white p-[20px] rounded-[30px] shadow-md shadow-[#e8e8e8] absolute top-1/2 -translate-y-1/2 w-full left-1/2 -translate-x-1/2 gap-[20px] flex' onSubmit={ e => handleSearch(e) }>
                        <input ref={ searchRef } className='w-full outline-none text-[20px]' placeholder='Search...' />
                        <button >
                            <Image src="/search.png" alt='search' className='max-w-[37px] object-contain' width={ 30 } height={ 30 } />
                        </button>
                    </motion.form>
                </div>
                <div className='flex items-center lg:gap-[20px] gap-[45px]'>
                    <button className='w-[40px] h-[40px] relative' onClick={ () => setSearchToggle(!searchToggle) }>
                        <Image src="/search.png" alt='search' className={ `duration-[0.3s] transition-opacity max-w-[37px] object-contain${ searchToggle ? " opacity-0" : "" }` } width={ 40 } height={ 40 } />
                        <Image src="/close.png" alt='search' className={ `duration-[0.3s] absolute top-0 left-0 transition-opacity max-w-[37px] object-contain${ searchToggle ? "" : " opacity-0" }` } width={ 40 } height={ 40 } />
                    </button>
                    <Link href={"/login" }>
                        <Image src="/user.png" alt='login' className='min-w-[37px] max-w-[37px] object-contain' width={ 40 } height={ 40 } />
                    </Link>
                    <Link href={ localStorage.getItem("login") ? "/cart" : "/login" } className='relative'>
                        <Image src="/cart.png" alt='cart' width={ 40 } className='max-w-[30px] lg:mr-[10px] object-contain' height={ 40 } />
                        { cartLength > 0 && <span className='absolute top-[-10px] w-[25px] grid place-content-center h-[25px] text-white rounded-full bg-[#39db4a] right-[-10px]'>{ cartLength }</span> }
                    </Link>
                    <Button url="/" >
                        <Image src="/phone.png" alt='phone' className='max-w-[25px] object-contain' width={ 30 } height={ 30 } />
                        Contacts
                    </Button>
                </div>
            </nav>
        </header>
    )
}
