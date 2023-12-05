'use client'
import React, { useState } from 'react';
import { Button, Input } from "@nextui-org/react";
import axios from 'axios';
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'

const RegisterPage = () => {

    const [error, setError] = useState()
    const router = useRouter()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = new FormData(e.currentTarget)
        try {

            const res = await axios.post('/api/auth/signup', {
                email: data.get('email'),
                password: data.get('password'),
                fullname: data.get('fullname')
            })

            const response = await signIn('credentials', {
                email: response.data.email,
                password: FormData.get('password'),
                redirect: false
            })

            if (response?.ok) return router.push("/")
        } catch (error) {
            setError(error.response?.data.message)
        }
    }

    return (
        <div className='w-full h-screen flex items-center justify-center'>
            <form className='flex flex-col gap-4 justify-center' onSubmit={handleSubmit}>
                <div className='flex flex-col mb-6 gap-4 justify-center text-center'>
                    {error && <div className='bg-red-500 text-white p-2 mb-2'>{error}</div>}
                    <h1>Sign Up</h1>
                    <Input
                        isRequired
                        name='email'
                        type="email"
                        label="Email"
                        placeholder="example@example.com"
                        className="w-64"
                    />
                    <Input
                        isRequired
                        name='password'
                        type="password"
                        label="Password"
                        placeholder="********"
                        className="w-64"
                    />
                    <Input
                        isRequired
                        name='fullname'
                        type="text"
                        label="John Doe"
                        placeholder="FullName"
                        className="w-64"
                    />
                    <Button type='submit' radius="full" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg">
                        Registrarse
                    </Button>
                </div>
            </form>
        </div>
    );
}

export default RegisterPage;