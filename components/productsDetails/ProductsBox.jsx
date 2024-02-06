"use client"
import { useState } from 'react'
import ProdCard from './ProdCard'
import { memo } from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default memo(function ProductsBox({ products, category = "" }) {
    const [cardsView, setCardsView] = useState(0)
    
    return <>
        <div className='grid w-full gap-[20px] grid-cols-4'>
            { products?
                products.length && (category.includes(products[0].category)|| category == "") ? products.slice(cardsView * 24, (cardsView + 1) * 24).map((elm) => <ProdCard key={ elm.id } prod={ elm } />)
                    : Array(8).fill(null).map((_, i) => <div key={ i } className='p-[30px] rounded-[45px] shadow-[2px_2px_5px_#00000015] relative overflow-hidden'>
                        <div className='max-w-max mx-auto mb-[20px]'>
                            <Skeleton style={ { borderRadius: "50%" } } height={ 200 } width={ 200 } />
                        </div>
                        <Skeleton count={ 1 } height={ 20 } style={ { width: "70%", marginBottom: "20px" } } />
                        <Skeleton count={ 2 } height={ 10 } />
                        <div className='flex justify-between w-full mt-[20px]'>
                            <Skeleton width={ 80 } />
                            <Skeleton width={ 80 } />
                        </div>
                        <div className='absolute rounded-bl-[40px] overflow-hidden top-[-5px] right-0'>
                            <Skeleton width={ 65 } height={ 65 } />
                        </div>
                    </div>
                    ):<></> }
        </div>
        {products && products.length > 24 && <div className='flex mt-[70px] gap-[25px]'>
            { Array(Math.ceil(products.length / 24)).fill(null).map((_, i) => <button key={ i } onClick={ () => {
                document.getElementById("products-box").scrollIntoView({ behavior: "smooth", block: "start", inline: "start" });
                setTimeout(() => {
                    setCardsView(i)
                }, 700)
            } } className={ `w-[70px] h-[70px] rounded-full border-[2px] font-[700] border-[#39db4a] ${ cardsView == i ? "bg-[#39db4a] text-white" : " text-[#39db4a]" } text-[25px]` }>{ i + 1 }</button>) }
        </div>}
    </>
})