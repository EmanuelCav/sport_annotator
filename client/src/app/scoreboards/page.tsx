'use client'

import { useEffect } from "react"

import Dashboard from "@/components/scoreboards/dashboard"

import { dashboardsApi } from "@/server/api/dashboard.api"
import { dashboardStore } from "@/server/store/dashboard.store"
import { userStore } from "@/server/store/user.store"

const Scoreboards = () => {

  const { user } = userStore()
  const { dashboards, getDashboards } = dashboardStore()

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
          return <Dashboard dashboard={dashboard} key={index} />
        })
      }
    </div>
  )
}

export default Scoreboards