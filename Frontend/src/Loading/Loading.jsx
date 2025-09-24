import React from 'react'

const Loading = () => {
  return (
    <div className='loading w-full h-auto flex items-center justify-center p-4 flex-col gap-2 text-[1rem] text-[#464646] dark:text-[#f2f2f2]'>
        <div className="loader"></div>
        Loading...
    </div>
  )
}

export default Loading