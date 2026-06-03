"use client";
import useFriends from '@/hooks/useFriends';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { ClipLoader, FadeLoader } from 'react-spinners';



const FriendsCards = () => {

    const {friends, loading} = useFriends();
  return (
    <div className='max-w-[70%] mx-auto'>
      <div className='text-[24px] font-semibold text-[#244D3F] py-[25px] border-t border-t-gray-200'>Your Friends</div>
      {loading ? (<div className='flex justify-center items-center'><FadeLoader size={100} color="#244D3F"/></div>) : (
      <div className='grid md:grid-cols-2 grid-cols-1 lg:grid-cols-4 gap-[24px] pb-[80px]'>
        {friends.map((friend,ind)=>{
            return (
                <Link href={`/home/${friend.id}`} className='border-gray-200 space-y-[10px] shadow rounded-lg flex flex-col justify-center items-center py-[24px]' key={ind}>
                <Image src={friend.picture} width={80} height={80} alt={friend.name} className='rounded-full'></Image>
                    <p className='text-[22px] font-bold'>{friend.name}</p>
                    <p className='text-gray-500'>{friend.days_since_contact}d ago</p>
                    <div className='flex items-center gap-[6px]'>{friend.tags.map((t, i)=><p className='badge badge-soft badge-outline badge-success' key={i}>{t}</p>)}</div>
                    <p className={friend.status === "overdue" ? "badge badge-error" : friend.status=== "on-track" ? "badge badge-success" :"badge badge-warning"}>{friend.status}</p>
                </Link>
            )
        }
        )}
      </div>)}
    </div>
  )
}

export default FriendsCards
