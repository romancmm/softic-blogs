
import { Container, Section } from '@/components/common'
import React from 'react'
import useGetData from '@/lib/hooks/useGetData'
import ContentLeft from './ContentLeft'

async function MainContent() {
    const data: any = await useGetData('/posts')

    return (
        <Section variant={"default"} bg={"light"}>
            <Container>
                <div className="grid grid-cols-3 gap-6">
                    <div className="col-span-2 relative ">
                        <ContentLeft blogs={data} />
                    </div>
                    <div className="col-span-1 flex justify-center items-center flex-col relative ">
                        {/* <BannerRight blogs={data} /> */}
                    </div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Est vero iusto dolores, obcaecati doloremque ad consequatur repudiandae voluptates adipisci maiores facere earum error, beatae harum a, deleniti delectus esse accusantium.
                </div>
            </Container>
        </Section>
    )
}

export default MainContent