
import { BlogCard } from '@/components/common'

const ContentLeft = ({ blogs }: any | any[]) => {

    return (
        <div className="grid grid-cols-2 gap-4">
            {blogs?.map((data: any, i: React.Key) =>
                <BlogCard data={data} />
            )}
        </div>
    )
}

export default ContentLeft