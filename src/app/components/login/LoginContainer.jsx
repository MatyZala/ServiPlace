'use client'
import React, { useState } from 'react';
import { Button, Input } from "@nextui-org/react";
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'

const LoginContainer = () => {

    const [error, setError] = useState("")
    const router = useRouter()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)

        const response = await signIn('credentials', {
            email: formData.get('email'),
            password: formData.get('password'),
            redirect: false
        })

        if (res?.error) return setError(res.error)

        if (res?.ok) return router.push("/")

    }

    return (
        <div className='w-full h-screen flex items-center justify-center'>
            <form className='flex flex-col gap-4 justify-center' onSubmit={handleSubmit}>
                <div className='flex flex-col mb-6 gap-4 justify-center text-center'>
                    {error && <div className='bg-red-500 text-white p-2 mb-2'>{error}</div>}
                    <h1>Sign In</h1>
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
                    <Button type='submit' radius="full" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg">
                        Iniciar Sesión
                    </Button>
                </div>
            </form>
        </div>
    );
}

export default LoginContainer;