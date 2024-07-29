import { api } from "./api"

import { IDashboard } from "@/interface/dashboard"

export const dashboardsApi = async (token: string): Promise<IDashboard[]> => {

    const response = await fetch(api + "/dashboards", {
        headers: {
            'Authorization': `Bearer ${token}`
        },
    })

    const data = await response.json()

    if (!response.ok) {
        throw new Error(data)
    }    

    return data.dashboards

}

export const dashboardApi = async (token: string, id: string): Promise<IDashboard> => {

    const response = await fetch(api + "/dashboards/" + id, {
        headers: {
            'Authorization': `Bearer ${token}`
        },
    })

    const data = await response.json()

    if (!response.ok) {
        throw new Error(data)
    }    

    return data.dashboard

}