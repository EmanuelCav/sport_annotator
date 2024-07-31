import { ChangeEvent, useState } from 'react';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";

import ContainerBackground from "./ContainerBackground"
import InputForm from './InputForm';

import { UpdateDasboardPropsType } from "@/types/scoreboard.types"
import { IUpdateDashboard } from '@/interface/dashboard';

import { userStore } from '@/server/store/user.store';
import { updateDashboardApi } from '@/server/api/dashboard.api';
import { dashboardStore } from '@/server/store/dashboard.store';

import { updateDashboardSchema } from '@/schema/dashboard.schema';
import { imageBlob } from '@/utils/functions';

const UpdateDashboard = ({ handleUpdate, dashboard }: UpdateDasboardPropsType) => {

    const { user } = userStore()
    const { updateDashboard } = dashboardStore()

    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: yupResolver(updateDashboardSchema),
        values: {
            name: dashboard.name!
        }
    });

    const [image, setImage] = useState<string>(dashboard.image?.image!)

    const update = async (data: IUpdateDashboard) => {

        const formData = new FormData()

        formData.append('name', data.name)

        if(image) {
            formData.append('file', image)
        }

        const dashboardData = await updateDashboardApi(dashboard.ID!, user.token!, formData)
        
        updateDashboard(dashboardData)

        handleUpdate()
    }

    const handleImage = (e: ChangeEvent<HTMLInputElement>) => {
        const { files } = e.target
        setImage(files![0] as any)
    }

    return (
        <ContainerBackground>
            <form className='flex items-center flex-col mx-auto shadow-md rounded p-4 w-full' onSubmit={handleSubmit((data) => update(data))} onReset={reset as any}>
                <label htmlFor="image-update">
                    <Image className="cursor-pointer w-24 h-24 mb-3 rounded-full shadow-lg" alt='sport_scoreboard' src={imageBlob(image)} width={100} height={100} />
                </label>
                <input type="file" id='image-update' onChange={handleImage} />
                <InputForm register={register} autoFocus={false} max={60} text='name' autoComplete='off' type='text' errors={errors.name!} />
                <button className="p-2 w-full text-white bg-orange-500 hover:bg-orange-300 active:bg-orange-500 my-2 focus:outline-none focus:shadow-outline">
                    Accept
                </button>
            </form>
        </ContainerBackground>
    )
}

export default UpdateDashboard