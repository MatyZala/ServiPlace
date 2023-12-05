"use client"
import React from 'react'
import { useSession } from 'next-auth/react'
import TableComponent from '../components/table'

const DashboardPage = () => {
    const { data: session, status } = useSession()


    return (
        <div className='mt-5'><TableComponent /></div>
    )
}

export default DashboardPage