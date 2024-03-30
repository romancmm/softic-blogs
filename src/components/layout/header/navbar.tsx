import Link from 'next/link'
import React from 'react'
import { ColoredLogo, Logo } from '@/components/icons'
import { MainMenu } from '@/components/common/Menu'

interface NavbarProps {
    items: any[]
}

export const Navbar: React.FC<Readonly<NavbarProps>> = ({ items }) => {
    return (
        <nav className='flex justify-between items-center'>
            <Link href={'/'}>
                <Logo height={65} width={220} />
            </Link>
            <div className="">
                <div className="">
                    <MainMenu items={items} />
                </div>
            </div>
        </nav>
    )
}
