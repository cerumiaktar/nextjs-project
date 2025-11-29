"use client"
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { FaFacebook, FaGoogle, FaGithub } from "react-icons/fa";

export default function page() {
    const handleSignUp = async () => {

    }
    return (
        <div className='container mx-auto py-24'>
            <div className='grid grid-cols-2 gap-12 '>
                <div>
                    <Image src="/assets/images/login/login.svg" height="640" width="640" alt='login'></Image>
                </div>
                <div className='border-2 p-12 '>
                    <h2 className='text-2xl font-bold text-center'>Signup</h2>
                    <form onSubmit={handleSignUp} action="" className='space-y-4'>
                        <label className="label">Name</label> <br />
                        <input
                            type="text"
                            name='name'
                            className="input w-full"
                            placeholder="Name" />
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
                    <div className='flex justify-center gap-4 mt-4 mb-4'>
                        <button className='btn'><FaFacebook /></button>
                        <button className='btn'><FaGoogle /></button>
                        <button className='btn'><FaGithub /></button>
                    </div>
                    <h6 className='text-center'>Have any account? <Link className='text-[#FF3811] font-bold' href={'/login'}>Login</Link> </h6>
                </div>
            </div>
        </div>
    )
}
