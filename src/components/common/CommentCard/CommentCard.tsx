import { Comment } from '@/types'
import { Avatar, Card } from 'antd'
import { MessageCircleMore, User } from 'lucide-react'
import moment from 'moment'
import Image from 'next/image'
import React from 'react'

interface CommentCardProps {
    data: Comment
}

const CommentCard: React.FC<CommentCardProps> = ({ data }) => {
    return (
        <Card size='small'>
            <div
                className="flex flex-col items-start justify-center gap-2"
            >
                <div className="flex items-center justify-start gap-4 w-full">
                    <div className="w-auto min-w-min">
                        <Avatar
                            src={data?.name}
                            alt={data?.name}
                            size={65}
                        />
                    </div>

                    <div className="w-auto">
                        <h4 className='leading-tight text-sm text-muted font-semibold capitalize line-clamp-2'>{data?.name}</h4>
                        <p className='text-sm text-gray-500'>{data?.email}</p>
                        <span className='text-xs text-gray-600 font-light'>{moment(data?.createdAt).format('ll')}</span>
                    </div>
                </div>

                <div className="w-full">
                    <p className='mt-3 leading-snug'>{data?.body}</p>
                </div>
            </div>
        </Card>
    )
}

export default CommentCard