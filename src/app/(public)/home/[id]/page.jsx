"use client";
import ButtonFunction from '@/components/timeline/ButtonFunction';
import useFriends from '@/hooks/useFriends';
import Image from 'next/image';
import { notFound, useParams } from 'next/navigation'
import React, { useState } from 'react'
import { FiArchive } from 'react-icons/fi';
import { IoVideocamOutline } from 'react-icons/io5';
import { MdDeleteOutline, MdOutlineAddIcCall, MdOutlineTextsms } from 'react-icons/md';
import { RiNotificationSnoozeLine } from 'react-icons/ri';
import { FadeLoader } from 'react-spinners';

const DetailsPage = () => {

const {id} = useParams();
const {friends, loading} = useFriends();



if (loading) return <div className='flex justify-center h-screen items-center'><FadeLoader size={100} color="#244D3F"/></div>;

const expectedFriend =friends.find((friend)=>friend.id ===Number(id))

if(!expectedFriend) return notFound();



  return (
    <div className=' py-[80px] bg-[#F8FAFC]'>
        <div className='max-w-[70%] mx-auto gap-[15px] lg:flex justify-center items-stretch'>
                    <div className='space-y-[15px]'>
            <div className='border-gray-200 space-y-[10px] shadow rounded-lg flex flex-col justify-center items-center p-[24px] bg-white'>
        <Image src={expectedFriend.picture} width={80} height={80} alt={expectedFriend.name} className='rounded-full'></Image>
        <p className='text-[22px] font-bold'>{expectedFriend.name}</p>
        <p className={expectedFriend.status === "overdue" ? "badge badge-error" : expectedFriend.status=== "on-track" ? "badge badge-success" :"badge badge-warning"}>{expectedFriend.status}</p>
        <div className='flex justify-center items-center gap-[6px]'>{expectedFriend.tags.map((t, i)=><p className='badge badge-soft badge-outline badge-success' key={i}>{t}</p>)}</div>
        <p className='text-gray-500'><i>{expectedFriend.bio}</i></p>
        <p className='text-gray-500'><span className='font-semibold'>Email: </span>{expectedFriend.email}</p>

            </div>
            <div className='flex flex-col space-y-[15px]'>
                <button className='btn text-[#244D3F]'><RiNotificationSnoozeLine />Snooze 2 Weeks</button>
                <button className='btn text-[#244D3F]'><FiArchive /> Archive</button>
                <button className='btn text-red-700'><MdDeleteOutline />Delete</button>
            </div>
        </div>
        <div className='space-y-[15px]'>
            <div className='flex justify-between items-center gap-[15px]'>
                <div className='flex flex-col border-gray-200 space-y-[10px] shadow rounded-lg flex flex-col justify-center items-center p-[24px] bg-white'><p className='text-[27px] font-semibold'>{expectedFriend.days_since_contact}</p><p className='text-gray-500'>Days Since Contact</p></div>

                <div className='flex flex-col border-gray-200 space-y-[10px] shadow rounded-lg flex flex-col justify-center items-center p-[24px] bg-white'><p className='text-[27px] font-semibold'>{expectedFriend.goal}</p><p className='text-gray-500'>Goal (Days)</p></div>

                <div className='flex flex-col border-gray-200 space-y-[10px] shadow rounded-lg flex flex-col justify-center items-center p-[24px] bg-white'><p className='text-[27px] font-semibold'>{expectedFriend.next_due_date}</p><p className='text-gray-500'>Next Due</p></div>
            </div>
            <div className=' border-gray-200 space-y-[10px] shadow rounded-lg flex justify-between items-start p-[24px] bg-white'>
                <div >
                    <div ><p className='text-[20px] font-semibold'>Relationship Goal</p><p className='text-gray-500'>Connect Every <span className='font-semibold'>{expectedFriend.goal} days</span></p></div>
                </div>
                <div><button className='btn'>Edit</button></div>
            </div>
            <div className=' border-gray-200 space-y-[10px] shadow rounded-lg flex justify-between items-start p-[24px] bg-white flex flex-col'>
                <div className='text-[20px] font-semibold'>Quick Check-In</div>
                <ButtonFunction></ButtonFunction>
            </div>
        </div>
        </div>
    </div>
  )
}

export default DetailsPage

