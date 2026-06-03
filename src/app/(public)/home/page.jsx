import FriendsCards from '@/components/homepage/FriendsCards';
import TotalFriends from '@/components/homepage/TotalFriends';
import React from 'react'
import { MdAdd } from 'react-icons/md';

const HomePage = () => {
  return (
    <div className='bg-[#f8fafcFF]'>
    <div className=' max-w-[70%] mx-auto flex justify-center items-center flex-col space-y-[16px] pt-[80px] pb-[40px] '>
      <h1 className='text-[48px] font-bold text-[#244D3F]'>Friends to keep close in your life</h1>
      <p className='text-gray-600 text-center'>Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />
relationships that matter most.</p>
      <button className="btn bg-[#244D3F] text-white" ><MdAdd/> Add a Friend</button>
    </div>

    <TotalFriends></TotalFriends>
    <FriendsCards></FriendsCards>
    </div>
  )
}

export default HomePage;
