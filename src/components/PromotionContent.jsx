export function PromotionContent({ promotionLabel, promotion }) {
  return (
    <div className='max-w-[1100px] mx-auto'>
      <div className='w-full flex justify-center items-center pt-[7rem] -mb-[50px]'>
        <h2 className='text-red-600 text-[2rem] pt-[40px] font-bold'>
          {promotionLabel.title}
        </h2>
      </div>


      <div className='lg:flex md:flex block justify-center items-center gap-6 w-full h-[100vh]'>
        {
          promotion.map(el => (
            <div key={el.id} className='border border-red-700 lg:py-[3rem] md:py-[2rem] p-1 lg:w-full lg:my-0 lg:m-0 w-[80%] my-[1rem] mx-auto'>
              <div className="bg-white flex flex-col justify-center items-center w-full rounded-lg font-[sans-serif]">
                <img src={`${el.image}`} className="w-[350px]" alt="Image" />
                <div className="px-4 py-6">
                  <h3 className="text-[#333] text-xl text-center font-bold">{el.title}</h3>
                  <p className="mt-4 text-sm text-gray-500 text-center">
                    {el.description}
                  </p>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

