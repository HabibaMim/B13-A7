"use client";
import CallsContextProvider from '@/context/interaction.context';
import React from 'react';

const Providers = ({children}) => {
    return (
    <CallsContextProvider>{children}</CallsContextProvider>);
};

export default Providers;