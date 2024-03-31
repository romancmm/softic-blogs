import { Card } from 'antd'
import moment from 'moment'
import Image from 'next/image'
import React from 'react'

interface HorizontalCardProps {
    data: any
}

const HorizontalCard: React.FC<HorizontalCardProps> = ({ data }) => {
    return (
        <Card hoverable size='small' className='h-full'>
            <div
                className="flex items-center justify-start gap-4 border-gray-200 border-spacing-6 border-separate border-dashed last:border-none group"
            >
                <div className="w-1/3 h-20 bg-slate-50 overflow-hidden rounded">
                    <Image
                        src={data?.image?.thumbnailUrl}
                        alt={data?.title}
                        height={100}
                        width={150}
                        className='object-cover h-full group-hover:scale-125 transition-500ms duration-500 delay-500 ease-in-out'
                    />
                </div>
                <div className="w-2/3">
                    <h4 className='leading-tight text-sm text-muted font-semibold capitalize'>{data?.title}</h4>
                    <span className=' text-xs text-gray-600 font-light'>{moment(data?.createdAt).format('ll')}</span>
                </div>
            </div>
        </Card>
    )
}

export default HorizontalCard