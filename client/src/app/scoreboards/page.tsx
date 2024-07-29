'use client'

import Dashboard from "@/components/scoreboards/dashboard"
import { dashboardsApi } from "@/server/api/dashboard.api"

import { dashboardStore } from "@/server/store/dashboard.store"
import { userStore } from "@/server/store/user.store"
import { useEffect } from "react"

const Scoreboards = () => {

  const { user } = userStore()
  const { dashboads, getDashboards } = dashboardStore()

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
        dashboads.map((dashboard) => {
          return <Dashboard dashboard={dashboard} key={dashboard.id} />
        })
      }
    </div>
  )
}

export default Scoreboards