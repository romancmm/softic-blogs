import { Container, Section } from '@/components/common'
import React from 'react'
import BannerLeft from './BannerLeft'

function MainBanner() {
    return (
        <Section variant={"tight"} bg={"light"}>
            <Container>
                <div className="grid grid-cols-3 gap-6">
                    <BannerLeft />
                </div>
            </Container>
        </Section>
    )
}

export default MainBanner