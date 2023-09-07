'use client'
import React from 'react'
import { SessionProvider } from 'next-auth/react'


const ProviderPage = ({ children }) => {
    return (
        <>
            <SessionProvider>{children}</SessionProvider>
        </>
    )
}

export default ProviderPage