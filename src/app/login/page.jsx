"use client"
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import {signIn} from "next-auth/react"

import { useRouter } from 'next/navigation';
import SocialSignin from '@/components/Shared/SocialSignin';

export default function Page() {
    const router = useRouter()
    const handleLogin = async (event) =>{
        event.preventDefault();
        const email= event.target.email.value;
        const password= event.target.password.value;
        const resp = await signIn('credentials',{
            email,
            password,
            redirect: false
        })
        if(resp.status === 200){
            router.push('/')
        }
    }
    return (
        <div className='container mx-auto py-24'>
            <div className='grid grid-cols-2 gap-12 '>
                <div>
                    <Image src="/assets/images/login/login.svg" height="640" width="640" alt='login'></Image>
                </div>
                <div className='border-2 p-12 '>
                    <h2 className='text-2xl font-bold text-center'>Login</h2>
                    <form onSubmit={handleLogin} action="" className='space-y-4'>
                        <label className="label">Email</label> <br />
                        <input
                            type="email"
                            name='email'
                            className="input w-full"
                            placeholder="Email" />
                        <label className="label">Password</label> <br />
                        <input
                            type="text"
                            name='password'
                            className="input w-full"
                            placeholder="Your Password" />
                        <button type='submit' className='btn bg-[#FF3811] w-full'>Signin</button>
                    </form>
                    <h6 className='text-center mt-2'>or sign in with</h6>
                    <SocialSignin></SocialSignin>
                    <h6 className='text-center'>Do not have any account? <Link className='text-[#FF3811] font-bold' href={'/signup'}>Sign Up</Link> </h6>
                </div>
            </div>
        </div>
    )
}
