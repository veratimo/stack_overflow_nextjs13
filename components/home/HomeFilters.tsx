'use client'
import { HomePageFilters } from '@/constants/filters'
import React from 'react'
import { Button } from '../ui/button'

const HomeFilters = () => {
  return (
    <div className='mt-10 hidden flex-wrap gap-3 md:flex'>
        {HomePageFilters.map((item) => (
            <Button key={item.value} onClick={() => {}}>
                {item.name}
            </Button>
        ))}
    </div>
  )
}

export default HomeFilters