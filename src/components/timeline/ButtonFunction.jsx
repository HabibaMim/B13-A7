"use client";
import { CallsContext } from '@/context/interaction.context';
import useFriends from '@/hooks/useFriends';
import { useParams } from 'next/navigation';
import React, { useContext, useState } from 'react'
import { IoVideocamOutline } from 'react-icons/io5';
import { MdOutlineAddIcCall, MdOutlineTextsms } from 'react-icons/md';
import { FadeLoader } from 'react-spinners';
import { toast } from 'react-toastify';



const ButtonFunction = () => {

     
    const {calls, setCalls} = useContext(CallsContext);
  
    
    

    const {id} = useParams();
    const {friends, loading} = useFriends();


    

    if (loading) return <div className='flex justify-center h-screen items-center'><FadeLoader size={100} color="#244D3F"/></div>;
    
    

    
    

    const handleCalls = (type) =>{
        const expectedFriend =friends.find((friend)=>friend.id ===Number(id));
        
        const newEntry = {
            ...expectedFriend,
            type,
            timestamp: new Date().toISOString()
        }
    setCalls([...calls,newEntry])
    toast(`${type} with ${expectedFriend.name}!`);}
    
  return (
    <div className='flex justify-between items-center mx-auto gap-[25px]'>
                     <div className='flex justify-between items-center gap-[15px]'>
                <button onClick={()=>handleCalls("Call")} className='btn flex flex-col border-gray-200 shadow rounded-lg flex flex-col justify-center items-center p-[55px]'><p className='text-[30px] font-semibold'><MdOutlineAddIcCall /></p><p className='text-gray-500'>Call</p></button>
                </div>

                    <div className='flex justify-between items-center gap-[15px]'>
                <button onClick={()=>handleCalls("Text")} className='btn flex flex-col border-gray-200 shadow rounded-lg flex flex-col justify-center items-center p-[55px] '><p className='text-[30px] font-semibold'><MdOutlineTextsms /></p><p className='text-gray-500'>Text</p></button>
                </div>

                    <div className='flex justify-between items-center gap-[15px]'>
                <button onClick={()=>handleCalls("Video")} className='btn flex flex-col border-gray-200 shadow rounded-lg flex flex-col justify-center items-center p-[55px]'><p className='text-[30px] font-semibold'><IoVideocamOutline /></p><p className='text-gray-500'>Video</p></button>
                </div>


                </div>
  )
}

export default ButtonFunction
