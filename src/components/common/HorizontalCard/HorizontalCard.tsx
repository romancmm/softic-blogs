import { Card } from 'antd'
import { MessageCircleMore, User } from 'lucide-react'
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
                className="flex items-center justify-start gap-4"
            >
                <div className="w-1/3 h-24 bg-slate-50 overflow-hidden rounded">
                    <Image
                        src={data?.image?.thumbnailUrl}
                        alt={data?.title}
                        height={120}
                        width={220}
                        className='object-cover h-full group-hover:scale-125 transition-500ms duration-500 delay-500 ease-in-out'
                    />
                </div>
                <div className="w-2/3">
                    <h4 className='leading-tight text-sm text-muted font-semibold capitalize line-clamp-2'>{data?.title}</h4>
                    <span className=' text-xs text-gray-600 font-light'>{moment(data?.createdAt).format('ll')}</span>

                    <div className="flex justify-start items-center gap-4 mt-1 text-gray-500 text-xs">
                        <span className='flex items-center gap-1'>
                            <MessageCircleMore size={14} /> <span>{data?.numberOfComments}</span>
                        </span>
                        <span className='flex items-center gap-1'>
                            <User size={14} /> <span>{data?.user?.name}</span>
                        </span>
                    </div>
                </div>
            </div>
        </Card>
    )
}

export default HorizontalCard