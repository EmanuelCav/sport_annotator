import { api } from "./api"

import { IUserInfo } from "@/interface/user"

export const generateUserApi = async (): Promise<IUserInfo> => {

    const response = await fetch(api + "/users", {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    })

    const data = await response.json()

    if (!response.ok) {
        throw new Error(data)
    }    

    return data

}