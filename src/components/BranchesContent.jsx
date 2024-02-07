
export function BranchesContent({ branchesLabel, branches }) {

  return (
    <>
      <div className='w-full flex justify-center items-center pt-[7rem] mb-[4rem]'>
        <h2 className='text-red-600 text-[2rem] pt-[40px] font-bold'>{branchesLabel.title}</h2>
      </div>

      {
        branches.map(item => (
          <div
            className="flex flex-col-reverse lg:flex-row justify-center last:mb-5 items-center"
            key={item.id}
          >
            <div className="flex-shrink-0 w-full lg:w-1/2 lg:order-2">
              <img
                src={`${item?.image}`}
                alt="Image"
                className="rounded-md object-cover w-full h-full"
              />
            </div>

            <div
              className={`${!item.reversed
                ? "lg:order-1 lg:w-[45%]  w-[90%] mx-auto text-center"
                : "text-center lg:w-[45%] w-[90%] mx-auto  lg:order-2"
                }`}
            >
              <h2 className="text-[19px] font-extrabold text-red-500 pt-[2rem] mb-4">
                {item.title}
              </h2>
              <p className="text-gray-700 text-sm leading-6">
                {item.description}
              </p>
            </div>
          </div>
        ))
      }
    </>
  );
}
