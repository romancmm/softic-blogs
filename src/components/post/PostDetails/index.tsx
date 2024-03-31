'use client'
import { useGetCommentsQuery, useGetPhotosQuery, useGetUsersQuery } from '@/store/apiSlices';
import moment from 'moment'
import Image from 'next/image'
import { useMemo } from 'react';
import { Photo, Post, User, Comment } from '@/types'
import React from 'react'
import { Avatar } from 'antd';
import { CalendarDays, MessageCircleMore } from 'lucide-react';
import { CommentCard } from '@/components/common';

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
            <Image src={mergedData?.image?.url} alt={mergedData?.title} height={400} width={600} className='hover:scale-105 transition-500ms duration-500 delay-500 ease-in-out max-w-full aspect-video rounded-md' />

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
                <h2 className="text-xl md:text-2xl font-extrabold uppercase mb-2">{mergedData?.title}</h2>
                <p className='capitalize leading-loose font-light'>{mergedData?.body}</p>
            </div>

            <div className="pt-4 border-t border-dashed border-gray-200">
                <h2 className="text-lg md:text-2xl font-semibold capitalize mb-3">Comments</h2>

                <div className="flex flex-col gap-4">
                    {mergedData?.comments?.map((data: Comment, i: React.Key) =>
                        <CommentCard key={i} data={data} />
                    )}
                </div>
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