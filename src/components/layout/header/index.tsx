
import { Container } from '@/components/common'
import React from 'react'
import { Navbar } from './navbar'
import { siteConfig } from '@/config/site'

export const Header = () => {
    const items = siteConfig?.mainNav
    return (
        <header className='sticky top-0 bg-white bg-opacity-5 backdrop-blur text-gray-900 py-2 z-40'>
            <Container variant={"fluid"}>
                <Navbar items={items} />
            </Container>
        </header>
    )
}
