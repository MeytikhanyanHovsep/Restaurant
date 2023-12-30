"use client"
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import Button from './Button'
import { Poppins } from 'next/font/google'

const poppins= Poppins({subsets:['latin'],weight:"500"})

export default function Header() {
    const menu = ["Home", "Menu", "About", "Services"]
    const path = usePathname()

    return (
        <header className='w-full'>
            <nav className='container py-[35px] flex justify-between items-center'>
                <Link href="/" >
                    <Image className='max-w-[55px] object-contain' src="/logo.png" width={ 100 } height={ 100 } alt='logo' />
                </Link>
                <ul className='flex gap-[60px] items-center'>
                    { menu.map((e, i) => <li key={ i }>
                        <Link href={ "/" + (i == 0 ? "" : e.toLowerCase()) } className={poppins.className + ` text-[20px] font-[500]${path.includes(e.toLowerCase()) || (path == "/" && e=="Home") ? " text-[#39db4a]":""}`}>{ e }</Link>
                    </li>) }
                </ul>
                <div className='flex items-center gap-[45px]'>
                    <button>
                        <Image src="/search.png" alt='search' className='max-w-[37px] object-contain' width={ 40 } height={ 40 } />
                    </button>
                    <button>
                        <Image src="/cart.png" alt='cart' width={ 40 } className='max-w-[30px] object-contain' height={ 40 } />
                    </button>
                    <Button url="/" >
                        <Image src="/phone.png" alt='phone' className='max-w-[25px] object-contain' width={ 30 } height={ 30 } />
                        Contacts
                    </Button>
                </div>
            </nav>
        </header>
    )
}
