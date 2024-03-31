'use client'
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useGetCommentsQuery, useGetPhotosQuery, useGetPostsQuery, useGetUsersQuery } from '@/store/apiSlices';
import { LoaderTwo } from '@/components/common';
import moment from 'moment'
import Image from 'next/image'
import { useEffect, useMemo } from 'react';
import { setPosts, setLoading, setError, mergeData } from '@/store/postsSlice';

const BannerRight = () => {
    const dispatch = useAppDispatch();
    const { data: posts, isLoading, error } = useGetPostsQuery();
    const { data: comments } = useGetCommentsQuery();
    const { data: users } = useGetUsersQuery();
    const { data: photos } = useGetPhotosQuery();

    const mergedPosts = useMemo(() => {
        if (posts && comments && users && photos) {
            return mergeData(posts, comments, users, photos).slice(0, 20);
        }
        return [];
    }, [posts, comments, users, photos]);

    useEffect(() => {
        dispatch(setLoading());

        // if (!posts || !comments || !users || !photos) {
        //     dispatch(setError('Failed to fetch data'));
        //     return;
        // }

        if (mergedPosts.length > 0) {
            dispatch(setPosts(mergedPosts));
        }
    }, [dispatch, mergedPosts, posts, comments, users, photos]);

    const { posts: loadedPosts, loading, error: postsError } = useAppSelector((state) => state.posts);

    if (isLoading || loading) return <LoaderTwo />;
    if (postsError) return <div>Error: {postsError}</div>;

    return (
        <div className="flex flex-col gap-1 border border-gray-200 p-4 rounded-xl w-full h-full">
            {loadedPosts?.slice(5, 10)?.map((data: any, i: React.Key) =>
                <div
                    key={i}
                    className="flex items-start justify-start gap-4 py-1.5 border-b border-gray-200 border-spacing-6 border-separate border-dashed last:border-none last:pb-0 group"
                >
                    <div className="w-1/3 h-16 bg-slate-50 overflow-hidden rounded">
                        <Image src={data?.image?.thumbnailUrl} alt={data?.title} height={75} width={100} className='object-cover h-full group-hover:scale-125 transition-500ms duration-500 delay-500 ease-in-out' />
                    </div>
                    <div className="w-2/3">
                        <h4 className='leading-tight text-sm text-muted font-semibold capitalize'>{data?.title}</h4>
                        <span className=' text-xs text-gray-600 font-light'>{moment(data?.createdAt).format('ll')}</span>
                    </div>
                </div>
            )}
        </div>
    )
}

export default BannerRight