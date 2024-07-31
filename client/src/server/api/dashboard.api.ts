import { api } from "./api"

import { ICreateDashboard, IDashboard } from "@/interface/dashboard"

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

export const createDashboardApi = async (token: string, dashboardData: ICreateDashboard): Promise<IDashboard> => {

    const response = await fetch(api + "/dashboards", {
        method: 'POST',
        body: JSON.stringify(dashboardData),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    })

    const data = await response.json()

    if (!response.ok) {
        throw new Error(data)
    }

    return data.dashboard

}

export const removeDashboardApi = async (id: number, token: string): Promise<string> => {

    const response = await fetch(api + "/dashboards/" + id, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${token}`
        },
    })

    const data = await response.json()

    if (!response.ok) {
        throw new Error(data)
    }

    return data.message

}

export const updateDashboardApi = async (id: number, token: string, formData: FormData): Promise<IDashboard> => {

    const response = await fetch(api + "/dashboards/" + id, {
        method: 'PUT',
        body: formData,
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