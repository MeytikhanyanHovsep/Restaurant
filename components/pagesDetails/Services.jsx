import React from 'react'
import Button from '../Button'
import Title from '../Title'
import Image from 'next/image'

export default function Services() {
    const services = {
        "Catering": "Delight your guests with our flavors and  presentation",
        "Fast delivery": "We deliver your order promptly to your door",
        "Online Ordering": "Explore menu & order with ease using our Online Ordering ",
        "Gift Cards": "Give the gift of exceptional dining with Foodi Gift Cards",
    }

    return (
        <section className='flex container justify-between items-center'>
            <div className='flex flex-col items-start max-w-[600px]'>
                <Title title="Our Story & Services">Our Culinary Journey And Services</Title>
                <p className='text-[#4a4a4a] mb-[40px] mt-[-40px] text-[26px]'>Rooted in passion, we curate unforgettable dining experiences and offer exceptional services, blending culinary artistry with warm hospitality.</p>
                <Button url="/about-us">Read More</Button>
            </div>
            <div className='grid grid-cols-2 gap-[35px] max-w-[600px]'>
                { Object.keys(services).map((e, i) => <div key={ i } className='flex shadow-[7px_12px_43px_#00000015] bg-white px-[25px] font-[600] py-[40px] items-center rounded-[30px] flex-col'>
                    <Image src={ "/" + e.toLowerCase()+".png" } width={65} height={65} alt='' />
                    <h5 className='text-[#5fe26c] mt-[25px] mb-[15px] text-[24px] font-[600]'>{ e }</h5>
                    <p className='text-[#90bd95] text-[20px] text-center'>{ services[e] }</p>
                </div>) }
            </div>
        </section>
    )
}
