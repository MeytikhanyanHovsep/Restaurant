import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image';
import Link from 'next/link';

export default function CategoriesSlide() {
    const categories = ["pizzas", "burgers","drinks","sushis","sweets"]
    return (
        <div className='container cursor-pointer mt-[50px]'>
            <Swiper
                slidesPerView={ 5 }
                spaceBetween={ 30 }
                loop={ true }
                navigation={ true }
                modules={ [Navigation] }
            >
                { categories.map((e, i) => <SwiperSlide key={ i }>
                    <Link href={`/menu/${e}`} className='flex justify-center h-[80%] translate-y-[20%] bg-white shadow-[2px_2px_5px_#00000010] z-[-10] items-center rounded-[20px] gap-[5px]' >
                        <span>{ e }</span>
                        <Image src={ "/" + e + ".png" } className='max-w-[50px] max-h-[50px] object-contain' width={ 50 } height={ 50 } alt='' />
                    </Link>
                </SwiperSlide>) }
            </Swiper>
        </div>
    )
}
