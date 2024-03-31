'use client'
import { deletePost } from '@/store/postsSlice'
import { Avatar, Button, Card } from 'antd'
import { MessageCircleMore } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useDispatch } from 'react-redux'

interface BlogCardProps {
    data: any
}

const BlogCard: React.FC<BlogCardProps> = ({ data }) => {
    const dispatch = useDispatch();

    const handleDeletePost = (postId: string) => {
        dispatch(deletePost(postId));
    };

    return (
        <Card hoverable className='h-full relative overflow-hidden group'>
            <div key={data?.id} className="flex flex-col gap-5">
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
                    <Link href={`/posts/${data?.id}`}>
                        <h2 className='text-lg font-semibold text-muted leading-snug capitalize line-clamp-1'>
                            {data?.title}
                        </h2>
                    </Link>
                    <p className='font-normal text-sm text-gray-600 leading-relaxed capitalize line-clamp-4'>{data?.body}</p>
                </div>


            </div>
            <div className="h-1/3 p-4 w-full absolute left-0 -bottom-full group-hover:bottom-4 bg-white bg-opacity-5 backdrop-blur-sm transition-500ms duration-500 delay-500 ease-in-out rounded-b-lg flex items-center justify-center">
                <Button onClick={() => handleDeletePost(data?.id)} danger size='large' type='primary'>Delete</Button>
            </div>
        </Card >
    )
}

export default BlogCard