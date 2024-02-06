import Title from '../Title'
import Link from 'next/link'
import Image from 'next/image'

export default function Categories() {
    const categories = { "Pizzas": 50, "Burgers": 40, "Drinks": 110, "Sushis": 70, "Sweets": 80 }
    return (
        <div className='container flex flex-col items-center mt-[100px]'>
            <Title title="customer favorites">Categories</Title>
            <div className='grid grid-cols-5 gap-[20px] w-full'>
                { Object.keys(categories).map((e, i) => <Link href={ "/menu/" + e.toLowerCase() } key={ i } className='flex items-center gap-[7px] bg-white flex-col rounded-[40px] p-[25px] shadow-[2px_10px_30px_#00000015]'>
                    <Image src={ `/${ e.toLowerCase() }.png` } width={ 150 } height={ 150 } className='max-w-[130px] max-h-[130px] object-contain bg-[#39db4962] h-full w-full p-[20px] rounded-full' alt={ e } />
                    <h6 className='font-[600] text-[25px]'>{ e }</h6>
                    <p className='text-[#555] text-[18px]'>({ categories[e] } { e })</p>
                </Link>) }
            </div>
        </div>
    )
}
