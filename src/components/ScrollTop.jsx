import { useEffect, useState } from 'react';
import { animateScroll as scroll } from 'react-scroll';

export function ScrollTop() {
    const [showBtn, setShowBtn] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', scrollTopFunc);
    }, [])

    const scrollTopFunc = () => {
        if (window.scrollY > 320) {
            setShowBtn(true);
        } else {
            setShowBtn(false);
        }
    }

    const handlerScrollTopFunc = () => {
        scroll.scrollToTop();
    }

    return showBtn && (
        <div className='fixed bottom-8 right-8 z-50 text-xl border-2 border-solid border-red-600 rounded-full text-slate-600 px-5 py-3 text-lightGray cursor-pointer hover:bg-red-600 hover:border-gold hover:text-white' onClick={handlerScrollTopFunc}>
            <i className='fa-solid fa-arrow-up'></i>
        </div>
    )
}
