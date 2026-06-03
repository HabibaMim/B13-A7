"use client";
import { CallsContext } from '@/context/interaction.context';
import Image from 'next/image';
import React, { useContext } from 'react';
import { IoCallOutline, IoVideocamOutline } from 'react-icons/io5';
import { MdOutlineTextsms } from 'react-icons/md';

const TimeLinePage = () => {

    const {calls, setCalls} = useContext(CallsContext);
   
    return (
        <div className='flex  flex-col mx-[100px]'>
        <div>
            <div>
                <div><p className='text-[48px] mb-[10px] font-bold'>Timeline</p></div>
                
            </div>
        <div>
            {calls.length === 0 ? <h2 className='font-bold text-[40px] text-gray-500 flex justify-center items-center h-screen'>No interaction Found</h2> :
            calls.map((c,ind)=>{
                return <div key={ind}>
                    <div className='bg-white shadow-md mb-[16px] rounded-lg px-[50px] py-[16px] flex flex-col justify-center items-start'>
                 <div>{c.type === "Call" && <div className='flex justify-center items-center gap-[10px]'><div><IoCallOutline /></div><div>Call with {c.name}</div></div>} 
                 {c.type === "Text" && <div className='flex justify-center items-center gap-[10px]'><div><MdOutlineTextsms /></div><div>Text with {c.name}</div></div>} 
                 {c.type === "Video" && <div className='flex justify-center items-center gap-[10px]'><div><IoVideocamOutline /></div><div>Video with {c.name}</div></div>} 
                
       </div> 
       
        <p>
                {new Date(c.timestamp).toLocaleDateString('en-US', {
                                month: 'long',
                                day: 'numeric',
                                year: 'numeric'
                            })}
</p>
       </div>
       </div>
            })}

           
            
        </div>
        </div></div>
    );
};

export default TimeLinePage;