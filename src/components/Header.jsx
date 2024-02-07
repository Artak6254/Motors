import { NavLink as Link, useNavigate } from 'react-router-dom';
import { SelectLanguage } from './SelectLanguage';

export function Header({ navbar }) {
  const navigate = useNavigate();

  return (
    <header className='flex bg-white justify-between py-2 px-24 shadow-xl border-b border-red-600 items-center fixed t-0 w-full z-50'>
      
      <div className='w-24 cursor-pointer' onClick={() => navigate('/')}>
        <img className='w-full' src='images/logo.jpg' alt='logo-image' />
      </div>

      <div className='flex'>
        <nav className='flex'>
          {
            navbar.map((item, index) => (
              <div key={index}>
                <Link
                  to={item.route} key={item.id}
                  className='group text-md font-bold text-lg px-[.5rem] active:text-red-600'
                >
                  <span className='group-hover:border-red-600 group-hover:border-b-2'>
                      {item.title}
                  </span>
                </Link>

                {
                  item.sub_navbar.length > 0 && item.sub_navbar.map(el => (
                    <Link
                      to={el.route}
                      key={el.id}
                      className='hidden'
                    >
                      {el.sub_title}
                    </Link>
                  ))
                }
              </div>
            ))
          }
        </nav>

        <SelectLanguage />
      </div>
    </header>
  )
}

