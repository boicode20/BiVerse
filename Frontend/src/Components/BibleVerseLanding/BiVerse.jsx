import React from 'react'
import BiVerseNavbar from '../Navbar/BiVerseNavbar'
import BiVerseMain from '../BiVerseMain/BiVerseMain'
import BiVerseFooter from '../BiVerseFooter/BiVerseFooter'
const BiVerse = () => {
  return (
    <div className='w-full h-dvh grid grid-cols-1 grid-rows-[70px_1fr_50px]'>
        <BiVerseNavbar/>
        <BiVerseMain/>
        <BiVerseFooter/>
    </div>
  )
}

export default BiVerse