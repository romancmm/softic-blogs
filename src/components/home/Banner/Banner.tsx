
import { Container, Section } from '@/components/common'
import React from 'react'
import BannerLeft from './BannerLeft'
import useGetData from '@/lib/hooks/useGetData'
import BannerRight from './BannerRight'

async function MainBanner() {
    const data: any = await useGetData('/posts')

    return (
        <Section variant={"tight"} bg={"light"}>
            <Container>
                <div className="grid grid-cols-none md:grid-cols-3 gap-6">
                    <div className="col-span-full md:col-span-2 relative overflow-hidden max-w-full">
                        <BannerLeft blogs={data?.slice(20, 25)} />
                    </div>
                    <div className="col-span-full md:col-span-1 flex justify-center items-center flex-col relative ">
                        <BannerRight />
                    </div>

                </div>
            </Container>
        </Section>
    )
}

export default MainBanner