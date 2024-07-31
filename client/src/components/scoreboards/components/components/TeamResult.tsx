import { ITeam } from "@/interface/dashboard"

import { showPoints } from "@/utils/functions"

const TeamResult = ({ team }: { team: ITeam }) => {
    return (
        <div className="text-center">
            <p className="text-md font-semibold text-gray-900">{team.name}</p>
            <p className="text-md text-gray-900">{showPoints(team.points)}</p>
        </div>
    )
}

export default TeamResult