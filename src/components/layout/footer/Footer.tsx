import React from 'react'
import { Container } from '@/components/common';
import { siteConfig } from '@/config/site';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className='bg-background py-24'>
            <Container variant={"fluid"}>
                <div className="flex flex-col gap-10 justify-center items-center">
                    <div className="">
                        <ul className='flex gap-6'>
                            {
                                siteConfig?.mainNav?.map((item, i) => (
                                    <li key={i}>
                                        <Link href={item?.href} className='text-sm font-light uppercase p-2'>{item?.title}</Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <span className='text-xs font-thin uppercase text-gray-400'>{siteConfig?.copyright}</span>
                </div>
            </Container>
        </footer>
    )
}

export default Footer