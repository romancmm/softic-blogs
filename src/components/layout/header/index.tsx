
import { Container } from '@/components/common'
import React from 'react'
import { Navbar } from './navbar'
import { siteConfig } from '@/config/site'

export const Header = () => {
    // const items = siteConfig?. 
    return (
        <header className='sticky top-0 bg-white bg-opacity-25 backdrop-blur text-gray-900 py-2'>
            <Container variant={"fluid"}>
                <Navbar  />
            </Container>
        </header>
    )
}
