import { Card } from 'antd'
import Image from 'next/image'
import React from 'react'

interface BlogCardProps {
    data: any
}

const BlogCard: React.FC<BlogCardProps> = ({ data }) => {
    return (
        <Card
            hoverable
        >
            <div key={data?.id} className="group flex flex-col gap-5">
                <div className="w-full overflow-hidden rounded-md z-0">
                    <Image
                        src={'/images/bg.jpeg'}
                        alt=''
                        height={300}
                        width={500}
                        className='object-cover group-hover:scale-110 transition-500ms duration-500 delay-500 ease-in-out'
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <h2 className='text-lg font-semibold text-muted leading-snug capitalize'>{data?.title}</h2>
                    <p className='font-normal text-sm text-gray-600 leading-relaxed capitalize'>{data?.body}</p>
                </div>
            </div>
        </Card>
    )
}

export default BlogCard