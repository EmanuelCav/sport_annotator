import { create } from "zustand";
import { persist } from "zustand/middleware";

import { IStoreUser, IUserInfo } from "@/interface/user";

export const userStore = create(
    persist<IStoreUser>(
        (set) => ({
            isLoggedIn: false,
            user: {},
            generateUser: (userData: IUserInfo) => set(() => ({
                isLoggedIn: true,
                user: {
                    token: userData.token,
                    user: userData.user
                }
            }))
        }),
        {
            name: 'user_data'
        }
    )
)