import { BannerBlogCard } from '@/components/common'
import React from 'react'

const BannerLeft = () => {
    const data = [{}]
    return (
        data?.map((data) => <BannerBlogCard data={data} />)
    )
}

export default BannerLeft