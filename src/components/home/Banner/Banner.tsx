import { Container, Section } from '@/components/common'
import React from 'react'
import Image from 'next/image'

function MainBanner() {
    return (
        <Section variant={"tight"} bg={"light"}>
            <Container>
                <div className="grid grid-cols-3 gap-6">
                    <div className="
                        col-span-2 flex justify-center items-center flex-col relative 
                        bg-white dark:bg-gray-700 rounded-md md:rounded-xl overflow-hidden shadow-md hover:shadow-lg group 
                        before:w-full before:h-full before:bg-gradient-to-t before:to-50% before:from-gray-800 hover:before:bg-gradient-to-t hover:before:to-40% hover:before:from-gray-800 before:absolute before:rounded-xl before:z-10
                    ">
                        <div className="w-full overflow-hidden rounded-md z-0 aspect-video">
                            <Image
                                src={'/images/bg.jpeg'}
                                alt=''
                                height={500}
                                width={800}
                                className='block mx-auto w-full object-cover min-h-20 group-hover:scale-110 transition-500ms duration-500 delay-500 ease-in-out'
                            />
                        </div>
                        <div className="absolute bottom-2 group-hover:bottom-6 transform-cpu duration-500 delay-500 ease-in-out z-10 p-6 flex flex-col gap-2">
                            <h2 className='text-xl font-bold drop-shadow-lg leading-tight'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h2>
                            <p className='font-light text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia suscipit quo nobis numquam, nemo eveniet id quia error consequuntur, itaque consequatur officia beatae perspiciatis, minima quasi ad dolorem vero et.</p>
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    )
}

export default MainBanner