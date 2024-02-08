import { useNavigate } from 'react-router-dom';

export function Footer({ footer }) {
    const navigate = useNavigate();

    return (
        <footer className={`bg-black flex py-10 lg:px-[6rem] px-[6rem] lg:flex justify-between items-center max-md:flex max-md:flex-col max-md:justify-center`}>
            <div className='w-24' onClick={() => navigate('/')}>
                <img className='w-full cursor-pointer' src='images/logo.jpg' alt='logo-image' />
            </div>

            <div className='text-center text-white text-lg'>
                <p>{footer.title}</p>

                <div>
                    <a href='https://www.facebook.com/primemotorsAM/' target='_blank' rel='noopener noreferrer'>
                        <i className='fab fa-facebook mx-2 hover:text-red-500'></i>
                    </a>

                    <a href='https://www.instagram.com/prime_motors_llc/' target='_blank' rel='noopener noreferrer'>
                        <i className='fab fa-instagram mx-2 hover:text-red-500'></i>
                    </a>
                </div>
            </div>
        </footer>
    );
}
