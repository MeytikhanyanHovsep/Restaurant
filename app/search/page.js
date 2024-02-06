"use client"
import ProductsBox from '@/components/productsDetails/ProductsBox'
import Title from '@/components/Title'
import { fetchSearchProducts } from '@/features/Products.slice'
import { useSearchParams } from 'next/navigation'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Search() {
  const dispatch = useDispatch()
  const products = useSelector(state => state.products.search)
  const searchValue = useSearchParams().get("value")

  useEffect(() => {
    searchValue?dispatch(fetchSearchProducts(searchValue)):null
  }, [searchValue])
  
  return (
    <section className='container' id="products-box">
    <Title title="search results"><span className='font-[700]'>{searchValue} results</span></Title>
    <ProductsBox products={ products } />
    </section>
  )
}
