import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

import { IDashboard, ITeam } from "@/interface/dashboard"

export type DashboadPropsType = {
    dashboard: IDashboard;
    router: AppRouterInstance;
    removeDashboard: (dashboardId: number) => void;
    token: string;
}

export type TeamPropsType = {
    markers: number[];
    team: ITeam;
}

export type MarkersPropsType = {
    markers: number[];
}

export type TeamInfoPropsType = {
    team: ITeam;
}

export type OptionMenuDashboardPropsType = {
    func: () => void;
    text: string;
    color: string;
}

export type OptionsMenuDashboardPropsType = {
    handleRemove: () => void;
    handleUpdate: () => void;
}

export type UpdateDasboardPropsType = {
    handleUpdate: () => void;
    dashboard: IDashboard;
}