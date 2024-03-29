import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const sectionVariants = cva("w-full", {
    variants: {
        variant: {
            default: "py-16 md:py-22",
            tight: "py-10 md:py-26",
            relaxed: "py-20 md:py-24",
        },
        bg: {
            light: 'bg-foreground',
            dark: 'bg-background',
            default: 'bg-muted',
        }
    },
    compoundVariants: [{
        variant: "default",
        bg: "default"
    }],
    defaultVariants: {
        variant: "default",
        bg: "default"
    },
})

export interface SectionProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof sectionVariants> { }

const Section: React.FC<SectionProps> = (
    ({ className, variant, bg, ...props }) => {
        const Comp: React.ComponentType<React.HTMLAttributes<HTMLDivElement>> | any = "section"
        return (
            <Comp
                className={cn(sectionVariants({ variant, bg, className }))}
                {...props}
            />
        )
    }
)
Section.displayName = "Section"

export { sectionVariants }
export default Section 