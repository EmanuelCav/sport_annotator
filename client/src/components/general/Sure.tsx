import { IoMdClose } from "react-icons/io";

import ContainerBackground from "./ContainerBackground";

import { SurePropsType } from "@/types/general.types"

const Sure = ({ action, text, handleRemove }: SurePropsType) => {
    return (
        <ContainerBackground>
                <IoMdClose size={32} color="#ff5555" className="cursor-pointer" onClick={handleRemove} />
                <p className="text-center text-gray-900 text-lg font-semibold my-2">Are you sure to {text} the scoreboard?</p>
                <button onClick={action} className="p-2 w-full text-white bg-red-500 hover:bg-red-300 active:bg-red-500 my-2 focus:outline-none focus:shadow-outline">
                    {text.charAt(0).toUpperCase() + text.slice(1, text.length)}
                </button>
        </ContainerBackground>
    )
}

export default Sure