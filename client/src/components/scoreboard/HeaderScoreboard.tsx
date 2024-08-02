import { BsFillArrowLeftSquareFill } from "react-icons/bs";

import ButtonHeader from "./components/headerScoreboard/ButtonHeader"
import Time from "./components/headerScoreboard/Time"

import { HeaderScoreboardPropsType } from "@/types/scoreboard.types"

const HeaderScoreboard = ({ hours, isStarted, minutes, seconds, redirectScoreboards }: HeaderScoreboardPropsType) => {
    return (
        <div className="py-4 px-8 justify-between items-center flex w-full">
            <ButtonHeader Icon={BsFillArrowLeftSquareFill} func={redirectScoreboards} />
            <Time hours={hours} minutes={minutes} seconds={seconds} isStarted={isStarted} />
            <ButtonHeader Icon={BsFillArrowLeftSquareFill} func={redirectScoreboards} />
        </div>
    )
}

export default HeaderScoreboard