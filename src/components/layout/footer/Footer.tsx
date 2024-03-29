import React from 'react'
import { Container } from '@/components/common';
import { siteConfig } from '@/config/site';
import Link from 'next/link';
import Icon from '@/components/icons';
import { LucideIcon } from 'lucide-react';

const Footer = () => {
    return (
        <footer className='bg-background py-24'>
            <Container variant={"fluid"}>
                <div className="flex flex-col gap-10 justify-center items-center">
                    <div className="flex gap-4">
                        {siteConfig?.socialLinks?.map((data: { title: string, href: string, colorCode: string, icon: string | LucideIcon | any }) =>
                            <Link href={data?.href} target="_blank" key={data?.title} className='p-3 bg-muted hover:shadow-md rounded-full'>
                                <Icon name={data?.icon} size={20} color={`#fff` || data?.colorCode} />
                            </Link>
                        )}

                    </div>
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