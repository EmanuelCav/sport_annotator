'use client'

import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";

import InputForm from '@/components/general/InputForm'
import SelectForm from '@/components/create/SelectForm';

import { ICategory, ICreateDashboard } from '@/interface/dashboard';

import { categoriesApi } from '@/server/api/category.api';
import { userStore } from '@/server/store/user.store';
import { dashboardStore } from '@/server/store/dashboard.store';
import { createDashboardApi } from '@/server/api/dashboard.api';

import { dashboardSchema } from '@/schema/dashboard.schema';

const Create = () => {

  const { user } = userStore()
  const { createDashboard } = dashboardStore()

  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: yupResolver(dashboardSchema)
  });

  const [categories, setCategories] = useState<ICategory[]>([])

  const uploadDashboard = async (data: ICreateDashboard) => {

    try {
      const dashboardData = await createDashboardApi(user.token!, data)
      createDashboard(dashboardData)
      reset()
    } catch (error) {
      console.log(error);
    } finally {
      console.log("Finally");
    }

  }

  useEffect(() => {
    if (user.token) {
      categoriesApi().then((data) => {
        setCategories(data)
      })
    }
  }, [user.token])

  return (
    <div className="w-full fill-screen justify-center items-center flex">
      <form className='mx-auto w-1/3 bg-white shadow-md rounded px-8 pt-6 pb-8' onSubmit={handleSubmit((data) => uploadDashboard(data))} onReset={reset as any}>
        <InputForm register={register} autoFocus={true} max={60} text='name' autoComplete='off' type='text' errors={errors.name!} />
        <SelectForm register={register} data={categories} errors={errors.category!} />
        <button className="mt-4 bg-amber-500 text-white w-full text-xl font-bold py-2 px-4 rounded hover:bg-amber-700 active:bg-amber-500 focus:outline-none focus:shadow-outline">
          Create
        </button>
      </form>
    </div>
  )
}

export default Create