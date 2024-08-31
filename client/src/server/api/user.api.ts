import { api } from "./api"

import { ILogin, IUserInfo } from "@/interface/user"

export const loginApi = async (userData: ILogin): Promise<IUserInfo> => {

    const response = await fetch(api + "/users/login", {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })

    const data = await response.json()

    if (!response.ok) {
        throw new Error(data)
    }    

    return data

}