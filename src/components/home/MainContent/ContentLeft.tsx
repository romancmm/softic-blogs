
import { BlogCard, HorizontalCard } from '@/components/common'

const ContentLeft = ({ blogs }: any | any[]) => {

    return (
        <div className="grid grid-cols-2 grid-rows-4 flex-wrap gap-4">
            {blogs?.map((data: any, i: number) =>
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