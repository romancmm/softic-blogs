'use client'
import { Container, LoaderTwo, Section } from '@/components/common'
import React, { useEffect, useMemo } from 'react'
import { setPosts, setLoading, setError, mergeData } from '@/store/postsSlice';
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useGetCommentsQuery, useGetPhotosQuery, useGetPostsQuery, useGetUsersQuery } from '@/store/apiSlices';
import ContentLeft from '@/components/home/MainContent/ContentLeft';


export default function BlogPage() {
    const dispatch = useAppDispatch();
    const { data: posts, isLoading, error } = useGetPostsQuery();
    const { data: comments } = useGetCommentsQuery();
    const { data: users } = useGetUsersQuery();
    const { data: photos } = useGetPhotosQuery();

    const mergedPosts = useMemo(() => {
        if (posts && comments && users && photos) {
            return mergeData(posts, comments, users, photos).slice(10, 30);
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
        <>
            <Section variant={"default"} bg={"light"}>
                <Container>
                    <div className="grid grid-cols-3 items-start gap-2 md:gap-6">
                        <div className="col-span-full md:col-span-2 relative ">
                            <ContentLeft items={loadedPosts} />
                        </div>
                        <div className="col-span-full md:col-span-1 flex justify-start flex-col text-gray-700 border border-gray-100 rounded-lg p-6 sticky top-28 shadow bg-foreground">
                            {/* <BannerRight blogs={data} /> */}
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est vero iusto dolores, obcaecati doloremque ad consequatur repudiandae voluptates adipisci maiores facere earum error, beatae harum a, deleniti delectus esse accusantium.
                        </div>
                    </div>
                </Container>
            </Section>
        </>
    )
}
