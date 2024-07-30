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
    ID: number;
    username: string;
    email: string;
    password: string;
    status: boolean;
    RoleID: number;
    role: IRole;
    createdAt: string;
    deletedAt: string | null;
    UpdatedAt: string;
}

export interface IRole {
    ID: number;
    role: string;
    createdAt: string;
    deletedAt: string | null;
    UpdatedAt: string;
}