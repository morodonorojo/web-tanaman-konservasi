import React from 'react'
import Link from 'next/link'

import BackArrow from "../../assets/icon/arrow.svg"

const BackArrowHeader = ({plantName, href, ...props}) => {
  return (
    <div className='w-full flex flex-row items-center' {...props} >
        <Link href={href || '/'}>
        <div className="icon rounded-full w-6 h-6 bg-forestgreen-900 flex justify-center items-center">
            <BackArrow className="scale-[80%]"/>
        </div>
        </Link>
        <p className='text-forestgreen-900 font-bold text-base ml-1'>{plantName || 'Cemara Laut'}</p>
    </div>
  )
}

export default BackArrowHeader