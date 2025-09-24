import React from 'react'

const BiVerseFooter = () => {
  return (
    <div className='w-full h-full bg-[var(--footer-light)] dark:bg-[var(--footer-dark)] flex items-center justify-center text-[.8rem] text-[#5d5d5d] dark:text-[#c2c2c2]'> © {new Date().getFullYear()}  <span className="font-semibold"> BiVerse</span>. All rights reserved.</div>
  )
}

export default BiVerseFooter