'use client'

import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'

import Team from '@/components/scoreboard/Team'
import HeaderScoreboard from '@/components/scoreboard/HeaderScoreboard'
import ButtonsMarkers from '@/components/scoreboard/ButtonsSettings'

import { ITeam } from '@/interface/dashboard'

import { userStore } from '@/server/store/user.store'
import { dashboardApi } from '@/server/api/dashboard.api'
import { dashboardStore } from '@/server/store/dashboard.store'

const Scoreboard = () => {

    const { user } = userStore()
    const { getDashboard, dashboard } = dashboardStore()

    const params = useParams()
    const router = useRouter()

    const [isStarted, setIsStarted] = useState<boolean>(false)

    const [seconds, setSeconds] = useState<number>(dashboard.seconds!)
    const [minutes, setMinutes] = useState<number>(dashboard.minutes!)
    const [hours, setHours] = useState<number>(dashboard.hours!)

    const redirectScoreboards = () => {
        router.push('/scoreboards')
    }

    useEffect(() => {
        if (user.token && params.id) {
            dashboardApi(user.token, params.id as string).then((data) => {
                getDashboard(data)
            })
        }
    }, [user.token])

    useEffect(() => {

        setTimeout(() => {

            if (isStarted) {
                if (seconds === 59) {
                    setSeconds(0)
                    setMinutes(minutes + 1)
                } else {
                    setSeconds(seconds + 1)
                }

                if (minutes === 59 && seconds == 59) {
                    setMinutes(0)
                    setHours(hours + 1)
                }

            }

        }, 1000);

    }, [seconds, isStarted])

    return (
        <div className='w-full max-w-7xl mx-auto'>
            <HeaderScoreboard hours={hours} minutes={minutes} seconds={seconds} isStarted={isStarted} 
            redirectScoreboards={redirectScoreboards} />
            <ButtonsMarkers />
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