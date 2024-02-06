"use client"
import CartItem from "@/components/productsDetails/CartItem"
import Title from "@/components/Title"
import { fetchCartProduct } from "@/features/Cart.slice"
import { useEffect, useMemo } from "react"
import Skeleton from "react-loading-skeleton"
import { useDispatch, useSelector } from "react-redux"
import 'react-loading-skeleton/dist/skeleton.css'


export default function Cart() {
    const cart = useSelector(state => state.cart.cart)
    const cartProducts = useSelector(state => state.cart.cartProducts)
    const dispatch = useDispatch()
    const total = "" + cartProducts.reduce((s, e, i) => s + +e.price * +cart[i].qty, 0)
    const totalPrice = cartProducts.length ? total.slice(0, total.indexOf(".")) + total.slice(total.indexOf("."), total.indexOf(".") + 3) : 1

    useEffect(() => {
        console.log(cartProducts);
        cart.length != cartProducts.length ? dispatch(fetchCartProduct()) : null
    }, [cart])

    return (
        <section className="container">
            <Title title="cart">your shopping cart</Title>
            { cart.length ?
                <table className="cart w-full">
                    <tbody>
                        {
                            cartProducts.length
                                ? cartProducts.map((e, i) => <CartItem key={ e.id } prod={ e } />)
                                : Array(4).fill(0).map((_, i) => <tr key={i} className="border-b-[2px] border-[#33333317]">
                                    <td className="pl-[20px] !py-[20px]">
                                        <Skeleton width={ 150 } style={ { borderRadius: "50%" } } height={ 150 } className="w-[150px] h-[150px]" />
                                    </td>
                                    <td>
                                        <Skeleton height={ 20 } width={ 170 } />
                                    </td>
                                    <td className="!p-0">
                                        <Skeleton width={ 420 } style={ { marginBottom: '10px' } } height={ 20 } />
                                        <Skeleton width={ 250 } height={ 20 } />
                                    </td>
                                    <td className="px-[10px]">
                                        <div className="flex items-center gap-x-1.5">
                                            <Skeleton width={ 50 } height={ 50 } style={ { borderRadius: "50%" } } />
                                            <Skeleton width={ 70 } height={ 20 } />
                                            <Skeleton width={ 50 } height={ 50 } style={ { borderRadius: "50%" } } />
                                        </div>
                                    </td>
                                    <td className=" !px-[20px]">
                                        <Skeleton width={ 80 } height={ 20 } />
                                    </td>
                                    <td className="pr-[50px]">
                                        <Skeleton width={ 80 } height={ 20 } />
                                    </td>
                                    <td className="!px-[30px]">
                                        <Skeleton width={ 30 } height={ 40 } />
                                    </td>
                                </tr>
                                ) }
                    </tbody>
                    { !!cartProducts.length  && <tfoot>
                        <tr className="text-[25px] mt-[20px] font-bold">
                            <td><span className="font-[500]">Total:</span> ${ totalPrice }</td>
                        </tr>
                    </tfoot> }
                </table>
                : <p className="text-[30px] font-bold">Cart is empty</p> }
        </section>
    )
}
