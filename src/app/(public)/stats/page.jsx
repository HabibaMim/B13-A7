"use client";
import { CallsContext } from '@/context/interaction.context';
import React, { useContext } from 'react';
import { Pie, PieChart, ResponsiveContainer, Cell, Legend, Tooltip } from 'recharts';




const COLORS = ["#244D3F", "#4CAF50", "#81C784"]

const StatsPage = () => {
    const {calls} = useContext(CallsContext);

    const data = [
    { name: "Calls",  value: calls.filter(c => c.type === "Call").length },
    { name: "Texts",  value: calls.filter(c => c.type === "Text").length },
    { name: "Videos", value: calls.filter(c => c.type === "Video").length },
]
console.log(data)
    return ( <div className=' border m-[40px] border-gray-200 rounded-l-lg flex flex-col justify-center items-center py-[40px]'>
        <p className='text-[48px] font-bold mx-auto'>Friendship Analytics</p>
       
        <p className=' text-green-800'>&bull; By Interaction Type</p>
        
        <ResponsiveContainer width="100%" height={400}>
            <PieChart>
                
                <Pie
                    data={data}
                    innerRadius="60%"
                    outerRadius="80%"
                    cornerRadius={10}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                    isAnimationActive={true}
                >
                    {data.map((entry, index) => (
                        <Cell key={index} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Legend></Legend>
                <Tooltip></Tooltip>
            </PieChart>
        </ResponsiveContainer>
        </div>
    );
};

export default StatsPage;