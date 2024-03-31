import Link from 'next/link'
import React from 'react'
import { Logo } from '@/components/icons'
import { MainMenu } from '@/components/common/Menu'
import MobileMenu from '@/components/common/Menu/MobileMenu'

interface NavbarProps {
    items: any[]
}

export const Navbar: React.FC<Readonly<NavbarProps>> = ({ items }) => {

    return (
        <nav className='flex justify-between items-center'>
            <Link href={'/'}>
                <Logo height={60} width={200} />
            </Link>
            <div className="">
                <div className="hidden md:block">
                    <MainMenu items={items} />
                </div>
                <div className="block md:hidden">
                    <MobileMenu items={items} />
                </div>
            </div>
        </nav>
    )
}
