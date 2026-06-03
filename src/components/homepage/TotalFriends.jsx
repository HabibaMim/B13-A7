import React from 'react';

const TotalFriends = () => {
    return (
        <div className=' md:max-w-[70%] max-w-[95%] mx-auto grid grid-cols-4 gap-[24px] pb-[40px]'>
            <div className='bg-white shadow-md rounded-lg p-[32px] flex flex-col justify-center items-center'>
                <p className='text-[32px] font-semibold text-[#244D3F]'>8</p>
                <p className='text-gray-500'>Total Friends</p>
            </div>

            <div className='bg-white shadow-md rounded-lg p-[32px] flex flex-col justify-center items-center'>
                <p className='text-[32px] font-semibold text-[#244D3F]'>3</p>
                <p className='text-gray-500'>On Track</p>
            </div>

            <div className='bg-white shadow-md rounded-lg p-[32px] flex flex-col justify-center items-center'>
                <p className='text-[32px] font-semibold text-[#244D3F]'>3</p>
                <p className='text-gray-500'>Need Attention</p>
            </div>

            <div className='bg-white shadow-md rounded-lg p-[32px] flex flex-col justify-center items-center'>
                <p className='text-[32px] font-semibold text-[#244D3F]'>10</p>
                <p className='text-gray-500'>Interactions This Month</p>
            </div>
        </div>
    );
};

export default TotalFriends;