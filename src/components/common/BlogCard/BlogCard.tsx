import Image from 'next/image'
import React from 'react'

interface BlogCardProps {
    data: any
}

const BlogCard: React.FC<BlogCardProps> = ({ data }) => {
    return (
        <div key={data?.id} className="
           max-w-full h-full
            bg-white dark:bg-gray-700 rounded-md md:rounded-xl overflow-hidden shadow-md hover:shadow-lg group 
        ">
            <div className="w-full overflow-hidden rounded-md z-0">
                <Image
                    src={'/images/bg.jpeg'}
                    alt=''
                    height={300}
                    width={500}
                    className='object-cover group-hover:scale-110 transition-500ms duration-500 delay-500 ease-in-out'
                />
            </div>
            <div className="p-6 flex flex-col gap-2">
                <h2 className='text-xl font-bold drop-shadow-lg leading-tight capitalize'>{data?.title}</h2>
                <p className='font-light text-sm'>{data?.body}</p>
            </div>
        </div>
    )
}

export default BlogCard