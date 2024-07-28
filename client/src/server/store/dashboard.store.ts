import { create } from "zustand";
import { persist } from "zustand/middleware";

import { IDashboard, IStoreDashboard } from "@/interface/dashboard";

export const dashboardStore = create(
    persist<IStoreDashboard>(
        (set) => ({
            dashboads: [],
            dashboard: {},
            getDashboards: (dashboardData: IDashboard[]) => set({
                dashboads: dashboardData
            }),
            getDashboard: (dashboardData: IDashboard) => set({
                dashboard: dashboardData
            })
        }),
        {
            name: "dashboad_data"
        }
    )
)