import Image from 'next/image'
import React from 'react'

interface BannerBlogCardProps {
    data: any
}

const BannerBlogCard: React.FC<BannerBlogCardProps> = ({ data }) => {
    return (
        <div className="
           max-w-full
            bg-white dark:bg-gray-700 rounded-md md:rounded-xl overflow-hidden shadow-md hover:shadow-lg group 
            before:w-full before:h-full before:bg-gradient-to-t before:to-50% before:from-gray-800 hover:before:bg-gradient-to-t hover:before:to-40% hover:before:from-gray-800 before:absolute before:rounded-xl before:z-10
        ">
            <div className="w-full overflow-hidden rounded-md z-0 aspect-video">
                <Image
                    src={'/images/bg.jpeg'}
                    alt=''
                    height={500}
                    width={800}
                    className='block mx-auto w-full object-cover min-h-20 group-hover:scale-110 transition-500ms duration-500 delay-500 ease-in-out'
                />
            </div>
            <div className="absolute bottom-2 group-hover:bottom-6 transform-cpu duration-500 delay-500 ease-in-out z-10 p-6 flex flex-col gap-2">
                <h2 className='text-xl font-bold drop-shadow-lg leading-tight'>{data?.title}</h2>
                <p className='font-light text-sm'>{data?.body}</p>
            </div>
        </div>
    )
}

export default BannerBlogCard