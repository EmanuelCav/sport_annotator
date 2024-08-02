import { MdOutlineRestartAlt } from "react-icons/md";
import { FaPlay } from "react-icons/fa";

import ButtonTime from "./components/ButtonTime";

import { TimePropsType } from "@/types/scoreboard.types"

const Time = ({ hours, isStarted, minutes, seconds }: TimePropsType) => {
  return (
    <div className="text-center">
      <p className="text-md text-gray-900">
        {hours < 10 ? `0${hours}` : hours} : {minutes < 10 ? `0${minutes}` : minutes} : {seconds < 10 ? `0${seconds}` : seconds}
      </p>
      <div className="mt-4">
        <ButtonTime Icon={MdOutlineRestartAlt} func={() => {}} disabled={isStarted || (hours === 0 && minutes === 0 && seconds === 0)} />
        <ButtonTime Icon={FaPlay} func={() => {}} disabled={isStarted || (hours === 0 && minutes === 0 && seconds === 0)} />
      </div>
    </div>
  )
}

export default Time