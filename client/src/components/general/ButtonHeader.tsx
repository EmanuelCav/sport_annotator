import { ButtonHeaderPropsType } from "@/types/scoreboard.types"

const ButtonHeader = ({ Icon, func }: ButtonHeaderPropsType) => {
    return (
        <button onClick={func}
            className="p-2 bg-orange-500 rounded shadow hover:bg-orange-400 active:bg-orange-500 mx-4">
            <Icon size={20} color='#ffffff' />
        </button>
    )
}

export default ButtonHeader