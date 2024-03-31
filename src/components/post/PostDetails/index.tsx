'use client'
import { useGetCommentsQuery, useGetPhotosQuery, useGetUsersQuery } from '@/store/apiSlices';
import moment from 'moment'
import Image from 'next/image'
import { useMemo } from 'react';
import { Photo, Post, User, Comment } from '@/types'
import React from 'react'
import { Avatar } from 'antd';
import { CalendarDays, MessageCircleMore } from 'lucide-react';

interface PostDetailsProps {
    data: Post
}

export default function PostDetails({ data }: PostDetailsProps) {
    const { data: comments } = useGetCommentsQuery();
    const { data: users } = useGetUsersQuery();
    const { data: photos } = useGetPhotosQuery();

    const mergedData: any = useMemo(() => {
        if (data && comments && users && photos) {
            return mergeData(data, comments, users, photos);
        }
        return [];
    }, [data, comments, users, photos]);

    return (
        <div className='flex flex-col gap-6'>
            <Image src={mergedData?.image?.url} alt={mergedData?.title} height={300} width={500} className='hover:scale-125 transition-500ms duration-500 delay-500 ease-in-out max-w-full aspect-video rounded-md' />

            <div className="flex justify-start items-center gap-6 pb-2 border-b border-dashed border-gray-200 text-gray-600 text-sm">
                <span className='flex items-center gap-1'>
                    <Avatar size={"large"} src={mergedData?.user?.profilePicture} /> <span>{mergedData?.user?.name}</span>
                </span>
                <span className='flex items-center gap-1'>
                    <MessageCircleMore size={16} /> <span>{mergedData?.numberOfComments} comments</span>
                </span>
                <span className='flex items-center gap-1'>
                    <CalendarDays size={16} /> <span>{moment(mergedData?.createdAt).format('ll')}</span>
                </span>
            </div>

            <div className="py-6">
                <h2 className="text-xl md:text-3xl font-bold capitalize">{mergedData?.title}</h2>
                <p>{mergedData?.body}</p>
                {/* {JSON.stringify(mergedData)} */}
            </div>

            <div className="pt-4 border-t border-dashed border-gray-200">
                <h2 className="text-xl md:text-2xl font-bold capitalize">Comments</h2>
                <p>{mergedData?.body}</p>
            </div>
        </div>
    )
}


// Helper function to merge data on IDs
export const mergeData = (
    post: Post,
    comments: Comment[],
    users: User[],
    photos: Photo[],
) => {
    return ({
        ...post,
        numberOfComments: comments.filter((comment) => comment.postId === post.id)
            ?.length,
        comments: comments.filter((comment) => comment.postId === post.id),
        user: {
            name: users.find((user) => user.id === post.userId)?.name,
            profilePicture: photos.find((photo) => photo.albumId === post.userId)
                ?.thumbnailUrl,
        },
        image: {
            url: photos.find((photo) => photo.albumId === post.id)?.url,
            thumbnailUrl: photos.find((photo) => photo.albumId === post.id)
                ?.thumbnailUrl,
        },
    })
}