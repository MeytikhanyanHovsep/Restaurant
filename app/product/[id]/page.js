"use client"
import { setItem } from '@/features/Cart.slice'
import { fetchProduct } from '@/features/Products.slice'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import { useDispatch, useSelector } from 'react-redux'

export default function Product() {
    const id = usePathname().split("/")[2]
    const prod = useSelector(state => state.products.product)
    const initalCart = useSelector(state => state.cart.cart.find(e => e.id == id))
    const [prodQty, setProdQty] = useState(initalCart ? initalCart.qty : 0)
    const dispatch = useDispatch()
    const route = useRouter()

    const handleBlur = () => {
        changeQty(prodQty < 1 || !+prodQty ? 0 : (prodQty > 9999 ? 9999 : prodQty))
    }

    const changeQty = (num) => {
        localStorage.getItem("login") ? setProdQty(num) : route.push("/login")
        if (prodQty == 0) dispatch(setItem([+id, 0]))
    }

    useEffect(() => {
        prod && id == prod.id ? null : (dispatch(fetchProduct(id)))
        localStorage.getItem("login") ? dispatch(setItem([+id, prodQty])) : null
    }, [id, prod, prodQty])


    return (
        <section className='container mt-[50px] md:flex-col flex gap-[50px] md:items-center justify-between'>
            { prod && id == prod.id ? <Image unoptimized src={ prod.image } alt={ prod.name } className='rounded-[10px] w-full h-full max-w-[500px] max-h-[500px] lg:max-w-[400px] lg:max-h-[400px] object-cover' width={ 500 } height={ 500 } /> : <div></div> }
            { prod && id == prod.id ? <div className='flex min-h-full md:gap-[30px] lg:gap-[10px] gap-[20px] justify-between flex-col'>
                <h3 className='text-[40px] lg:text-[30px] md:text-[25px] font-[600]'>{ prod.name }</h3>
                <p className='lg:text-[14px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <p className='lg:text-[14px]'><span>Made of </span>
                    { prod.ingredients.map((e, i) => <span key={ i }>{ e + (i == prod.ingredients.length - 1 ? "." : ", ") }</span>) }</p>
                <div className='flex justify-between'>
                    <p className='text-[30px] lg:text-[25px] font-[700]'><span className='text-[#31c03f] mr-[3px] font-[500]'>$</span>{ prod.price }</p>
                    <div className='text-[30px] lg:text-[25px] flex justify-center items-center gap-[5px] font-[700]'><Image src="/star.png" className='mt-[3px]' width={ 30 } height={ 30 } alt='Rating' /><span className='mt-[3px]'>{ prod.rating }</span></div>
                </div>
                <div className='text-[40px] md:text-[25px] lg:text-[30px] text-[#31c03f] md:gap-[10px] gap-[20px] flex'>
                    <button className='border-[2px] outline-none rounded-full border-[#31c03f] w-[60px] h-[60px] lg:w-[50px] lg:h-[50px]' onClick={ () => prodQty > 0 ? changeQty(prodQty - 1) : null }>-</button>
                    <input value={ prodQty } onChange={ e => changeQty(e.target.value) } className='max-w-[100px] lg:max-w-[70px] bg-transparent outline-none text-[#303030] text-center' onBlur={ () => handleBlur() } />
                    <button className='border-[2px] outline-none rounded-full pl-[2px] pb-[2px]  border-[#31c03f] w-[60px] h-[60px] lg:w-[50px] lg:h-[50px]' onClick={ () => prodQty < 9999 ? changeQty(prodQty + 1) : null }>+</button>
                </div>
            </div> : <></> }
        </section>

    )
}

