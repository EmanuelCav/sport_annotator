import Markers from "./components/team/Markers"
import TeamInfo from "./components/team/TeamInfo"

import { TeamPropsType } from "@/types/scoreboard.types"

const Team = ({ team, markers }: TeamPropsType) => {
    return (
        <div className="w-full fill-annotator">
            <Markers markers={markers!} />
            <TeamInfo team={team} />
        </div>
    )
}

export default Team