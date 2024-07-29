import { IUser } from "./user";

export interface IStoreDashboard {
    dashboard: IDashboard;
    dashboads: IDashboard[];
    getDashboards: (dashboardData: IDashboard[]) => void;
    getDashboard: (dashboardData: IDashboard) => void;
}

export interface IDashboard {
    id?: number;
    name?: string;
    markers?: number[];
    teams?: ITeam[];
    pointshistory?: IPoint[];
    category_id?: number;
    category?: ICategory;
    seconds?: number;
    minutes?: number;
    hours?: number;
    user_id?: number;
    user?: IUser;
    createdAt?: string;
    deletedAt?: string | null;
    updatedAt?: string;
}

export interface ICategory {
    id: number;
    createdAt: string;
    deletedAt: string | null;
    updatedAt: string;
}

export interface ITeam {
    id: number;
    name: string;
    points: IPoint[];
    games: number[];
    sets: number[];
    dashboard_id: number;
    createdAt: string;
    deletedAt: string | null;
    updatedAt: string;
}

export interface IPoint {
    id: number;
    team: ITeam;
    team_id: number;
    point: number;
    player: string;
    dashboard_id: number;
    createdAt: string;
    deletedAt: string | null;
    updatedAt: string;
}