'use client'

import { useEffect } from "react"
import { useRouter } from 'next/navigation';

import Dashboard from "@/components/scoreboards/Dashboard"

import { dashboardsApi } from "@/server/api/dashboard.api"
import { dashboardStore } from "@/server/store/dashboard.store"
import { userStore } from "@/server/store/user.store"

const Scoreboards = () => {

  const { user } = userStore()
  const { dashboards, getDashboards, removeDashboard } = dashboardStore()

  const router = useRouter()

  useEffect(() => {
    if (user.token) {
      dashboardsApi(user.token).then(data => {
        getDashboards(data);
      });
    }
  }, [user.token])

  return (
    <div className="w-full flex justify-around items-center flex-wrap">
      {
        dashboards.map((dashboard, index) => {
          return <Dashboard removeDashboard={removeDashboard} dashboard={dashboard} router={router} key={index} token={user.token!} />
        })
      }
    </div>
  )
}

export default Scoreboards