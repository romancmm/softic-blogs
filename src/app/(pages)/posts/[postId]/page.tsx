import { Container, Section } from '@/components/common'
import PostDetails from '@/components/post/PostDetails';
import useGetData from '@/lib/hooks/useGetData';

type paramsProps = {
    params: {
        [key: string]: string | string[] | undefined;
    };
    searchParams: {
        [key: string]: string | string[] | undefined;
    };
};

export default async function BlogPage(props: paramsProps) {
    const { postId } = props?.params
    const postData: any = await useGetData(`/posts/${postId}`)

    return (
        <>
            <Section variant={"default"} bg={"light"}>
                <Container>
                    <div className="grid grid-cols-3 items-start gap-2 md:gap-6">
                        <div className="col-span-full md:col-span-2 relative text-muted">
                            <PostDetails data={postData} />
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
