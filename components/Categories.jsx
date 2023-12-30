import Title from './Title'
import Link from 'next/link'
import Image from 'next/image'

export default function Categories() {
    const categories = {"Burgers":5,"Burgerss":5,"Burgesrs":5,"Busrgers":5}
    return (
        <div className='container flex flex-col items-center mt-[100px]'>
            <Title title="customer favorites">Categories</Title>
            <div className='grid grid-cols-4 gap-[40px] w-full'>
                {Object.keys(categories).map((e,i)=><Link href={"/"+e} key={i} className='flex items-center gap-[12px] bg-white flex-col rounded-[40px] p-[40px] shadow-[2px_10px_30px_#00000015]'>
                    <Image src="/burger.webp" width={150} height={150} className='max-w-[150px] max-h-[150px] object-contain bg-[#c1f1c6] p-[20px] rounded-full' alt={e} />
                    <h6 className='font-[600] text-[30px]'>{e}</h6>
                    <p className='text-[#555] text-[22px]'>({categories[e]} {e})</p>
                </Link>)}
            </div>
        </div>
    )
}
