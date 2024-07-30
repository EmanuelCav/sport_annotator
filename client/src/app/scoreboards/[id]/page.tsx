'use client'

import { useEffect } from 'react'
import { useParams } from 'next/navigation'

import Team from '@/components/scoreboard/Team'
import HeaderScoreboard from '@/components/scoreboard/HeaderScoreboard'

import { ITeam } from '@/interface/dashboard'

import { userStore } from '@/server/store/user.store'
import { dashboardApi } from '@/server/api/dashboard.api'
import { dashboardStore } from '@/server/store/dashboard.store'

const Scoreboard = () => {

    const { user } = userStore()
    const { getDashboard, dashboard } = dashboardStore()

    const params = useParams()

    useEffect(() => {
        if (user.token && params.id) {
            dashboardApi(user.token, params.id as string).then((data) => {
                getDashboard(data)
            })
        }
    }, [user.token])

    return (
        <div className='w-full'>
            <HeaderScoreboard />
            <div className='p-4 flex justify-center items-center w-full'>
                {
                    dashboard.teams?.map((team: ITeam, index: number) => {
                        return <Team team={team} markers={dashboard.markers!} key={index} />
                    })
                }
            </div>
        </div>
    )
}

export default Scoreboard