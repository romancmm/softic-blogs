'use client'
import { BlogCard, HorizontalCard } from '@/components/common'
import { useEffect, useMemo } from "react";
import { setPosts, setLoading, setError, mergeData } from '@/store/postsSlice';
import { LoaderTwo } from "@/components/common";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useGetCommentsQuery, useGetPhotosQuery, useGetPostsQuery, useGetUsersQuery } from '@/store/apiSlices';

const ContentLeft = () => {
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

        if (!posts || !comments || !users || !photos) {
            dispatch(setError('Failed to fetch data'));
            return;
        }

        if (mergedPosts.length > 0) {
            dispatch(setPosts(mergedPosts));
        }
    }, [dispatch, mergedPosts, posts, comments, users, photos]);

    const { posts: loadedPosts, loading, error: postsError } = useAppSelector((state) => state.posts);

    if (isLoading || loading) return <LoaderTwo />;
    if (error || postsError) return <div>Error: {postsError}</div>;
    return (
        <div className="grid grid-cols-2 grid-rows-4 flex-wrap gap-4">
            {loadedPosts?.map((data: any, i: number) =>
                data?.id % 5 === 0
                    ? <div className="row-span-3" key={i}>
                        <BlogCard data={data} />
                    </div>
                    : <HorizontalCard key={i} data={data} />
            )}
        </div>
    )
}

export default ContentLeft