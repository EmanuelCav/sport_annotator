'use client'

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";

import Loading from '../Loading';
import ContainerBackground from "../general/ContainerBackground"
import InputForm from '../general/InputForm';

import { IRegister } from '@/interface/user';
import { RegisterPropsType } from '@/types/auth.types';

import { registerApi } from '@/server/api/user.api';
import { userStore } from '@/server/store/user.store';

import { registerSchema } from '@/schema/user.schema';

const Register = ({ handleRegister, router }: RegisterPropsType) => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: yupResolver(registerSchema)
    });

    const { authUser } = userStore()

    const [isLoading, setIsLoading] = useState<boolean>(false)

    const authRegister = async (data: IRegister) => {

        setIsLoading(true)

        try {
            const dashboardData = await registerApi(data)
            authUser(dashboardData)
            handleRegister()
            router.push('/scoreboards')
            reset()
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false)
        }

    }

    return (
        <ContainerBackground>
            {
                isLoading && <Loading />
            }
            <form className='mx-auto w-1/3 bg-white shadow-md rounded px-8 pt-6 pb-8 w-full' onSubmit={handleSubmit((data) => authRegister(data))} onReset={reset as any}>
                <InputForm register={register} autoFocus={true} max={30} text='username' autoComplete='on' type='text' errors={errors.username!} />
                <InputForm register={register} autoFocus={false} max={60} text='email' autoComplete='off' type='text' errors={errors.email!} />
                <InputForm register={register} autoFocus={false} max={60} text='password' autoComplete='off' type='password' errors={errors.password!} />
                <InputForm register={register} autoFocus={false} max={60} text='confirm' autoComplete='off' type='password' errors={errors.confirm!} />
                <button className="mt-4 bg-amber-500 text-white w-full text-xl font-bold py-2 px-4 rounded hover:bg-amber-700 active:bg-amber-500 focus:outline-none focus:shadow-outline">
                    Register
                </button>
                <p className='text-lg  mt-4'>Have you already an account?
                    <span className='ml-2 text-orange-500 cursor-pointer hover:underline active:no-underline' onClick={handleRegister}>Log in</span>
                </p>
            </form>
        </ContainerBackground>
    )
}

export default Register