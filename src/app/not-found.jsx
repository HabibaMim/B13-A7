import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
    return (
        
        <div className='flex flex-col justify-center h-screen bg-purple-100 items-center'>
            <p className='text-purple-500 text-[100px] font-bold'>ERROR</p>
            <p className='text-purple-500 text-[120px] font-bold'>404</p>
            <p className='text-purple-700 text-[40px]'>Page Not Found!</p>
            <p className='text-purple-400 text-[20px]'>If you think something's not working, report an issue. </p>
            <Link className='pt-[20px]' href={'/'}>
            <button className='btn bg-purple-600 text-white'>Back To Home</button></Link>
        </div>
    );
};

export default NotFoundPage;