'use client'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import React from 'react'

function Navbar() {
   const searchParams= useSearchParams();
   const todoFilter=searchParams.get('todos')
    return (
        <nav  className=' w-1/2 mx-auto flex gap-10 transition-all  duration-100  font-mono font-bold md:text-2xl my-6 justify-center border-b-[1px]    '>
            <Link className={`p-2  transition-all  duration-150  ${todoFilter===null?'border-b-4 border-green-500':""}`} href={'/'}>All</Link>
            <Link href={'/?todos=active'} className={` p-2 transition-all  duration-150  ${todoFilter==='active'?' border-b-4 border-green-500':""}`}>Active</Link>
            <Link href={'/?todos=complete'} className={` p-2  transition-all  duration-150 ${todoFilter==='complete'?'border-b-4 border-green-500':""}`}>Completed</Link>
        </nav>
    )
}

export default Navbar