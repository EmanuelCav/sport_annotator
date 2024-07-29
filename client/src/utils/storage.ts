import { IStoreUser } from "@/interface/user"

export const getUserStorage = (): IStoreUser => {

    const userData = JSON.parse(localStorage.getItem("user_data") as string)

    return userData.state

}