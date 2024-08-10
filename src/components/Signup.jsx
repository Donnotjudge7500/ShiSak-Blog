import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { login } from '../store/features/authenticationSlice';
import authenticationService from '../appwrite/authentication.js';
import Input from './Input';
import Button from './Button.jsx';
import { ArrowLongRightIcon, EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';



function SignUp() {
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();
    const [visible, setVisible] = useState(false);

    const handleVisible = () => {
        setVisible(!visible);
    }

    const signup = async (data) => {
        setError('')
        try {
            const createdUserData = await authenticationService.creatAccount(data);
            if (createdUserData) {
                const userData = authenticationService.getCurrentUser();
                if (userData) {
                    dispatch(login(userData));
                }
                navigate('/');
            }
        } catch (error) {
            setError(error.message);
        }
    }

    return (
        <div className="w-full sm:w-3/4 md:w-1/2 lg:w-1/3 h-[30rem] relative overflow-hidden mx-auto my-2 shadow-xl rounded-lg">
            {/* <div className="w-[142.24px] h-[84.33px] left-[43.64px] top-[61.92px] absolute origin-top-left rotate-[19.42deg] rounded-[81px] border-8 border-blue-600 -z-10" />
            <div className="w-[185.73px] h-[80.37px] left-[390.54px] top-[60.34px] absolute origin-top-left rotate-[138.66deg] rounded-[81px] border-8 border-violet-500 -z-10" />
            <div className="w-[250.74px] h-[80.37px] left-[354.25px] top-[448.93px] absolute origin-top-left rotate-[-142.48deg] rounded-[81px] border-8 border-violet-500" />
            <div className="w-[93px] h-[93px] left-[-30px] top-[265px] absolute origin-top-left -rotate-90 bg-gradient-to-br from-blue-600 via-violet-500 to-violet-500 rounded-[80px]" />
            <div className="w-[38px] h-[93px] left-[124px] top-[420.02px] absolute origin-top-left rotate-[-76.97deg] bg-gradient-to-br from-blue-600 via-violet-500 to-violet-500 rounded-[80px]" />
            <div className="w-[42.94px] h-[160.14px] left-[60px] top-[-0.39px] absolute origin-top-left rotate-[-64.07deg] bg-gradient-to-br from-blue-600 via-violet-500 to-violet-500 rounded-[80px] -z-10" /> */}


            <div className='px-5 h-[30rem] mt-4 border shadow-lg rounded-lg'>
                <div className='mt-3'>
                    <h2 className='text-center text-3xl font-bold leading-tight text-black'>Sign up to your account</h2>
                    <p className='text-center text-lg mt-2 text-gray-600'>
                        Already have any account?&nbsp;
                        <Link to='/login'><span className='text-black text-lg font-semibold transition-all duration-200 hover:underline'>Sign In</span></Link>
                    </p>
                    { error && <p className='text-red-700'>{ error }</p> }
                    <form onSubmit={ handleSubmit(signup) } className='h-full w-full'>
                        <div className='h-full flex flex-col mt-2 gap-4 text-xl text-zinc-900 font-Inter relative '>
                            <Input
                                label='Full Name: '
                                type='text'
                                className='pl-3 py-2 w-full rounded-lg text-xl'
                                placeholder='Username'
                                { ...register('name', {
                                    required: true,
                                }) }
                            />
                            <Input
                                label='Email: '
                                type='email'
                                className='pl-3 py-2 w-full rounded-lg text-xl'
                                placeholder='Enter your email'
                                { ...register('email', {
                                    required: true,
                                    validate: {
                                        matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) || "Email address must be a valid address",
                                    }
                                }) }
                            />
                            <div className='flex items-center
                        relative sm:block'>
                                <Input
                                    label='Password: '
                                    type={ visible ? '' : 'password' }
                                    className='pl-3 py-2 w-full rounded-lg text-xl'
                                    placeholder='Enter your password'
                                    { ...register('password', {
                                        required: true,
                                    }) }
                                />
                                {
                                    visible ? <EyeIcon
                                        onClick={ handleVisible }
                                        className='absolute bottom-1 right-3 h-8 w-8 bg-sky-100'
                                    /> : <EyeSlashIcon
                                        onClick={ handleVisible }
                                        className='absolute bottom-1 right-3 h-8 w-8 bg-sky-100'
                                    />
                                }
                            </div>

                            <Button
                                type='submit'
                                className='inline-flex w-full items-center justify-center rounded-md bg-blue-600 px-3.5 py-2.5 font-semibold leading-7 text-white mt-3 hover:bg-black/80'
                            > Create Account { <ArrowLongRightIcon
                                className='h-10 w-16'
                            /> } </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignUp