import { IoMdClose } from "react-icons/io";

import { SurePropsType } from "@/types/general.types"

const Sure = ({ action, text, handleRemove }: SurePropsType) => {
    return (
        <div className="fixed top-0 left-0 h-screen w-full justify-center items-center z-20 flex" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
            <div className="w-1/3 bg-white p-4">
                <IoMdClose size={32} color="#ff5555" className="cursor-pointer" onClick={handleRemove} />
                <p className="text-center text-gray-900 text-lg font-semibold my-2">Are you sure to {text} the scoreboard?</p>
                <button onClick={action} className="p-2 w-full text-white bg-red-500 hover:bg-red-300 active:bg-red-500 my-2 focus:outline-none focus:shadow-outline">
                    {text.charAt(0).toUpperCase() + text.slice(1, text.length)}
                </button>
            </div>
        </div>
    )
}

export default Sure