'use client'
import moment from 'moment'
import Image from 'next/image'

const BannerRight = ({ blogs }: any | any[]) => {

    return (
        <div className="flex flex-col gap-1 border border-gray-200 p-4 rounded-xl">
            {blogs?.slice(5, 10)?.map((data: any, i: React.Key) =>
                <div
                    key={i}
                    className="flex items-start justify-start gap-4 py-1.5 border-b border-gray-200 border-spacing-6 border-separate border-dashed last:border-none last:pb-0 group"
                >
                    <div className="w-1/3 h-16 bg-slate-50 overflow-hidden rounded">
                        <Image src={'/images/bg.jpeg'} alt={data?.title} height={75} width={100} className='object-cover h-full group-hover:scale-125 transition-500ms duration-500 delay-500 ease-in-out' />
                    </div>
                    <div className="w-2/3">
                        <h4 className='leading-tight text-sm text-muted font-semibold capitalize'>{data?.title}</h4>
                        <span className=' text-xs text-gray-600 font-light'>{moment(data?.createdAt).format('ll')}</span>
                    </div>
                </div>
            )}
        </div>
    )
}

export default BannerRight