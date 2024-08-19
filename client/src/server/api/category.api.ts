import { api } from "./api"

import { ICategory } from "@/interface/dashboard"

export const categoriesApi = async (): Promise<ICategory[]> => {

    const response = await fetch(api + "/categories")

    const data = await response.json()

    if (!response.ok) {
        throw new Error(data)
    }    

    return data.categories

}