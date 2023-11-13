'use client'
import React from 'react'
import { useTheme } from '@/context/ThemeProvider'
import { themes } from '@/constants/constants'

import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
  } from "@/components/ui/menubar"
import Image from 'next/image'

const Theme = () => {
    const { mode, setMode } = useTheme();

  return (
    <Menubar className='relative border-none bg-transparent shadow-none'>
        <MenubarMenu>
            <MenubarTrigger>
                {mode === 'light' ? (
                    <Image 
                        src="/assets/icons/sun.svg"
                        alt="sun" 
                        width={20} 
                        height={20}
                        className="active-theme"
                    />    
                ): (
                    <Image 
                    src="/assets/icons/moon.svg"
                    alt="moon" 
                    width={20} 
                    height={20}
                    className='active-theme'
                /> 
                )}
            </MenubarTrigger>
            <MenubarContent className='absolute right-[-3rem] mt-3 min-w-[120px] rounded border py-2 dark:border-dark-400 dark:bg-dark-300'>
                    {themes.map((item) => (
                        <MenubarItem
                            key={item.value}
                            onClick={() => {}}
                        >
                            <Image 
                                src={item.icon}
                                alt={item.value}
                                width={16}
                                height={16}
                                className={`${mode === item.value && 'active-theme'}`}
                            />
                        </MenubarItem>
                    ))}
            </MenubarContent>
        </MenubarMenu>
    </Menubar>

  )
}

export default Theme