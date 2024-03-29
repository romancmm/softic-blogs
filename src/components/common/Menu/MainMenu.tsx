"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
// import { Icons } from "@/components/icons"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

interface MainMenu {
    items: any[]
}

export default function MainMenu({ items }: MainMenu) {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                {items?.map((item: any, i: React.Key) => (
                    item?.children ?
                        <NavigationMenuItem key={i}>
                            <NavigationMenuTrigger>
                                <span className="text-white dark:text-gray-700">{item?.title}</span>
                            </NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className={cn(`w-[400px] p-4 md:w-[220px] lg:w-[250px]`, { ["grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]"]: item?.children?.length > 5 })}>
                                    {item?.children.map((component: any) => (
                                        <ListItem
                                            key={component.title}
                                            title={component.title}
                                            href={component.href}
                                        />
                                    ))}
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        : <NavigationMenuItem key={i}>
                            <Link href={item?.href} legacyBehavior passHref>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                    <span className="text-white dark:text-gray-700">{item?.title}</span>
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                ))}
            </NavigationMenuList>
        </NavigationMenu>
    )
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"
