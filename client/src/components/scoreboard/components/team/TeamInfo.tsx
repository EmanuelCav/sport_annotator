import { TeamInfoPropsType } from "@/types/scoreboard.types"

const TeamInfo = ({ team }: TeamInfoPropsType) => {
    return (
        <div className="flex justify-center h-full items-center">
            <p>{team.name}</p>
        </div>
    )
}

export default TeamInfo