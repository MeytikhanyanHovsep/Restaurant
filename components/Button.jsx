import Link from 'next/link'

export default function Button({ children, url = "/" }) {
    return (
        <Link href={ url } className='flex bg-[#39db4a] drop-shadow-[8px_8px_5px_#00000020] items-center text-white text-[22px] gap-[15px] lg:px-[20px] lg:gap-[14px] px-[32px] py-[18px] rounded-[40px]'>{ children }</Link>
    )
}
