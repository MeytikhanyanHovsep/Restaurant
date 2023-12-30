import React from 'react'
import Header from './Header'

export default function Componetns({children}) {
    return <>
    <Header />
        {children}
    </>
}
