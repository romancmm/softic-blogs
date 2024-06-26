import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const containerVariants = cva("container", {
    variants: {
        variant: {
            default: "max-w-6xl px-4 md:px-auto",
            fluid: "max-w-full px-3 md:px-9",
        },
    },
    defaultVariants: {
        variant: "default",
    },
})

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof containerVariants> { }

const Container: React.FC<ContainerProps> = (
    ({ className, variant, ...props }) => {
        const Comp: React.ComponentType<React.HTMLAttributes<HTMLDivElement>> | any = "div"
        return (
            <Comp
                className={cn(containerVariants({ variant, className }))}
                {...props}
            />
        )
    }
)
Container.displayName = "Container"

export { containerVariants }
export default Container 