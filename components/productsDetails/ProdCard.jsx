"use client"
import { addItem } from '@/features/Cart.slice'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useDispatch } from 'react-redux'

export default function ProdCard({ prod }) {
    const { id, image, name, price, rating } = prod
    const route = useRouter()
    const dispatch = useDispatch()

    return (
        <div key={ id } className='bg-white relative overflow-hidden shadow-[2px_5px_10px_#00000020] rounded-[40px] flex flex-col gap-[15px] p-[30px]'>
            <Link href={ "/product/" + id }>
                <Image unoptimized src={ image } width={ 200 } height={ 200 } className='mx-auto h-[200px] w-[200px] object-cover rounded-full' alt={ name } />
            </Link>
            <h4 className='text-[23px] font-[600]'>{ name }</h4>
            <p>It is a long established fact that a reader will be...</p>
            <div className='flex justify-between'>
                <p className='text-[23px] font-[700]'><span className='text-[#31c03f] mr-[3px] font-[500] text-[25px]'>$</span>{ price }</p>
                <div className='text-[20px] text-[#454545] flex justify-center items-center gap-[10px] font-[500]'><Image src="/star.png" width={ 30 } height={ 30 } alt='Rating' /><span className='mt-[3px]'>{ rating }</span></div>
            </div>
            <button className='bg-[#39db4a] rounded-bl-[40px] top-0 right-0 py-[15px] px-[15px] absolute' onClick={ () => {
                localStorage.getItem("login")? dispatch(addItem([id, 1])): route.push("/login")
            } }>
                <Image src="/cart2.png" alt='cart' width={ 35 } height={ 35 } />
            </button>
        </div>
    )
}
