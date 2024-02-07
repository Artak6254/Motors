export function PartnersContent({ partnersLabel, partners }) {
  return (
    <>
      <div className='w-full flex justify-center items-center pt-[7rem] mb-[4rem]'>
        <h2 className='text-red-600 text-[2rem] pt-[40px] font-bold'>{partnersLabel.title}</h2>
      </div>

      {
        partners.map(item => (
          <div
            className='flex flex-col-reverse lg:flex-row justify-center last:mb-5 items-center'
            key={item.id}
          >

            <div className='flex-shrink-0 w-full lg:w-1/2 lg:order-2'>
              <img
                src={`${item?.image}`}
                alt='Image'
                className='rounded-md object-cover w-full h-full'
              />
            </div>

            <div
              className={`${!item.reversed
                ? 'lg:order-1  lg:w-[45%] w-[90%]  mx-auto text-center'
                : 'text-center lg:w-[45%] w-[90%] mx-auto  lg:order-2'
                }`}
            >
              <h2 className='text-[19px] font-extrabold text-red-500 pt-[2rem] mb-4'>
                {item.title}
              </h2>
              <p className='text-gray-700 text-sm'>
                {item.description}
              </p>

              <button className='group inline-block border-2 border-red-500 py-2 px-5 my-10 text-md font-bold text-lg'>
                <a 
                  target='_blank' 
                  href={item.btn_text.route} 
                  rel='noopener noreferrer'
                  className='group-hover:border-red-600 text-red-500 group-hover:border-b-2 pb-[1px]' 
                >
                  {item.btn_text.text}
                </a>
              </button>

            </div>

          </div>
        ))
      }
    </>
  );
};
