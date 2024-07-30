import { IDashboard, ITeam } from "@/interface/dashboard"
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export type DashboadPropsType = {
    dashboard: IDashboard;
    router: AppRouterInstance;
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