
import { Container } from '@/components/common'
import React from 'react'

export const Header = () => {
    return (
        <header className='sticky top-0 bg-white bg-opacity-25 backdrop-blur text-gray-900 py-2'>
            <Container variant={"fluid"}>
                <div className="bg-white">
                    Header
                </div>
            </Container>
        </header>
    )
}
