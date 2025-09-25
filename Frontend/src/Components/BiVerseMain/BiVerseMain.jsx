import React, { useState, useRef } from 'react'
import html2canvas from 'html2canvas'
import Loading from '../../Loading/Loading'
import { BiSolidBible, BiCamera } from "react-icons/bi";
import { Api } from '../../Api/Api.js';

const BiVerseMain = () => {
    const [bible, setBible] = useState(null)
    const [loading, setLoading] = useState(false)
    const verseRef = useRef(null);
    const [show, setShow] = useState(true)
    const handleGenerate = async () => {
        setLoading(true)
        setBible(null)
        try {
            setShow(false)
            const data = await Api.get('/bible')
            console.log(data)
            setBible(data.data.data.text)
            setLoading(false)
        } catch (err) {
            setLoading(false)
        }
    }
    const handleScreenshotSimple = async () => {
        if (!verseRef.current) return;

        try {
            const originalStyle = verseRef.current.style.cssText;
          


            // // Apply consistent positioning for screenshot
            // verseRef.current.style.position = 'relative';
            // verseRef.current.style.top = '0';
            // verseRef.current.style.left = '0';
            // verseRef.current.style.margin = '0';
            // verseRef.current.style.transform = 'none';

        await new Promise(resolve => setTimeout(resolve, 50));
            const canvas = await html2canvas(verseRef.current, {
                backgroundColor: null,
                scale: 2,
                useCORS: true,
                allowTaint: false
            });

            verseRef.current.style.cssText = originalStyle;

            const image = canvas.toDataURL('image/png');
            const link = document.createElement('a');
            link.download = `bible-verse-${new Date().getTime()}.png`;
            link.href = image;
            link.click();
        } catch (error) {
            console.error('Error taking screenshot:', error);
        }
    }

    return (
        <div className='w-full h-full flex items-center justify-center bg-[var(--main-light)] dark:bg-[var(--main-dark)]'>
            <div className="main-mini w-auto h-auto flex flex-col gap-6 items-center">
                <div className={`${show ? 'block' : 'hidden'} w-[90%] sm:w-[70%] md:w-[60%] h-auto text-center`}>
                    <h1 className={`${bible ? 'hidden' : 'block'} md:text-5xl text-2xl font-bold text-[#474747] dark:text-[#fff]`}>
                        Find Daily <span className='text-[#ff6d38]'>Strength</span> and <span className='text-[#ff6d38]'>Guidance</span> through Bible Verses from the <span className='text-[#ff6d38]'>King James Version (KJV)</span>
                    </h1>
                </div>
                
                {loading && <Loading/>}
                
                {bible && bible.map((b, i) => {
                    return (
                        <div key={b.book_id} className="relative">
                            <div 
                                ref={verseRef}
                                className='bible-verse sm:w-[80%] w-[95%] md:w-[400px] h-auto shadow-[var(--bible-light)] dark:shadow-[var(--bible-dark)] p-6 rounded-[10px] flex flex-col gap-2 bg-white dark:bg-[#232323]'
                                
                            >
                                
                                <div className="w-full h-auto flex justify-center items-center font-bold  ">
                                  <div className="bible-header flex items-center p-3">
                                <div className="w-10 h-10 flex items-center justify-center">
                                <BiSolidBible className="text-4xl text-[#4e4e4e] dark:text-[#ffffff] relative top-[3px]" />
                                </div>
                                <h1 className="text-[1.9rem] md:text-[1.6rem] text-[#ff6d38] leading-none">
                                    <span className="text-[#4e4e4e] dark:text-[#ffffff]">Bible</span>Verse
                                </h1>
                                </div>
                                                                </div> 
                                <div className="book-name flex items-center text-[#ff6d38] gap-2">
                                    <h1 className='font-semibold text-[1.5rem] md:text-[1.3rem]'>
                                        {b.bookname} <span className='text-[1rem]'>{b.chapter}:{b.startingverse}</span>
                                    </h1>
                                    <h1 className='font-semibold text-[.8rem]'>({b.translation})</h1>

                                </div>
                                <div className="book-text">
                                    <p className='text-[#6f6f6f] dark:text-[#c8c8c8]'>{b.text}</p>
                                </div>
                            </div>
                            
                            {/* Screenshot Button */}
                            {bible && (
                                <button 
                                    onClick={handleScreenshotSimple} 
                                    className='
                                        mt-4 
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
                                        text-[1.2rem]
                                        cursor-pointer
                                        flex items-center justify-center gap-2
                                        mx-auto
                                    '
                                >
                                    <BiCamera/> 
                                </button>
                            )}
                        </div>
                    )
                })}
                
                {!loading && (
                    <div className="mini-botton">
                        <button 
                            className='
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
                            ' 
                            onClick={handleGenerate}
                        >
                            <BiSolidBible/> {bible ? 'Another' : 'Get'} Bible Verse
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default BiVerseMain