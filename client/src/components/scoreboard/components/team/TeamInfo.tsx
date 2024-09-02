import { TeamInfoPropsType } from "@/types/scoreboard.types"

const TeamInfo = ({ team }: TeamInfoPropsType) => {
    return (
        <div className="flex w-full justify-center h-full items-center rounded shadow-md bg-orange-500 border-white border-4 border-solid cursor-pointer hover:bg-orange-400">
            <p className="text-white text-2xl text-semobold">{team.name}</p>
        </div>
    )
}

export default TeamInfo