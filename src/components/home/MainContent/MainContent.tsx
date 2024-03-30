
import { Container, Section } from '@/components/common'
import React from 'react'
import useGetData from '@/lib/hooks/useGetData'
import ContentLeft from './ContentLeft'

async function MainContent() {
    const data: any = await useGetData('/posts')

    return (
        <Section variant={"default"} bg={"light"}>
            <Container>
                <div className="grid grid-cols-3 items-start gap-6">
                    <div className="col-span-2 relative ">
                        <ContentLeft blogs={data} />
                    </div>
                    <div className="col-span-1 flex justify-start flex-col text-gray-700 border border-gray-100 rounded-lg p-6 sticky top-28 shadow bg-foreground">
                        {/* <BannerRight blogs={data} /> */}
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est vero iusto dolores, obcaecati doloremque ad consequatur repudiandae voluptates adipisci maiores facere earum error, beatae harum a, deleniti delectus esse accusantium.

                    </div>
                </div>
            </Container>
        </Section>
    )
}

export default MainContent