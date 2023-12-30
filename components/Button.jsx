import Link from 'next/link'

export default function Button({children,url}) {
    return (
        <Link href={url} className='flex bg-[#39db4a] items-center text-white text-[20px] gap-[15px] px-[32px] py-[18px] rounded-[40px]'>{children}</Link>
    )
}
