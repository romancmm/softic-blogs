'use client'
import { BlogCard, HorizontalCard } from '@/components/common'
import { useEffect, useMemo } from "react";
import { setPosts, setLoading, setError } from '@/store/postsSlice';
import { LoaderTwo } from "@/components/common";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { Photo, Post, User, Comment } from '@/types';
import { useGetCommentsQuery, useGetPhotosQuery, useGetPostsQuery, useGetUsersQuery } from '@/store/apiSlices';

const ContentLeft = () => {
    const dispatch = useAppDispatch();
    const { data: posts } = useGetPostsQuery();
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

    if (loading) return <LoaderTwo />;
    if (postsError) return <div>Error: {postsError}</div>;
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


// Helper function to merge data on IDs
export const mergeData = (
    posts: Post[],
    comments: Comment[],
    users: User[],
    photos: Photo[],
) => {
    return posts.map((post) => ({
        ...post,
        numberOfComments: comments.filter((comment) => comment.postId === post.id)?.length,
        user: users.find((user) => user.id === post.userId)?.name,
        image: {
            url: photos.find((photo) => photo.id === post.id)?.url,
            thumbnailUrl: photos.find((photo) => photo.id === post.id)?.thumbnailUrl
        },
    }))
}



export default ContentLeft