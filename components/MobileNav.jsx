'use client'

import { Sheet ,SheetContent,SheetTrigger } from "./ui/sheet"
import { usePathname } from "next/navigation"
import Link from "next/link"
import {CiMenuFries} from 'react-icons/ci'


const links = [
    {
        name:'home',
        path:'/'
    }, {
        name:'resume',
        path:'/resume'
    }, {
        name:'projects',
        path:'/projects'
    },
    {
        name:'contact',
        path:'/contact'
    },
]

const MobileNav = () => {
      const pathname = usePathname()

  return (
    <Sheet>
      
      <SheetTrigger className="flex justify-center items-center">
<CiMenuFries className="text-[32px] text-accent"/>
      </SheetTrigger>
      <SheetContent className='flex flex-col'> contactt</SheetContent>

    </Sheet>
  )
}

export default MobileNav