import { useState } from 'react';
import { NavLink as Link, useNavigate } from 'react-router-dom';
import { SelectLanguage } from './SelectLanguage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { NavbarRight } from './NavbarRight';

export function Header({ navbar }) {
  const [showNavbarRight, setShowNavbarRight] = useState(false);
  const [showSubNavbar, setShowSubNavbar] = useState(false);
  const navigate = useNavigate();

  return (
    <header
      className='flex bg-white justify-between py-2 xl:px-24 md:px-[2rem] px-[2rem] sm:px-[2rem] shadow-xl border-b border-red-600 items-center fixed t-0 w-full z-50'
      onMouseLeave={() => setShowSubNavbar(false)}
    >

      <div className='w-24 cursor-pointer' onClick={() => navigate('/')}>
        <img className='w-full' src='images/logo.jpg' alt='logo-image' />
      </div>

      <div className='flex'>
        <nav className='xl:flex md:hidden sm:hidden hidden'>
          {
            navbar.map((item, index) => (
              <div
                className='relative'
                key={item.id}
                onMouseMove={() => setShowSubNavbar(true)}
              >

                <Link
                  to={item.route} key={item.id}
                  className='group text-md font-bold text-lg px-[.5rem] active:text-red-600'
                >
                  <span className='group-hover:border-red-600 group-hover:border-b-2'>
                    {item.title}
                  </span>
                </Link>

                {
                  showSubNavbar && <div 
                    key={index} 
                    className='fixed top-[90px] left-0 right-0 pr-[64px] bg-red-500 text-end'
                  >

                    {
                      item.sub_navbar.length > 0 && item.sub_navbar.map(el => (
                        <Link
                          to={el.route}
                          key={el.id}
                          className='inline-block text-slate-300 mb-[10px] mt-[10px] px-[30px] hover:text-white border-r last:border-0 focus:text-white'
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

        <SelectLanguage />

        <div className="xl:hidden md:block w-[25px] text-center ml-[15px]">
          <FontAwesomeIcon
            icon={faBars}
            onClick={() => setShowNavbarRight(!showNavbarRight)}
            className='text-[20px] pt-[5px] text-red-500 cursor-pointer hover:text-black'
          />
        </div>

        {
          showNavbarRight && <NavbarRight
            navbar={navbar}
            setShowNavbarRight={setShowNavbarRight}
          />
        }
      </div>
    </header>
  )
}

