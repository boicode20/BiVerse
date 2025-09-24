import React, { useState,useRef } from 'react'
import axios from 'axios'
import Loading from '../../Loading/Loading'
import { BiSolidBible } from "react-icons/bi";
import { Api } from '../../Api/Api.js';


const BiVerseMain = () => {
    const [bible,setBible] =useState(null)
    const [loading,setLoading] = useState(false)
    const verseRef = useRef(null);
    const [show,setShow] = useState(true)
    const handleGenerate = async() =>{
        setLoading(true)
        setBible(null)
        try{
            setShow(false)

            const data = await Api.get('/bible')
            console.log(data)
            setBible(data.data.data.text)
            setLoading(false)
        }catch(err){
            setLoading(false)
        }
    }
    console.log(bible)

   

  return (
    <div className='w-full h-full flex items-center justify-center bg-[var(--main-light)] dark:bg-[var(--main-dark)] '>

        <div className=" main-mini w-auto h-auto flex flex-col gap-6 items-center">
            <div className={`${show?'block':'hidden'} w-[90%] sm:w-[70%] md:w-[60%] h-auto text-center`}>

            
                  <h1 className={`${bible?'hidden':'block'} md:text-5xl text-2xl font-bold text-[#474747] dark:text-[#fff]`}>Find Daily <span className='text-[#ff6d38]'>Strength</span> and <span className='text-[#ff6d38]'>Guidance</span> through Bible Verses from the <span className='text-[#ff6d38]'>King James Version (KJV)</span></h1>
            </div>
            {
                loading?<Loading/>:null
            }
            {
                bible&&bible.map((b,i)=>{
                    return (
                    <div ref={verseRef}
                         className='sm:w-[80%] w-[95%] md:w-[400px] h-auto shadow-[var(--bible-light)] dark:shadow-[var(--bible-dark)] p-6 rounded-[10px] flex flex-col gap-2 relative' key={b.book_id}>
                            <div className="version absolute right-4 text-[#ff6d38] font-semibold  text-[1.2rem] md:text-[1rem]">
                                {
                                    <h1>{b.translation}</h1>
                                }
                            </div>
                        <div className="book-name flex items-center text-[#ff6d38] gap-2">
                            <BiSolidBible className='text-2xl'/>
                            <h1 className='font-semibold  text-[1.5rem] md:text-[1.3rem] '>{b.bookname} <span className='text-[1rem]'>{b.chapter}:{b.startingverse}</span></h1>
                        </div>
                        <div className="book-text">
                            <p className='text-[#6f6f6f] dark:text-[#c8c8c8]'>{b.text}</p>
                        </div>
                   
                    </div>
                    )
                })
            }
            {
                !loading&&(<div className="mini-botton">
                <button className='
                w-auto 
                h-[35px] 
                rounded-[25px] 
                px-4 
                shadow-[var(--btn-shadow-light)]
                dark:shadow-[var(--btn-shadow-dark)]
                bg-[var(--btn-light)] 
                dark:bg-[var(--btn-dark)]
                text-[#ff6d38]
                dark:text-[#131313]
                font-semibold
                text-[.9rem]
                cursor-pointer
                flex items-center justify-center gap-2
                ' onClick={handleGenerate}><BiSolidBible/> {bible?'Another':'Get'} Bible Verse</button>
            </div>)
            }
        </div>


    </div>
  )
}

export default BiVerseMain