import Icon from '@/components/icons'
import { useAppDispatch } from '@/store/hooks'
import { deletePost } from '@/store/postsSlice'
import { Button, Card, Modal } from 'antd'
import { MessageCircleMore, User } from 'lucide-react'
import { ExclamationCircleFilled } from '@ant-design/icons';
import moment from 'moment'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { PostwithProperty } from '@/types'
const { confirm } = Modal;
interface HorizontalCardProps {
    data: PostwithProperty
}

const HorizontalCard: React.FC<HorizontalCardProps> = ({ data }) => {
    const dispatch = useAppDispatch();

    const showConfirm = (id: string) => {
        confirm({
            title: 'Delete the Post?',
            icon: <ExclamationCircleFilled />,
            content: 'Do you want to parmamenty delete the item?',
            okText: 'Delete',
            okType: 'danger',
            okButtonProps: { type: "primary" },
            onOk: () => handleDeletePost(id),
        });
    };

    const handleDeletePost = (postId: string) => {
        dispatch(deletePost(postId));
    };

    return (
        <Card hoverable size='small' className='h-full group relative overflow-hidden'>
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

                    <Link href={`/posts/${data?.id}`}>
                        <h4 className='leading-tight text-sm text-muted font-semibold capitalize line-clamp-2'>
                            {data?.title}
                        </h4>
                    </Link>
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

            <div className="h-full w-1/3 p-4 absolute -left-full bottom-0 group-hover:left-0 bg-gray-500 bg-opacity-10 backdrop-blur-sm transition-500ms duration-500 delay-500 ease-in-out rounded-l-lg flex items-center justify-center">
                <Button
                    danger
                    size='middle'
                    type='primary'
                    onClick={() => showConfirm(data?.id)}
                >
                    <Icon name='trash' size={16} />
                </Button>
            </div>
        </Card >
    )
}

export default HorizontalCard