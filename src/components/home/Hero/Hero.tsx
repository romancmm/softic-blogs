import React from 'react'

function Hero() {
    return (
        <div className="
        min-h-screen 
        flex 
        flex-col 
        items-center 
        justify-between
        max-h-[32rem]
        p-24
        relative
        overflow-hidden
        // z-10
       
        bg-[url('/images/bg.jpeg')] 
        bg-cover
        bg-no-repeat
        bg-center

        before:content-['']
            before:absolute
            before:inset-0
            before:block
            before:bg-gradient-to-r
            before:from-gray-800
            before:to-blue-400
            before:opacity-75
            before:z-[-5]
        ">
            <div className="flex h-screen justify-center items-center flex-col">
                <h2 className='text-6xl font-extrabold text-center drop-shadow-lg leading-tight uppercase'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h2>
            </div>
        </div>
    )
}

export default Hero