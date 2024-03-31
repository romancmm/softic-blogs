'use client'
import { BlogCard, HorizontalCard, LoaderTwo } from '@/components/common'
import { PostwithProperty } from '@/types'
interface ContentLeftProps {
    items: PostwithProperty[],
    isLoading: boolean
}

const ContentLeft: React.FC<ContentLeftProps> = ({ items, isLoading }) => {
    if (isLoading) return <LoaderTwo />
    return (
        <div className="grid grid-cols-none md:grid-cols-2 grid-rows-4 gap-2 md:gap-4">
            {items?.map((data: PostwithProperty, i: number) =>
                data?.id % 5 === 0
                    ? <div className="row-span-3" key={i}>
                        <BlogCard data={data} />
                    </div>
                    : <HorizontalCard key={i} data={data} />
            )}
        </div>
    )
}

export default ContentLeft