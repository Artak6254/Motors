import { Link } from 'react-router-dom';

export function AboutUsContent({ aboutUs, aboutUsLabel }) {
    return (
        <div className='w-90 mx-auto mt-20 text-center'>
            <h2 className='text-center text-3xl text-red-500 font-bold mb-10'>
                {aboutUsLabel.title}
            </h2>

            <p className='text-center font-bold m-5 text-lg'>
                {aboutUsLabel.description?.split('/')[0]}
            </p>

            <p className='text-center font-bold m-5 text-lg'>
                {aboutUsLabel.description?.split('/')[1]}
            </p>

            <div className='px-24'>
                {aboutUs.map(item => (
                    <div key={item.id} className=''>
                        <p className='text-center py-10 mx-10'>{item.description}</p>
                        <img className='w-full' src={item.image} alt='about-image' />
                    </div>
                ))}
            </div>

            <Link
                to={'/about-us'}
                className='group inline-block border-2 border-red-500 py-2 px-5 my-10 text-md font-bold text-lg'
            >
                <span className='group-hover:border-red-600 text-red-500 group-hover:border-b-2 pb-[1px]'>
                    {aboutUsLabel.btn_text}
                </span>
            </Link>
        </div>
    );
}

