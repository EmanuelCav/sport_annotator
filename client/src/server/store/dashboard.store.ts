import { create } from "zustand";
import { persist } from "zustand/middleware";

import { IDashboard, IStoreDashboard } from "@/interface/dashboard";

export const dashboardStore = create(
    persist<IStoreDashboard>(
        (set) => ({
            dashboards: [],
            dashboard: {},
            getDashboards: (dashboardData: IDashboard[]) => set({
                dashboards: dashboardData,
                dashboard: {}
            }),
            getDashboard: (dashboardData: IDashboard) => set({
                dashboard: dashboardData
            }),
            createDashboard: (dashboardData: IDashboard) => set((state) => ({
                dashboard: dashboardData,
                dashboards: [...state.dashboards, dashboardData]
            })),
            removeDashboard: (dashboardId: number) => set((state) => ({
                dashboards: state.dashboards.filter(dashboard => dashboard.ID !== dashboardId),
                dashboard: {}
            }))
        }),
        {
            name: "dashboad_data"
        }
    )
)