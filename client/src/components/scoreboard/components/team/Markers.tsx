import { MarkersPropsType } from "@/types/scoreboard.types"

const Markers = ({ markers }: MarkersPropsType) => {
    return (
        <div className="w-full border-2 rounded shadow p-4 bg-orange-500 border-white border-solid">
            Markers
        </div>
    )
}

export default Markers