export function BlogContent({ blogsLabel, blogs }) {
  return (
    <div className='flex flex-wrap justify-center items-center pt-[10rem]'>

      <h2 className='text-center text-3xl text-red-500 font-bold mb-10'>
        {blogsLabel.title}
      </h2>

      {
        blogs.map(el => (
          <div key={el.id} className='border-b border-t border-red-500 text-[#333] w-full p-4 rounded font-[sans-serif] overflow-hidden mb-4'>
            <div className='flex justify-around flex-wrap items-center'>
              <div className='w-full lg:w-2/3 py-10 px-6'>
                <h3 className='text-xl font-bold'>{el.title}</h3>
                <p className='mt-4 text-sm text-gray-400'>{el.description}</p>
                <p className='mt-4 text-sm text-gray-400'>{el.date}</p>
              </div>
              <div className='w-[240px] h-[220px] hidden lg:block'>
                <img src={el.image} className='w-full h-full' />
              </div>
            </div>
          </div>
        ))
      }
    </div>
  );
}
