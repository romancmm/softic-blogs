import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface BannerBlogCardProps {
    data: any
}

const BannerBlogCard: React.FC<BannerBlogCardProps> = ({ data }) => {
    return (
        <div className="
           max-w-full h-full
            bg-red-500 dark:bg-gray-700 rounded-md md:rounded-xl overflow-hidden shadow-md hover:shadow-lg group 
            before:w-full before:h-full before:bg-gradient-to-t before:to-50% before:from-gray-800 hover:before:bg-gradient-to-t hover:before:to-40% hover:before:from-gray-800 before:absolute before:rounded-xl before:z-10
        ">
            <div className="w-full h-full overflow-hidden rounded-md z-0">
                <Image
                    src={'/images/bg.jpeg'}
                    alt=''
                    height={800}
                    width={1000}
                    className='block mx-auto h-full object-cover min-h-20 group-hover:scale-110 transition-500ms duration-500 delay-500 ease-in-out'
                />
            </div>
            <div className="absolute bottom-2 group-hover:bottom-6 transform-cpu duration-500 delay-500 ease-in-out z-10 p-2 md:p-6 flex flex-col gap-2">
                <Link href={`/posts/${data?.id}`}>
                    <h2 className='text-lg md:text-xl font-bold drop-shadow-lg leading-tight capitalize line-clamp-2'>
                        {data?.title}
                    </h2>
                </Link>
                <p className='font-light text-xs md:text-sm line-clamp-4'>{data?.body}</p>
            </div>
        </div>
    )
}

export default BannerBlogCard