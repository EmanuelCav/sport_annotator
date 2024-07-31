import { IUser } from "./user";

export interface IStoreDashboard {
    dashboard: IDashboard;
    dashboards: IDashboard[];
    getDashboards: (dashboardData: IDashboard[]) => void;
    getDashboard: (dashboardData: IDashboard) => void;
    createDashboard: (dashboardData: IDashboard) => void;
    removeDashboard: (dashboadId: number) => void;
    updateDashboard: (dashboardData: IDashboard) => void;
}

export interface IDashboard {
    ID?: number;
    name?: string;
    markers?: number[];
    teams?: ITeam[];
    pointshistory?: IPoint[];
    CategoryID?: number;
    category?: ICategory;
    seconds?: number;
    minutes?: number;
    hours?: number;
    UserID?: number;
    user?: IUser;
    ImageID?: number;
    image?: IImage;
    CreatedAt?: string;
    DeletedAt?: string | null;
    UpdatedAt?: string;
}

export interface IImage {
    ID: number;
    image: string;
    image_id: string;
    CreatedAt: string;
    DeletedAt: string | null;
    UpdatedAt: string;
}

export interface ICategory {
    ID: number;
    category: string;
    CreatedAt: string;
    DeletedAt: string | null;
    UpdatedAt: string;
}

export interface ITeam {
    ID: number;
    name: string;
    points: IPoint[];
    games: number[];
    sets: number[];
    ImageID: number;
    image: IImage;
    DashboardID: number;
    CreatedAt: string;
    DeletedAt: string | null;
    UpdatedAt: string;
}

export interface IPoint {
    ID: number;
    team: ITeam;
    TeamID: number;
    point: number;
    player: string;
    DashboardID: number;
    CreatedAt: string;
    DeletedAt: string | null;
    UpdatedAt: string;
}

export interface ICreateDashboard {
    name: string;
    category?: string;
}

export interface IUpdateDashboard {
    name: string;
}