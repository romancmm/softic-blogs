import { Avatar, Card } from 'antd'
import { MessageCircleMore, User } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

interface BlogCardProps {
    data: any
}

const BlogCard: React.FC<BlogCardProps> = ({ data }) => {
    return (
        <Card
            hoverable
            className='h-full'
        >
            <div key={data?.id} className="group flex flex-col gap-5">
                <div className="w-full aspect-video overflow-hidden rounded-md z-0">
                    <Image
                        src={data?.image?.url}
                        alt={data?.title}
                        height={300}
                        width={500}
                        className='object-cover w-full group-hover:scale-110 transition-500ms duration-500 delay-500 ease-in-out'
                    />
                </div>
                <div className="flex justify-between items-center gap-4 pb-2 border-b border-dashed border-gray-200 text-gray-600">
                    <span className='flex items-center gap-1'>
                        <Avatar src={data?.user?.profilePicture} /> <span>{data?.user?.name}</span>
                    </span>
                    <span className='flex items-center gap-1'>
                        <MessageCircleMore size={16} /> <span>{data?.numberOfComments} comments</span>
                    </span>
                </div>
                <div className="flex flex-col gap-2">
                    <h2 className='text-lg font-semibold text-muted leading-snug capitalize line-clamp-1'>{data?.title}</h2>
                    <p className='font-normal text-sm text-gray-600 leading-relaxed capitalize line-clamp-4'>{data?.body}</p>
                </div>
            </div>
        </Card>
    )
}

export default BlogCard