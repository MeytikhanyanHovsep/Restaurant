import React from 'react'

export default function Title({ title, children }) {
    return (
        <div className='mb-[75px]'>
            <h3 className={`pb-[10px] uppercase text-[#39db4a] text-[18px] font-[700] tracking-[3.5px]${title=="customer favorites"?" text-center":""}`}>{ title }</h3>
            <h5 className='text-[55px] font-[700]'>{ children }</h5>
        </div>
    )
}
