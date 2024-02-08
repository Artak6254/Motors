import { useState } from 'react';
import { NavLink as Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

export function NavbarRight({ navbar, setShowNavbarRight }) {
    const [showSubNavbar, setShowSubNavbar] = useState(false);

    return (
        <div className="w-[300px] bg-black absolute top-0 right-0 bottom-0 h-[100vh] p-[20px]">

            <div className="text-end">
                <FontAwesomeIcon 
                  className='text-white cursor-pointer text-[1.4rem]' 
                  onClick={() => setShowNavbarRight(false)} icon={faCircleXmark} 
                />
            </div>

            <nav className='text-[1.5rem] font-bold text-white mx-[10px] my-[20px] relative'>
                {
                    navbar.map((item, index) => (
                        <div key={item.id}>
                            <Link
                                to={item.route} key={item.id}
                                className='mx-[0px] inline-block my-[10px] hover:text-red-600'
                                onClick={() => setShowNavbarRight(false)}
                            >
                                {item.title}

                                {
                                    item.sub_navbar.length > 0 && <FontAwesomeIcon
                                        className='absolute right-0 top-[18px] text-[1rem]'
                                        onMouseOver={() => setShowSubNavbar(true)}
                                        onClick={() => { setShowSubNavbar(!showSubNavbar) }}
                                        icon={showSubNavbar ? faChevronUp : faChevronDown}
                                    />
                                }
                            </Link>


                            {
                                showSubNavbar && <div key={index} className='bg-red-600'>
                                    {
                                        item.sub_navbar.length > 0 && item.sub_navbar.map(el => (
                                            <Link
                                                to={el.route}
                                                key={el.id}
                                                onClick={() => setShowNavbarRight(false)}
                                                className='inline-block text-[1.1rem] p-[10px] m-0 font-normal hover:text-white focus:text-white'
                                            >
                                                {el.sub_title}
                                            </Link>
                                        ))
                                    }
                                </div>
                            }
                        </div>
                    ))
                }
            </nav>
        </div>
    )
}
