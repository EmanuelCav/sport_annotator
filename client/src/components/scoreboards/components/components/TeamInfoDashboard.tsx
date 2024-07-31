import TeamResult from "./TeamResult"

import { ITeam } from "@/interface/dashboard"

const TeamInfoDashboard = ({ teams }: { teams: ITeam[] }) => {
    return (
        <div className="w-full justify-evenly items-center flex">
            <TeamResult team={teams[0]} />
            <p className="text-sm text-slate-700">X</p>
            <TeamResult team={teams[1]} />
        </div>
    )
}

export default TeamInfoDashboard