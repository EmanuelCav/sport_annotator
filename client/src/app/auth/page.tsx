'use client'

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { yupResolver } from "@hookform/resolvers/yup";

import InputForm from "@/components/general/InputForm"
import Register from '@/components/auth/Register';
import Loading from '@/components/Loading';

import { ILogin } from '@/interface/user';

import { loginApi } from '@/server/api/user.api';
import { userStore } from '@/server/store/user.store';

import { loginSchema } from '@/schema/user.schema';

const Auth = () => {

  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: yupResolver(loginSchema)
  });

  const { authUser } = userStore()

  const router = useRouter()

  const [isRegister, setIsRegister] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const handleRegister = () => {
    setIsRegister(!isRegister)
  }

  const login = async (data: ILogin) => {

    setIsLoading(true)

    try {
      const dashboardData = await loginApi(data)
      authUser(dashboardData)
      router.push('/scoreboards')
      reset()
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false)
    }

  }

  return (
    <div className="w-full fill-screen justify-center items-center flex">
      {
        isLoading && <Loading />
      }
      {
        isRegister && <Register handleRegister={handleRegister} router={router} />
      }
      <form className='mx-auto w-1/3 bg-white shadow-md rounded px-8 pt-6 pb-8' onSubmit={handleSubmit((data) => login(data))} onReset={reset as any}>
        <InputForm register={register} autoFocus={true} max={60} text='email' autoComplete='on' type='text' errors={errors.email!} />
        <InputForm register={register} autoFocus={false} max={60} text='password' autoComplete='off' type='password' errors={errors.password!} />
        <button className="mt-4 bg-amber-500 text-white w-full text-xl font-bold py-2 px-4 rounded hover:bg-amber-700 active:bg-amber-500 focus:outline-none focus:shadow-outline">
          Log in
        </button>
        <p className='text-lg mt-4'>Don't have you an account yet?
          <span className='ml-2 text-orange-500 cursor-pointer hover:underline active:no-underline' onClick={handleRegister}>Register</span>
        </p>
      </form>
    </div>
  )
}

export default Auth