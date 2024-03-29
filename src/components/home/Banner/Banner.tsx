
import { Container, Section } from '@/components/common'
import React from 'react'
import BannerLeft from './BannerLeft'
import useGetData from '@/lib/hooks/useGetData'

async function MainBanner() {
    const data: any = await useGetData('/posts')

    return (
        <Section variant={"tight"} bg={"light"}>
            <Container>
                <div className="grid grid-cols-3 gap-6">
                    <div className=" col-span-2 flex justify-center items-center flex-col relative ">
                        <BannerLeft blogs={data} />
                    </div>
                    <div className="col-span-1 flex justify-center items-center flex-col relative "></div>

                </div>
            </Container>
        </Section>
    )
}

export default MainBanner