"use client"
import { usePathname } from 'next/navigation'
import { useMemo, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProductsCategory } from '@/features/Products.slice'
import Title from '@/components/Title';
import CategoriesSlide from '@/components/pagesDetails/CategoriesSlide';
import ProductsBox from '@/components/productsDetails/ProductsBox';


export default function Category() {
    const category = usePathname().split("/")[2]
    const products = useSelector((state) => state.products.products);
    const dispatch = useDispatch()

    useEffect(() => {
        products.length && category == products[0].category ? null : (dispatch(fetchProductsCategory(category)))
    }, [])

    return <>
        <CategoriesSlide />
        <section id='products-box' className='container mt-[70px]'>
            <Title title="our menu">All { category } from our menu</Title>
            <ProductsBox category={category} products={ products } />
        </section>
    </>
}