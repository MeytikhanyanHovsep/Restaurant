"use client"
import { useDispatch, useSelector } from "react-redux"
import Image from "next/image"
import { getProdQty, removeItem, setItem } from "@/features/Cart.slice"
import { memo, useState } from "react"
import Link from "next/link"

const CartItem = memo(({ prod }) => {
    const { name, image, price, rating, id } = prod
    const dispatch = useDispatch()
    const prodQty = useSelector(state => getProdQty(state, id))
    const [qty, setQty] = useState(+prodQty.qty)

    const handleBlur = () => {
        if (qty > 9999) setQty(9999)
        if (qty < 1) setQty(1);
        setQty(+qty)
        dispatch(setItem([id, qty]))
    }

    const setProdQty = (num) => {
        if ((qty > 1 && num < 0) || (qty < 9999 && num > 0)) {
            setQty(qty + num)
            dispatch(setItem([id, qty + num]))
        }
    }

    return <>
        <tr className="border-b-[2px] border-[#00000040]">
            <td className="pl-[20px] !py-[20px]"><Link href={"/product/"+id} ><Image width={ 150 } height={ 150 } alt={id} unoptimized src={ image } className="min-w-[150px] max-w-[150px] rounded-full object-cover min-h-[150px] max-h-[150px]" /></Link></td>
            <td className="font-[700] text-[23px]">{ name }</td>
            <td className="text-[18px] !p-0"><p className="max-w-[450px]">Lorem Ipsum is simply dummy text of the printing and...</p></td>
            <td className="px-[10px]">
                <div className="flex items-center gap-x-1.5">
                    <button type="button" className="w-[50px] h-[50px] inline-flex justify-center items-center gap-x-2 text-[23px] font-medium rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" onClick={ () => setProdQty(-1) }>-</button>
                    <input className="p-0 w-[50px] text-center text-[18px] bg-transparent outline-none border-0 text-gray-800 focus:ring-0 dark:text-white" type="number" value={ qty } onBlur={ handleBlur } onChange={ (e) => setQty(+e.target.value) } />
                    <button type="button" className="w-[50px] h-[50px] inline-flex justify-center items-center gap-x-2 text-[23px] font-medium rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" onClick={ () => setProdQty(1) }>+</button>
                </div>
            </td>
            <td className="text-[23px] font-[500] !px-[20px]">${ price }</td>
            <td className="pr-[50px]">
                <div className="flex items-center gap-[5px] text-[23px]">
                    <Image src="/star.png" width={ 30 } height={ 30 } alt='Rating' /><span>{ rating }</span>
                </div>
            </td>
            <td className="!px-[30px]">
                <button onClick={ () => dispatch(removeItem(id)) } className="cursor-pointer max-w-[35px] min-w-[35px]"><Image src="/remove.png" width={ 50 } height={ 50 } alt='remove' /></button>
            </td>
        </tr>
    </>
})

export default CartItem