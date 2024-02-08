import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Animated } from 'react-animated-css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

export function Slider({ slider }) {
    const [currentSlide, setCurrentSlides] = useState(1);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 7000);

        return () => clearInterval(interval);
    }, [currentSlide]);

    const nextSlide = () => {
        if (currentSlide !== slider.length) {
            setCurrentSlides(currentSlide + 1);
        } else {
            setCurrentSlides(1);
        }

        titleAnimations();
    }

    const prevSlide = () => {
        if (currentSlide !== 1) {
            setCurrentSlides(currentSlide - 1);
        } else {
            setCurrentSlides(slider.length);
        }

        titleAnimations();
    }

    const moveCircle = (index) => {
        setCurrentSlides(index);
        titleAnimations();
    }

    const titleAnimations = () => {
        setVisible(false);
        setTimeout(() => setVisible(true), 1000);
    }

    return (
        <div className='w-full h-screen'>
            {
                slider.map((slide, index) => (
                    <div
                        key={slide.id}
                        style={{ backgroundImage: `url(${slide.image})` }}
                        className={currentSlide === (index + 1) ? 'opacity-1 w-full h-full absolute top-0 -z-10 text-center flex items-center flex-col justify-center bg-cover bg-no-repeat bg-center transition-timing-function: linear' : 'transition-timing-function: linear opacity-0 w-full h-full absolute text-center flex items-center flex-col justify-center bg-cover bg-no-repeat bg-center'}
                    >
                        <Animated animationIn='fadeIn' animationOut='fadeOut' isVisible={visible}>
                            <h3 className={`text-center drop-shadow-lg text-white text-shadow uppercase relative z-10 text-6xl w-[65rem] leading-relaxed font-bold`}>
                                {slide.title}
                            </h3>

                            <Link to={slide.btn_text.route} className='inline-block px-10 mt-10 font-bold text-white cursor-pointer py-5 tracking-wider bg-red-500 hover:text-slate-500 absolute left-[50%] z-50 translate-x-[-50%]'>
                                {slide.btn_text.text}
                            </Link>
                        </Animated>
                    </div>
                )
                )
            }

            <button
                onClick={nextSlide}
                className={`w-12 h-12 bg-transparent absolute top-1/2 border-none cursor-pointer text-slate-300 text-lg hover:text-slate right-4`}
            >
                <FontAwesomeIcon icon={faChevronRight} />
            </button>

            <button
                onClick={prevSlide}
                className={`w-12 h-12 bg-transparent absolute top-1/2 border-none cursor-pointer text-slate-300 text-lg hover:text-slate left-4`}
            >
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>

            <div className='flex gap-3 -z-10 absolute bottom-8 left-1/2 transform -translate-x-1/2'>
                {slider.map((obj, index) => (
                    <div
                        key={obj.id}
                        onClick={() => moveCircle(index + 1)}
                        className={`circle ${currentSlide === (index + 1) ? 'cursor-pointer w-[13px] h-[13px] rounded-full bg-slate-500' : 'cursor-pointer bg-white w-[13px] h-[13px] rounded-full'}`}
                    />
                ))}
            </div>
        </div>
    )
}
