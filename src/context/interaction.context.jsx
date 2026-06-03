"use client";
import React, { createContext, useState } from 'react'

export const CallsContext = createContext();
const CallsContextProvider = ({children}) => {
    
        const [calls, setCalls]=useState([]);
        
        const data ={
            calls,
            setCalls,
        };
  return (
    <CallsContext.Provider value={data}>
        {children}
    </CallsContext.Provider>
   
  )
}

export default CallsContextProvider
