"use client"

import * as React from "react"
import Link from "next/link"
import { Button } from '@/components/ui/button'
import { Drawer, Menu } from 'antd'
import { Menu as MenuIcon } from 'lucide-react'

interface MobileMenuProps {
    items: any[]
}

export default function MobileMenu({ items }: MobileMenuProps) {
    const [open, setOpen] = React.useState(false);

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };
    return (
        <>
            <Button variant={"ghost"} onClick={showDrawer}>
                <MenuIcon />
            </Button>
            <Drawer title="Main Menu" onClose={onClose} open={open}>
                <Menu
                    mode="inline">
                    {
                        items?.map((data, i: React.Key) =>
                            <Menu.Item key={i}>
                                <Link href={data?.href}>
                                    {data?.title}
                                </Link>
                            </Menu.Item>
                        )
                    }
                </Menu>
            </Drawer>
        </>
    )
}
