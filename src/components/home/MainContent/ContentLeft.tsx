'use client'
import { BlogCard, HorizontalCard } from '@/components/common'
import { useEffect } from "react";
import { useGetPostsQuery } from '@/store/apiSlices';
import { setPosts, setLoading, setError } from '@/store/postsSlice';
import { Loader } from "@/components/common";
import { useAppDispatch, useAppSelector } from "@/store/hooks";

const ContentLeft = () => {
    const dispatch = useAppDispatch();
    const { data: posts, isLoading, error } = useGetPostsQuery();

    useEffect(() => {
        if (isLoading) {
            dispatch(setLoading());
        }
        if (error) {
            dispatch(setError((error as any).message));
        }
        if (posts) {
            dispatch(setPosts(posts.slice(0, 20))); // Load only first 20 posts
        }
    }, [isLoading, posts, error, dispatch]);

    const { posts: loadedPosts, loading, error: postsError } = useAppSelector((state) => state.posts);

    if (loading || isLoading) return <Loader />
    if (postsError || error) return <div>Error: {postsError || error}</div>

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