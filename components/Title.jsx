import React from 'react'

export default function Title({ title, children }) {
    return (
        <div className='mb-[75px] drop-shadow-[10px_10px_5px_#00000025]'>
            <h3 className={`pb-[10px] uppercase text-[#39db4a] text-[18px] font-[700] tracking-[3.5px]${title=="customer favorites"?" text-center":""}`}>{ title }</h3>
            <h5 className='text-[55px] capitalize font-[700] leading-[75px]'>{ children }</h5>
        </div>
    )
}
