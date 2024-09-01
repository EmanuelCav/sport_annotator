import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export type RegisterPropsType = {
    handleRegister: () => void;
    router: AppRouterInstance;
}