'use client'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import 'swiper/css/effect-cube';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import { BannerBlogCard } from '@/components/common'

const BannerLeft = ({ blogs }: any | any[]) => {

    return (
        <div className="relative max-w-full overflow-hidden h-full">
            <Swiper
                pagination={{
                    dynamicBullets: true,
                    // clickable: true,
                }}
                spaceBetween={10}
                centeredSlides={true}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: true,
                }}
                navigation={false}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper rounded-xl overflow-hidden h-full"
            >
                {blogs?.map((data: any, i: React.Key) =>
                    <SwiperSlide key={i}>
                        <BannerBlogCard data={data} />
                    </SwiperSlide>
                )}
            </Swiper>
        </div>
    )
}

export default BannerLeft