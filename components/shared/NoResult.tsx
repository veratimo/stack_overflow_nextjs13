import Image from 'next/image'
import React from 'react'

const NoResult = () => {
  return (
    <div className='mt-10 flex w-full flex-col items-cente justify-center'>
        <Image 
            src='/assets/images/light-illustration.png'
            alt='No result illustration'
            width={270}
            height={200}
            className='hidden object-contain dark:flex'
        />
    </div>
  )
}

export default NoResult