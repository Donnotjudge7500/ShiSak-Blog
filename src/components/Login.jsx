import React,{ useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { login as authLogin } from '../store/features/authenticationSlice.js';
import authenticationService from '../appwrite/authentication.js';
import { useForm } from 'react-hook-form';
import Input from './Input.jsx';
import Button from './Button.jsx';



function Login() {
    const auth = useSelector((store) => store.authenticationSlice);

    const [error, setError] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();

    const login = async (data) => {
        setError('')
        try {
            const session = await authenticationService.login(data);
            if (session) {
                const userData = await authenticationService.getCurrentUser(); 
                if (userData) {
                    dispatch(authLogin(userData));
                } 
                navigate('/');
            }
        } catch (error) {
            setError(error.message)
        }

    }


    return (
        <div className="w-3/4 h-[30rem] relative bg-zinc-100 overflow-hidden mx-auto my-2 shadow-xl rounded-[40px]">
            <div className="w-[142.24px] h-[84.33px] left-[43.64px] top-[61.92px] absolute origin-top-left rotate-[19.42deg] rounded-[81px] border-8 border-blue-600" />
            <div className="w-[185.73px] h-[80.37px] left-[390.54px] top-[60.34px] absolute origin-top-left rotate-[138.66deg] rounded-[81px] border-8 border-violet-500" />
            <div className="w-[250.74px] h-[80.37px] left-[354.25px] top-[448.93px] absolute origin-top-left rotate-[-142.48deg] rounded-[81px] border-8 border-violet-500" />
            <div className="w-[93px] h-[93px] left-[-30px] top-[265px] absolute origin-top-left -rotate-90 bg-gradient-to-br from-blue-600 via-violet-500 to-violet-500 rounded-[80px]" />
            <div className="w-[38px] h-[93px] left-[124px] top-[420.02px] absolute origin-top-left rotate-[-76.97deg] bg-gradient-to-br from-blue-600 via-violet-500 to-violet-500 rounded-[80px]" />
            <div className="w-[42.94px] h-[160.14px] left-[60px] top-[-0.39px] absolute origin-top-left rotate-[-64.07deg] bg-gradient-to-br from-blue-600 via-violet-500 to-violet-500 rounded-[80px]" />

            <div className='h-fit p-7 mr-16 absolute right-0 flex flex-col items-center mt-10 shadow-lg rounded-xl'>
                <h2 className='text-center text-3xl font-bold leading-tight text-black'>Sign in to your account</h2>
                <p className='text-center text-sm mt-2 text-gray-600'>
                    Don&apos;t have any account?&nbsp;
                    <Link to='/signup'>
                        <span className='text-black text-sm font-semibold transition-all duration-200 hover:underline'>Create a free account</span>
                    </Link>
                </p>
                { error && <p className='text-red-700'>
                    {error}
                </p> }
                <form onSubmit={ handleSubmit(login) } className='h-full w-full '>
                    <div className='h-full flex flex-col justify-center gap-4 mt-8 text-xl text-zinc-900 font-Inter'>
                        <Input
                            label="Email: "
                            type='email'
                            className='pl-3 py-2 w-full rounded-lg'
                            placeholder="Enter your email"
                            { ...register('email', {
                                required: true,
                                validate: {
                                    matchPattern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) || "Email address must be a valid address",
                                }
                            })}
                        />
                        <Input
                            label='Password: '
                            type='password'
                            className='pl-3 py-2 w-full rounded-lg'
                            placeholder='Enter your password'
                            { ...register('password', {
                                required: true,
                            })}
                        />
                        <Button
                            type='submit'
                            className='inline-flex w-full items-center justify-center rounded-md bg-blue-600 px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80' 
                        >
                            Get started {"->"} 
                        </Button> 
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login