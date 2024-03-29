import Link from 'next/link'
import React from 'react'
import { ColoredLogo } from '@/components/icons'
import { MainMenu } from '@/components/common/Menu'

interface NavbarProps {
    items: any[]
}

export const Navbar: React.FC<Readonly<NavbarProps>> = ({ items }) => {
    return (
        <nav className='flex justify-between items-center'>
            <Link href={'/'}>
                {/* <Image src={siteConfig?.logo?.default} alt={siteConfig?.name} width={250} height={80} /> */}
                <ColoredLogo height={55} width={250} />
            </Link>
            <div className="">
                <div className="">
                    <MainMenu items={items} />
                </div>
            </div>
        </nav>
    )
}
