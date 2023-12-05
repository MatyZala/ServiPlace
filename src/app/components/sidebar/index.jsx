'use client'
import React from 'react';
import Link from 'next/link';

const MySidebar = () => {
    return (
        <div className="bg-gray-800 text-white w-1/6 h-full fixed top-16 left-0 p-4 rounded-tr-md rounded-br-md">
            <div className='mb-4'>
                <Link href="/">
                    Home
                </Link>
            </div>
            <div className='mb-4'>
                <Link href="/users">
                    Usuarios
                </Link>
            </div>
            <div className='mb-4'>
                <Link href="/dashboard">
                    Dashboard
                </Link>
            </div>
        </div>
    );
};

export default MySidebar;
