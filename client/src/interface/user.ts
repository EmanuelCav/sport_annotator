export interface IStoreUser {
    isLoggedIn: boolean;
    user: IUserInfo;
    generateUser: (userData: IUserInfo) => void;
}

export interface IUserInfo {
    token?: string;
    user?: IUser;
}

export interface IUser {
    id: number;
    username: string;
    email: string;
    password: string;
    status: boolean;
    role_id: number;
    role: IRole;
    createdAt: string;
    deletedAt: string | null;
    updatedAt: string;
}

export interface IRole {
    id: number;
    role: string;
    createdAt: string;
    deletedAt: string | null;
    updatedAt: string;
}