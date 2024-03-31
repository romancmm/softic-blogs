'use client'
import { BlogCard, HorizontalCard, LoaderTwo } from '@/components/common'
interface ContentLeftProps {
    items: any[]
}

const ContentLeft: React.FC<ContentLeftProps> = ({ items }) => {


    return (
        <div className="grid grid-cols-none md:grid-cols-2 grid-rows-4 gap-2 md:gap-4">
            {items?.map((data: any, i: number) =>
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