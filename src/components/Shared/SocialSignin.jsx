import React from 'react';
import { FaFacebook, FaGoogle, FaGithub } from "react-icons/fa";

const SocialSignin = () => {
    const handlerSocialLogin = async () => {

    }
    return (
        <div>
            <div className='flex justify-center gap-4 mt-4 mb-4'>
                <button className='btn'><FaFacebook /></button>
                <button className='btn'><FaGoogle /></button>
                <button className='btn'><FaGithub /></button>
            </div>
        </div>
    );
};

export default SocialSignin;