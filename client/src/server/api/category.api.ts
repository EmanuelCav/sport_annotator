import { api } from "./api"

import { ICategory } from "@/interface/dashboard"

export const categoriesApi = async (token: string): Promise<ICategory[]> => {

    const response = await fetch(api + "/categories", {
        headers: {
            'Authorization': `Bearer ${token}`
        },
    })

    const data = await response.json()

    if (!response.ok) {
        throw new Error(data)
    }    

    return data.categories

}