import Image from "next/image"

import TeamInfoDashboard from "./components/TeamInfoDashboard";

import { IDashboard } from "@/interface/dashboard"

const InfoDashboard = ({ dashboard }: { dashboard: IDashboard }) => {
    return (
        <div className="flex flex-col items-center pb-10">
            <Image className="w-24 h-24 mb-3 rounded-full shadow-lg" width={100} height={100} src={dashboard.image?.image!} alt="Sport scoreboard" />
            <h5 className="mb-1 text-xl font-medium text-gray-900">{dashboard.name}</h5>
            <TeamInfoDashboard teams={dashboard.teams!} />
            <p className="text-sm text-orange-500 mt-4">{dashboard.category?.category}</p>
        </div>
    )
}

export default InfoDashboard