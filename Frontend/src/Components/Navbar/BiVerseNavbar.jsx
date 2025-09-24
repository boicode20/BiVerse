import React from 'react'
import ThemeToggle from '../Themes/ThemeToggle'
import { BiBible } from "react-icons/bi";

const BiVerseNavbar = () => {
  return (
    <div className='navbar w-full h-full flex justify-between items-center sm:px-6 px-4 md:px-10 bg-[var(--nav-light)] dark:bg-[var(--nav-dark)] shadow-[var(--nav-shadow-light)] dark:shadow-[var(--nav-shadow-dark)]
    '>
        <div className="nav-logo flex items-center gap-1 text-2xl font-semibold">
            <BiBible className='text-2xl text-[var(--nav-h1-light)] dark:text-[var(--nav-h1-dark)]'/>
            <h1 className='text-[var(--nav-h1-light)] dark:text-[var(--nav-h1-dark)]'>Bi<span className='text-[#ff6d38]'>Verse</span></h1>
        </div>
        <div className="nav-dark-toggle">
            <ThemeToggle/>
        </div>
    </div>
  )
}

export default BiVerseNavbar