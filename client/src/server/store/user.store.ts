import { create } from "zustand";
import { persist } from "zustand/middleware";

import { IStoreUser, IUserInfo } from "@/interface/user";

export const userStore = create(
    persist<IStoreUser>(
        (set) => ({
            isLoggedIn: false,
            user: {},
            authUser: (userData: IUserInfo) => set(() => ({
                isLoggedIn: true,
                user: userData
            }))
        }),
        {
            name: 'user_data'
        }
    )
)