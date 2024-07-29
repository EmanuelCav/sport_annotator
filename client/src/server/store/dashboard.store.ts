import { create } from "zustand";
import { persist } from "zustand/middleware";

import { IDashboard, IStoreDashboard } from "@/interface/dashboard";

export const dashboardStore = create(
    persist<IStoreDashboard>(
        (set) => ({
            dashboards: [],
            dashboard: {},
            getDashboards: (dashboardData: IDashboard[]) => set({
                dashboards: dashboardData
            }),
            getDashboard: (dashboardData: IDashboard) => set({
                dashboard: dashboardData
            }),
            createDashboard: (dashboardData: IDashboard) => set((state) => ({
                dashboard: dashboardData,
                dashboards: [...state.dashboards, dashboardData]
            }))
        }),
        {
            name: "dashboad_data"
        }
    )
)